import { createFileRoute, Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/site/PageHero";
import CTASection from "@/components/site/CTASection";
import { Button } from "@/components/ui/button";
import { Award, CheckCircle2 } from "lucide-react";
import doctorPortrait from "@/assets/dr-joshi-portrait.jpg";
import doctorClinic from "@/assets/dr-joshi-clinic.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About Dr. Joshi's Holistic Clinic — Ayurvedic Practice in Mumbai" },
      { name: "description", content: "Meet Dr. Vyankatesh Joshi and learn how our Mumbai clinic has been delivering authentic Ayurvedic care for over two decades." },
      { property: "og:title", content: "About Dr. Joshi's Holistic Clinic" },
      { property: "og:description", content: "20+ years of authentic Ayurvedic practice in Mumbai. Personalised, root-cause care for chronic and complex conditions." },
    ],
  }),
  component: AboutPage,
});

function AboutPage() {
  const { t } = useTranslation();
  const storyPoints = t("about.storyPoints", { returnObjects: true }) as string[];
  const values = t("about.values", { returnObjects: true }) as { t: string; d: string }[];

  return (
    <>
      <PageHero
        kicker={t("pageHero.kickerAbout")}
        title={
          <>
            {t("about.heroTitlePrefix")}{" "}
            <span className="italic text-secondary">{t("about.heroTitleAccent")}</span>
          </>
        }
        subtitle={t("about.heroSub")}
      />

      <section className="py-20">
        <div className="container grid lg:grid-cols-2 gap-14 items-center">
          <div className="rounded-2xl shadow-elegant aspect-[4/5] overflow-hidden reveal">
            <img src={doctorClinic} alt={t("about.imgClinicAlt")} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 hover:scale-105" />
          </div>
          <div className="space-y-5 reveal" style={{ transitionDelay: '0.2s' }}>
            <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold">{t("about.storyKicker")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary leading-tight text-balance">{t("about.storyTitle")}</h2>
            <p className="text-muted-foreground leading-relaxed">{t("about.storyP1")}</p>
            <p className="text-muted-foreground leading-relaxed">{t("about.storyP2")}</p>
            <ul className="grid sm:grid-cols-2 gap-3 pt-2">
              {storyPoints.map((line) => (
                <li key={line} className="flex items-start gap-2 text-sm font-medium">
                  <CheckCircle2 className="h-5 w-5 text-secondary shrink-0 mt-0.5" /> {line}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="py-20 bg-leaf-gradient">
        <div className="container">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-3">{t("about.founderKicker")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">{t("about.founderTitle")}</h2>
          </div>
          <div className="max-w-3xl mx-auto rounded-2xl bg-card border shadow-card-soft p-8 md:p-12 text-center reveal">
            <div className="h-32 w-32 rounded-full overflow-hidden mx-auto mb-5 ring-4 ring-secondary/30 shadow-elegant">
              <img src={doctorPortrait} alt={t("about.imgDoctorAlt")} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div className="h-12 w-12 rounded-full bg-gold-gradient grid place-items-center mx-auto -mt-10 relative z-10 mb-3 ring-4 ring-card">
              <Award className="h-5 w-5 text-primary" />
            </div>
            <h3 className="font-display text-3xl text-primary">{t("about.founderTitle")}</h3>
            <p className="text-sm text-muted-foreground mt-1">{t("about.founderRole")}</p>
            <p className="mt-5 text-muted-foreground leading-relaxed">{t("about.founderBio")}</p>
          </div>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="text-center mb-12 max-w-2xl mx-auto">
            <p className="uppercase tracking-[0.3em] text-xs text-secondary font-semibold mb-3">{t("about.valuesKicker")}</p>
            <h2 className="font-display text-4xl md:text-5xl text-primary text-balance">{t("about.valuesTitle")}</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6 reveal-stagger">
            {values.map((v) => (
              <div key={v.t} className="rounded-2xl bg-card border p-6 shadow-card-soft text-center hover-lift">
                <h3 className="font-display text-2xl text-primary">{v.t}</h3>
                <p className="mt-3 text-sm text-muted-foreground">{v.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link to="/contact">
              <Button variant="hero" size="lg">{t("cta.bookConsultation")}</Button>
            </Link>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  );
}
