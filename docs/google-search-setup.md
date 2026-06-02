# Get AutoEngage on Google Search

Your live domain: **https://autoengage.uk.com**

## 1. Verify ownership (Search Console)

1. Open [Google Search Console](https://search.google.com/search-console)
2. Add property: `https://autoengage.uk.com` (URL prefix)
3. Verify using the HTML file already in `public/googleadddfb60282faaf8.html`
   - Test: open `https://autoengage.uk.com/googleadddfb60282faaf8.html` in a browser (must show one line of text)
4. Click **Verify**

## 2. Submit sitemap

After redeploying this repo:

1. Open `https://autoengage.uk.com/sitemap.xml` — you should see XML (not an error page)
2. In Search Console → **Sitemaps** → submit: `https://autoengage.uk.com/sitemap.xml`

## 3. Request indexing

Search Console → **URL inspection** → enter each URL → **Request indexing**:

- `https://autoengage.uk.com/`
- `https://autoengage.uk.com/about`
- `https://autoengage.uk.com/services`
- `https://autoengage.uk.com/case-studies`

## 4. Expect timing

- New sites often take **1–4 weeks** before brand searches like `autoengage` show your site
- Check progress: search `site:autoengage.uk.com` on Google

## 5. Help ranking for your brand

- Link to `https://autoengage.uk.com` from LinkedIn, Upwork, and blessingigwegbe.com
- Keep business name **AutoEngage** consistent everywhere
- Optional: Google Business Profile if you have a UK business address

## Netlify

- Redeploy after every SEO-related change
- Build command: `npm run build` (see `netlify.toml`)
- Use Netlify’s **Next.js** runtime (`@netlify/plugin-nextjs`)
