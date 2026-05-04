import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, writeFileSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const inboxDir = path.join(root, 'article-drafts', 'docx-inbox');
const outDir = path.join(root, 'article-drafts', 'converted');

function slugify(name) {
  return name
    .replace(/\.docx$/i, '')
    .normalize('NFKD')
    .replace(/[^\w\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
    .replace(/_+/g, '-')
    .toLowerCase();
}

function convertDocx(filePath) {
  const result = spawnSync('/usr/bin/textutil', ['-convert', 'txt', '-stdout', filePath], {
    encoding: 'utf8',
  });

  if (result.status !== 0) {
    throw new Error(result.stderr || `textutil failed for ${filePath}`);
  }

  return result.stdout.trim();
}

if (!existsSync(inboxDir)) mkdirSync(inboxDir, { recursive: true });
if (!existsSync(outDir)) mkdirSync(outDir, { recursive: true });

const files = readdirSync(inboxDir).filter((file) => file.toLowerCase().endsWith('.docx'));

if (files.length === 0) {
  console.log('No .docx files found in article-drafts/docx-inbox/.');
  process.exit(0);
}

for (const file of files) {
  const filePath = path.join(inboxDir, file);
  const slug = slugify(file);
  const text = convertDocx(filePath);
  const title = text.split('\n').find((line) => line.trim())?.trim() || slug;
  const output = `---
source: "${file}"
slug: "${slug}"
status: "converted"
---

# ${title}

${text}
`;

  const outPath = path.join(outDir, `${slug}.md`);
  writeFileSync(outPath, output);
  console.log(`Converted ${file} -> article-drafts/converted/${slug}.md`);
}
