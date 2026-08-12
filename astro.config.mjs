import { readdir, readFile, unlink } from "node:fs/promises";
import { fileURLToPath } from "node:url";
import path from "node:path";
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import { SITE, BASE } from "./src/config.ts";

/**
 * Asking `getImage()` for a `widths` ladder makes Astro emit the untouched
 * source PNG alongside the WebP variants, even though the markup references
 * only the variants — about 2 MB of files nothing can ever request. Delete any
 * emitted asset the built HTML doesn't mention.
 */
function pruneOrphanedAssets() {
  return {
    name: "prune-orphaned-assets",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const dist = fileURLToPath(dir);
        const assets = path.join(dist, "_astro");

        const walk = async (root) => {
          const out = [];
          for (const entry of await readdir(root, { withFileTypes: true })) {
            const full = path.join(root, entry.name);
            if (entry.isDirectory()) out.push(...(await walk(full)));
            else out.push(full);
          }
          return out;
        };

        const files = await walk(dist);
        const referenced = (
          await Promise.all(
            files
              .filter((f) => /\.(html|css|js|xml)$/.test(f))
              .map((f) => readFile(f, "utf8")),
          )
        ).join("\n");

        let freed = 0;
        for (const asset of await readdir(assets)) {
          if (referenced.includes(asset)) continue;
          const full = path.join(assets, asset);
          freed += (await readFile(full)).byteLength;
          await unlink(full);
        }
        if (freed) logger.info(`pruned ${Math.round(freed / 1024)} KB of unreferenced assets`);
      },
    },
  };
}

export default defineConfig({
  site: SITE,
  base: BASE,
  // Emits sitemap-index.xml (+ sitemap-0.xml); public/robots.txt points at it.
  integrations: [sitemap(), pruneOrphanedAssets()],
});
