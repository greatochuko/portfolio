"use client";
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  function resetForm() {
    setName("");
    setEmail("");
    setMessage("");
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    if (!e.currentTarget) return;

    try {
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!,
        { name, email, message },
        {
          publicKey: process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!,
        },
      );
      resetForm();
    } catch (err) {
      const error = err as Error;
      console.log({ error: error.message });
    }
    setLoading(false);
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex gap-3">
        <input
          type="text"
          name="name"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-0 flex-1 rounded-lg border-none bg-muted p-4 text-sm outline-none placeholder:text-accent-gray focus-visible:outline-accent-green-100"
          placeholder="Name"
          autoComplete="off"
          required
        />
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-0 flex-1 rounded-lg border-none bg-muted p-4 text-sm outline-none placeholder:text-accent-gray focus-visible:outline-accent-green-100"
          placeholder="Email"
          autoComplete="off"
          required
        />
      </div>
      <textarea
        name="message"
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="resize-none rounded-lg border-none bg-muted p-4 text-sm outline-none placeholder:text-accent-gray focus-visible:outline-accent-green-100"
        placeholder="Write a message..."
        rows={8}
        required
      ></textarea>
      <button
        disabled={loading}
        type="submit"
        className={`rounded-lg bg-accent-green-100 p-3 font-medium text-background duration-300 hover:bg-accent-green-100/80 ${loading ? "cursor-not-allowed bg-accent-green-200 text-foreground hover:bg-accent-green-200" : ""}`}
      >
        {loading ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
