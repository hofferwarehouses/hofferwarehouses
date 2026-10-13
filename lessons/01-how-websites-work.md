# Lesson 1: How a website works

## The big picture

A website is a **folder of files** on a computer that is always connected to the
internet. That computer is called a **server**. When someone types your domain
into a browser:

1. **DNS** looks up your domain (like a phone book) and finds the server's
   address. *Namecheap* controls this part, because you bought the domain there.
2. The browser asks that server for the files.
3. The server sends back `index.html` (the home page) plus any CSS and images
   it links to.
4. The browser turns those files into the page you see.

Turbify used to do steps 2 and 3 for you. We're replacing it with
**GitHub Pages**, which hosts simple websites for free.

```
 Visitor's browser ──► Namecheap DNS ──► GitHub Pages ──► your files in this repo
   "yourdomain.com"     "it's over there"   "here's index.html"
```

## The three languages of the web

| Language   | What it does              | Like a house...       | File ending |
|------------|---------------------------|-----------------------|-------------|
| HTML       | Content and structure     | the walls and rooms   | `.html`     |
| CSS        | Looks: colors, fonts, layout | the paint and furniture | `.css`  |
| JavaScript | Behavior and interaction  | the electricity       | `.js`       |

We start with HTML and CSS. Many small business sites never need JavaScript.

## The tools you'll use

- **VS Code**: where you write and edit the files.
- **Git**: keeps a history of every change, so you can always undo a mistake.
- **GitHub**: stores that history online and (with GitHub Pages) hosts the site.
- **Namecheap**: points your domain at GitHub.

## Try it

Open `index.html` from this project in your web browser. Double-clicking the
file works, or drag it onto a browser window. You're looking at a real web page,
running straight off your computer with no server at all.

Next: [Lesson 2: HTML basics](02-html-basics.md)
