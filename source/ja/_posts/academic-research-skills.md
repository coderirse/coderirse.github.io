---
title: Academic Research Skills — Claude Code のための学術研究パイプライン
translation_key: academic-research-skills
description: Imbad0202/academic-research-skills の読書ノート。深掘り研究、論文執筆、査読、10段階パイプライン。作者ではありません。
date: 2026-06-13 22:28:16
updated: 2026-10-23
categories:
  - オープンソース観察
tags:
  - 学術ツール
  - AI支援
  - Claude Code
  - LaTeX
---

{% note info %}
プロジェクト：[Imbad0202/academic-research-skills](https://github.com/Imbad0202/academic-research-skills) · 作者：Imbad0202
この記事はプロジェクト資料に基づく整理です。私は開発に参加していません。
{% endnote %}

## 概要

Academic Research Skills（ARS）は、Claude Code に導入する学術研究スキル群です。「文献調査 → 執筆 → 査読 → 修正 → 最終化」を編成可能なパイプラインに分解します。AI に論文を代筆させるのではなく、繰り返しが多く抜けやすい工程を固定することを目的としています。

## 4つのスキルパック

### Deep Research

13エージェント、7モード。完全研究、クイックブリーフ、文献レビュー、PRISMA システマティックレビュー、ファクトチェック、ソクラテス式ガイド、投稿前レビューをカバーします。

### Academic Paper

12エージェントの執筆パイプライン。論文全体、アウトライン、要旨、文献レビュー、修正、引用形式チェック、LaTeX/DOCX/PDF 変換、二言語要旨に対応します。

### Academic Paper Reviewer

5人の独立した査読者を模擬します。編集長が全体を裁定し、3人が方法論・理論貢献・実験設計を担当し、さらに厳しい指摘役の Devil's Advocate が加わります。

### Academic Pipeline

品質ゲート付きの10段階ワークフロー：

```
研究 → 執筆 → 完全性チェック → 査読 → 修正 → 再査読 → 再修正 → 最終チェック → 投稿
```

## 参考にすべき設計

**プロセスでハルシネーションに対抗する。** ARS は「主張と原文」の照合を強制し、重要な主張を文献までたどれるようにします。引用チェック、ファクトチェック、査読者ロールは、いずれも生成結果に検証可能な制約を加える仕組みです。

「モデルを賢くする」より現実的です。ハルシネーションはプロンプト1つでは消えませんが、プロセスで止めることはできます。

## 私の評価

ARS は、研究課題がすでに明確で、文献整理と形式チェックを自動化したい人に向いています。研究課題、方法の選択、最終的な論証を代わりに決めることはできません。そこは研究者の責任です。

また、リポジトリは標準 License を宣言していません。再配布や商用利用を考える場合は、作者に確認したほうがよいでしょう。

{% btn https://github.com/Imbad0202/academic-research-skills, 元プロジェクトを見る, fab fa-github %}
