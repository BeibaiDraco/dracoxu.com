# dracoxu.com

Personal academic site. Astro, static output, deployed to Cloudflare Workers static assets.

- **Updating the site or CV →** [UPDATING.md](UPDATING.md) (步骤和命令，中文)
- **Working on it as an agent →** [CLAUDE.md](CLAUDE.md) (invariants and gotchas)

## Run

```sh
npm install
npm run dev        # http://localhost:4321
npm run build      # → dist/
npm run deploy     # build + wrangler deploy
```

## Design language — 薄明 / Hakumei

> The threshold is the same object in both registers, and the scaffold outlasts what crosses it.

In science a threshold is the criterion at which a signal crosses into perceptual experience.
In art it is the horizon at dusk. One 1px Prussian-blue rule on the page is both.

All tokens live in `src/styles/hakumei.css`.

- **Ground** Brume `#EDF0F2` — never `#FFF`. Dark mode is a different hour of the same place, hand-paired, never an inversion filter.
- **Structure** exactly one pigment, Berlin blue `#0B3A5D` — every horizon, the spine, figure axes.
- **The seal** Oxide `#C0391C`, one 7px square **per page**. A second one halves the value of the first.
- **No gradients. No radius. No shadows. No cards.**
- **Motion** things arrive in 240ms and leave in 900ms — the opposite of standard UI. Hairlines draw themselves once; text only fades.
- **Ma** the spacing ladder never halves (4 / 8 / 14 / 24 / 40 / 68 / 112 / 184). Gap size encodes relatedness.

## Layout

One grid, four unequal tracks, every page: `rail | main | note` at 9.5 : 38 : 11 rem.
The rail carries numerals and years, main carries prose at ≤64ch, note carries venue and collaborators.
Exactly one vertical hairline in the document (`.spine`), positioned by measurement in `Base.astro`.
Horizons are full-bleed; content never is.

## Plates

`src/scripts/plates.js` — ten generative figure types, one per research line and per paper,
assigned by what each work is about and seeded from its title, so a paper looks the same on
every visit and two papers of a type differ.

| type | used for |
| --- | --- |
| `corr` | covariance, noise correlation, sliding-window correlation |
| `raster` | spiking, asynchronous/synchronous activity |
| `traces` | dynamics, time series, engagement |
| `graph` | climate networks, inter-areal circuits |
| `rules` | Raven's matrices, abstract rule learning |
| `sampling` | sampling over unions of joins, estimation |
| `psycho` | perceptual decision, threshold |
| `field` | whole-brain gradients, spatial maps, embeddings |
| `rotation` | attention, representational rotation onto a fixed readout |
| `tree` | Maieusis — ice tips are the answerable questions |

**Scale rule.** Large motifs are airy (97%+ of the frame unmarked); small plates are dense.
An airy line drawing is invisible at 84px. Render and *look at* any new motif before shipping it —
measure the unmarked fraction rather than trusting the eye.

## Content

All copy and data are in `src/data/`. The six lines of work in `projects.js` are in the
author's own order and carry **identical** visual treatment — no line gets a larger plate,
brighter ink, or a "current focus" badge. If a visitor can tell which project is the flagship,
the page is wrong.

Every citation is checked against Crossref, and every external URL is checked live, before
it ships. `publications.js` is downstream of the CV, not the other way round.

## Updating

**A push to `main` is a publication** — Workers Builds rebuilds and the change is
live in under a minute, with no staging step and no confirmation. Verify before
you push, not after. Step-by-step instructions for every kind of change are in
[UPDATING.md](UPDATING.md); the essentials:

| What changed | Where | Then |
| --- | --- | --- |
| A news item, an award, a project blurb, a link | `src/data/*.js` | push |
| A publication | `src/data/publications.js` **and** `assets/cv.tex` | `npm run cv:pull`, then push both |
| The CV only (edited on Overleaf) | — | `npm run cv:update` |
| Layout, type, colour | `src/styles/hakumei.css` | `npm run build`, look at it, push |

`publications.js` and `cv.tex` list the same papers and must agree; a new paper
changes both. `public/cv.pdf` is a committed build artefact (CI does not run
LaTeX) — never edit it by hand; `npm run cv` regenerates it from `assets/cv.tex`.

### The CV also lives on Overleaf

The CV is written on [Overleaf](https://www.overleaf.com/project/6239ef0843aa8ff57fbe9c64)
and published from here, so two copies exist and can diverge. Overleaf's Git
integration makes it an ordinary remote, so they can be reconciled rather than
hand-copied.

```sh
git clone https://git@git.overleaf.com/6239ef0843aa8ff57fbe9c64 ~/.overleaf-cv  # once
npm run cv:update  # pull Overleaf, rebuild, commit, push — CV goes live
npm run cv:sync    # or: just show which side is ahead, change nothing
npm run cv:push    # or: send a correction made here up to Overleaf
```

The clone username must be the literal `git` (an email gets a 403); the password
is a Git authentication token from `overleaf.com/user/settings`, not the account
password. Tokens expire after a year — that is the eventual cause of a sudden 403.

Overleaf's *GitHub synchronization* is a different feature and cannot be used: it
requires a repository dedicated to the Overleaf project and refuses to link one
that already has other files in it. Git integration has no such limit. Both are
premium; UChicago provides Overleaf Professional to all members.

From another machine, or with no machine: any commit that lands on `main`
deploys, so editing a data file through GitHub's web editor is a complete and
legitimate workflow for text changes. Only the CV needs a local toolchain, and
only because it needs LaTeX.

## Deploy

Two Workers on one Cloudflare account.

| Worker | Hostname | What it is |
| --- | --- | --- |
| `dracoxu-com` | `dracoxu.com` | the site — static assets, no script on the request path |
| `dracoxu-www-redirect` | `www.dracoxu.com` | ten lines, 301s to the apex with path and query intact |

`www` is a separate Worker on purpose: Cloudflare serves static assets without invoking
JavaScript, so folding a hostname check into the site Worker would mean running a script on
every real request to redirect the few that are not.

```sh
npm run deploy                      # site
cd redirect-www && npx wrangler deploy   # only if the redirect itself changes
```

Both hostnames are Custom Domains declared in the Wrangler configs, so Cloudflare owns the
DNS records and certificates and a fresh `wrangler deploy` reproduces the whole binding.

**404s must stay 404s.** `not_found_handling: "404-page"` serves `404.html` with a 404 status.
Never set `single-page-application` here — it would answer every dead URL with 200 and let
search engines index a wall of soft 404s.
