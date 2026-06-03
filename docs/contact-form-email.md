# Contact form email setup

Submissions are sent to **hopmblessing@gmail.com** via [Resend](https://resend.com).

## 1. Create a Resend account

1. Sign up at [resend.com](https://resend.com) (free tier is enough to start).
2. **API Keys** → Create API key.

## 2. Add environment variables on Netlify

**Site configuration → Environment variables → Add:**

| Variable | Value |
|----------|--------|
| `RESEND_API_KEY` | Your Resend API key (`re_...`) |
| `CONTACT_TO_EMAIL` | `hopmblessing@gmail.com` (optional; this is the default) |
| `CONTACT_FROM_EMAIL` | `AutoEngage <onboarding@resend.dev>` — **your** sender address, not the visitor’s (see below) |

Redeploy the site after saving.

## 3. Resend restrictions (important)

- With **no verified domain**, Resend only allows sending **from** `onboarding@resend.dev`.
- On the free/test setup, emails may only be delivered to the **email address you used to sign up for Resend** until you verify a domain.
- To send reliably to `hopmblessing@gmail.com` from production, either:
  - Sign up for Resend with `hopmblessing@gmail.com`, or
  - Verify **autoengage.uk.com** in Resend and set  
    `CONTACT_FROM_EMAIL=AutoEngage <hello@autoengage.uk.com>` (or similar).

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
