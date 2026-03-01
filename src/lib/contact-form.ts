/**
 * Contact form endpoint – e.g. Formspree: https://formspree.io/f/YOUR_FORM_ID
 * Set VITE_CONTACT_FORM_ACTION in .env and in Formspree set the notification
 * email to your company email (see src/lib/constants.ts COMPANY.email).
 */
export const CONTACT_FORM_ACTION =
  typeof import.meta !== "undefined" && import.meta.env?.VITE_CONTACT_FORM_ACTION
    ? import.meta.env.VITE_CONTACT_FORM_ACTION
    : "";

export type ContactFormData = {
  fullName: string;
  company: string;
  phone: string;
  email: string;
  service: string;
  message: string;
};

/** Submit contact form to configured endpoint (Formspree or similar). */
export async function submitContactForm(data: ContactFormData): Promise<{ ok: boolean; error?: string }> {
  const action = CONTACT_FORM_ACTION;
  if (!action) {
    return { ok: false, error: "Form endpoint not configured. Set VITE_CONTACT_FORM_ACTION in .env" };
  }

  try {
    const body = {
      fullName: data.fullName,
      company: data.company,
      phone: data.phone,
      email: data.email,
      service: data.service,
      message: data.message,
      _replyto: data.email,
    };

    const res = await fetch(action, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    });

    if (!res.ok) {
      const text = await res.text();
      return { ok: false, error: text || `Request failed (${res.status})` };
    }
    return { ok: true };
  } catch (e) {
    const message = e instanceof Error ? e.message : "Network error";
    return { ok: false, error: message };
  }
}
