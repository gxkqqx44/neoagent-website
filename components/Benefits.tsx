import Reveal from "@/components/Reveal";

const benefits = [
  {
    title: "Never lose a patient to a missed message",
    description:
      "Every WhatsApp enquiry gets a reply — even after hours, on weekends, or when your front desk is on another call.",
  },
  {
    title: "Fewer no-shows, less manual chasing",
    description:
      "Automatic reminders go out before every appointment, so your team spends less time on confirmation calls.",
  },
  {
    title: "Your staff, freed up for real patient care",
    description:
      "Routine booking, rescheduling, and FAQs are handled by NeoAgent, so your team can focus on the patients in front of them.",
  },
  {
    title: "One WhatsApp number, every conversation",
    description:
      "Booking, reminders and follow-ups all happen where your patients already are — no new app, no extra login.",
  },
];

const stats = [
  { value: "24/7", label: "Always answering, even after closing time" },
  { value: "Instant", label: "First reply the moment a patient messages" },
  { value: "1", label: "WhatsApp number for the entire patient journey" },
  { value: "0", label: "Apps for your patients to install" },
];

export default function Benefits() {
  return (
    <section id="benefits" className="scroll-mt-16 bg-mist py-20 sm:py-28">
      <div className="container-content grid gap-14 lg:grid-cols-2 lg:gap-16">
        <Reveal>
          <span className="text-[13px] font-semibold uppercase tracking-wide text-teal-700">
            Benefits
          </span>
          <h2 className="mt-3 text-balance text-[32px] font-semibold tracking-tight text-ink sm:text-[38px]">
            Built around how clinics actually run
          </h2>

          <ul className="mt-10 space-y-7">
            {benefits.map((b) => (
              <li key={b.title} className="flex gap-4">
                <span className="mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-500 text-navy">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <div>
                  <p className="text-[16px] font-medium text-ink">{b.title}</p>
                  <p className="mt-1 text-[14.5px] leading-relaxed text-ink-soft">
                    {b.description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </Reveal>

        <Reveal delay={120} className="grid grid-cols-2 gap-4 self-center">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-line bg-paper p-7 shadow-card"
            >
              <p className="text-[30px] font-semibold tracking-tight text-ink">
                {s.value}
              </p>
              <p className="mt-2 text-[13.5px] leading-snug text-ink-soft">
                {s.label}
              </p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
