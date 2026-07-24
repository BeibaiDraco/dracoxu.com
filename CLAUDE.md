# CLAUDE.md — operating notes for an agent working on dracoxu.com

This repo is the personal academic site of Draco (Yunlong) Xu, live at
**https://dracoxu.com**. The human-facing update guide is [UPDATING.md](UPDATING.md);
the architecture writeup is [README.md](README.md). This file is what you, the
agent, need before touching anything. The owner reads Chinese and prefers it.

## The one rule that changes how you work

**A push to `main` publishes.** Cloudflare Workers Builds rebuilds and the change
is live in under a minute. There is no staging, no preview gate, no confirmation
step. Therefore: **verify before you push, never after.** Build, read the diff,
check links, look at the rendered page — then commit. Do not push work-in-progress
to `main` intending to fix it up; the broken state is public the moment you push.

A failed CI build does *not* break the live site — it just doesn't deploy, and the
previous version keeps serving. So a bad *build* is safe; bad *content that builds*
is what publishes.

## Layout

- Git repo root is this directory (`websites/site/`), not its parent.
- `src/data/*.js` — all copy and data. This is where routine edits go.
- `src/pages/*.astro`, `src/layouts/`, `src/components/`, `src/styles/hakumei.css` — structure and design.
- `assets/cv.tex` — the CV source (see below). `public/cv.pdf` — its committed build artefact.
- `dist/` and `node_modules/` are gitignored. `.node-version` pins CI to Node 22.
- Deploy config: `wrangler.jsonc` (site) and `redirect-www/wrangler.jsonc` (the www→apex Worker).

## Invariants — do not break these

1. **`src/data/publications.js` and `assets/cv.tex` list the same papers and must
   agree.** Author spelling, order, venue, year. When you add or change a paper,
   change both, and commit them together. Real defects have hidden here (a dropped
   co-author, a wrong title) precisely because the two can drift.

2. **Every URL is verified live before it ships**, and every citation is checked
   against Crossref. When you add or touch a link, `curl -sIL -o /dev/null -w '%{http_code}'`
   it first. A publisher/society 403 is bot-blocking, not death — confirm those via
   the Crossref API or a browser UA before calling a link dead. Never invent a
   plausible URL.

3. **`not_found_handling` stays `"404-page"`** in `wrangler.jsonc`. Never switch it
   to `single-page-application`: that answers every dead URL with 200 and gets soft
   404s indexed. The `/404` route carries `noindex` via `Base.astro`'s `noindex` prop.

4. **`public/_headers` parser quirk:** an indented `#` comment *inside* a rule block
   makes Cloudflare silently drop the whole block. Comments go at column zero,
   between blocks, never inside one.

5. **`immutable` cache only on content-addressed paths.** `/_astro/*` is fingerprinted
   by Astro and may be `immutable`; `/fonts/*` has stable hand-written filenames and
   must not be (it uses a month + `stale-while-revalidate`).

6. **Never edit `public/cv.pdf` by hand.** It is generated from `assets/cv.tex` by
   `npm run cv`. The PDF is non-reproducible (embeds a timestamp), so it differs on
   every rebuild even with identical source — key any "did the CV change?" check on
   `assets/cv.tex`, never on the PDF.

## The CV lives on Overleaf too

`assets/cv.tex` is mirrored from an Overleaf project (id `6239ef0843aa8ff57fbe9c64`),
exposed as a git remote cloned at `~/.overleaf-cv`. `scripts/cv-sync.sh` reconciles
them; the npm scripts wrap it:

- `npm run cv` — compile `assets/cv.tex` → `public/cv.pdf` (tectonic).
- `npm run cv:sync` — show which side (Overleaf vs repo) is ahead, change nothing.
- `npm run cv:pull` — copy Overleaf → `assets/cv.tex`, rebuild PDF, do not commit.
- `npm run cv:push` — copy repo → Overleaf and push there.
- `npm run cv:update` — pull, rebuild, commit and push. The everyday flow. It aborts
  if `publications.js` has uncommitted changes (that signals a paper edit, which must
  be committed with the CV, not published CV-first).

Overleaf is upstream for prose; the repo is upstream for corrections found while
auditing. Overleaf git auth is a token (from overleaf.com/user/settings), username
literally `git`, stored in the macOS keychain — you never see or handle it.

## Verifying before a push

- `npm run build` must succeed. For anything visible, open a preview
  (`preview_start` → the `dracoxu-dev` launch config, or `{url: "http://localhost:4321/"}`)
  and actually look. The in-app preview pane sometimes returns a stale/zero-height
  frame — re-check via `javascript_tool`/DOM rather than trusting one screenshot.
- After a push, the live site is the source of truth. `curl` the routes. Note the
  owner's Mac has at times had a stale negative DNS entry for the apex — if the apex
  won't resolve locally but `www` does, pin it: `--resolve dracoxu.com:443:172.67.148.103`.
- 404 must return 404, `/about` must 301, `www` must 301 to apex, `http` must 301 to `https`.

## Style / content judgement

- The six projects and the publications carry deliberately *identical* visual weight —
  no flagship, no "current focus" badge. If a visitor can tell which project is the
  favourite, it's wrong. Preserve that when editing.
- News is the owner's own wording, kept verbatim; don't rewrite it.
- Design language is 薄明 / Hakumei — one accent (oxide red) once per page, one
  structural pigment (Berlin blue), no shadows/gradients/radius. `README.md` has the
  full spec. Don't introduce a new colour or effect without being asked.
