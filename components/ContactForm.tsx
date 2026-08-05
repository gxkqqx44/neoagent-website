"use client";

import { useState, type FormEvent } from "react";

const CONTACT_EMAIL = "neoagent.call@gmail.com";

export default function ContactForm() {
  const [name, setName] = useState("");
  const [clinic, setClinic] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const subject = `Demo request from ${name || "website"}${clinic ? ` (${clinic})` : ""}`;
    const bodyLines = [
      `Name: ${name}`,
      clinic ? `Clinic / business: ${clinic}` : null,
      `Reply-to email: ${email}`,
      "",
      message,
    ].filter(Boolean);

    const mailtoUrl = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(bodyLines.join("\n"))}`;

    window.location.href = mailtoUrl;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="text-[13.5px] font-medium text-ink">
            Your name
          </label>
          <input
            id="name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Priya Sharma"
            className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-teal-500"
          />
        </div>
        <div>
          <label htmlFor="clinic" className="text-[13.5px] font-medium text-ink">
            Clinic / business name
          </label>
          <input
            id="clinic"
            type="text"
            value={clinic}
            onChange={(e) => setClinic(e.target.value)}
            placeholder="Sunrise Dental Clinic"
            className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-teal-500"
          />
        </div>
      </div>

      <div>
        <label htmlFor="email" className="text-[13.5px] font-medium text-ink">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="you@yourclinic.com"
          className="mt-2 w-full rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-teal-500"
        />
      </div>

      <div>
        <label htmlFor="message" className="text-[13.5px] font-medium text-ink">
          What would you like NeoAgent to help with?
        </label>
        <textarea
          id="message"
          rows={5}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="We get a lot of WhatsApp enquiries after hours and want automatic booking..."
          className="mt-2 w-full resize-none rounded-xl border border-line bg-paper px-4 py-3 text-[15px] text-ink outline-none transition-colors placeholder:text-ink-soft/60 focus:border-teal-500"
        />
      </div>

      <button
        type="submit"
        className="inline-flex w-full items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-paper transition-all duration-200 hover:scale-[1.01] hover:bg-teal-700 sm:w-auto"
      >
        Send message
      </button>

      <p className="text-[13px] text-ink-soft">
        This opens your email app with the message pre-filled and sends it to{" "}
        {CONTACT_EMAIL}.
      </p>
    </form>
  );
}
