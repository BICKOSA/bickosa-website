const TrustStrip = () => {
  return (
    <section className="border-b border-border bg-card">
      <div className="max-w-[1200px] mx-auto px-6 sm:px-8 lg:px-12 py-5">
        <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-[14px] text-muted-foreground">
          <span className="font-semibold text-foreground">500+</span>
          <span>alumni</span>
          <span className="text-border">·</span>
          <span className="font-semibold text-foreground">5</span>
          <span>chapters</span>
          <span className="text-border">·</span>
          <span className="font-semibold text-foreground">3</span>
          <span>active projects</span>
          <span className="text-border">·</span>
          <span className="font-semibold text-foreground">10+</span>
          <span>events/year</span>
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
