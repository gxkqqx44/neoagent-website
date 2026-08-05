import ChatMockup from "@/components/ChatMockup";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-paper pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="pointer-events-none absolute inset-x-0 top-0 -z-10 h-[560px] bg-gradient-to-b from-teal-50 via-transparent to-transparent" />

      <div className="container-content grid items-center gap-14 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
        <div className="animate-fadeUp">
          <span className="inline-flex items-center gap-2 rounded-full border border-line bg-mist px-3.5 py-1.5 text-[13px] font-medium text-ink-soft">
            <span className="h-1.5 w-1.5 rounded-full bg-teal-500" />
            Built for clinics &amp; healthcare practices
          </span>

          <h1 className="mt-6 text-balance text-[40px] font-semibold leading-[1.08] tracking-tight text-ink sm:text-[52px] lg:text-[56px]">
            AI Receptionist &amp; WhatsApp Automation for Clinics
          </h1>

          <p className="mt-6 max-w-xl text-balance text-[17px] leading-relaxed text-ink-soft sm:text-[18px]">
            24/7 AI receptionist that answers WhatsApp, books appointments,
            sends reminders and automates follow-ups — so your front desk
            never misses a patient again.
          </p>

          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a
              href="mailto:neoagent.call@gmail.com?subject=Demo%20request%20-%20NeoAgent"
              className="inline-flex items-center justify-center rounded-full bg-ink px-7 py-3.5 text-[15px] font-medium text-paper transition-all duration-200 hover:scale-[1.02] hover:bg-teal-700"
            >
              Book a free demo
            </a>
            <a
              href="#features"
              className="inline-flex items-center justify-center rounded-full border border-line bg-paper px-7 py-3.5 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-mist"
            >
              See how it works
            </a>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-3 text-[13px] text-ink-soft">
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Live on WhatsApp Business
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              No app for patients to download
            </span>
            <span className="flex items-center gap-2">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 6 9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              Set up in days, not months
            </span>
          </div>
        </div>

        <div className="animate-fadeUp [animation-delay:150ms]">
          <ChatMockup />
        </div>
      </div>
    </section>
  );
}
