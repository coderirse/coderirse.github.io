---
title: When AI Splits "Learning" from "Credential"
translation_key: ai-learning-diploma
date: 2026-09-02 00:00:00
categories:
  - Essays
tags:
  - AI
  - Education
  - Thoughts
description: Reflections on Jiang Yanyan's claim that "CS students without tokens should drop out immediately" — after AI separates learning, credentials, and selection, what's left?
---

The start of the semester brought a viral post on Zhihu: **"CS students without tokens should drop out immediately."**

The author is Jiang Yanyan, an associate professor at Nanjing University's School of Computer Science, who wrote it in the slides for his new fall course *Generative Software Engineering* — and even flagged it as a "personal opinion." The comments were unexpectedly one-sided: some called the take "too conservative" and suggested abolishing lectures entirely, splitting tuition fees into tokens per student; others argued that any CS department refusing to buy tokens for students should be shut down.

My first reaction was the same. But after following his [personal site](https://jyywiki.cn/) and Zhihu posts, I tasted something different: this isn't trolling — it's a top-tier insider asking an uncomfortable question for all of us.

**Once AI splits "learning," "credentials," and "being selected" into three separate things, what's left?**

## 1. The Assignment Got Done — But Did Learning Happen?

Jiang presents students with three layers of anxiety, each one hitting the mark.

**First: "AI went to college for me."** The teacher uses Doubao to generate problems; students use Doubao to solve them. The entire loop runs — and **only the student wasn't trained**. His counter-question: suppose every course were open-book and AI-answered, every course a perfect score. Then graduation day arrives, and you realize: every grade was great, but you learned nothing.

**Second: "I obediently studied for four years and discovered college scammed me."** Good students who listened carefully and did their homework really did learn things. The problem is AI can do all of them. After four years: "What exactly did I learn?"

**Third — and the sharpest: "I traded my life for a perfect resume."** Jiang once received a resume that was immaculate on paper — papers at CCF-listed journals, accepts, in-progress submissions, everything. He gave it **zero points**: no GitHub link, no personal site, not even a preprint.

His reason, in one sentence: **"You and every other candidate are now completely indistinguishable."**

![Jiang Yanyan's Bilibili profile](/img/essays/ai-learning-diploma/jyy-bilibili.png)

## 2. Title Inflation

What struck me about the zero-score resume isn't the resume itself, but the evaluation system behind it.

Credentials like papers, acceptances, and competition awards used to be valuable because they were **scarce and hard to fake** — a rough proxy for ability. That proxy chain is now loosening: output no longer equals the trace of competence; the same assignment can correspond to wildly different abilities. When evidence of "looking capable" can be mass-produced, titles enter inflation: the face value grows, the purchasing power shrinks.

Ironically, the person saying this is one of the most successful players in the current system. Jiang won two ICPC regional gold medals, a CCF Outstanding Dissertation award, and five CCF-A best paper awards — including the sole ICSE 2021 best paper and a SOSP 2023 best paper. And how does he introduce himself on the course page? "Associate professor, but temporary staff."

A person who maxed out the current game is this cynical about its scoring. That's the interesting part: he's not bitter — he climbed to the summit and came back to report that the air up there isn't what you imagined. His proposed alternative is almost primitive: GitHub, a personal homepage, preprints — **public, linkable, verifiable output**. These can't be faked, because anyone can click and see what you actually built.

## 3. Tokens Are Consumables; Problems Are the Scarce Resource

Back to the provocation. Jiang's full logic rests on three course policies: no hand-coding (hand-coding without AI is banned), students pay for their own tokens, and no "token-maxxing" (no brute-force token burning).

"Students pay for their own tokens" isn't just about money. His framing: **tokens are the lab consumables of the AI era; using them yourself is the only way to develop cost–quality–latency intuition**. Just as chemistry students must handle reagents themselves to learn that experiments aren't textbook illustrations. He adds a remarkably sober footnote:

> "What's truly scarce isn't tokens — it's problems worth spending tokens on, clear constraints, and reliable validation."

I'd call this the soul of the course. Once AI pushes the cost of "generation" toward zero, value migrates to two ends: **the ability to ask the right questions** on one side, and **the ability to verify the answers** on the other. The execution in the middle is depreciating fast. He's blunt about it: students must not only write code but learn to decompose tasks for AI, pick models, control costs, and validate results — however fast the model generates, it's worthless if the human can't tell right from wrong.

And "no hand-coding" isn't absolute either. He jokes about it himself: lock him in a room with AI tools disabled, and the only thing saving him is LeetCode and muscle memory — though he believes that, eventually, this will change.

![Jiang's course slides: token self-payment](/img/essays/ai-learning-diploma/token-policy.png)

## 4. What Work Is Left for Humans?

So after AI writes code faster and faster, what's left for us?

Jiang's answer carries the cold rigor of a systems researcher: AI can accelerate implementation, but it won't automatically surface unknowns, assign responsibility, or validate results. **The goal of engineering isn't to make a demo run — it's to keep a system alive amid constraints, change, and collaboration.** He cites the Mars Climate Orbiter unit-interface failure: real engineering ability is building a closed loop that can call a stop before launch.

As for what universities can still teach, he offers three words: **information asymmetry** (knowing what you don't know), **skin in the game** (bearing consequences for trade-offs), and **steering** (keeping people, agents, and feedback aligned with the goal).

![Jiang Yanyan's classroom: "Why? The wolf is here"](/img/essays/ai-learning-diploma/classroom-slide.png)

## 5. In Closing: Am I Growing Ability, or Evidence?

Ultimately, the debate points to a personal choice each of us faces:

**Am I growing ability, or growing the evidence of "looking capable"?**

These used to be the same thing — proving ability required actually acquiring it. AI has untied that knot, letting "proof" float free of "possession." Everyone now stands at a fork: one path leads to the comfort zone of piling up paper evidence — increasingly crowded, increasingly cheap; the other leads to real but slow capability growth, through concrete commits on GitHub, preprints that people actually read, and works that survive being opened by a link.

Jiang chose an offensive provocation to warn his students. I'd say the offended shouldn't be limited to students. How much of academia's evaluation system, of workplace promotion logic, of our own annual reviews, is validating ability — and how much is just collecting evidence?

Titles inflate. Tokens get cheaper. Models get stronger every version. What holds its value is probably only what's **public, verifiable, and impossible to fake** — and the version of you that keeps producing it.
