# Hoffer Warehouses website

The website for **www.hofferwarehouses.com**, rebuilt from the old Turbify
site as plain HTML and CSS. It's hosted free on **GitHub Pages**, and the
domain is registered at **Namecheap**.

It's also a learning project. Every file is commented, and the `lessons`
folder teaches the basics step by step. The same skills work for any future
website.

## What's in this folder

```
hofferwarehouses/
├── index.html      ← Home page
├── services.html   ← Services page
├── history.html    ← History page
├── contact.html    ← Contact page
├── css/
│   └── style.css   ← the look of every page (colors, fonts, layout)
├── images/         ← the three photos used on the site
├── CNAME           ← tells GitHub Pages the domain name (don't delete)
├── robots.txt      ← instructions for search engines
├── sitemap.xml     ← list of pages, for search engines
├── old-site/       ← the original Turbify files, kept for reference only
└── lessons/        ← beginner lessons, read them in order
```

## How the site was rebuilt

Each old Turbify page was about 5,000 lines long. Nearly all of that was
Turbify's own editor machinery: scripts, slideshow code and styles for features
the site didn't use. The real content was a few paragraphs per page. So instead
of copying those files, the content (text, address, phone, email and photos)
was moved into four short pages that share one stylesheet. Open
`old-site/index.html` and the new `index.html` side by side in VS Code to
compare.

Small changes made along the way:

- Fixed a typo ("quipped" → "equipped") and some punctuation.
- The photos were stored on Google's servers, not in the Turbify files. They
  were downloaded into `images/` so the site no longer depends on them.
- The old contact form needed Turbify's servers to work, so it was replaced
  with phone and email links. See "Ideas for later" below.

## The plan

- [x] **0. Create the `main` branch**
- [x] **1. Upload the old Turbify files** into `old-site/`
- [x] **2. Rebuild the pages** from the old content
- [ ] **3. Learn the basics**: lessons 1–3 (how websites work, HTML, CSS)
- [ ] **4. Set up VS Code + Git** on your computer: lesson 4
- [ ] **5. Go live** at www.hofferwarehouses.com: lesson 5

## Ideas for later (good practice projects)

- **A contact form** using a free service like Formspree (formspree.io), so
  messages arrive by email.
- **More photos**, such as loading docks, office space and the building's
  history.
- **A "404" page**, for visitors who mistype an address: make a `404.html`
  and GitHub Pages will show it automatically.

## Lessons

1. [How a website works](lessons/01-how-websites-work.md)
2. [HTML basics](lessons/02-html-basics.md)
3. [CSS basics](lessons/03-css-basics.md)
4. [VS Code, Git and GitHub](lessons/04-vscode-git-github.md)
5. [Going live with GitHub Pages and Namecheap](lessons/05-go-live-github-pages-namecheap.md)
