import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import workforceSite from "@/assets/workforce-site.jpg";

const Trust = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={workforceSite}
              alt="Professional workforce team on construction site"
              className="h-auto w-full object-cover rounded-lg"
              loading="lazy"
            />
          </div>
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Client Trust
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Trusted by Industry Leaders
            </h2>
            <div className="mt-5 gold-divider w-24" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground">
              Hapyjo is trusted by contractors and developers who require reliable fleet
              and operational support for demanding site environments.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              Our commitment to safety, on-time delivery, and professional standards has
              made us the partner of choice for infrastructure and construction projects
              across the region.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
