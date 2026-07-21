#!/usr/bin/env bash
# Keep assets/cv.tex and the Overleaf project from drifting apart.
#
# Overleaf is where the CV is written; this repository is where it is published
# and where publications.js has to agree with it. Git integration makes the
# Overleaf project an ordinary remote, so the two can be reconciled instead of
# hand-copied.
#
#   ./scripts/cv-sync.sh          compare, and report which side is ahead
#   ./scripts/cv-sync.sh pull     take Overleaf's version, rebuild the PDF
#   ./scripts/cv-sync.sh push     send this repo's version up to Overleaf
#
# One-time setup, done by a human because it involves a password prompt:
#
#   git clone https://git.overleaf.com/6239ef0843aa8ff57fbe9c64 ~/.overleaf-cv
#
# Overleaf asks for a token, not the account password — generate one under
# Account Settings > Git integration. macOS Keychain stores it after the first
# clone, so nothing here ever handles the secret.

set -euo pipefail

PROJECT_ID="6239ef0843aa8ff57fbe9c64"
CLONE="${OVERLEAF_CV_CLONE:-$HOME/.overleaf-cv}"
REPO_TEX="$(cd "$(dirname "$0")/.." && pwd)/assets/cv.tex"
ACTION="${1:-status}"

if [ ! -d "$CLONE/.git" ]; then
  cat >&2 <<EOF
No Overleaf clone at $CLONE.

Run this once, in your own terminal, and paste the token when git asks for a
password (Overleaf > Account Settings > Git integration > generate token):

  git clone https://git.overleaf.com/$PROJECT_ID $CLONE

Then run this script again.
EOF
  exit 1
fi

OL_TEX="$CLONE/main.tex"
[ -f "$OL_TEX" ] || OL_TEX="$CLONE/cv.tex"
[ -f "$OL_TEX" ] || { echo "No main.tex or cv.tex in $CLONE" >&2; exit 1; }

echo "→ fetching Overleaf"
git -C "$CLONE" pull --quiet --ff-only

case "$ACTION" in
  status)
    if diff -q "$OL_TEX" "$REPO_TEX" >/dev/null; then
      echo "✓ identical — nothing to do"
    else
      echo "✗ they differ. Overleaf is <, this repo is >:"
      echo
      diff "$OL_TEX" "$REPO_TEX" || true
      echo
      echo "Run '$0 pull' to take Overleaf's, or '$0 push' to send this repo's up."
    fi
    ;;
  pull)
    cp "$OL_TEX" "$REPO_TEX"
    echo "→ copied Overleaf into assets/cv.tex"
    ( cd "$(dirname "$REPO_TEX")/.." && npm run --silent cv )
    echo "✓ public/cv.pdf rebuilt. Check publications.js still agrees, then commit."
    ;;
  push)
    cp "$REPO_TEX" "$OL_TEX"
    git -C "$CLONE" add -A
    if git -C "$CLONE" diff --cached --quiet; then
      echo "✓ Overleaf already matches — nothing to push"
    else
      git -C "$CLONE" commit -qm "Sync from dracoxu.com repo"
      git -C "$CLONE" push --quiet
      echo "✓ pushed to Overleaf"
    fi
    ;;
  *)
    echo "usage: $0 [status|pull|push]" >&2; exit 2 ;;
esac
