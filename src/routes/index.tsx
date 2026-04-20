import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Award, Leaf, ShieldCheck, CheckCircle2, ArrowRight, Sprout, UserCheck, HeartHandshake } from "lucide-react";
import { useI18n } from "@/lib/i18n";
import { localizedIntro, localizedTitle } from "@/lib/localizeContentPage";
import { services, treatments } from "@/data/services";
import { blogs } from "@/data/blogs";
import CTASection from "@/components/site/CTASection";
import lobby from "@/assets/lobby.jpg";
import aboutClinic from "@/assets/about-clinic.jpg";
import panchakarmaImg from "@/assets/panchakarma.jpg";
import holisticImg from "@/assets/holistic.jpg";
import organicImg from "@/assets/treatment-17.jpg";
import whyChooseImg from "@/assets/why-choose.jpg";
import treatment16 from "@/assets/treatment-16.jpg";

const serviceImages: Record<string, string> = {
  "ayurvedic-panchakarma-treatment-in-mumbai": panchakarmaImg,
  "ayurvedic-holistic-treatment-in-mumbai": holisticImg,
  "ayurvedic-organic-medicine-in-mumbai": organicImg,
};

const whyIcons = [Award, Sprout, UserCheck, Leaf, HeartHandshake, ShieldCheck];

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Dr. Joshi's Holistic Clinic — Best Ayurvedic Treatment in Mumbai" },
      { name: "description", content: "Authentic Ayurvedic treatment in Mumbai for kidney, cancer, diabetes, infertility, arthritis and more. Personalised, natural, root-cause healing since 2004." },
      { property: "og:title", content: "Dr. Joshi's Holistic Clinic — Best Ayurvedic Treatment in Mumbai" },
      { property: "og:description", content: "Authentic Ayurvedic treatment in Mumbai for chronic and complex conditions. Personalised care, natural medicines, lasting results." },
    ],
  }),
  component: HomePage,
});

