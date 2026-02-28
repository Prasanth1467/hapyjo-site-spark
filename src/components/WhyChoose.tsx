import { useFadeInOnScroll } from "@/hooks/use-fade-in";

const badges = [
  { title: "Safety Compliance", description: "Operations meet safety and compliance standards." },
  { title: "Maintained Fleet", description: "Regular maintenance and inspection for reliability." },
  { title: "Skilled Operators", description: "Certified operators for equipment and site work." },
  { title: "Reliable Site Delivery", description: "On-time deployment and site logistics support." },
  { title: "Scalable Workforce", description: "Workforce and equipment scale to project needs." },
];

const WhyChoose = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-[hsl(var(--navy))] py-16 sm:py-20 lg:py-24 ${isVisible ? "opacity-100" : ""}`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-equipment-yellow">
            Our Advantage
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-white sm:text-3xl lg:text-4xl">
            Why Choose HapyJo
          </h2>
          <div className="mx-auto mt-4 h-px w-16 bg-white/30" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-5">
          {badges.map((b) => (
            <div
              key={b.title}
              className="rounded-xl border-l-4 border-equipment-yellow bg-white/5 py-4 pl-4 pr-4 transition-[background-color] hover:bg-white/10 sm:py-6 sm:pl-6 sm:pr-6"
            >
              <h3 className="font-heading text-base font-bold text-white sm:text-lg">
                {b.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-white/80">
                {b.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
