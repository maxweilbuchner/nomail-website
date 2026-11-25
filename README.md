# nomail-website

The public website for [NoMail](https://github.com/maxweilbuchner/nomail-releases) —
marketing landing page, download page, changelog, privacy policy, imprint, support,
and a 404 page.

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
- **JS budget**: three small client scripts, each with a no-script fallback. The
  arch-detection module in `DownloadButtons.astro` (on `/download/` and the homepage
  hero) swaps the big button to Intel; the homepage tour switches panels by click,
  arrow keys and the app's own shortcuts (all panels show in order without it); the
  support page marks the focused Sponsors iframe so it gets a focus ring. Keep new
  behavior out unless it earns its place the same way. (The JSON-LD blocks are
  `type="application/ld+json"`: data, never executed.)
- **The look is the app's.** `src/styles/tokens.css` mirrors NoMail's
  `packages/ui/src/tokens.css` (warm grays, one blue, system type, 4/6/10px radii,
  hairlines with the app's elevation shadows); the only departures are web-contrast
  nudges noted in the file. Change a color there, not in a component. The tour's
  shortcut chips mirror the app's default bindings: if one changes in the app, update
  `tour` in `src/pages/index.astro`.
- **A new page carries its own title, description, and schema.** `Base.astro` defaults
  are written for the homepage: give every other page a title that names the category
  and the platform, a description under 155 characters, and — if it describes the
  product, answers questions, or lists releases — a `schema` graph from
  `src/lib/schema.ts`. `public/robots.txt`, the generated `sitemap-index.xml`, and
  `public/llms.txt` are the site's other discovery surfaces; `llms.txt` lists the pages
  by hand, so a new page belongs there too.
- **Screenshots go through `Shot.astro` with a `sizes` hint** matching the slot they
  fill, or a phone downloads the full 2720px capture. The build prunes emitted assets
  the built HTML never references — Astro emits the source PNGs alongside the WebP
  ladder, and nothing links them.
- Screenshots in `src/assets/shots/` are generated manually from the NoMail screenshot
  harness — see [docs/screenshots.md](docs/screenshots.md).