function HomePage() {
  const { t } = useTranslation();
  const { lang } = useI18n();
  const trustLines = [t("hero.trust1"), t("hero.trust2"), t("hero.trust3")];
  const trustIcons = [Award, ShieldCheck, Leaf];
  const stats = [
    { n: t("stats.s1n"), l: t("stats.s1l"), s: t("stats.s1s") },
    { n: t("stats.s2n"), l: t("stats.s2l"), s: t("stats.s2s") },
    { n: t("stats.s3n"), l: t("stats.s3l"), s: t("stats.s3s") },
    { n: t("stats.s4n"), l: t("stats.s4l"), s: t("stats.s4s") },
  ];
  const aboutPoints = t("home.aboutPoints", { returnObjects: true }) as string[];
  const whyItems = t("home.whyItems", { returnObjects: true }) as { t: string; d: string }[];

  return (
    <>
      <section
        className="relative isolate overflow-hidden bg-cover bg-center bg-no-repeat text-primary-foreground"
        style={{ backgroundImage: `url(${lobby})` }}
      >
        <div className="pointer-events-none absolute inset-0 bg-black/50" aria-hidden />
        <div className="container relative z-10 grid lg:grid-cols-[1.2fr_1fr] gap-12 py-20 lg:py-28 items-center">
          <div className="space-y-7 reveal">
            <span className="inline-flex items-center gap-2 rounded-full bg-secondary/20 border border-secondary/40 px-4 py-1.5 text-xs font-medium tracking-wide text-secondary">
              <Leaf className="h-3.5 w-3.5" /> {t("hero.tag")}
            </span>
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl leading-[1.05] text-balance">
              {t("hero.title1")} <span className="text-secondary italic">{t("hero.title2")}</span> {t("hero.title3")}
            </h1>
            <p className="text-lg text-primary-foreground/85 max-w-xl">{t("hero.desc")}</p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact">
                <Button variant="gold" size="xl">{t("cta.book")}</Button>
              </Link>
              <Link to="/treatments">
                <Button variant="outlineLight" size="xl">{t("cta.explore")}</Button>
              </Link>
            </div>
            <div className="flex flex-wrap gap-6 pt-6 text-sm">
              {trustLines.map((line, i) => {
                const Icon = trustIcons[i] ?? Award;
                return (
                  <div key={line} className="flex items-center gap-2 text-primary-foreground/90">
                    <Icon className="h-4 w-4 text-secondary" /> {line}
                  </div>
                );
              })}
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert(t("hero.formSuccess"));
            }}
            className="bg-background text-foreground rounded-2xl shadow-elegant p-7 space-y-4 reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            <div>
              <h3 className="font-display text-3xl text-primary">{t("hero.form.title")}</h3>
              <p className="text-sm text-muted-foreground mt-1">{t("hero.form.sub")}</p>
            </div>
            <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("hero.form.name")} required />
            <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("hero.form.phone")} type="tel" required />
            <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("hero.form.email")} type="email" />
            <select required className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm text-muted-foreground">
              <option value="">{t("hero.form.treatment")}</option>
              {treatments.map((tr) => (
                <option key={tr.slug} value={tr.slug}>{localizedTitle(tr, lang, t)}</option>
              ))}
            </select>
            <Button type="submit" variant="hero" size="lg" className="w-full">{t("hero.form.submit")}</Button>
            <p className="text-[11px] text-center text-muted-foreground">{t("hero.form.disclaimer")}</p>
          </form>
        </div>
      </section>

      <section className="py-14 bg-primary text-primary-foreground relative overflow-hidden">
        <div className="container relative grid grid-cols-2 lg:grid-cols-4 gap-8 reveal-stagger">
          {stats.map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-5xl md:text-6xl text-secondary">{s.n}</div>
              <div className="mt-2 text-base font-semibold">{s.l}</div>
              <div className="text-xs text-primary-foreground/70 mt-1">{s.s}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-3">{t("home.servicesKicker")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">{t("home.servicesTitle")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.servicesDesc")}</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {services.map((s) => (
              <article key={s.slug} className="rounded-2xl border bg-card overflow-hidden shadow-card-soft hover-lift group">
                <div className="aspect-[16/10] overflow-hidden img-zoom">
                  <img
                    src={serviceImages[s.slug]}
                    alt={localizedTitle(s, lang, t)}
                    loading="lazy"
                    className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-7">
                  <div className="h-12 w-12 rounded-xl bg-gold-gradient grid place-items-center mb-5">
                    <Leaf className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="font-display text-2xl text-primary leading-snug">{localizedTitle(s, lang, t)}</h3>
                  <p className="mt-3 text-sm text-muted-foreground line-clamp-3">{localizedIntro(s, lang, t)}</p>
                  <Link to="/services/$slug" params={{ slug: s.slug }} className="inline-flex items-center gap-1 mt-5 text-sm font-semibold text-secondary hover:gap-2 transition-all">
                    {t("cta.learn")} <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-leaf-gradient">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="relative reveal">
            <img
              src={aboutClinic}
              alt={t("home.clinicAlt")}
              loading="lazy"
              className="rounded-2xl shadow-elegant w-full aspect-[4/5] object-cover"
            />
            <div className="absolute -bottom-6 -right-6 hidden md:block bg-gold-gradient text-secondary-foreground rounded-2xl p-6 shadow-elegant max-w-[220px]">
              <div className="font-display text-5xl leading-none">20+</div>
              <div className="text-sm mt-1 font-medium">{t("home.aboutBadge")}</div>
            </div>
          </div>
          <div className="space-y-6 reveal" style={{ transitionDelay: '0.2s' }}>
            <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold">{t("home.aboutKicker")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight text-balance">
              {t("home.aboutTitlePrefix")}{" "}
              <span className="italic">{t("home.aboutTitleAccent")}</span>
            </h2>
            <p className="text-muted-foreground leading-relaxed">{t("home.aboutLead")}</p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {aboutPoints.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" /> {line}
                </li>
              ))}
            </ul>
            <div className="flex flex-wrap gap-4 pt-3">
              <Link to="/about">
                <Button variant="hero" size="lg">{t("cta.readMore")}</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg">{t("cta.contactUs")}</Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-3">{t("home.treatmentsKicker")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">{t("home.treatmentsTitle")}</h2>
            <p className="mt-4 text-muted-foreground">{t("home.treatmentsDesc")}</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {treatments.map((s) => (
              <Link key={s.slug} to="/treatments/$slug" params={{ slug: s.slug }}
                className="rounded-2xl border bg-card p-6 shadow-card-soft hover-lift transition group">
                <h3 className="font-display text-xl text-primary leading-snug">{localizedTitle(s, lang, t)}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{localizedIntro(s, lang, t)}</p>
                <span className="inline-flex items-center gap-1 mt-4 text-sm font-semibold text-secondary group-hover:gap-2 transition-all">
                  {t("cta.learn")} <ArrowRight className="h-4 w-4" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-20 lg:py-28 bg-leaf-gradient overflow-hidden">
        <img src={whyChooseImg} alt="" aria-hidden="true" className="absolute inset-0 h-full w-full object-cover opacity-15 pointer-events-none" loading="lazy" />
        <div className="container relative">
          <div className="text-center mb-14 max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-3">{t("home.whyKicker")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">{t("home.whyTitle")}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-stagger">
            {whyItems.map((item, i) => {
              const Icon = whyIcons[i] ?? Award;
              return (
                <div key={item.t} className="rounded-2xl bg-card border p-6 shadow-card-soft hover-lift">
                  <div className="h-12 w-12 rounded-xl bg-primary text-primary-foreground grid place-items-center mb-4">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h3 className="font-semibold text-lg text-primary">{item.t}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{item.d}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="container">
          <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
            <div>
              <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-3">{t("home.blogKicker")}</p>
              <h2 className="font-display text-4xl md:text-5xl text-primary">{t("home.blogTitle")}</h2>
            </div>
            <Link to="/blogs">
              <Button variant="outline" size="lg">{t("cta.viewAllArticles")}</Button>
            </Link>
          </div>
          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {blogs.slice(0, 3).map((b) => (
              <Link key={b.slug} to="/blogs/$slug" params={{ slug: b.slug }}
                className="rounded-2xl border bg-card overflow-hidden shadow-card-soft hover-lift transition group">
                <div className="aspect-[16/10] overflow-hidden img-zoom">
                  <img src={b.image} alt={b.title} loading="lazy" className="h-full w-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-6">
                  <span className="text-xs text-secondary font-semibold uppercase tracking-wider">{b.category}</span>
                  <h3 className="font-display text-xl text-primary mt-2 leading-snug">{b.title}</h3>
                  <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{b.excerpt}</p>
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
