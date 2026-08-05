export default function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <section className="border-b border-line bg-mist py-16 sm:py-20">
      <div className="container-content">
        <span className="text-[13px] font-semibold uppercase tracking-wide text-teal-700">
          {eyebrow}
        </span>
        <h1 className="mt-3 text-balance text-[34px] font-semibold tracking-tight text-ink sm:text-[44px]">
          {title}
        </h1>
        {description && (
          <p className="mt-4 max-w-2xl text-[16px] leading-relaxed text-ink-soft">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
