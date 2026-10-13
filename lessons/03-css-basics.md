# Lesson 3: CSS basics

Open `css/style.css` in VS Code next to this lesson.

## How CSS connects to HTML

This line in the `<head>` of `index.html` loads the CSS file:

```html
<link rel="stylesheet" href="css/style.css">
```

Because every page links to the **same** CSS file, changing it once restyles
the whole site. Old Turbify sites often put styling inside each page; one
shared file is much easier to maintain.

## The shape of a rule

```css
selector {
  property: value;
}
```

Every line inside the braces ends with a semicolon `;`. A missing semicolon is
the most common CSS mistake. When a style "does nothing", check for one first.

## Selectors: choosing what to style

| Selector | Matches | Example HTML |
|----------|---------|--------------|
| `p` | every `<p>` | `<p>` |
| `.hero` | anything with `class="hero"` | `<section class="hero">` |
| `nav a` | `<a>` tags inside a `<nav>` | |
| `a:hover` | a link while the mouse is over it | |

Classes are how you style one specific thing without affecting everything else.
You make up class names yourself; pick ones that describe what the thing *is*.

## Properties you'll use most

| Property | What it changes | Example |
|----------|-----------------|---------|
| `color` | text color | `color: #1f4e79;` |
| `background` | background color or image | `background: white;` |
| `font-family` | typeface | `font-family: Arial, sans-serif;` |
| `font-size` | text size | `font-size: 1.2rem;` |
| `text-align` | left / center / right | `text-align: center;` |
| `padding` | space *inside* the box | `padding: 1rem;` |
| `margin` | space *outside* the box | `margin: 2rem 0;` |
| `border` | outline of the box | `border: 1px solid #ccc;` |

### The box model

Every element is a rectangle. From the inside out: **content → padding →
border → margin**. Try it: add `border: 2px solid red;` to any rule and you can
see exactly where that box is.

### Colors

`#1f4e79` is a **hex color**: the amounts of red, green, and blue. VS Code shows
a little color square next to each one, and clicking it opens a color picker.

### Sizes

`rem` is relative to the normal text size: `1rem` is about 16 pixels, `2rem`
is double. Using `rem` keeps things in proportion on any screen.

## Variables

At the top of `style.css`, the `:root` block defines colors once:

```css
--main-color: #1f4e79;
```

and later rules use them with `var(--main-color)`. Change the variable and
every place that uses it changes too.

## A browser superpower: Developer Tools

In Chrome, Edge, or Firefox, right-click anything on the page → **Inspect**.
You'll see the HTML, and on the side, the CSS applying to it. You can edit
values there and watch the page change live. Those edits don't save, so
it's a safe place to experiment. Copy anything you like back into `style.css`.

## Exercises

1. Change `--main-color` and `--accent-color` to your brand's colors.
2. Change the `font-family` on `body` to `Arial, Helvetica, sans-serif`.
   How does the feel of the site change?
3. Make the footer text bigger.
4. Add a new class: in `about.html`, write
   `<p class="highlight">Something important</p>`, then in `style.css` add a
   `.highlight` rule that gives it a yellow background and some padding.

Next: [Lesson 4: VS Code, Git and GitHub](04-vscode-git-github.md)
