import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import aboutSite from "@/assets/about-site.jpg";

const About = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="about"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-4">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Company Overview
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Who We Are
          </h2>
          <div className="mx-auto mt-5 gold-divider w-24" />
        </div>

        <div className="mt-16 grid items-center gap-16 lg:grid-cols-2">
          <div className="relative overflow-hidden rounded-lg">
            <img
              src={aboutSite}
              alt="Professional construction site operations"
              className="h-auto w-full object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-foreground/5" />
          </div>

          <div>
            <p className="text-lg leading-relaxed text-muted-foreground">
              HapyJo Ltd is a professionally managed site support and fleet operations company
              delivering reliable construction logistics, machinery rentals, and on-site
              operational services.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              With a workforce of 120+ trained personnel and an expanding fleet of modern
              equipment, Hapyjo supports infrastructure contractors, logistics operators,
              and project developers across multiple sectors.
            </p>
            <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
              We specialize in site-ready equipment deployment, workforce logistics, and
              dependable fleet availability for uninterrupted project execution.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
