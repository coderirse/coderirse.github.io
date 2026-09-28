// 一次性诊断：打印 Cloudflare RUM GraphQL 的原始返回，定位访客统计断流。
// 手动触发（workflow_dispatch），用完即删。只读，不写任何文件。
const API = 'https://api.cloudflare.com/client/v4/graphql';
const ACCOUNT_TAG = process.env.CF_ACCOUNT_TAG;
const TOKEN = process.env.CF_API_TOKEN;

const q = (filterExtra, dims) => `
query($accountTag: String!, $since: Date!, $until: Date!) {
  viewer {
    accounts(filter: { accountTag: $accountTag }) {
      rumPageloadEventsAdaptiveGroups(
        ${filterExtra}
        limit: 100
        orderBy: [date_ASC]
      ) {
        dimensions { date ${dims} }
        count
        sum { visits }
      }
    }
  }
}`;

async function gql(label, query, variables) {
  const res = await fetch(API, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${TOKEN}` },
    body: JSON.stringify({ query, variables })
  });
  const body = await res.json();
  console.log(`\n===== ${label} =====`);
  if (body.errors) console.log('ERRORS:', JSON.stringify(body.errors));
  const groups = body?.data?.viewer?.accounts?.[0]?.rumPageloadEventsAdaptiveGroups;
  if (!groups) {
    console.log('NO GROUPS. raw data keys:', JSON.stringify(body?.data?.viewer?.accounts?.[0] || body.data).slice(0, 400));
    return;
  }
  console.log(`rows: ${groups.length}`);
  for (const g of groups) {
    console.log(JSON.stringify(g.dimensions), 'count=', g.count, 'visits=', g.sum?.visits);
  }
}

(async () => {
  const now = new Date();
  const until = now.toISOString().slice(0, 10); // 今天（不含），看最近 7 天
  const since = new Date(now.getTime() - 7 * 86400000).toISOString().slice(0, 10);
  console.log('diag window:', since, '->', until, '(UTC)');

  // 0. 全范围（与小时任务一致：2026-08-29 起），看保留期内最早的数据是哪天
  await gql(
    'FULL RANGE since 2026-08-29 (same as hourly job)',
    q('filter: { siteTag: "78249947ead941a69c73fd9a8bea199e", date_geq: $since, date_lt: $until }', ''),
    { accountTag: ACCOUNT_TAG, since: '2026-08-29', until }
  );

  // 1. workflow 当前用的 siteTag
  await gql(
    'siteTag=78249947ead941a69c73fd9a8bea199e (workflow 现用)',
    q('filter: { siteTag: "78249947ead941a69c73fd9a8bea199e", date_geq: $since, date_lt: $until }', ''),
    { accountTag: ACCOUNT_TAG, since, until }
  );

  // 2. 不带 siteTag 过滤（若 schema 允许，返回全账户数据）
  await gql(
    'no siteTag filter (whole account)',
    q('filter: { date_geq: $since, date_lt: $until }', ''),
    { accountTag: ACCOUNT_TAG, since, until }
  );

  // 3. 按维度尝试拆分 siteTag（若字段不存在会报错，也是信息）
  await gql(
    'no siteTag filter, dimensions + siteTag',
    q('filter: { date_geq: $since, date_lt: $until }', 'siteTag'),
    { accountTag: ACCOUNT_TAG, since, until }
  );
})().catch((e) => {
  console.error('diag failed:', e.message);
  process.exit(1);
});
