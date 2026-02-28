import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import {
  Truck,
  Mountain,
  Cog,
  Car,
  Container,
  Anchor,
} from "lucide-react";
import fleetTrucks from "@/assets/fleet-trucks.jpg";

const equipment = [
  { icon: Truck, title: "Dump Trucks", description: "Heavy-duty hauling for earthworks, mining, and road construction projects." },
  { icon: Mountain, title: "Excavators", description: "Versatile digging and earthmoving for foundations, trenching, and demolition." },
  { icon: Cog, title: "Wheel Loaders", description: "Efficient material loading and site clearing for large-scale operations." },
  { icon: Car, title: "Site Utility Vehicles", description: "Rugged site transport for personnel, tools, and light materials." },
  { icon: Container, title: "Transit Mixers", description: "On-demand concrete mixing and delivery for construction pours." },
  { icon: Anchor, title: "Hydraulic Cranes", description: "Heavy lifting and positioning for structural and industrial applications." },
];

const Rentals = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="rentals"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} bg-secondary py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
              Equipment Rentals
            </p>
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
              Vehicle &amp; Machinery Rentals
            </h2>
            <div className="mt-5 gold-divider w-24" />
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-muted-foreground">
              Professional-grade vehicles and heavy machinery available on flexible day
              or hourly terms. Our maintained fleet is ready for construction, logistics,
              and industrial site work.
            </p>
            <div className="relative mt-8 overflow-hidden rounded-lg">
              <img
                src={fleetTrucks}
                alt="Fleet of heavy-duty trucks lined up at depot"
                className="h-auto w-full object-cover rounded-lg"
                loading="lazy"
              />
            </div>
          </div>

          <div className={`grid gap-6 sm:grid-cols-2 stagger-children ${isVisible ? "is-visible" : ""}`}>
            {equipment.map((e) => (
              <div
                key={e.title}
                className="card-glow rounded-lg border border-border bg-card p-6"
              >
                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                  <e.icon size={20} />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">{e.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Rentals;
