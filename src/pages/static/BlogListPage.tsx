import { Layout } from "@/components/Layout";
import { useFadeInOnScroll } from "@/hooks/use-fade-in";
import { getHapyjoImage } from "@/lib/hapyjo-images";
import { getBlogPostBySlug } from "@/lib/blog-posts";
import { BLOG_STATIC_PAGES } from "@/lib/static-routes";

export default function BlogListPage() {
  const { ref, isVisible } = useFadeInOnScroll();

  return (
    <Layout>
      <section className="section-classic bg-secondary" ref={ref as React.RefObject<HTMLElement>}>
        <div className="mx-auto max-w-[1200px] px-6">
          <header className="text-center">
            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-[#C6A961]">Insights</p>
            <h1 className="font-serif text-3xl font-bold text-[#2C2C2C] sm:text-4xl">Blog</h1>
            <div className="gold-divider mt-5 mx-auto" />
            <p className="mt-6 max-w-2xl mx-auto text-[#2C2C2C]/80" style={{ lineHeight: 1.7 }}>
              Practical guides and expertise on fleet deployment, site control, and construction logistics.
            </p>
          </header>

          <div className={`mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 stagger-children ${isVisible ? "is-visible" : ""}`}>
            {BLOG_STATIC_PAGES.map(({ slug, file }) => {
              const post = getBlogPostBySlug(slug);
              if (!post) return null;
              const previewSrc = getHapyjoImage(post.heroImageIndex);
              return (
                <a
                  key={file}
                  href={`/${file}`}
                  className="block rounded-lg border border-[#0A1F44]/10 bg-white overflow-hidden card-classic"
                >
                  {previewSrc && (
                    <div className="responsive-image-container bg-[#F8F5F0]/50">
                      <img
                        src={previewSrc}
                        alt={`${post.title} – HapyJo blog`}
                        loading="lazy"
                        className="image-premium"
                      />
                    </div>
                  )}
                  <div className="p-6">
                    <h2 className="font-serif text-lg font-semibold text-[#2C2C2C]">
                      {post.title}
                    </h2>
                    <p className="mt-2 text-sm text-[#2C2C2C]/70 line-clamp-2" style={{ lineHeight: 1.7 }}>
                      {post.shortDescription}
                    </p>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
