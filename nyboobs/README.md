# NYBOOBS website

A simple apparel shop for **nyboobs.com**. It's plain HTML and CSS, hosted free
on GitHub Pages, with checkout handled by **Stripe Payment Links**. There's no
server, no database and no monthly shop fee. Stripe takes a small fee per sale.

## What's in this folder

```
nyboobs/
├── index.html        ← Home / shop page
├── about.html        ← About page
├── faq.html          ← Shipping, returns, sizing
├── 404.html          ← "Page not found" page
├── css/style.css     ← colors, fonts, layout (brand colors at the top)
├── js/products.js    ← ★ YOUR PRODUCT LIST: the only file you edit to sell things
├── js/shop.js        ← turns products.js into cards (no need to edit)
├── images/           ← product photos/mockups (placeholders for now)
├── CNAME             ← tells GitHub Pages the domain: nyboobs.com
├── robots.txt, sitemap.xml ← for search engines
```

## How buying works

1. A customer clicks **Buy now** on a product.
2. They go to a Stripe checkout page, choose a size, and pay.
3. Stripe emails you (and them) a receipt with the size and shipping address.
4. You ship it, either yourself or by ordering the item from a print-on-demand
   company like Printful or Printify, which mails it straight to the customer.

## Step 1: Move this folder into its own repository

This folder currently lives inside the Hoffer Warehouses repo. Each GitHub
Pages site can have only one domain, so NYBOOBS needs its own repo:

1. On GitHub, click **+ → New repository**, name it `nyboobs`, make it
   **Public**, and click **Create repository**.
2. Click **uploading an existing file**, then drag in **everything inside** the
   `nyboobs` folder (not the folder itself). `index.html` must be at the top
   level. Click **Commit changes**.
3. **Settings → Pages**: Source = **Deploy from a branch**, Branch = **main**,
   folder = **/ (root)**, **Save**. The custom domain should show `nyboobs.com`
   (from the `CNAME` file).

## Step 2: Point nyboobs.com at GitHub (Namecheap)

Namecheap → **Domain List → Manage** next to nyboobs.com → **Advanced DNS**.
Delete the default parking records, then add:

| Type     | Host  | Value                         |
|----------|-------|-------------------------------|
| A Record | `@`   | `185.199.108.153`             |
| A Record | `@`   | `185.199.109.153`             |
| A Record | `@`   | `185.199.110.153`             |
| A Record | `@`   | `185.199.111.153`             |
| CNAME    | `www` | `YOUR-GITHUB-USERNAME.github.io.` |

After DNS updates (minutes to 24 hours), go back to **Settings → Pages** and
tick **Enforce HTTPS**.

**Email:** the site shows `hello@nyboobs.com`. To receive it, in Namecheap open
the domain → **Domain** tab → **Redirect Email** → forward `hello` to your
normal inbox. Or change the address in the footers and pages.

## Step 3: Set up Stripe and create a Buy link per product

1. Sign up at **stripe.com** and finish account activation (bank details for
   payouts).
2. In the Stripe Dashboard: **Product catalog → Add product**. Enter the name,
   price and a photo.
3. Then **Payment Links → New**. Choose the product, and:
   - **Collect customers' addresses**: turn on, so you know where to ship.
   - **Add custom field → Dropdown**, label it `Size`, and add your sizes
     (S, M, L, XL, 2XL). Tick **Required**.
   - Optional: under **Shipping rates**, add a flat shipping charge.
   - **After payment**: you can redirect back to `https://nyboobs.com`.
4. Click **Create link** and copy it (it starts with `https://buy.stripe.com/`).
5. Paste it into that product's `buyLink` in `js/products.js`. The card's
   button changes from "Coming soon" to "Buy now".

Test first with Stripe's **Test mode** switch, using card `4242 4242 4242 4242`,
any future date and any CVC. Then make the real links with Test mode off.

## Step 4: Add your logos and products

- Make a mockup image of each shirt with your logo (Printful's and Printify's
  free mockup generators work well). Square images, about 1200×1200, look best.
- Put the images in `images/`, then edit `js/products.js`: one block per
  product. Delete the placeholder images when you no longer use them.
- To use your logo in the header instead of the text, see the comment above
  `.logo` in `css/style.css`.
- Brand colors are at the top of `css/style.css` (`--pink` is the accent).

## Before you launch

- Rewrite the FAQ (shipping times, returns) to match what you'll actually do.
- Rewrite the About page in your own words.
- Make sure every price in `products.js` matches its Stripe price.

## Ideas for later

- **Printful/Printify automatic fulfillment:** orders get printed and shipped
  without you touching them. This needs a shop platform they connect to, such
  as Shopify (from about $5/month with the Starter plan) or Etsy. Worth it once
  orders pick up.
- **A product page per item** with several photos.
- **An email sign-up** for new drops (Mailchimp or Buttondown free plans).
