"use client";

import { FormEvent, useState } from "react";
import { PhoneField } from "@/components/PhoneField";
import { ArrowRight } from "@/components/icons";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState("");
  const [formKey, setFormKey] = useState(0);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setError("");

    const form = event.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: data.get("firstName"),
          lastName: data.get("lastName"),
          email: data.get("email"),
          company: data.get("company"),
          phone: data.get("phone"),
          message: data.get("message"),
        }),
      });

      const payload = (await response.json()) as { error?: string };

      if (!response.ok) {
        setStatus("error");
        setError(payload.error || "Could not send your message.");
        return;
      }

      setFormKey((key) => key + 1);
      setStatus("success");
    } catch {
      setStatus("error");
      setError("Could not send your message. Check your connection.");
    }
  }

  return (
    <form
      key={formKey}
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-[13px] font-medium text-white/70">
          First name*
        </span>
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          required
          className="h-12 w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
        />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-[13px] font-medium text-white/70">
          Last name*
        </span>
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          required
          className="h-12 w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
        />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-[13px] font-medium text-white/70">
          Email*
        </span>
        <input
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          className="h-12 w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
        />
      </label>
      <label className="block sm:col-span-1">
        <span className="mb-2 block text-[13px] font-medium text-white/70">
          Company name
        </span>
        <input
          name="company"
          type="text"
          placeholder="Company"
          className="h-12 w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
        />
      </label>
      <PhoneField />
      <label className="block sm:col-span-2">
        <span className="mb-2 block text-[13px] font-medium text-white/70">
          How can we help?
        </span>
        <textarea
          name="message"
          rows={4}
          placeholder="Leave us a message..."
          className="w-full resize-y rounded-[10px] border border-white/15 bg-white/5 px-4 py-3 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent"
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className="inline-flex h-[48px] items-center gap-2 rounded-[10px] bg-accent px-7 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "loading" ? "Sending..." : "Submit"}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

        {status === "success" ? (
          <p className="mt-3 text-[14px] text-emerald-400">
            Thanks — your message was sent. We&apos;ll get back to you soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className="mt-3 text-[14px] text-red-400">{error}</p>
        ) : null}
      </div>
    </form>
  );
}
