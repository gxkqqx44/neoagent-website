"use client";

import { useState } from "react";
import Reveal from "@/components/Reveal";

const faqs = [
  {
    q: "What exactly does NeoAgent do?",
    a: "NeoAgent connects to your clinic's WhatsApp number and acts as a 24/7 receptionist — answering patient questions, checking availability, booking appointments, sending reminders, and following up after visits.",
  },
  {
    q: "Does it work with my existing WhatsApp Business number?",
    a: "Yes. NeoAgent connects to your existing WhatsApp Business number, so patients keep messaging the number they already know — nothing changes on their end.",
  },
  {
    q: "Will it replace my front-desk staff?",
    a: "No — it takes routine, repetitive conversations off their plate (booking, reminders, FAQs) and hands off anything complex or sensitive to your team, so they can focus on patients in the clinic.",
  },
  {
    q: "Is patient data handled securely?",
    a: "Yes. NeoAgent only processes WhatsApp messages needed for appointment booking and related follow-ups, and we never sell customer data. See our Privacy Policy for full details.",
  },
  {
    q: "How long does setup take?",
    a: "Most clinics are live within a few days. We connect to your WhatsApp number, configure your services and availability, and test the flow with you before going live.",
  },
  {
    q: "What happens if the AI can't answer a question?",
    a: "NeoAgent recognizes when a conversation needs a human and hands it off to your front-desk team with the full context, so nothing gets lost.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="scroll-mt-16 border-t border-line bg-paper py-20 sm:py-28">
      <div className="container-content grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
        <Reveal>
          <span className="text-[13px] font-semibold uppercase tracking-wide text-teal-700">
            FAQ
          </span>
          <h2 className="mt-3 text-balance text-[32px] font-semibold tracking-tight text-ink sm:text-[38px]">
            Questions clinics usually ask
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
            Don&apos;t see your question here?{" "}
            <a
              href="mailto:neoagent.call@gmail.com"
              className="font-medium text-teal-700 underline underline-offset-4"
            >
              Email us
            </a>{" "}
            and we&apos;ll get back to you.
          </p>
        </Reveal>

        <Reveal delay={100} className="divide-y divide-line border-t border-line">
          {faqs.map((item, i) => {
            const open = openIndex === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  className="flex w-full items-center justify-between gap-4 py-5 text-left"
                  aria-expanded={open}
                >
                  <span className="text-[15.5px] font-medium text-ink">
                    {item.q}
                  </span>
                  <span
                    className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-line text-ink-soft transition-transform duration-300 ${
                      open ? "rotate-45" : ""
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M12 5v14M5 12h14" strokeLinecap="round" />
                    </svg>
                  </span>
                </button>
                <div
                  className={`grid overflow-hidden transition-all duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                    open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="pb-5 pr-10 text-[14.5px] leading-relaxed text-ink-soft">
                      {item.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </Reveal>
      </div>
    </section>
  );
}
