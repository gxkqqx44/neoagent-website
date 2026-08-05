import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with NeoAgent to set up an AI receptionist and WhatsApp automation for your clinic.",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let's set up your AI receptionist"
        description="Tell us about your clinic and how patients currently reach you — we'll get back to you within one working day."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content grid gap-12 lg:grid-cols-[1fr_0.8fr] lg:gap-16">
          <div className="rounded-2xl border border-line bg-paper p-6 shadow-card sm:p-8">
            <ContactForm />
          </div>

          <div className="space-y-8">
            <div>
              <h2 className="text-[15px] font-semibold text-ink">Email us directly</h2>
              <a
                href="mailto:neoagent.call@gmail.com"
                className="mt-2 inline-block text-[16px] font-medium text-teal-700"
              >
                neoagent.call@gmail.com
              </a>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                For demo requests, support, or general questions — this inbox
                is checked daily.
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-semibold text-ink">Data requests</h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Looking to request deletion of your data? Visit our{" "}
                <a href="/data-deletion" className="font-medium text-teal-700 underline underline-offset-4">
                  Data Deletion
                </a>{" "}
                page for instructions.
              </p>
            </div>

            <div>
              <h2 className="text-[15px] font-semibold text-ink">Based in</h2>
              <p className="mt-2 text-[14.5px] leading-relaxed text-ink-soft">
                Mumbai, India — working with clinics and service businesses
                across India.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
