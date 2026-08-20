# Updating dracoxu.com

Written for future me. Every command here can be pasted straight into a terminal.

> **The one rule:** pushing to `main` publishes. No preview, no "are you sure",
> and about 40 seconds later the whole world sees it. So look at what you changed
> before you push, not after.

Run everything from this directory:

```bash
cd "$HOME/Library/Mobile Documents/com~apple~CloudDocs/websites/site"
```

---

## One table: what am I changing?

| I want to… | File to edit | How to publish |
| --- | --- | --- |
| Add a News item | `src/data/news.js` | `git add -A && git commit -m "news" && git push` |
| Add or edit an award | `src/data/site.js` (`awardsSelected`) | same as above |
| Edit a project description, collaborators, links | `src/data/projects.js` / `site.js` | same as above |
| **Add a paper** | `src/data/publications.js` **and** the CV, both | see "Adding a paper" below |
| Change CV text only | edit it on **Overleaf** | `npm run cv:update` |
| Change layout / type / colour | `src/styles/hakumei.css` | `npm run build`, look at it, then push |
| Swap the photo or the OG card | the image in `public/` | push |

Not sure how it will look? Run a preview locally and watch it as you edit:

```bash
npm run dev        # opens http://localhost:4321
```

---

## Updating the CV

The CV exists in two places. **Overleaf is the master copy**; the PDF on the site
is a build of it.

### Normal case: you edited it on Overleaf and want the site to catch up

Write on the [Overleaf project](https://www.overleaf.com/project/6239ef0843aa8ff57fbe9c64)
as usual. When you're done, come back to this Mac and run **one command**:

```bash
npm run cv:update
```

It pulls the latest from Overleaf, regenerates the PDF, commits, and pushes. The CV
is live at dracoxu.com/cv.pdf about a minute later.
If Overleaf has nothing new it says "nothing to do" and changes nothing — running it
a few extra times is harmless.

### The other CV commands (rarely needed)

```bash
npm run cv:sync    # just show how Overleaf and this copy differ, change nothing
npm run cv:pull    # pull + rebuild the PDF, but don't commit (when you want to look first)
npm run cv:push    # the other direction: send this copy's changes back up to Overleaf
```

### On a new computer

The CV needs a LaTeX toolchain, so a new machine needs this once:

```bash
brew install tectonic
git clone https://git@git.overleaf.com/6239ef0843aa8ff57fbe9c64 ~/.overleaf-cv
```

`git clone` asks for a **Password** — paste the Overleaf **Git authentication token**
(not the account password).
Generate the token at [overleaf.com/user/settings](https://www.overleaf.com/user/settings)
→ Git integration; it expires after a year.
(The terminal shows nothing at all while you paste a password. That's normal — just
press Return.)

---

## Adding a paper (the one operation that's easy to get wrong)

A paper lives in **two places** and both have to change together, or the site's
Publications page and the CV will disagree:

1. **The CV**: add it on Overleaf, written normally.
2. **The site**: edit `src/data/publications.js` and add an entry in the same shape
   as the existing ones (authors, year, title, journal, DOI, link).

Then commit **both together** — don't use `npm run cv:update` here, it will stop you:

```bash
npm run cv:pull                          # pull the CV + rebuild the PDF, don't commit yet
# confirm publications.js is updated too
git add -A && git commit -m "Add paper: <title>" && git push
```

> Proofreading cheat sheet: check author names character by character (Ermentrout,
> Yurong and Fatemeh were all found misspelled in a single pass), and make sure the
> full journal name, the year and the DOI match on both sides.

---

## When you have no computer at all

Any commit that lands on `main` publishes, so **editing a text file directly on the
GitHub website is a perfectly legitimate way to do this** — phone included:

1. Open [github.com/BeibaiDraco/dracoxu.com](https://github.com/BeibaiDraco/dracoxu.com)
2. Go to `src/data/news.js` (or another data file) and click the pencil icon
3. Make the edit and click **Commit changes**

That's the fastest route for adding a News item or fixing a link. The CV is the only
thing you can't do this way — it needs LaTeX.

---

## When something goes wrong

- **The site didn't update** → check the [repository's builds page](https://github.com/BeibaiDraco/dracoxu.com)
  for a red failed build and send Claude Code a screenshot. A failed build can't break
  the live site; it just stays on the last good version.
- **`npm run cv:update` returns 403** → the Overleaf token expired (it does yearly).
  Generate a new one and paste it in the next time `git -C ~/.overleaf-cv pull` asks.
- **You want Claude to help** → open a session at claude.ai/code connected to this
  repository and say what needs changing. The operating notes for an agent are in
  [`CLAUDE.md`](CLAUDE.md).

---

## What this thing is (background, skippable)

- **Framework**: Astro, a static site. Source in `src/`, build output in `dist/` (not in git).
- **Hosting**: Cloudflare, two Workers — `dracoxu-com` (the site itself) and
  `dracoxu-www-redirect` (sends www to the apex domain).
- **Automatic deploys**: push to `main` → Cloudflare Workers Builds builds and deploys.
  Configured in the Cloudflare dashboard, not in this repository.
- A more detailed architecture writeup is in [`README.md`](README.md).
