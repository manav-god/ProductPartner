"use client";

import { FormEvent, useState } from "react";
import { PhoneField } from "@/components/PhoneField";
import { ArrowRight } from "@/components/icons";

type Status = "idle" | "loading" | "success" | "error";

export function ContactForm({ tone = "dark" }: { tone?: "dark" | "light" }) {
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

  const light = tone === "light";
  const labelClass = light
    ? "mb-2 block text-[13px] font-medium text-[#45433f]"
    : "mb-2 block text-[13px] font-medium text-white/70";
  const fieldClass = light
    ? "w-full rounded-[14px] border border-[rgba(14,14,14,0.12)] bg-white px-4 text-[15px] text-[#0e0e0e] outline-none placeholder:text-[#8a8883] focus:border-[#ff5a1f]"
    : "w-full rounded-[10px] border border-white/15 bg-white/5 px-4 text-[15px] text-white outline-none placeholder:text-white/35 focus:border-accent";
  const inputClass = `${fieldClass} ${light ? "h-[52px]" : "h-12"}`;

  return (
    <form
      key={formKey}
      className="grid gap-4 sm:grid-cols-2"
      onSubmit={handleSubmit}
    >
      <label className="block sm:col-span-1">
        <span className={labelClass}>First name*</span>
        <input
          name="firstName"
          type="text"
          placeholder="First name"
          required
          className={inputClass}
        />
      </label>
      <label className="block sm:col-span-1">
        <span className={labelClass}>Last name*</span>
        <input
          name="lastName"
          type="text"
          placeholder="Last name"
          required
          className={inputClass}
        />
      </label>
      <label className="block sm:col-span-1">
        <span className={labelClass}>Email*</span>
        <input
          name="email"
          type="email"
          placeholder="you@company.com"
          required
          className={inputClass}
        />
      </label>
      <label className="block sm:col-span-1">
        <span className={labelClass}>Company name</span>
        <input
          name="company"
          type="text"
          placeholder="Company"
          className={inputClass}
        />
      </label>
      <PhoneField tone={tone} />
      <label className="block sm:col-span-2">
        <span className={labelClass}>How can we help?</span>
        <textarea
          name="message"
          rows={4}
          placeholder="Leave us a message..."
          className={`${fieldClass} min-h-[110px] resize-y py-3`}
        />
      </label>
      <div className="sm:col-span-2">
        <button
          type="submit"
          disabled={status === "loading"}
          className={
            light
              ? "inline-flex h-14 items-center gap-2 rounded-full bg-[#ff5a1f] px-7 text-[16px] font-semibold text-[#0e0e0e] disabled:cursor-not-allowed disabled:opacity-60"
              : "inline-flex h-[48px] items-center gap-2 rounded-[10px] bg-accent px-7 text-[14px] font-semibold text-white transition-colors hover:bg-accent-hover disabled:cursor-not-allowed disabled:opacity-60"
          }
        >
          {status === "loading" ? "Sending..." : "Submit"}
          <ArrowRight className="h-3.5 w-3.5" />
        </button>

        {status === "success" ? (
          <p className={`mt-3 text-[14px] ${light ? "text-emerald-700" : "text-emerald-400"}`}>
            Thanks, your message was sent. We&apos;ll get back to you soon.
          </p>
        ) : null}
        {status === "error" ? (
          <p className={`mt-3 text-[14px] ${light ? "text-red-600" : "text-red-400"}`}>{error}</p>
        ) : null}
      </div>
    </form>
  );
}
