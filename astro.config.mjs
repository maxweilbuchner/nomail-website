import { defineConfig } from "astro/config";
import { SITE, BASE } from "./src/config.ts";

export default defineConfig({
  site: SITE,
  base: BASE,
});
