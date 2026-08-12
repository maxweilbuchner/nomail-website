import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE, BASE } from "./src/config.ts";

export default defineConfig({
  site: SITE,
  base: BASE,
  // Emits sitemap-index.xml (+ sitemap-0.xml); public/robots.txt points at it.
  integrations: [sitemap()],
});
