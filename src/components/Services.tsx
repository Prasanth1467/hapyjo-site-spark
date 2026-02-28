import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import {
  HardHat,
  Truck,
  Wrench,
  Bus,
  Settings,
  Package,
} from "lucide-react";

const services = [
  {
    icon: HardHat,
    title: "Construction Site Support",
    description:
      "Comprehensive site logistics, coordination, and operational support to keep projects on track.",
  },
  {
    icon: Truck,
    title: "Fleet Logistics Management",
    description:
      "End-to-end fleet deployment, tracking, and maintenance for maximum uptime and utilization.",
  },
  {
    icon: Wrench,
    title: "Heavy Equipment Rentals",
    description:
      "Excavators, loaders, cranes, and earthmoving machinery available on flexible rental terms.",
  },
  {
    icon: Bus,
    title: "On-Site Workforce Transport",
    description:
      "Safe, reliable transport solutions for crews and personnel to and from project sites.",
  },
  {
    icon: Settings,
    title: "Project-Based Machinery Deployment",
    description:
      "Tailored equipment packages deployed specifically for your project scope and timeline.",
  },
  {
    icon: Package,
    title: "Material Handling Equipment Supply",
    description:
      "Forklifts, handlers, and material-moving equipment for warehousing and construction needs.",
  },
];

const Services = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="services"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            What We Do
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Core Services
          </h2>
          <div className="mx-auto mt-5 gold-divider w-24" />
        </div>

        <div className={`mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {services.map((s) => (
            <div
              key={s.title}
              className="card-glow group rounded-lg border border-border bg-card p-8"
            >
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-md bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <s.icon size={24} />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
