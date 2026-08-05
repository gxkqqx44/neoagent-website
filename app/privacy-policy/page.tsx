import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How NeoAgent collects, uses, and protects data when providing AI receptionist and WhatsApp automation services to clinics.",
  alternates: { canonical: "/privacy-policy" },
};

const updated = "August 5, 2026";

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        description={`Last updated: ${updated}`}
      />

      <section className="py-16 sm:py-20">
        <div className="container-content max-w-3xl">
          <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-[22px] prose-h2:mt-12 prose-p:text-[15.5px] prose-p:leading-relaxed prose-p:text-ink-soft prose-li:text-[15.5px] prose-li:text-ink-soft prose-a:text-teal-700">
            <p>
              NeoAgent (&ldquo;NeoAgent&rdquo;, &ldquo;we&rdquo;,
              &ldquo;us&rdquo;, or &ldquo;our&rdquo;) provides an AI
              receptionist and WhatsApp automation service for clinics and
              service businesses. This Privacy Policy explains what
              information we process, why we process it, and the choices you
              have. By using NeoAgent, you agree to the practices described
              below.
            </p>

            <h2>1. What we process</h2>
            <p>
              NeoAgent only processes WhatsApp messages and related
              information for the purpose of appointment booking and
              associated services — such as confirming a booking, sending
              appointment reminders, answering questions about a clinic&rsquo;s
              services, and following up after an appointment. This may
              include:
            </p>
            <ul>
              <li>
                The WhatsApp phone number and message content a patient sends
                to a clinic using NeoAgent
              </li>
              <li>
                Basic appointment details, such as preferred date, time, and
                service requested
              </li>
              <li>
                Information a clinic provides to us to configure their
                account, such as business name, services, and availability
              </li>
            </ul>

            <h2>2. How we use this information</h2>
            <p>We use the information above solely to:</p>
            <ul>
              <li>Respond to patient messages on behalf of a clinic</li>
              <li>Check availability and book, reschedule, or cancel appointments</li>
              <li>Send appointment reminders and relevant follow-ups</li>
              <li>Improve the reliability and accuracy of our AI receptionist</li>
              <li>Provide customer support to the clinics we work with</li>
            </ul>

            <h2>3. We do not sell your data</h2>
            <p>
              We never sell, rent, or trade customer data — including patient
              WhatsApp messages, phone numbers, or appointment information —
              to third parties for marketing or advertising purposes.
            </p>

            <h2>4. How information is shared</h2>
            <p>
              We only share information with the service providers necessary
              to operate NeoAgent, such as WhatsApp/messaging infrastructure
              providers and calendar or scheduling tools a clinic connects to
              their account. These providers are only permitted to process
              data on our behalf and for the purposes described in this
              policy.
            </p>

            <h2>5. Data retention</h2>
            <p>
              We retain message and appointment data for as long as
              reasonably necessary to provide the service — for example, to
              maintain appointment history or resolve support requests —
              unless a longer retention period is required by law.
            </p>

            <h2>6. Your right to request deletion</h2>
            <p>
              You may request deletion of your data at any time by emailing{" "}
              <a href="mailto:neoagent.call@gmail.com">
                neoagent.call@gmail.com
              </a>
              . For details on how deletion requests are handled, see our{" "}
              <a href="/data-deletion">Data Deletion</a> page.
            </p>

            <h2>7. Data security</h2>
            <p>
              We use reasonable technical and organizational measures to
              protect the information we process. No method of transmission
              or storage is completely secure, and we work to continually
              improve how we safeguard data.
            </p>

            <h2>8. Children&rsquo;s privacy</h2>
            <p>
              NeoAgent is intended for use by clinics communicating with
              their adult patients or the guardians of patients. We do not
              knowingly collect information directly from children.
            </p>

            <h2>9. Changes to this policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any
              changes will be posted on this page with an updated
              &ldquo;Last updated&rdquo; date.
            </p>

            <h2>10. Contact us</h2>
            <p>
              If you have questions about this Privacy Policy or how your
              data is handled, email us at{" "}
              <a href="mailto:neoagent.call@gmail.com">
                neoagent.call@gmail.com
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
