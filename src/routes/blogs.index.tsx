import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import { blogs } from "@/data/blogs";
import { Calendar, Clock } from "lucide-react";

export const Route = createFileRoute("/blogs/")({
  head: () => ({
    meta: [
      { title: "Ayurvedic Health Blog — Tips, Insights & Guides | Dr. Joshi's Clinic" },
      { name: "description", content: "Practical Ayurvedic health articles on Panchakarma, kidney care, diabetes, stress, sleep, fertility and more from Dr. Joshi's Clinic, Mumbai." },
      { property: "og:title", content: "Ayurvedic Health Blog" },
      { property: "og:description", content: "Practical Ayurvedic health articles for everyday wellness." },
    ],
  }),
  component: BlogList,
});

function BlogList() {
  const { t, i18n } = useTranslation();
  const p1 = t("blogs.heroPart1");
  const ac = t("blogs.heroAccent");
  const p2 = t("blogs.heroPart2");
  const dateLocale = i18n.language.startsWith("mr") ? "mr-IN" : i18n.language.startsWith("hi") ? "hi-IN" : "en-IN";

  return (
    <>
      <PageHero
        kicker={t("pageHero.kickerBlogs")}
        title={
          <>
            {p1 ? `${p1} ` : ""}
            <span className="italic text-secondary">{ac}</span>
            {p2 ? ` ${p2}` : ""}
          </>
        }
        subtitle={t("blogs.listHeroSub")}
      />
      <section className="py-16">
        <div className="container grid md:grid-cols-2 lg:grid-cols-3 gap-7">
          {blogs.map((b) => (
            <Link
              key={b.slug}
              to="/blogs/$slug"
              params={{ slug: b.slug }}
              className="group rounded-2xl border bg-card overflow-hidden shadow-card-soft hover:shadow-elegant hover:-translate-y-0.5 transition"
            >
              <div className="aspect-[16/10] overflow-hidden img-zoom">
                <img 
                  src={b.image} 
                  alt={b.title} 
                  loading="lazy" 
                  className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" 
                />
              </div>
              <div className="p-6">
                <span className="text-xs text-secondary font-semibold uppercase tracking-wider">{b.category}</span>
                <h3 className="font-display text-xl text-primary mt-2 leading-snug">{b.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{b.excerpt}</p>
                <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Calendar className="h-3 w-3" /> {new Date(b.date).toLocaleDateString(dateLocale, { year: "numeric", month: "short", day: "numeric" })}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-3 w-3" /> {b.readTime}
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
      <CTASection />
    </>
  );
}
