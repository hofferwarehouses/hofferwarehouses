# Lesson 2: HTML basics

Open `index.html` in VS Code next to this lesson.

## Tags

HTML is made of **tags** in angle brackets. Most tags come in pairs: an opening
tag and a closing tag with a `/`. The content goes between them.

```html
<p>This is a paragraph.</p>
```

Together, the opening tag, content, and closing tag make an **element**.

## Attributes

Tags can carry extra information called **attributes**, written as
`name="value"` inside the opening tag:

```html
<a href="about.html">About us</a>
<img src="images/storefront.jpg" alt="Our storefront on Main Street">
```

- `href` = where a link goes.
- `src` = which image file to show.
- `alt` = text describing the image, for blind visitors and search engines.
  Always include it.
- `<img>` has no closing tag, because it has no content inside it.

## The tags you'll use most

| Tag | Meaning |
|-----|---------|
| `<h1>` ... `<h6>` | Headings, from biggest (`h1`) to smallest |
| `<p>` | Paragraph |
| `<a href="...">` | Link |
| `<img src="..." alt="...">` | Image |
| `<ul>` + `<li>` | Bulleted list and its items |
| `<ol>` + `<li>` | Numbered list |
| `<strong>` / `<em>` | Bold / italic (strong emphasis / emphasis) |
| `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` | Name the parts of a page |
| `<div>` | A generic box for grouping things |

## Page skeleton

Every page has the same outer shape. Look for it in `index.html`:

```html
<!DOCTYPE html>
<html lang="en">
  <head>  <!-- information about the page: title, CSS link -->
  </head>
  <body>  <!-- what visitors see -->
  </body>
</html>
```

## Nesting

Elements go *inside* other elements, like boxes in boxes. Close them in reverse
order:

```html
<p>This is <strong>very</strong> important.</p>   ✅
<p>This is <strong>very</p> important.</strong>   ❌
```

Indenting nested lines (as in `index.html`) makes this easy to see.

## Paths: how files find each other

`href="css/style.css"` means "go into the `css` folder, then open
`style.css`". The path starts from the folder the current page is in.
If a link or image is broken, a wrong path is the most common cause. Check the
spelling and remember that **capital letters matter** on web servers:
`Photo.JPG` and `photo.jpg` are different files.

## Exercises

1. Change the `<title>` and the `<h1>` to your website's name. Save, then
   refresh the page in your browser.
2. Replace "Item one / two / three" with three real things about your site.
3. The menu links to `about.html`, which doesn't exist yet, so clicking it
   gives an error. Make it:
   - In VS Code, right-click `index.html` → **Copy**, then paste. Rename the
     copy to `about.html`.
   - Change the content inside `<main>` to be about you or your business.
   - Open it in the browser and test the menu links in both directions.
4. Put a photo in the `images` folder and show it with an `<img>` tag. Don't
   forget the `alt` text.

Next: [Lesson 3: CSS basics](03-css-basics.md)
