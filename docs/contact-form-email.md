# Contact form email setup

Submissions are sent to **hopmblessing@gmail.com** via [Resend](https://resend.com).

## 1. Create a Resend account

1. Sign up at [resend.com](https://resend.com) (free tier is enough to start).
2. **API Keys** → Create API key.

## 2. Add environment variables on Netlify

**Site configuration → Environment variables → Add:**

| Variable | Value |
|----------|--------|
| `RESEND_API_KEY` | Your Resend API key (create in Resend dashboard; do not commit to git) |
| `CONTACT_TO_EMAIL` | `hopmblessing@gmail.com` (optional; this is the default) |
| `CONTACT_FROM_EMAIL` | **Leave unset** until you verify a domain in Resend (see below) |
| `RESEND_DOMAIN_VERIFIED` | Set to `true` only after your domain is verified in Resend |

Redeploy the site after saving.

## 3. Resend restrictions (important)

- With **no verified domain**, sending uses **`onboarding@resend.dev`** automatically.
- In test mode, Resend may only deliver to the **email you used to sign up for Resend**.  
  Set `CONTACT_TO_EMAIL` to that same address, **or** verify **autoengage.uk.com** in Resend so you can deliver to `hopmblessing@gmail.com`.
- **Do not** set `CONTACT_FROM_EMAIL` to a Gmail address — Resend will reject it and the form will fail.
- After domain verification:  
  `CONTACT_FROM_EMAIL=AutoEngage <hello@autoengage.uk.com>` and `RESEND_DOMAIN_VERIFIED=true`

## Troubleshooting “Could not send your message”

1. **Rotate & update API key** in Netlify if it was ever committed to git.
2. **Remove** bad `CONTACT_FROM_EMAIL` from Netlify (or leave empty).
3. Check **Netlify function logs** for `[contact] Resend error:` after a test submit.
4. In Resend dashboard → **Domains** → verify `autoengage.uk.com` if `CONTACT_TO_EMAIL` is not your Resend login email.

## 4. Local testing

Copy `.env.example` to `.env.local` and set `RESEND_API_KEY`.  
Without it, dev mode logs the submission to the terminal and still returns success.

## From vs Reply-To (important)

| Field | What it is | Example |
|-------|------------|---------|
| **To** (`CONTACT_TO_EMAIL`) | Your inbox | `hopmblessing@gmail.com` |
| **From** (`CONTACT_FROM_EMAIL`) | Who the notification appears to be from (must be Resend/your domain) | `AutoEngage <onboarding@resend.dev>` |
| **Reply-To** | The **Email** field on the contact form (set in code automatically) | Visitor types `client@company.com` → you hit Reply → Gmail emails them |

You should **not** set `CONTACT_FROM_EMAIL` to the visitor’s email. Email providers block that (spam/spoofing). The form email is already used as **Reply-To**.

## 5. Test

Submit the form on the live site and check **hopmblessing@gmail.com** (and spam).  
Hit **Reply** in Gmail — it should address the person who filled out the form.
