# Publishing these files

Two separate GitHub repos are needed — the repo *name* is what makes GitHub treat them specially.

## 1. Profile README → repo must be named `ttemu34`

This has to match your username exactly, or GitHub won't render it on your profile page.

```bash
cd ttemu34
git init
git add README.md
git commit -m "Add profile README"
gh repo create ttemu34 --public --source=. --remote=origin --push
# or, without gh: create an empty public repo named "ttemu34" on GitHub, then:
# git remote add origin git@github.com:ttemu34/ttemu34.git
# git branch -M main
# git push -u origin main
```

## 2. Portfolio site → repo must be named `ttemu34.github.io`

This exact name makes GitHub Pages auto-publish it at `https://ttemu34.github.io`.

```bash
cd ttemu34.github.io
git init
git add index.html style.css
git commit -m "Add portfolio site"
gh repo create ttemu34.github.io --public --source=. --remote=origin --push
# or without gh, same manual steps as above with this repo name
```

No build step or Pages configuration needed — GitHub Pages serves `index.html` from the
default branch automatically for a repo named `<username>.github.io`.

## Before you push

- `vina_tsama` is linked in both pages as `github.com/ttemu34/vina_tsama` — since it's private,
  that link 404s for anyone without access. Either leave it as a non-clickable mention, or grant
  read access to anyone you want to see it.
- Double check the LinkedIn and email links are the ones you want public.
