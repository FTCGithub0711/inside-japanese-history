# Article Draft Workflow

Use this folder for source drafts before they become Astro pages.

## Folder Structure

- `docx-inbox/`: put father's `.docx` files here.
- `converted/`: generated plain-text Markdown files for review.
- `notes/`: optional planning notes, outlines, or source lists.

## Workflow

1. Put a `.docx` file in `site/article-drafts/docx-inbox/`.
2. Run:

```bash
npm run import:docx
```

3. Review the generated Markdown in `site/article-drafts/converted/`.
4. Ask Codex to turn that draft into an Astro article.

Example request:

```text
Use site/article-drafts/converted/is-bushido-real.md and make it an English and German article.
```

## Naming

Use descriptive filenames:

```text
is-bushido-real.docx
did-samurai-use-guns.docx
shogun-true-story.docx
```

The generated Markdown will keep the same slug.
