import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import type { Lang } from './site';

const ROOT = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', '..');

export interface ProjectEntry {
  title: string;
  blurb: string;
}

const FILE: Record<Lang, string> = {
  zh: 'projects-zh.md',
  en: 'projects-en.md',
  ja: 'projects-ja.md'
};

/** 解析项目页 Markdown 中的 ### 条目（标题 + 首段简介） */
export function readProjects(lang: Lang): ProjectEntry[] {
  const file = path.join(ROOT, 'content-pages', FILE[lang]);
  if (!fs.existsSync(file)) return [];
  const raw = fs.readFileSync(file, 'utf8');
  const body = raw.replace(/^---[\s\S]*?---\r?\n/, '');
  const heads: { title: string; index: number; end: number }[] = [];
  const re = /^###\s+(.+)$/gm;
  let m: RegExpExecArray | null;
  while ((m = re.exec(body)) !== null) {
    heads.push({ title: m[1].trim(), index: m.index, end: re.lastIndex });
  }
  return heads.map((h, i) => {
    const sectionEnd = i + 1 < heads.length ? heads[i + 1].index : body.length;
    const section = body.slice(h.end, sectionEnd);
    const blurb =
      section
        .split(/\r?\n/)
        .map((l) => l.trim())
        .filter((l) => l && !l.startsWith('{%') && !l.startsWith('-') && !l.startsWith('**') && !l.startsWith('#'))[0] || '';
    return { title: h.title, blurb };
  });
}
