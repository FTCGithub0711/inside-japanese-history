# Repository Guidelines

## Project Structure & Module Organization

- `site/`: Astro project and the main codebase.
- `site/src/pages/`: route pages such as `index.astro`, `about.astro`, `sengoku.astro`, `bakumatsu.astro`, and `modern.astro`.
- `site/src/layouts/BaseLayout.astro`: shared HTML shell, metadata, navigation, and global styles.
- `site/src/components/`: reusable schema components for JSON-LD metadata.
- `site/src/consts.ts`: site constants, author metadata, URLs, and feed configuration.
- `site/public/`: static assets served as-is, including `robots.txt` and hero images.
- `site/article-drafts/`: `.docx` import workflow for source drafts before they become Astro pages.
- `site/dist/`: generated build output; do not edit by hand.
- `seo-research/`: SEO, strategy, project planning, and content research.
- `article-workspace/`: article-by-article research workspace for references, notes, drafts, and assets.
- `task/`: schedules and operational TODOs.
- `exports/`: shared/exported artifacts such as generated `.docx` snapshots.

## Build, Test, and Development Commands

Run commands from `site/`.

- `npm install`: install Astro and project dependencies.
- `npm run dev`: start the local Astro dev server at `http://localhost:4321`.
- `npm run build`: build the static site into `site/dist/`.
- `npm run preview`: preview the production build locally.
- `npm run astro -- <command>`: run Astro CLI commands directly, for example `npm run astro -- check` if checking support is added.

## Coding Style & Naming Conventions

Use the existing Astro style: two-space indentation in markup, TypeScript frontmatter at the top, single quotes in TypeScript imports/strings, and semicolons in scripts. Keep page filenames lowercase and route-oriented, for example `modern.astro`. Use PascalCase for Astro components such as `PersonSchema.astro`, and centralize shared metadata in `src/consts.ts`.

Global styles currently live in `BaseLayout.astro`; keep additions small and consistent with the existing CSS variables and simple class names.

## Testing Guidelines

There is no automated test suite configured yet. For now, validate changes with `npm run build` and check affected pages with `npm run preview`. When adding tests later, document the new command in `site/package.json` and this guide.

## Commit & Pull Request Guidelines

No Git history is present in this working tree, so no repository-specific commit convention can be inferred. Use concise, imperative commit subjects such as `Update Bakumatsu pillar copy` or `Add podcast schema metadata`.

Pull requests should include a short summary, affected pages or files, verification steps such as `npm run build`, and screenshots for visible page changes. Link related planning docs, SEO notes, or issues when applicable.

## Security & Configuration Tips

Confirm domain and feed URLs in `site/src/consts.ts` and `site/astro.config.mjs` before deployment. Avoid committing DNS, Substack, hosting, or analytics credentials; use host-managed environment variables for secrets.
