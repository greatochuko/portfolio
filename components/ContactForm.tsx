"use client";
import React from "react";

export default function ContactForm() {
  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
  }
  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-3">
      <div className="flex gap-3">
        <input
          type="text"
          name="name"
          id="name"
          className="flex-1 rounded-lg border-none bg-muted p-4 text-sm outline-none placeholder:text-accent-gray focus-visible:outline-accent-green-100"
          placeholder="Name"
        />
        <input
          type="email"
          name="email"
          id="email"
          className="flex-1 rounded-lg border-none bg-muted p-4 text-sm outline-none placeholder:text-accent-gray focus-visible:outline-accent-green-100"
          placeholder="Email"
          autoComplete="off"
        />
      </div>
      <textarea
        name="message"
        id="message"
        className="resize-none rounded-lg border-none bg-muted p-4 text-sm outline-none placeholder:text-accent-gray focus-visible:outline-accent-green-100"
        placeholder="Write a message..."
        rows={8}
      ></textarea>
      <button
        type="submit"
        className="rounded-lg bg-accent-green-100 p-3 font-medium text-background duration-300 hover:bg-accent-green-200 hover:text-foreground"
      >
        Send Message
      </button>
    </form>
  );
}
