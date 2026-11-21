# Lesson 5: Going live with GitHub Pages and Namecheap

This puts the site online at **www.hofferwarehouses.com**. It has two halves:
GitHub hosts the files, and Namecheap points your domain at GitHub.

Before you start, make sure the new pages are on the `main` branch: on GitHub,
with the branch dropdown set to `main`, you should see `services.html`,
`history.html` and `contact.html` in the file list. If not, merge the pull
request first (see Lesson 4).

## Part A: Turn on GitHub Pages

1. On GitHub, open the repo `hofferwarehouses/hofferwarehouses`.
2. GitHub Pages is free for **public** repositories. If the repo is private,
   either make it public (**Settings → General →** scroll to
   **Danger Zone → Change visibility**) or use a paid GitHub plan. A public repo
   means anyone can read the site's files, but they can read them from the live
   site anyway. Never put passwords or private documents in it.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**: Source = **Deploy from a branch**,
   Branch = **main**, folder = **/ (root)**. Click **Save**.
5. Wait a minute or two, then refresh. The **Custom domain** box should already
   say `www.hofferwarehouses.com`. That comes from the `CNAME` file in this
   project. If the box is empty, type it in and click **Save**.

Until Part B is done, GitHub will report a DNS problem. That's expected.

## Part B: Point Namecheap at GitHub

1. Log in to Namecheap → **Domain List** → **Manage** next to
   `hofferwarehouses.com`.
2. On the **Domain** tab, under **Nameservers**, make sure it says
   **Namecheap BasicDNS**.
3. Open the **Advanced DNS** tab. Under **Host Records**, delete Namecheap's
   default parking records (usually a `CNAME` for `www` pointing to
   `parkingpage.namecheap.com` and a `URL Redirect` record for `@`). Also
   delete any leftover records pointing to Turbify or Yahoo.
4. Add these records. Click **Add New Record** for each one:

   | Type     | Host  | Value                         |
   |----------|-------|-------------------------------|
   | A Record | `@`   | `185.199.108.153`             |
   | A Record | `@`   | `185.199.109.153`             |
   | A Record | `@`   | `185.199.110.153`             |
   | A Record | `@`   | `185.199.111.153`             |
   | CNAME    | `www` | `hofferwarehouses.github.io.` |

   Leave TTL on **Automatic**. `@` means `hofferwarehouses.com` without the
   `www`, and the `www` row covers `www.hofferwarehouses.com`. With both, either
   address works.

## Part C: Turn on HTTPS

1. Back on GitHub, go to **Settings → Pages**. GitHub checks your DNS. This can
   take from a few minutes up to 24 hours.
2. When the check passes, tick **Enforce HTTPS** so the site gets the padlock.
   If the box is greyed out, wait a little longer and come back.

## Email: sales@hofferwarehouses.com

The site shows `sales@hofferwarehouses.com`. When Turbify hosted the domain,
Turbify also handled its email, so **that address probably doesn't receive
mail any more.** Test it by sending it a message. If it doesn't arrive, choose
one of these:

- **Free email forwarding (easiest):** in Namecheap, open your domain →
  **Domain** tab → **Redirect Email**. Add `sales` → your everyday email
  address. Messages sent to sales@hofferwarehouses.com are then forwarded to
  you. Namecheap adds the needed `MX` records itself.
- **A real mailbox** (send and receive as sales@...): Namecheap Private Email,
  Google Workspace or Microsoft 365 are all paid options.
- **Or** change the address on the site to one that already works. It appears
  in the footer of all four pages and on the contact page.

Whatever you choose, don't delete `MX` or `TXT` records in Advanced DNS
afterwards. Those carry the email.

## Recommended: verify your domain

So nobody else can ever claim your domain on GitHub Pages: click your profile
picture → **Settings → Pages → Add a domain**, enter `hofferwarehouses.com`,
and follow the steps. It gives you one `TXT` record to add in Namecheap's
Advanced DNS.

## Troubleshooting

- **Still seeing Namecheap's parking page:** DNS changes take time, and your
  computer remembers old answers. Try your phone on mobile data, or wait.
- **"Domain's DNS record could not be retrieved":** recheck the four A records
  for typos and that the parking records are gone.
- **Site loads but has no styling or images:** a path problem. Remember capital
  letters matter, and paths shouldn't start with `C:\` or `file://`.
- **Old Turbify page still appears:** some record still points at Turbify.
  Recheck Advanced DNS.

From now on, every push to `main` updates the live site within a minute or two.
