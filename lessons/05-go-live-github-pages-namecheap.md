# Lesson 5: Going live with GitHub Pages and Namecheap

Do this once the site is on the `main` branch (see Lesson 4). It has two
halves: GitHub hosts the files, and Namecheap points your domain at GitHub.

Below, replace `yourdomain.com` with your real domain.

## Part A: Turn on GitHub Pages

1. On GitHub, open the repo `ronniereddot/rondeposit`.
2. GitHub Pages is free for **public** repositories. If the repo is private,
   either make it public (**Settings → General →** scroll to
   **Danger Zone → Change visibility**) or use a paid GitHub plan. A public repo
   means anyone can read the site's files, but they can read them from the live
   site anyway. Never put passwords or private documents in it.
3. Go to **Settings → Pages**.
4. Under **Build and deployment**: Source = **Deploy from a branch**,
   Branch = **main**, folder = **/ (root)**. Click **Save**.
5. Wait a minute or two, then refresh. GitHub shows a link like
   `https://ronniereddot.github.io/rondeposit/`. Open it. That's your site, live.

## Part B: Point Namecheap at GitHub

1. Log in to Namecheap → **Domain List** → **Manage** next to your domain.
2. On the **Domain** tab, under **Nameservers**, make sure it says
   **Namecheap BasicDNS**.
3. Open the **Advanced DNS** tab. Under **Host Records**, delete Namecheap's
   default parking records (usually a `CNAME` for `www` pointing to
   `parkingpage.namecheap.com` and a `URL Redirect` record for `@`). Also
   delete any leftover records pointing to Turbify or Yahoo.
4. Add these records. Click **Add New Record** for each one:

   | Type     | Host  | Value                     |
   |----------|-------|---------------------------|
   | A Record | `@`   | `185.199.108.153`         |
   | A Record | `@`   | `185.199.109.153`         |
   | A Record | `@`   | `185.199.110.153`         |
   | A Record | `@`   | `185.199.111.153`         |
   | CNAME    | `www` | `ronniereddot.github.io.` |

   Leave TTL on **Automatic**. `@` means the bare domain (`yourdomain.com`),
   and `www` covers `www.yourdomain.com`.

   **Don't delete email records** (`MX` or `TXT` records) if you use email at
   this domain.

## Part C: Connect the two

1. Back on GitHub: **Settings → Pages → Custom domain**. Type
   `www.yourdomain.com` and click **Save**. GitHub adds a file named `CNAME` to
   the repo. Leave it there; it's how GitHub knows your domain. (Pull it into
   VS Code before your next edit.)
2. GitHub checks your DNS. This can take from a few minutes up to 24 hours.
3. When the check passes, tick **Enforce HTTPS** so the site gets the padlock.
   If the box is greyed out, wait a little longer and come back.

Both `yourdomain.com` and `www.yourdomain.com` will now open your site.

## Recommended: verify your domain

So nobody else can ever claim your domain on GitHub Pages: click your profile
picture → **Settings → Pages → Add a domain**, and follow the steps. It gives
you one `TXT` record to add in Namecheap's Advanced DNS.

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
