#!/bin/bash
set -e
cd "$(dirname "$0")"

echo "▶ Building..."
npm --cache /tmp/npm-cache-ghazi run build

echo "▶ Committing to GitHub..."
git add -A
git commit -m "chore: sync $(date '+%Y-%m-%d %H:%M')" || echo "Nothing to commit"
git push origin main

echo "▶ Deploying to Vercel..."
vercel --prod --yes

echo "✅ Done"
