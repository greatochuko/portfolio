"use client";

import { useActionState } from "react";
import { sendContactMessage, type ContactState } from "@/actions/contact";

const initialState: ContactState = { status: "idle" };

const inputClasses =
  "border-border bg-background placeholder:text-muted focus:border-foreground w-full rounded-md border px-3 py-2 text-sm outline-none duration-200 disabled:opacity-60";

export default function ContactForm() {
  const [state, formAction, isPending] = useActionState(
    sendContactMessage,
    initialState,
  );

  return (
    <form action={formAction} className="flex flex-col gap-4">
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
            maxLength={100}
            disabled={isPending}
            defaultValue={state.values?.name}
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
            maxLength={254}
            disabled={isPending}
            defaultValue={state.values?.email}
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
          maxLength={5000}
          disabled={isPending}
          defaultValue={state.values?.message}
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
          disabled={isPending}
          className="bg-foreground text-background rounded-md px-5 py-2 text-sm font-medium duration-200 hover:opacity-80 disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isPending ? "Sending..." : "Send message"}
        </button>

        <p
          role="status"
          className={`text-sm ${
            state.status === "error" ? "text-error" : "text-success"
          }`}
        >
          {state.status !== "idle" && state.message}
        </p>
      </div>
    </form>
  );
}
