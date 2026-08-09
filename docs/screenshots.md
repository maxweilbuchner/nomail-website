# Regenerating the marketing screenshots

The images in `src/assets/shots/` come from the NoMail screenshot harness
(`NOMAIL_SHOT` / `NOMAIL_SHOT_UI`, documented in the nomail repo's
`docs/11-development.md`). They are shot manually — not in CI — and should be
re-shot whenever the app shell changes visibly.

Conventions:

- **2x retina on purpose**: do _not_ pass `--force-device-scale-factor=1` (that flag is
  for pixel-comparison shots, not marketing).
- **Fresh profile per shot** (`NOMAIL_USER_DATA=$(mktemp -d)`) — the demo DB persists
  across runs otherwise, and seeded rows go stale.
- **One shared window size** (1360×800 logical) so all shots line up on the page.
- Rebuild the desktop bundle first — a stale `out/` bundle shoots old UI.

```sh
cd ~/NoMail
pnpm --filter @nomail/desktop build

SHOTS=~/nomail-website/src/assets/shots
for hook in hero hero-dark menu split-skip invite-card compose-rich compose-rich-dark login-code; do
  D=$(mktemp -d); printf '{"x":80,"y":60,"width":1360,"height":800}' > "$D/window-state.json"
  case "$hook" in
    *-dark) out="$SHOTS/${hook%-dark}-dark.png" ;;
    *)      out="$SHOTS/$hook-light.png" ;;
  esac
  NOMAIL_FAKE_GMAIL=1 NOMAIL_USER_DATA="$D" NOMAIL_SHOT="$out" NOMAIL_SHOT_UI="$hook" \
    pnpm --filter @nomail/desktop start
done
```

Then regenerate the social-preview image and raster icon:

```sh
cd ~/nomail-website
node -e "
const sharp = require('sharp');
(async () => {
  await sharp('src/assets/shots/hero-light.png').resize(1200, 630, { fit: 'cover', position: 'top' }).png().toFile('public/og.png');
  await sharp('src/assets/icon.svg').resize(512, 512).png().toFile('public/icon.png');
})();"
```

Note: the `aipanel` / `ai-summary` hooks need the ~3.5 GB local model present in the
profile (`userData/models/*.gguf`) and are not part of the current page. If an AI
screenshot section is added later, download the model once in a normal run and point
`NOMAIL_LLAMA_CHAT` / `NOMAIL_LLAMA_EMBED` at the GGUFs.
