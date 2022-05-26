#!/usr/bin/env sh

set -e

rm dist -rf
cross-env GH_PAGES=true yarn build

cd dist
git init
git checkout -b main
git add -A
git commit -m 'deploy'
git push -f git@github.com:ycs77/lazy-hackathon.git main:gh-pages

cd -
