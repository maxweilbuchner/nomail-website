# nomail-website

The public website for [NoMail](https://github.com/maxweilbuchner/nomail-releases) —
marketing landing page, download page, changelog, privacy policy, imprint, and support.

Live at [nomailapp.com](https://nomailapp.com). Built with [Astro](https://astro.build),
static output, deployed to GitHub Pages by `.github/workflows/deploy.yml` on every push
to `main`. The custom domain is configured in the repo's Pages settings, not in the
build artifact — there is no `CNAME` file to keep in sync.

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
- **Every internal link goes through `withBase()`** (`src/lib/url.ts`). `BASE` is empty
  today, but bare `/…` hrefs would break the moment the site serves from a subpath again.
- **The base URL lives in one place**: `src/config.ts` (`SITE` + `BASE`). Moving the site
  means changing those two constants and nothing else.
- **JS budget**: the arch-detection module on `/download/` is the only client script on
  the site. Keep it that way.
- Screenshots in `src/assets/shots/` are generated manually from the NoMail screenshot
  harness — see [docs/screenshots.md](docs/screenshots.md).
