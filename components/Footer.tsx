import Link from "next/link";

const legalLinks = [
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/data-deletion", label: "Data Deletion" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line bg-mist">
      <div className="container-content py-12">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="max-w-sm">
            <Link href="/" className="flex items-center gap-2 text-[15px] font-semibold tracking-tight text-ink">
              <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-ink text-paper text-[13px] font-bold">
                N
              </span>
              NeoAgent
            </Link>
            <p className="mt-3 text-[14px] leading-relaxed text-ink-soft">
              AI receptionist and WhatsApp automation built for clinics —
              answering patients, booking appointments, and following up,
              24/7.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-x-12 gap-y-8 sm:flex sm:gap-16">
            <div>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
                Legal
              </p>
              <ul className="mt-3 space-y-2.5">
                {legalLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <p className="text-[13px] font-semibold uppercase tracking-wide text-ink-soft">
                Get in touch
              </p>
              <ul className="mt-3 space-y-2.5">
                <li>
                  <a
                    href="mailto:neoagent.call@gmail.com"
                    className="text-[14px] text-ink-soft transition-colors hover:text-ink"
                  >
                    neoagent.call@gmail.com
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col-reverse items-center justify-between gap-4 border-t border-line pt-6 sm:flex-row">
          <p className="text-[13px] text-ink-soft">
            © {year} NeoAgent. All rights reserved.
          </p>
          <p className="text-[13px] text-ink-soft">
            Made for clinics that never want to miss a patient.
          </p>
        </div>
      </div>
    </footer>
  );
}
