# Contact form setup (Netlify Forms)

The live site sends submissions through **Netlify Forms** (no Resend API key or `@autoengage.uk.com` mailbox required).

## 1. Deploy latest code

Push and wait for a successful Netlify deploy. The build includes `public/contact-netlify-detect.html` so Netlify registers the `contact` form.

## 2. Turn on email notifications

1. Netlify → your site → **Forms**
2. You should see form name **contact**
3. **Form notifications** → **Add notification** → **Email notification**
4. Send to: **hopmblessing@gmail.com**

Submissions also appear in the Netlify **Forms** tab even before email is configured.

## 3. Test on the live site

1. Open `https://autoengage.uk.com/#contact`
2. Use a full email like `you@gmail.com` (not `.co` unless that is your real address)
3. Submit — you should see the green success message
4. Check Netlify **Forms** → **contact** for the entry

## Local development

On `localhost`, the form still uses `/api/contact` (logs to the terminal if `RESEND_API_KEY` is not set).

## Optional: Resend API (not required on Netlify)

`/api/contact` remains for local dev. You do **not** need `RESEND_API_KEY` on Netlify for the contact form anymore.

## Troubleshooting

| Issue | Fix |
|-------|-----|
| Success but no email | Add **Form notifications** in Netlify (step 2) |
| Form not listed in Netlify | Redeploy after `contact-netlify-detect.html` is in the repo |
| `.co` email warning | Use `.com` if that was a typo |
| Still fails on live site | Check Netlify **Forms** → spam / verified submissions |
