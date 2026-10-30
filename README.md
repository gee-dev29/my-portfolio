# Godwin Madue Neyin — Portfolio

A single-page, responsive portfolio built with plain HTML/CSS/JS (no build step, no framework).

## Structure
```
index.html        main page
css/style.css      styles (dark theme, accent #0ef)
js/script.js       mobile nav, scroll-spy, typed.js role rotator
assets/            put your CV PDF here
```

## Before you publish
1. Drop your CV PDF into `assets/` and name it `Godwin-Madue-Neyin-CV.pdf`
   (or edit the `href` on the "Download CV" button in `index.html` to match your filename).
2. Optionally add a profile photo to `assets/` and reference it in the hero section.

## Run locally
Just open `index.html` in a browser, or serve it:
```
npx serve .
```

## Deploy for free (GitHub Pages)
```
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/gee-dev29/<repo-name>.git
git push -u origin main
```
Then in the repo: Settings → Pages → Deploy from branch → `main` / `(root)`.
Your site will be live at `https://gee-dev29.github.io/<repo-name>/`.

Alternatively, drag-and-drop this folder onto [Netlify Drop](https://app.netlify.com/drop) or
connect the repo to [Vercel](https://vercel.com) for an instant live URL — both are free and
give you a link you can put straight on your CV.

## Customize
- Colors: edit the `:root` variables at the top of `css/style.css`.
- Content: edit the text directly in `index.html` (Experience, Projects, Skills sections).
