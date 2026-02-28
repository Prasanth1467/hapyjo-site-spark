import { useState, useEffect, useRef } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  /** Aspect ratio e.g. "16/9" to prevent layout shift */
  aspectRatio?: string;
  /** Optional: priority (no lazy, eager load) */
  priority?: boolean;
  /** Rounded corners class */
  rounded?: string;
  /** Object fit */
  objectFit?: "cover" | "contain";
}

/**
 * Lazy-loading image with fade-in, no layout shift, and premium construction-industry styling.
 * Uses intersection observer for reveal and CSS for subtle enhancement (contrast, clarity).
 */
export function OptimizedImage({
  src,
  alt,
  className = "",
  aspectRatio = "16/9",
  priority = false,
  rounded = "rounded-lg",
  objectFit = "cover",
}: OptimizedImageProps) {
  const [loaded, setLoaded] = useState(false);
  const [inView, setInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (priority) return;
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "100px", threshold: 0.01 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [priority]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${rounded} bg-muted/30 ${className}`}
      style={{ aspectRatio }}
    >
      {/* Blur placeholder until image loads */}
      {!loaded && inView && (
        <div
          className="absolute inset-0 animate-pulse bg-muted/50"
          style={{ aspectRatio }}
          aria-hidden
        />
      )}
      {inView && (
        <img
          ref={imgRef}
          src={src}
          alt={alt}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className={`h-full w-full transition-opacity duration-700 ease-out image-premium ${
            objectFit === "contain" ? "object-contain" : "object-cover"
          } ${loaded ? "opacity-100" : "opacity-0"} relative z-10`}
          onLoad={() => setLoaded(true)}
        />
      )}
    </div>
  );
}
