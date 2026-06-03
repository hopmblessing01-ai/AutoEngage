export type ContactPayload = {
  name: string;
  email: string;
  company: string;
  message: string;
};

const FORM_NAME = "contact";

function encodeFormBody(fields: Record<string, string>): string {
  return Object.entries(fields)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join("&");
}

function isLocalDevHost(hostname: string): boolean {
  return (
    hostname === "localhost" ||
    hostname === "127.0.0.1" ||
    hostname.endsWith(".local")
  );
}

/** Netlify Forms — works on autoengage.uk.com without Resend. */
export async function submitViaNetlifyForm(
  payload: ContactPayload,
): Promise<{ ok: boolean; error?: string }> {
  const body = encodeFormBody({
    "form-name": FORM_NAME,
    name: payload.name,
    email: payload.email,
    company: payload.company,
    message: payload.message,
    "bot-field": "",
  });

  const res = await fetch("/", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body,
  });

  if (res.ok) return { ok: true };
  return { ok: false, error: "Could not send your message. Please try again or email us directly." };
}

/** API route (Resend) — used on localhost only. */
export async function submitViaApi(
  payload: ContactPayload,
): Promise<{ ok: boolean; error?: string }> {
  const res = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  let data: { ok?: boolean; error?: string };
  try {
    data = (await res.json()) as { ok?: boolean; error?: string };
  } catch {
    return { ok: false, error: "Server error. Please try again or email us directly." };
  }

  if (!res.ok || !data.ok) {
    return { ok: false, error: data.error ?? "Something went wrong." };
  }
  return { ok: true };
}

export async function submitContactForm(
  payload: ContactPayload,
): Promise<{ ok: boolean; error?: string }> {
  if (typeof window === "undefined") {
    return { ok: false, error: "Form can only be submitted in the browser." };
  }

  if (isLocalDevHost(window.location.hostname)) {
    return submitViaApi(payload);
  }

  return submitViaNetlifyForm(payload);
}
