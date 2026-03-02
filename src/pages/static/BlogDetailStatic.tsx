import { Layout } from "@/components/Layout";
import { getBlogPostBySlug } from "@/lib/blog-posts";
import { getHapyjoImage } from "@/lib/hapyjo-images";
import { BLOG_STATIC_PAGES, type StaticPageId } from "@/lib/static-routes";
import { ContactCTA } from "@/components/ContactCTA";

const PAGE_ID_TO_SLUG: Record<string, string> = {};
BLOG_STATIC_PAGES.forEach(({ slug, file }) => {
  const id = file.replace(".html", "");
  PAGE_ID_TO_SLUG[id] = slug;
});

const BLOG_DATE = "February 28, 2026";

export default function BlogDetailStatic({ pageId }: { pageId: StaticPageId }) {
  const slug = PAGE_ID_TO_SLUG[pageId];
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <Layout>
        <section className="section-classic">
          <div className="mx-auto max-w-[1200px] px-6 text-center">
            <h1 className="font-serif text-2xl font-bold text-[#2C2C2C]">Post not found</h1>
            <a href="/blog" className="mt-6 inline-block bg-[#0A1F44] text-[#F8F5F0] px-6 py-3 text-sm font-semibold uppercase">
              Back to Blog
            </a>
          </div>
        </section>
      </Layout>
    );
  }

  const heroSrc = getHapyjoImage(post.heroImageIndex);
  const supportSrcs = post.supportingImageIndices.map(getHapyjoImage);
  const listLabelIndex = post.content.findIndex((s) => s.trim().endsWith(":") && s.length < 50);
  const paragraphs =
    listLabelIndex >= 0 ? post.content.slice(0, listLabelIndex) : post.content;
  const listLabel = listLabelIndex >= 0 ? post.content[listLabelIndex] : null;
  const listItems =
    listLabelIndex >= 0 ? post.content.slice(listLabelIndex + 1) : [];

  return (
    <Layout>
      <article className="section-classic">
        <div className="mx-auto max-w-[1200px] px-6">
          <a href="/blog" className="inline-block text-sm text-[#2C2C2C]/70 mb-8">
            ← Back to Blog
          </a>

          <h1 className="font-serif text-3xl font-bold text-[#2C2C2C] sm:text-4xl" style={{ letterSpacing: "0.05em" }}>
            {post.title}
          </h1>
          <p className="mt-2 text-sm text-[#2C2C2C]/60">{BLOG_DATE}</p>

          {heroSrc && (
            <div className="blog-image-container mt-8">
              <img
                src={heroSrc}
                alt=""
                loading="eager"
                className="image-premium"
              />
            </div>
          )}

          <div className="mt-10 prose prose-neutral max-w-none" style={{ lineHeight: 1.7 }}>
            {paragraphs.map((para, i) => (
              <p key={i} className={i === 0 ? "text-[#2C2C2C]/90" : "mt-6 text-[#2C2C2C]/90"}>
                {para}
              </p>
            ))}
            {listLabel && <p className="mt-6 font-semibold text-[#2C2C2C]">{listLabel}</p>}
            {listItems.length > 0 && (
              <ul className="mt-3 list-disc list-inside space-y-2 text-[#2C2C2C]/80">
                {listItems.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            )}
          </div>

          {supportSrcs.filter(Boolean).length > 0 && (
            <div className="mt-12 grid gap-4 sm:grid-cols-3">
              {supportSrcs.map((src, i) =>
                src ? (
                  <div key={i} className="responsive-image-container">
                    <img
                      src={src}
                      alt=""
                      loading="lazy"
                      className="image-premium"
                    />
                  </div>
                ) : null
              )}
            </div>
          )}

          <ContactCTA />
        </div>
      </article>
    </Layout>
  );
}
