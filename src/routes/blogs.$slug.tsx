import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import { findBlog, blogs } from "@/data/blogs";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export const Route = createFileRoute("/blogs/$slug")({
  loader: ({ params }) => {
    const post = findBlog(params.slug);
    if (!post) throw notFound();
    return { post };
  },
  head: ({ loaderData }) => ({
    meta: [
      { title: `${loaderData?.post.title} | Dr. Joshi's Blog` },
      { name: "description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:title", content: loaderData?.post.title ?? "" },
      { property: "og:description", content: loaderData?.post.excerpt ?? "" },
      { property: "og:type", content: "article" },
    ],
  }),
  notFoundComponent: BlogNotFound,
  component: BlogDetail,
});

function BlogNotFound() {
  const { t } = useTranslation();
  return (
    <div className="container py-32 text-center">
      <h1 className="font-display text-4xl text-primary">{t("notFound.article")}</h1>
      <Link to="/blogs" className="text-secondary underline mt-4 inline-block">{t("notFound.articleBack")}</Link>
    </div>
  );
}

function BlogDetail() {
  const { post } = Route.useLoaderData();
  const { t, i18n } = useTranslation();
  const related = blogs.filter((b) => b.slug !== post.slug).slice(0, 3);
  const dateLocale = i18n.language.startsWith("mr") ? "mr-IN" : i18n.language.startsWith("hi") ? "hi-IN" : "en-IN";

  return (
    <>
      <PageHero kicker={post.category} title={post.title} subtitle={post.excerpt} />
      <article className="py-16">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-5 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" /> {new Date(post.date).toLocaleDateString(dateLocale, { year: "numeric", month: "long", day: "numeric" })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" /> {post.readTime}
            </span>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-elegant mb-10 reveal">
            <img src={post.image} alt={post.title} className="w-full aspect-[16/9] object-cover" />
          </div>
          <div className="prose prose-lg max-w-none space-y-5 text-foreground/85 leading-relaxed reveal">
            {post.content.map((para: string, i: number) => (
              <p key={i}>{para}</p>
            ))}
          </div>
          <Link to="/blogs" className="inline-flex items-center gap-2 mt-12 text-secondary font-semibold hover:gap-3 transition-all reveal">
            <ArrowLeft className="h-4 w-4" /> {t("blogs.backToArticles")}
          </Link>
        </div>
      </article>

      <section className="py-16 bg-leaf-gradient">
        <div className="container">
          <h2 className="font-display text-3xl md:text-4xl text-primary mb-8 reveal">{t("blogs.moreArticles")}</h2>
          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {related.map((b) => (
              <Link
                key={b.slug}
                to="/blogs/$slug"
                params={{ slug: b.slug }}
                className="rounded-2xl border bg-card overflow-hidden shadow-card-soft hover:shadow-elegant transition group"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-secondary font-semibold uppercase tracking-wider">{b.category}</span>
                  <h3 className="font-display text-lg text-primary mt-2 leading-snug">{b.title}</h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <CTASection />
    </>
  );
}
