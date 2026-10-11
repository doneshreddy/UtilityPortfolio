"use client";

import { useState } from "react";

const MAX = 1000;

/**
 * Contact form UI with validation + success state.
 * NOTE: this does not send anywhere yet (the site is static).
 * To make it work, POST the values to a form service (Formspree,
 * Web3Forms) or your own API route.
 */
export default function ContactForm() {
  const [message, setMessage] = useState("");
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const name = String(data.get("name") ?? "");
        const email = String(data.get("email") ?? "");
        const subject = String(data.get("subject") ?? "Project inquiry");
        const body = `${message}\n\nFrom: ${name}\nReply to: ${email}`;
        window.location.href = `mailto:contact@lambdabees.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setSent(true);
      }}
      className="rounded-2xl border border-border bg-card p-6"
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block text-sm">
          <span className="text-muted">Full Name</span>
          <input
            required
            name="name"
            placeholder="Your name"
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
          />
        </label>
        <label className="block text-sm">
          <span className="text-muted">Email Address</span>
          <input
            required
            type="email"
            name="email"
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
          />
        </label>
      </div>

      <label className="mt-4 block text-sm">
        <span className="text-muted">Subject</span>
        <input
          required
          name="subject"
          placeholder="What's this about?"
          className="mt-1 w-full rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
        />
      </label>

      <label className="mt-4 block text-sm">
        <span className="flex items-center justify-between text-muted">
          <span>Message</span>
          <span className="text-xs">
            {message.length}/{MAX}
          </span>
        </span>
        <textarea
          required
          name="message"
          rows={5}
          maxLength={MAX}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Tell me about your project or idea..."
          className="mt-1 w-full resize-y rounded-lg border border-border bg-background px-3 py-2 text-sm outline-none focus:border-foreground"
        />
      </label>

      {sent && (
        <div className="mt-4 flex items-center gap-2 rounded-lg border border-green-500/40 bg-green-500/10 px-4 py-3 text-sm text-green-500">
          <span>✓</span>
          <span>Your email app is opening with this message ready to send.</span>
        </div>
      )}

      <button
        type="submit"
        className="mt-5 flex w-full items-center justify-center gap-2 rounded-lg bg-foreground px-4 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
      >
        ➤ Send Message
      </button>
    </form>
  );
}
