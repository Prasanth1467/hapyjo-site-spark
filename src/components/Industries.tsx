import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import { getHapyjoImage } from "@/lib/hapyjo-images";
import { IMAGE_ALLOCATION } from "@/lib/image-allocation";

const industries = [
  { title: "Road Construction", imageIndex: IMAGE_ALLOCATION.industries[1] },
  { title: "Mining Support", imageIndex: IMAGE_ALLOCATION.industries[4] },
  { title: "Industrial Logistics", imageIndex: IMAGE_ALLOCATION.industries[2] },
  { title: "Infrastructure Development", imageIndex: IMAGE_ALLOCATION.industries[0] },
  { title: "Commercial Construction", imageIndex: IMAGE_ALLOCATION.industries[5] },
];

const Industries = () => {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <section
      id="industries"
      ref={ref as React.RefObject<HTMLElement>}
      className={`bg-background py-16 sm:py-20 lg:py-24 ${isVisible ? "opacity-100" : ""}`}
    >
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="mb-2 text-xs font-semibold uppercase tracking-[0.25em] text-equipment-yellow">
            Sectors
          </p>
          <h2 className="font-heading text-2xl font-bold tracking-tight text-foreground sm:text-3xl lg:text-4xl">
            Industry Deployment
          </h2>
          <div className="divider-industrial mx-auto mt-4" />
        </div>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-12 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-8 xl:grid-cols-5">
          {industries.map((ind) => {
            const img = getHapyjoImage(ind.imageIndex);
            return (
              <div
                key={ind.title}
                className="group flex flex-col overflow-hidden rounded-xl border border-border bg-card transition-[border-color,background-color] hover:border-stone-dark hover:bg-stone/50"
              >
                {img && (
                  <div className="aspect-[4/3] overflow-hidden">
                    <img
                      src={img}
                      alt={ind.title}
                      className="h-full w-full object-cover transition-transform duration-200 group-hover:scale-[1.02]"
                      loading="lazy"
                    />
                  </div>
                )}
                <div className="flex flex-1 flex-col justify-center border-t border-border px-4 py-4 sm:px-6 sm:py-5">
                  <h3 className="font-heading text-sm font-bold leading-snug text-foreground sm:text-base md:text-lg">
                    {ind.title}
                  </h3>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Industries;
