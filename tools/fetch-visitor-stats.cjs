// Queries Cloudflare Web Analytics (RUM) via the GraphQL API and writes
// source/_data/visitor-stats.json. Runs in GitHub Actions (visitor-stats.yml).
// Env: CF_API_TOKEN (secret), CF_ACCOUNT_TAG, CF_SITE_TAG.
// Cumulative numbers since the site was registered on Cloudflare (SINCE below).
const fs = require('fs');
const path = require('path');

const API = 'https://api.cloudflare.com/client/v4/graphql';
const ACCOUNT_TAG = process.env.CF_ACCOUNT_TAG;
const SITE_TAG = process.env.CF_SITE_TAG;
const TOKEN = process.env.CF_API_TOKEN;
// 站点接入 Cloudflare Web Analytics 的日期（累计统计起点）
const SINCE = '2026-08-29T00:00:00Z';
const OUT = path.join(process.cwd(), 'source', '_data', 'visitor-stats.json');

const QUERY = `
query($accountTag: String!, $siteTag: String!, $since: Time!, $until: Time!) {
  viewer {
    accounts(accountTag: $accountTag) {
      pageviews: rumSiteAnalyticsAdaptiveGroups(
        filter: { siteTag: $siteTag, datetime_geq: $since, datetime_lt: $until }
        limit: 10000
        orderBy: [datetimeDay_ASC]
      ) {
        dimensions { datetimeDay }
        sum { pageViews }
        uniq { visitors }
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
    process.exit(0);
  }
  const until = new Date().toISOString();
  const data = await gql(QUERY, {
    accountTag: ACCOUNT_TAG,
    siteTag: SITE_TAG,
    since: SINCE,
    until
  });

  const groups = data?.viewer?.accounts?.pageviews || [];
  let pv = 0;
  let visitors = 0;
  for (const g of groups) {
    pv += g.sum?.pageViews || 0;
    visitors += g.uniq?.visitors || 0;
  }

  let previous = {};
  try {
    previous = JSON.parse(fs.readFileSync(OUT, 'utf8'));
  } catch (e) { /* first run */ }

  // 不允许回退：取新旧较大值（分组求和的 UV 是按天去重的近似值，可能有微小抖动）
  const stats = {
    pv: Math.max(pv, previous.pv || 0),
    visitors: Math.max(visitors, previous.visitors || 0),
    since: SINCE.slice(0, 10),
    updated: until
  };
  fs.mkdirSync(path.dirname(OUT), { recursive: true });
  fs.writeFileSync(OUT, JSON.stringify(stats, null, 2) + '\n');
  console.log('visitor stats:', JSON.stringify(stats));
})().catch((e) => {
  console.error(e.message);
  process.exit(1);
});
