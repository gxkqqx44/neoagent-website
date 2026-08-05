const messages = [
  { from: "patient", text: "Hi! Do you have any slot open tomorrow for a dental cleaning?", delay: 200 },
  { from: "ai", text: "Hi Priya! Yes — I have 11:00 AM or 4:30 PM open tomorrow with Dr. Mehta.", delay: 900 },
  { from: "patient", text: "4:30 works for me", delay: 1600 },
  { from: "ai", text: "Booked ✅ You're confirmed for 4:30 PM tomorrow. I'll send a reminder 2 hours before.", delay: 2300 },
] as const;

export default function ChatMockup() {
  return (
    <div className="relative mx-auto w-full max-w-[380px]">
      <div className="absolute -inset-6 -z-10 rounded-[2rem] bg-gradient-to-br from-teal-100 via-teal-50 to-transparent blur-2xl" />

      <div className="overflow-hidden rounded-[2rem] border border-line bg-navy shadow-lift">
        <div className="flex items-center gap-3 border-b border-white/10 bg-navy-soft px-5 py-4">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-teal-500 text-[13px] font-semibold text-navy">
            NA
          </div>
          <div>
            <p className="text-[14px] font-medium text-white">NeoAgent</p>
            <p className="flex items-center gap-1.5 text-[12px] text-teal-300">
              <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
              Online — replies instantly
            </p>
          </div>
        </div>

        <div className="flex min-h-[320px] flex-col justify-end gap-2.5 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.06)_1px,transparent_0)] bg-[length:16px_16px] px-4 py-5">
          {messages.map((m, i) => (
            <div
              key={i}
              className={`flex animate-typeBubble opacity-0 [animation-fill-mode:forwards] ${
                m.from === "ai" ? "justify-end" : "justify-start"
              }`}
              style={{ animationDelay: `${m.delay}ms` }}
            >
              <div
                className={`max-w-[78%] rounded-2xl px-3.5 py-2.5 text-[13.5px] leading-snug ${
                  m.from === "ai"
                    ? "rounded-br-md bg-teal-500 text-navy"
                    : "rounded-bl-md bg-white/95 text-ink"
                }`}
              >
                {m.text}
              </div>
            </div>
          ))}

          <div
            className="flex animate-typeBubble justify-end opacity-0 [animation-fill-mode:forwards]"
            style={{ animationDelay: "2900ms" }}
          >
            <div className="flex items-center gap-1 rounded-full bg-white/10 px-3 py-2">
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-teal-300 [animation-delay:0ms]" />
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-teal-300 [animation-delay:200ms]" />
              <span className="h-1.5 w-1.5 animate-pulseDot rounded-full bg-teal-300 [animation-delay:400ms]" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
