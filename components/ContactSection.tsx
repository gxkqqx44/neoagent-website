import Reveal from "@/components/Reveal";

export default function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-16 bg-navy py-20 sm:py-28">
      <div className="container-content">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="text-balance text-[32px] font-semibold tracking-tight text-white sm:text-[38px]">
            Give your clinic a receptionist that never clocks out
          </h2>
          <p className="mt-4 text-[16px] leading-relaxed text-white/70">
            Tell us a bit about your clinic and we&apos;ll show you how
            NeoAgent would handle your WhatsApp — usually within one working
            day.
          </p>

          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="mailto:neoagent.call@gmail.com?subject=Demo%20request%20-%20NeoAgent"
              className="inline-flex items-center justify-center rounded-full bg-teal-500 px-7 py-3.5 text-[15px] font-medium text-navy transition-transform duration-200 hover:scale-[1.02] hover:bg-teal-400"
            >
              Email neoagent.call@gmail.com
            </a>
            <a
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-[15px] font-medium text-white transition-colors duration-200 hover:bg-white/10"
            >
              Go to contact page
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
