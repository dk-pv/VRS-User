"use client";

import { useEffect, useRef, useState } from "react";
import { X, CheckCircle } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

// Per-tab dismissal. sessionStorage (not localStorage) is deliberate: closing
// the tab ends the session, so a returning visitor sees the popup again, while
// navigation and refreshes within the same tab do not.
const SESSION_KEY = "vrs_enquiry_popup_seen";

// Let the page-enter animation settle before the popup takes over.
const OPEN_DELAY_MS = 1200;

// "Primary property goal" options. These mirror the CalzolConnect contact form
// and must match PROPERTY_GOALS in backend/src/models/Enquiry.js byte for byte
// — the schema enum compares exact strings, and the last option contains a
// curly apostrophe (U+2019) and an em dash (U+2014), not ASCII lookalikes.
const PROPERTY_GOALS = [
  "Buy my first home",
  "Buy my first investment property",
  "Grow my property portfolio",
  "Pay off my mortgage sooner",
  "Attend the Property Wealth Master Class",
  "Book a strategy call",
  "I’m not sure yet — I need guidance",
];

type FormState = {
  firstName: string;
  phone: string;
  email: string;
  goal: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

const EMPTY_FORM: FormState = {
  firstName: "",
  phone: "",
  email: "",
  goal: "",
};

// Same rules the Enquiry schema enforces server-side; this layer only exists
// to give immediate feedback, it is never the authority.
const validate = (form: FormState): FormErrors => {
  const errors: FormErrors = {};

  const firstName = form.firstName.trim();
  if (!firstName) errors.firstName = "Please enter your first name";
  else if (firstName.length > 100) errors.firstName = "Name is too long";

  const phone = form.phone.trim();
  if (!phone) errors.phone = "Please enter your phone number";
  else if (!/^\+?[\d\s()-]{8,20}$/.test(phone))
    errors.phone = "Please enter a valid phone number";

  const email = form.email.trim();
  if (!email) errors.email = "Please enter your email";
  else if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(email))
    errors.email = "Please enter a valid email";
  else if (email.length > 150) errors.email = "Email is too long";

  if (!form.goal) errors.goal = "Please select your primary property goal";

  return errors;
};

// `muted` renders an unset <select> like a placeholder. It replaces the text
// colour rather than layering a second one, because two competing Tailwind text
// utilities resolve by stylesheet order, not by the order written here.
const inputClass = (hasError?: boolean, muted?: boolean) =>
  `w-full rounded-lg bg-black/30 px-4 py-3 text-sm outline-none transition placeholder:text-gray-600 border ${
    muted ? "text-gray-500" : "text-white"
  } ${
    hasError
      ? "border-red-500/60"
      : "border-[var(--card-border)] focus:border-[var(--primary-gold)]"
  }`;

function Field({
  label,
  htmlFor,
  error,
  required,
  children,
}: {
  label: string;
  htmlFor: string;
  error?: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-2 block text-[10px] uppercase tracking-[0.22em] text-gray-400"
      >
        {label}
        {required && <span className="text-[var(--primary-gold)]"> *</span>}
      </label>

      {children}

      {error && (
        <p role="alert" className="mt-1.5 text-[11px] text-red-400">
          {error}
        </p>
      )}
    </div>
  );
}

