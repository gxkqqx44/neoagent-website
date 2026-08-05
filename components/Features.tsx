import Reveal from "@/components/Reveal";

const features = [
  {
    title: "Instant WhatsApp replies",
    description:
      "Every patient message gets answered in seconds — early morning, late night, or during your busiest hours.",
    icon: (
      <path
        d="M12 3C7.03 3 3 6.58 3 11c0 2.39 1.19 4.53 3.08 5.99L5.5 20.5l3.83-1.42c.85.27 1.75.42 2.67.42 4.97 0 9-3.58 9-8s-4.03-8-9-8Z"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Smart appointment booking",
    description:
      "Checks real-time slot availability and books directly into your calendar — no back-and-forth needed.",
    icon: (
      <>
        <rect x="3" y="4.5" width="18" height="16" rx="2" />
        <path d="M3 9.5h18M8 3v3M16 3v3" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Automated reminders",
    description:
      "Sends timely WhatsApp reminders before each visit, so fewer patients forget to show up.",
    icon: (
      <>
        <path d="M12 6v6l3.5 2" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="12" cy="12" r="9" />
      </>
    ),
  },
  {
    title: "Lead qualification",
    description:
      "Filters new patient inquiries automatically and flags the ones that need your team's attention first.",
    icon: (
      <>
        <path d="M4 6h16M4 12h10M4 18h6" strokeLinecap="round" />
      </>
    ),
  },
  {
    title: "Follow-up automation",
    description:
      "Re-engages patients after their visit — review requests, rebooking nudges, and care check-ins on autopilot.",
    icon: (
      <path
        d="M4 4v6h6M20 20v-6h-6M20 9a8 8 0 0 0-14.93-3M4 15a8 8 0 0 0 14.93 3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    ),
  },
  {
    title: "Seamless human handoff",
    description:
      "Escalates complex or sensitive conversations to your front-desk team at exactly the right moment.",
    icon: (
      <>
        <circle cx="9" cy="8" r="3" />
        <path d="M3.5 20a5.5 5.5 0 0 1 11 0M16 8.5a3 3 0 1 1 3.5 2.96M20.5 20a5 5 0 0 0-4.1-4.92" strokeLinecap="round" />
      </>
    ),
  },
];

export default function Features() {
  return (
    <section id="features" className="scroll-mt-16 border-t border-line bg-paper py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="max-w-2xl">
          <span className="text-[13px] font-semibold uppercase tracking-wide text-teal-700">
            Features
          </span>
          <h2 className="mt-3 text-balance text-[32px] font-semibold tracking-tight text-ink sm:text-[38px]">
            Everything your front desk does — running around the clock
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-ink-soft">
            NeoAgent plugs into the WhatsApp number your patients already
            message, and handles the conversation end to end.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-line bg-line sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={i * 60} className="bg-paper p-8">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-50 text-teal-700">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                  {f.icon}
                </svg>
              </div>
              <h3 className="mt-5 text-[17px] font-semibold text-ink">{f.title}</h3>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                {f.description}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
