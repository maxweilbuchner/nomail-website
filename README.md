# nomail-website

The public website for [NoMail](https://github.com/maxweilbuchner/nomail-releases) —
marketing landing page, download page, changelog, privacy policy, imprint, and support.

Built with [Astro](https://astro.build), static output, deployed to GitHub Pages by
`.github/workflows/deploy.yml` on every push to `main`.

```sh
pnpm install
pnpm dev       # local dev server
pnpm build     # static build into dist/
pnpm preview   # serve the built site
```

## Conventions

- **`src/content/` is synced, never hand-edit.** `CHANGELOG.md` and `PRIVACY.md` are
  pushed here by the NoMail release pipeline (`sync-site` job) on every release; local
  edits will be overwritten.
- **Every internal link goes through `withBase()`** (`src/lib/url.ts`). The site serves
  from a subpath on GitHub Pages; bare `/…` hrefs break there.
- **The base URL lives in one place**: `src/config.ts` (`SITE` + `BASE`). When a custom
  domain lands, change those two constants and nothing else.
- **JS budget**: the arch-detection module on `/download/` is the only client script on
  the site. Keep it that way.
- Screenshots in `src/assets/shots/` are generated manually from the NoMail screenshot
  harness — see [docs/screenshots.md](docs/screenshots.md).
