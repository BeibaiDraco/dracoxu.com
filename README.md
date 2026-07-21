# dracoxu.com

Personal academic site. Astro, static output, deployed to Cloudflare Workers static assets.

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
