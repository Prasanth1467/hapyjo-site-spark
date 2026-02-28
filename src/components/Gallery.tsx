import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import { getHapyjoImage } from "@/lib/hapyjo-images";
import { getGalleryImageIndices } from "@/lib/image-allocation";
import { OptimizedImage } from "@/components/OptimizedImage";

const Gallery = () => {
  const { ref, isVisible } = useFadeInOnScroll();
  const indices = getGalleryImageIndices();

  return (
    <section
      id="gallery"
      ref={ref as React.RefObject<HTMLElement>}
      className={`fade-in-section ${isVisible ? "is-visible" : ""} py-24 sm:py-32`}
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center">
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-accent">
            Our Fleet &amp; Projects
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl md:text-5xl">
            Gallery
          </h2>
          <div className="mx-auto mt-5 gold-divider w-24" />
          <p className="mt-6 max-w-2xl mx-auto text-muted-foreground">
            Equipment, sites, and operations across our fleet and project portfolio.
          </p>
        </div>

        <div className={`mt-16 grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 stagger-children ${isVisible ? "is-visible" : ""}`}>
          {indices.map((index, i) => {
            const src = getHapyjoImage(index);
            if (!src) return null;
            return (
              <div
                key={index}
                className="card-glow group overflow-hidden rounded-lg border border-border bg-card aspect-square"
              >
                <OptimizedImage
                  src={src}
                  alt={`Fleet and project gallery image ${i + 1}`}
                  aspectRatio="1"
                  rounded="rounded-lg"
                  className="group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
