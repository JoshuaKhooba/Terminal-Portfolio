interface SectionHeadingProps {
  badge: string;
  title: string;
  subtitle?: string;
}

export function SectionHeading({ badge, title, subtitle }: SectionHeadingProps) {
  return (
    <div className="mb-16 text-center">
      <span className="inline-block rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary mb-4">
        {badge}
      </span>
      <h2 className="text-3xl font-bold md:text-4xl lg:text-5xl mb-4">{title}</h2>
      {subtitle && <p className="mx-auto max-w-2xl text-muted-foreground text-lg">{subtitle}</p>}
    </div>
  );
}
