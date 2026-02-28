import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import {
  Building2,
  Route,
  Warehouse,
  Factory,
  Mountain,
  Store,
} from "lucide-react";

const industries = [
  { icon: Building2, title: "Infrastructure Development" },
  { icon: Route, title: "Road Construction" },
  { icon: Warehouse, title: "Warehouse & Logistics" },
  { icon: Factory, title: "Industrial Projects" },
  { icon: Mountain, title: "Mining Support" },
  { icon: Store, title: "Commercial Development" },
];

const Industries = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="industries"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Sectors
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Industries We Support
          </h2>
          <div className="mx-auto mt-5 gold-divider w-24" />
        </div>

        <div className={`mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {industries.map((ind) => (
            <div
              key={ind.title}
              className="card-glow group flex items-center gap-5 rounded-lg border border-border bg-card p-6"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-md bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <ind.icon size={22} />
              </div>
              <h3 className="font-serif text-lg font-semibold text-foreground">{ind.title}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;
