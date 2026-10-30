"use client";

import { useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const inputClasses =
  "border-border bg-background placeholder:text-muted focus:border-foreground w-full rounded-md border px-3 py-2 text-sm outline-none duration-200 disabled:opacity-60";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });

      if (!res.ok) throw new Error("Request failed");

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const isSending = status === "sending";

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4">
      <div className="flex flex-col gap-4 sm:flex-row">
        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="name" className="text-secondary text-sm font-medium">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            disabled={isSending}
            placeholder="Your name"
            className={inputClasses}
          />
        </div>

        <div className="flex flex-1 flex-col gap-1.5">
          <label htmlFor="email" className="text-secondary text-sm font-medium">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            disabled={isSending}
            placeholder="you@example.com"
            className={inputClasses}
          />
        </div>
      </div>

      <div className="flex flex-col gap-1.5">
        <label htmlFor="message" className="text-secondary text-sm font-medium">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={5}
          disabled={isSending}
          placeholder="What's on your mind?"
          className={`${inputClasses} resize-none`}
        />
      </div>

      {/* Honeypot: hidden from real users, bots tend to fill it */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="hidden"
      />

      <div className="flex items-center gap-4">
        <button
          type="submit"
          disabled={isSending}
          className="bg-foreground text-background rounded-md px-5 py-2 text-sm font-medium duration-200 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSending ? "Sending..." : "Send message"}
        </button>

        <p role="status" className="text-sm">
          {status === "success" && (
            <span className="text-secondary">
              Thanks! I&apos;ll get back to you soon.
            </span>
          )}
          {status === "error" && (
            <span className="text-secondary">
              Something went wrong. Please try again or email me directly.
            </span>
          )}
        </p>
      </div>
    </form>
  );
}
