import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  return (
    <header className="relative flex min-h-[92vh] items-center justify-center overflow-hidden">
      <div className="absolute inset-0 animate-hero-image">
        <img
          src={heroBg}
          alt="Aerial view of large-scale construction site with heavy machinery and trucks"
          className="h-full w-full object-cover"
          loading="eager"
        />
      </div>
      <div className="absolute inset-0 bg-gradient-to-b from-primary/85 via-primary/75 to-primary/90" />

      <div className="relative z-10 mx-auto max-w-5xl px-6 text-center">
        <p
          className="mb-6 text-sm font-semibold uppercase tracking-[0.35em] text-accent opacity-0 animate-hero-text"
          style={{ animationDelay: "200ms" }}
        >
          HAPYJO LTD
        </p>
        <h1
          className="font-serif text-4xl font-bold leading-[1.08] text-primary-foreground opacity-0 animate-hero-text sm:text-5xl md:text-6xl lg:text-7xl"
          style={{ animationDelay: "400ms" }}
        >
          Site &amp; Fleet Control
        </h1>
        <p
          className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-primary-foreground/80 opacity-0 animate-hero-text sm:text-xl"
          style={{ animationDelay: "600ms" }}
        >
          Integrated Construction Support,<br />
          Heavy Equipment Rentals &amp;<br />
          Operational Site Services
        </p>
        <div
          className="mt-12 flex flex-col items-center gap-4 sm:flex-row sm:justify-center opacity-0 animate-hero-text"
          style={{ animationDelay: "800ms" }}
        >
          <Button
            asChild
            size="lg"
            className="bg-accent text-accent-foreground hover:bg-accent/90 px-10 py-6 text-sm font-semibold uppercase tracking-wider shadow-lg"
          >
            <a href="#services">Our Services</a>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 px-10 py-6 text-sm uppercase tracking-wider backdrop-blur-sm"
          >
            <a href="#contact">Contact Us</a>
          </Button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </header>
  );
};

export default Hero;
