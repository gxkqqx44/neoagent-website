import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = {
  title: "Data Deletion",
  description:
    "How to request deletion of your data collected through NeoAgent's AI receptionist and WhatsApp automation service.",
  alternates: { canonical: "/data-deletion" },
};

export default function DataDeletionPage() {
  return (
    <>
      <PageHero
        eyebrow="Legal"
        title="Data Deletion"
        description="You are in control of your data. Here's how to request it be removed."
      />

      <section className="py-16 sm:py-20">
        <div className="container-content max-w-3xl">
          <div className="prose prose-neutral max-w-none prose-headings:font-semibold prose-headings:tracking-tight prose-h2:text-[22px] prose-h2:mt-12 prose-p:text-[15.5px] prose-p:leading-relaxed prose-p:text-ink-soft prose-li:text-[15.5px] prose-li:text-ink-soft prose-a:text-teal-700">
            <p>
              If you would like your data deleted from NeoAgent&rsquo;s
              systems — including WhatsApp message history, appointment
              records, or account configuration data — you can request
              deletion at any time.
            </p>

            <h2>How to request deletion</h2>
            <p>
              Send an email to{" "}
              <a href="mailto:neoagent.call@gmail.com?subject=Data%20Deletion%20Request">
                neoagent.call@gmail.com
              </a>{" "}
              with the subject line &ldquo;Data Deletion Request&rdquo;.
              Please include:
            </p>
            <ul>
              <li>
                The WhatsApp phone number or clinic/business account
                associated with your data
              </li>
              <li>Your name (or your clinic/business name)</li>
              <li>
                Any specific data you&rsquo;d like removed, if you don&rsquo;t
                want a full deletion
              </li>
            </ul>

            <h2>What happens next</h2>
            <p>
              Once we receive your request, we will verify it and delete the
              associated data from our active systems within{" "}
              <strong>30 days</strong>. This includes WhatsApp message
              content, appointment history, and any personal information
              tied to your request, except where we are required to retain
              certain records to comply with legal, tax, or regulatory
              obligations.
            </p>

            <h2>What this means for you</h2>
            <p>
              After deletion, NeoAgent will no longer have access to the
              removed data, and it will not be used for any further
              communication, booking, or automation. If you continue
              messaging a clinic&rsquo;s WhatsApp number afterward, new data
              may be created as part of that new conversation.
            </p>

            <h2>Questions</h2>
            <p>
              If you have any questions about this process or want to check
              the status of a deletion request, email us at{" "}
              <a href="mailto:neoagent.call@gmail.com">
                neoagent.call@gmail.com
              </a>{" "}
              — we&rsquo;re happy to help.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
