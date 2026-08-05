import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of NeoAgent's AI receptionist and WhatsApp automation service.",
  alternates: { canonical: "/terms" },
};

const updated = "August 5, 2026";

export default function TermsPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        description={`Last updated: ${updated}`}
      />

      <section className="py-16 sm:py-20">
        <div className="container-content max-w-3xl">
          <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-[22px] prose-h2:mt-12 prose-p:text-[15.5px] prose-p:leading-relaxed prose-p:text-ink-soft prose-li:text-[15.5px] prose-li:text-ink-soft prose-a:text-teal-700">
            <p>
              These Terms of Service (&ldquo;Terms&rdquo;) govern access to
              and use of NeoAgent&rsquo;s website and AI receptionist /
              WhatsApp automation service (the &ldquo;Service&rdquo;),
              provided by NeoAgent (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or
              &ldquo;our&rdquo;). By using the Service, you agree to these
              Terms. If you do not agree, please do not use the Service.
            </p>

            <h2>1. The Service</h2>
            <p>
              NeoAgent provides an AI-powered receptionist that connects to a
              clinic or business&rsquo;s WhatsApp number to answer patient or
              customer messages, book and manage appointments, send
              reminders, and automate follow-up communication.
            </p>

            <h2>2. Acceptable use</h2>
            <p>You agree to use NeoAgent only for lawful purposes. You will not:</p>
            <ul>
              <li>
                Use the Service to send spam, unsolicited marketing, or
                messages that violate WhatsApp&rsquo;s own terms and
                policies
              </li>
              <li>
                Use the Service to collect or process sensitive personal data
                beyond what is reasonably needed for appointment booking and
                related communication
              </li>
              <li>
                Attempt to reverse engineer, disrupt, overload, or gain
                unauthorized access to the Service or its underlying systems
              </li>
              <li>
                Use the Service to impersonate any person or business, or to
                mislead patients or customers
              </li>
              <li>
                Use the Service in a way that violates any applicable law or
                regulation, including those governing healthcare
                communications in your jurisdiction
              </li>
            </ul>
            <p>
              We may suspend or terminate access to the Service for any
              account found to be in violation of this section.
            </p>

            <h2>3. Client responsibilities</h2>
            <p>
              If you use NeoAgent on behalf of a clinic or business, you are
              responsible for ensuring you have the appropriate rights and
              consents to communicate with your patients or customers over
              WhatsApp, and for the accuracy of the information (services,
              availability, pricing, etc.) you provide to configure the
              Service.
            </p>

            <h2>4. Availability</h2>
            <p>
              We aim to keep NeoAgent reliable and available, but the
              Service depends in part on third-party infrastructure
              (including WhatsApp&rsquo;s platform) that is outside our
              control. We do not guarantee uninterrupted or error-free
              operation of the Service.
            </p>

            <h2>5. Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, NeoAgent and its team
              shall not be liable for any indirect, incidental, special,
              consequential, or punitive damages, or any loss of revenue,
              profits, appointments, or data, arising out of or related to
              your use of, or inability to use, the Service — even if we
              have been advised of the possibility of such damages.
            </p>
            <p>
              The Service is provided &ldquo;as is&rdquo; and &ldquo;as
              available&rdquo;, without warranties of any kind, whether
              express or implied. NeoAgent is a communication and
              automation tool and does not replace professional medical,
              legal, or clinical judgment.
            </p>

            <h2>6. Intellectual property</h2>
            <p>
              All rights, title, and interest in and to the Service —
              including its software, design, and branding — remain the
              property of NeoAgent. Nothing in these Terms grants you
              ownership of any part of the Service.
            </p>

            <h2>7. Termination</h2>
            <p>
              You may stop using the Service at any time. We may suspend or
              terminate access to the Service if these Terms are violated,
              or if continued use poses a risk to us, our systems, or other
              users.
            </p>

            <h2>8. Changes to these Terms</h2>
            <p>
              We may update these Terms from time to time. Continued use of
              the Service after changes are posted constitutes acceptance of
              the updated Terms.
            </p>

            <h2>9. Contact us</h2>
            <p>
              Questions about these Terms can be sent to{" "}
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
