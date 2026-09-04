// Queries Cloudflare Web Analytics (RUM) via the GraphQL API and writes
// source/_data/visitor-stats.json. Runs in GitHub Actions (visitor-stats.yml).
// Env: CF_API_TOKEN (secret), CF_ACCOUNT_TAG, CF_SITE_TAG.
// Cumulative numbers since the site was registered on Cloudflare (SINCE below).
//
// Schema（2026-09 经 GraphQL 内省核实）：
//   rumPageloadEventsAdaptiveGroups { count, sum { visits } }，按 date 维度分组。
//   count ≈ 页面浏览量（PV），visits ≈ 访问次数（会话去重，作 UV 的近似值；
//   Cloudflare 不对外的访客级去重无法通过 GraphQL 获得）。
const fs = require('fs');
const path = require('path');

const API = 'https://api.cloudflare.com/client/v4/graphql';
const ACCOUNT_TAG = process.env.CF_ACCOUNT_TAG;
const SITE_TAG = process.env.CF_SITE_TAG;
const TOKEN = process.env.CF_API_TOKEN;
// 站点接入 Cloudflare Web Analytics 的日期（累计统计起点）
const SINCE = '2026-08-29';
const OUT = path.join(process.cwd(), 'source', '_data', 'visitor-stats.json');

const QUERY = `
query($accountTag: String!, $siteTag: String!, $since: Date!, $until: Date!) {
  viewer {
    accounts(filter: { accountTag: $accountTag }) {
      pageloads: rumPageloadEventsAdaptiveGroups(
        filter: { siteTag: $siteTag, date_geq: $since, date_lt: $until }
        limit: 10000
        orderBy: [date_ASC]
      ) {
        dimensions { date }
        count
        sum { visits }
      }
    }
  }
}`;

async function gql(query, variables) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ query, variables })
  });
  const body = await res.json();
  if (!res.ok || body.errors) {
    throw new Error(`GraphQL error: ${JSON.stringify(body.errors || body, null, 2)}`);
  }
  return body.data;
}

(async () => {
  if (!TOKEN) {
    console.log('::notice::CF_API_TOKEN not set — skipping visitor stats update');
    return;
  }
  // date_lt 取明天，把今天（进行中的部分）也计入
  const until = new Date(Date.now() + 86400000).toISOString().slice(0, 10);
  const data = await gql(QUERY, {
    accountTag: ACCOUNT_TAG,
    siteTag: SITE_TAG,
    since: SINCE,
    until
  });

  // viewer.accounts 是数组，取第一个元素
  const groups = data?.viewer?.accounts?.[0]?.pageloads || [];
  let pv = 0;
  let visitors = 0;
  for (const g of groups) {
    pv += g.count || 0;
    visitors += g.sum?.visits || 0;
  }

  let previous = {};
  try {
    previous = JSON.parse(fs.readFileSync(OUT, 'utf8'));
  } catch (e) { /* first run */ }

  // 不允许回退：取新旧较大值（按天分组求和的去重值可能有微小抖动）
  const stats = {
    pv: Math.max(pv, previous.pv || 0),
    visitors: Math.max(visitors, previous.visitors || 0),
    since: SINCE,
    updated: new Date().toISOString()
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(stats, null, 2) + '\n');
  console.log('visitor stats:', JSON.stringify(stats));
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
