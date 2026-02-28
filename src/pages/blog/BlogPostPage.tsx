import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { getBlogPostBySlug } from "@/lib/blog-posts";
import { getHapyjoImage } from "@/lib/hapyjo-images";
import { OptimizedImage } from "@/components/OptimizedImage";
import { ContactCTA } from "@/components/ContactCTA";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

/** Blog detail page: /blog/:slug */
const BlogPostPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPostBySlug(slug) : undefined;

  if (!post) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <main className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h1 className="font-serif text-2xl font-bold text-foreground">Post not found</h1>
          <Button asChild className="mt-6" variant="outline">
            <Link to="/#blog">Back to Blog</Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const heroSrc = getHapyjoImage(post.heroImageIndex);
  const supportSrcs = post.supportingImageIndices.map(getHapyjoImage);

  const [intro, fleetPara, listLabel, ...listItems] = post.content;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pb-24">
        <article className="mx-auto max-w-4xl px-6 pt-8">
          <Button asChild variant="ghost" size="sm" className="mb-8 -ml-2 text-muted-foreground hover:text-foreground">
            <Link to="/#blog" className="flex items-center gap-2">
              <ArrowLeft size={18} /> Back to Blog
            </Link>
          </Button>

          <h1 className="font-serif text-3xl font-bold text-foreground sm:text-4xl">
            {post.title}
          </h1>

          {heroSrc && (
            <div className="mt-8 overflow-hidden rounded-lg">
              <OptimizedImage
                src={heroSrc}
                alt=""
                aspectRatio="16/10"
                rounded="rounded-lg"
                priority
              />
            </div>
          )}

          <div className="mt-10 prose prose-neutral max-w-none">
            {intro && <p className="text-lg leading-relaxed text-muted-foreground">{intro}</p>}
            {fleetPara && <p className="mt-6 text-lg leading-relaxed text-muted-foreground">{fleetPara}</p>}
            {listLabel && <p className="mt-6 font-semibold text-foreground">{listLabel}</p>}
            {listItems.length > 0 && (
              <ul className="mt-3 list-disc list-inside space-y-2 text-muted-foreground">
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
                  <div key={i} className="overflow-hidden rounded-lg">
                    <OptimizedImage
                      src={src}
                      alt=""
                      aspectRatio="4/3"
                      rounded="rounded-lg"
                    />
                  </div>
                ) : null
              )}
            </div>
          )}

          <ContactCTA />
        </article>
      </main>
      <Footer />
    </div>
  );
};

export default BlogPostPage;
