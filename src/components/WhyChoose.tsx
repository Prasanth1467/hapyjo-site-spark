import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import { Check } from "lucide-react";
import excavatorWork from "@/assets/excavator-work.jpg";

const points = [
  "Maintained Equipment Fleet",
  "Skilled Certified Operators",
  "Reliable Site Deployment",
  "On-Time Equipment Availability",
  "Scalable Workforce Support",
  "Project-Specific Logistics",
  "Safety-Compliant Operations",
];

const WhyChoose = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} bg-primary py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Our Advantage
            </p>
            <h2 className="font-serif text-3xl font-bold text-primary-foreground sm:text-4xl md:text-5xl">
              Why Choose Hapyjo
            </h2>
            <div className="mt-5 h-px w-24 bg-accent/50" />

            <div className="mt-10 space-y-4">
              {points.map((p) => (
                <div key={p} className="flex items-center gap-4">
                  <div className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-accent/20 text-accent">
                    <Check size={16} strokeWidth={3} />
                  </div>
                  <span className="text-base text-primary-foreground/85">{p}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden rounded-lg">
            <img
              src={excavatorWork}
              alt="Excavator working on construction site"
              className="h-auto w-full object-cover rounded-lg"
              loading="lazy"
            />
            <div className="absolute inset-0 rounded-lg ring-1 ring-inset ring-primary-foreground/5" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