export default function EnquiryPopup() {
  const API = process.env.NEXT_PUBLIC_API_BASE_URL;

  const [open, setOpen] = useState(false);
  const [form, setForm] = useState<FormState>(EMPTY_FORM);
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [serverError, setServerError] = useState("");

  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);
  const previouslyFocused = useRef<Element | null>(null);

  // ================= FIRST-VISIT TRIGGER =================
  // Runs only after mount, so sessionStorage is never touched during SSR.
  useEffect(() => {
    try {
      if (sessionStorage.getItem(SESSION_KEY)) return;
    } catch {
      return;
    }

    let openTimer: ReturnType<typeof setTimeout>;

    // PageLoader is an opaque full-screen overlay above this one and outlives
    // a fixed delay on a slow hero, so wait for it to clear. Opening behind it
    // would steal focus and lock scrolling while the visitor sees only the
    // loader. Pages without a loader pass this check on the first tick.
    const poll = setInterval(() => {
      if (document.querySelector("[data-page-loader]")) return;

      clearInterval(poll);
      openTimer = setTimeout(() => setOpen(true), OPEN_DELAY_MS);
    }, 200);

    return () => {
      clearInterval(poll);
      clearTimeout(openTimer);
    };
  }, []);

  // ================= BODY SCROLL LOCK =================
  useEffect(() => {
    if (!open) return;

    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // ================= FOCUS HANDLING =================
  useEffect(() => {
    if (!open) return;

    previouslyFocused.current = document.activeElement;
    firstFieldRef.current?.focus();

    const restoreTo = previouslyFocused.current as HTMLElement | null;
    return () => restoreTo?.focus?.();
  }, [open]);

  // Closing and submitting both end the popup for this tab.
  const markSeen = () => {
    try {
      sessionStorage.setItem(SESSION_KEY, "1");
    } catch {
      // Private browsing modes can throw on write; the popup simply reappears.
    }
  };

  const dismiss = () => {
    markSeen();
    setOpen(false);
  };

  // ================= ESCAPE + FOCUS TRAP =================
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        dismiss();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      // Keep keyboard focus inside the dialog while the page behind it is
      // blurred and inert to the eye.
      const focusable = dialogRef.current.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    };

    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const update = (key: keyof FormState, value: string) => {
    setForm((prev) => ({ ...prev, [key]: value }));

    // Clear the field's error as soon as the visitor starts correcting it.
    setErrors((prev) => (prev[key] ? { ...prev, [key]: undefined } : prev));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Guards a second click landing before the button re-renders as disabled.
    if (submitting || submitted) return;

    const found = validate(form);
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    setSubmitting(true);
    setServerError("");

    try {
      // Reuses the existing enquiry endpoint. Fields this form does not ask
      // for (propertyType, preferredLocation, message) are simply omitted —
      // never filled with placeholder values — and the server sets status.
      const res = await fetch(`${API}/api/enquiries`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: form.firstName,
          email: form.email,
          phone: form.phone,
          requirement: form.goal,
        }),
      });

      const data = await res.json().catch(() => ({}));

      if (!res.ok) {
        // Map the schema's field names back onto this form's field names.
        if (data.errors) {
          setErrors({
            firstName: data.errors.name,
            email: data.errors.email,
            phone: data.errors.phone,
            goal: data.errors.requirement,
          });
        }
        setServerError(data.message || "Could not send your enquiry");
        setSubmitting(false);
        return;
      }

      markSeen();
      setSubmitted(true);

      // Deliberately a bare event: no parameters, no form data, no PII.
      window.gtag?.("event", "generate_lead");

      setTimeout(() => setOpen(false), 2800);
    } catch {
      setServerError("Network error. Please check your connection and retry.");
      setSubmitting(false);
    }
  };

  if (!open) return null;

  return (
    <div
      // Backdrop-dismiss is disabled once a submission starts. The success card
      // is much shorter than the form, so the second half of a double-click on
      // Submit would otherwise land on the backdrop and wipe out the
      // confirmation the visitor never got to read. The close button still works.
      onClick={submitting || submitted ? undefined : dismiss}
      className="fixed inset-0 z-[1000] flex items-start justify-center overflow-y-auto bg-black/70 px-4 py-6 backdrop-blur-md sm:items-center sm:py-10"
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="enquiry-popup-title"
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-lg rounded-2xl border border-[var(--card-border)] bg-[var(--card-bg)] shadow-[0_30px_80px_rgba(0,0,0,0.8)]"
      >
        {/* GOLD GLOW */}
        <div className="pointer-events-none absolute -inset-2 -z-10 rounded-3xl bg-[var(--primary-gold)]/10 blur-2xl" />

        {/* CLOSE — stays reachable while the body below scrolls */}
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close enquiry form"
          className="absolute right-3 top-3 z-10 flex h-9 w-9 items-center justify-center rounded-full border border-[var(--card-border)] bg-black/40 text-gray-400 transition hover:text-[var(--primary-gold)]"
        >
          <X size={16} />
        </button>

        {submitted ? (
          /* ================= SUCCESS ================= */
          <div className="px-6 py-16 text-center">
            <CheckCircle
              size={44}
              strokeWidth={1.5}
              className="mx-auto text-[var(--primary-gold)]"
            />

            <h2 className="mt-6 text-2xl font-medium tracking-[-0.01em] text-white">
              Thank You
            </h2>

            <p className="mx-auto mt-4 max-w-sm text-sm leading-relaxed tracking-wide text-gray-400">
              Your enquiry has been received. Our team will review it and be in
              touch with you shortly.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} noValidate>
            {/* ================= HEADER ================= */}
            <div className="px-6 pb-5 pt-8 text-center sm:px-8">
              <div className="mx-auto mb-5 h-[1px] w-[60px] bg-gradient-to-r from-transparent via-[var(--primary-gold)] to-transparent" />

              <p className="mb-2 text-[10px] font-light uppercase tracking-[0.4em] text-[var(--primary-gold)]/70">
                Premium Property Investment
              </p>

              <h2
                id="enquiry-popup-title"
                className="text-2xl font-light tracking-[0.12em] text-white sm:text-3xl"
              >
                Start Your Enquiry
              </h2>

              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-gray-500">
                Tell us what you are looking for
              </p>
            </div>

            {/* ================= FIELDS ================= */}
            <div className="max-h-[52vh] space-y-5 overflow-y-auto px-6 pb-2 sm:max-h-none sm:px-8">
              <Field
                label="First Name"
                htmlFor="enq-first-name"
                required
                error={errors.firstName}
              >
                <input
                  id="enq-first-name"
                  ref={firstFieldRef}
                  type="text"
                  autoComplete="given-name"
                  maxLength={100}
                  placeholder="Your first name"
                  value={form.firstName}
                  aria-invalid={!!errors.firstName}
                  onChange={(e) => update("firstName", e.target.value)}
                  className={inputClass(!!errors.firstName)}
                />
              </Field>

              <Field
                label="WhatsApp / Phone Number"
                htmlFor="enq-phone"
                required
                error={errors.phone}
              >
                {/* country="au" gives the Australia flag and the +61 prefix;
                    countryCodeEditable={false} stops the visitor deleting the
                    prefix, so they only type the remaining digits. Dark theming
                    for this library's own stylesheet lives in globals.css. */}
                <PhoneInput
                  country="au"
                  value={form.phone}
                  countryCodeEditable={false}
                  enableSearch
                  // onChange gives digits with no leading "+", already prefixed
                  // with the selected country's dial code. Storing E.164 keeps
                  // it inside the schema's 20-character phone limit for every
                  // country. The national part is stripped of a leading trunk
                  // "0" (an AU number typed as 0412 864 050 is +61412864050,
                  // not +610412864050) using the dial code the library reports,
                  // so switching country keeps working.
                  // ponytail: a handful of countries (e.g. Italy) keep the
                  // leading zero in international format; revisit if VRS starts
                  // taking leads from one.
                  onChange={(value, country) => {
                    const dialCode =
                      country && typeof country === "object" && "dialCode" in country
                        ? String(country.dialCode)
                        : "";

                    let digits = value;
                    if (dialCode && digits.startsWith(dialCode)) {
                      const national = digits
                        .slice(dialCode.length)
                        .replace(/^0+/, "");
                      digits = dialCode + national;
                    }

                    update("phone", digits ? `+${digits}` : "");
                  }}
                  inputProps={{
                    id: "enq-phone",
                    name: "phone",
                    autoComplete: "tel",
                    "aria-invalid": !!errors.phone,
                    // Pasting a full "+61 412 864 050" would otherwise be
                    // appended after the dial code already in the field,
                    // storing a duplicated country code and silently dropping
                    // the real digits. Setting an international paste wholesale
                    // lets the library re-parse it as one complete number.
                    // A national paste ("0412 864 050") is left to the normal
                    // input path, where onChange strips the trunk zero —
                    // prefixing "+" to it here would make "0" the country code.
                    onPaste: (event: React.ClipboardEvent<HTMLInputElement>) => {
                      const pasted = event.clipboardData.getData("text").trim();
                      if (!pasted.startsWith("+")) return;

                      const digits = pasted.replace(/\D/g, "");
                      if (!digits) return;

                      event.preventDefault();
                      update("phone", `+${digits}`);
                    },
                  }}
                  containerClass={`vrs-phone ${
                    errors.phone ? "vrs-phone-error" : ""
                  }`}
                />
              </Field>

              <Field
                label="Email Address"
                htmlFor="enq-email"
                required
                error={errors.email}
              >
                <input
                  id="enq-email"
                  type="email"
                  autoComplete="email"
                  maxLength={150}
                  placeholder="you@example.com"
                  value={form.email}
                  aria-invalid={!!errors.email}
                  onChange={(e) => update("email", e.target.value)}
                  className={inputClass(!!errors.email)}
                />
              </Field>

              <Field
                label="What is your primary property goal?"
                htmlFor="enq-goal"
                required
                error={errors.goal}
              >
                <select
                  id="enq-goal"
                  value={form.goal}
                  aria-invalid={!!errors.goal}
                  onChange={(e) => update("goal", e.target.value)}
                  className={inputClass(!!errors.goal, !form.goal)}
                >
                  <option value="">Select your primary property goal</option>
                  {PROPERTY_GOALS.map((goal) => (
                    <option
                      key={goal}
                      value={goal}
                      className="bg-[#221F1F] text-white"
                    >
                      {goal}
                    </option>
                  ))}
                </select>
              </Field>

              {serverError && (
                <p
                  role="alert"
                  className="rounded-lg border border-red-500/30 bg-red-500/10 px-4 py-3 text-xs text-red-300"
                >
                  {serverError}
                </p>
              )}
            </div>

            {/* ================= ACTIONS ================= */}
            <div className="px-6 pb-7 pt-5 sm:px-8">
              <button
                type="submit"
                disabled={submitting}
                className="w-full rounded-lg bg-[var(--primary-gold)] px-7 py-3 text-[11px] font-medium uppercase tracking-[0.18em] text-[#221F1F] transition hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-60"
              >
                {submitting ? "Sending..." : "Send my Enquiry"}
              </button>

              <p className="mt-4 text-center text-[10px] uppercase tracking-[0.25em] text-gray-600">
                Handled with complete discretion
              </p>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
