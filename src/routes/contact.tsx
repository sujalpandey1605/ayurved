import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import PageHero from "@/components/site/PageHero";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import clinicInterior from "@/assets/hero-lobby.jpg";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact Dr. Joshi's Clinic — Book an Ayurvedic Consultation in Mumbai" },
      { name: "description", content: "Get in touch with Dr. Joshi's Holistic Clinic in Mumbai. Book a consultation, send an enquiry or visit our clinic at Dadar West." },
      { property: "og:title", content: "Contact Dr. Joshi's Clinic" },
      { property: "og:description", content: "Reach out to book an Ayurvedic consultation in Mumbai." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const { t } = useTranslation();
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero
        kicker={t("pageHero.kickerContact")}
        title={
          <>
            {t("contact.heroPart1")}{" "}
            <span className="italic text-secondary">{t("contact.heroPart2")}</span>
          </>
        }
        subtitle={t("contact.heroSub")}
      />
      <section className="py-16">
        <div className="container grid lg:grid-cols-[1.1fr_1fr] gap-12">
          <div className="space-y-8 reveal">
            <div className="rounded-2xl overflow-hidden shadow-card-soft border">
              <img src={clinicInterior} alt={t("contact.imgAlt")} loading="lazy" className="w-full aspect-[16/9] object-cover transition-transform duration-700 hover:scale-105" />
            </div>
            <div className="rounded-2xl border bg-card p-7 shadow-card-soft">
              <h2 className="font-display text-3xl text-primary mb-5">{t("contact.getInTouch")}</h2>
              <ul className="space-y-5 text-sm">
                <li className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gold-gradient grid place-items-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t("contact.callUs")}</p>
                    <a href="tel:+919075390753" className="text-muted-foreground hover:text-primary">+91 90753 90753</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gold-gradient grid place-items-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t("contact.email")}</p>
                    <a href="mailto:contact@drjoshis.in" className="text-muted-foreground hover:text-primary">contact@drjoshis.in</a>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gold-gradient grid place-items-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t("contact.address")}</p>
                    <p className="text-muted-foreground">{t("contact.addressLine")}</p>
                  </div>
                </li>
                <li className="flex gap-4">
                  <div className="h-11 w-11 rounded-xl bg-gold-gradient grid place-items-center shrink-0">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-primary">{t("contact.hours")}</p>
                    <p className="text-muted-foreground">{t("contact.hoursLine")}</p>
                  </div>
                </li>
              </ul>
              <a href="tel:+919075390753" className="block mt-6">
                <Button variant="hero" size="lg" className="w-full">
                  <Phone className="h-4 w-4" /> {t("cta.call")}
                </Button>
              </a>
            </div>
          </div>

          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="rounded-2xl border bg-card p-7 shadow-card-soft space-y-4 reveal"
            style={{ transitionDelay: '0.2s' }}
          >
            <h2 className="font-display text-3xl text-primary">{t("contact.sendTitle")}</h2>
            <p className="text-sm text-muted-foreground">{t("contact.sendSub")}</p>
            <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("contact.phName")} required />
            <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("contact.phPhone")} type="tel" required />
            <input className="flex h-11 w-full rounded-md border border-input bg-background px-3 text-sm" placeholder={t("contact.phEmail")} type="email" />
            <textarea className="flex min-h-[120px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm" placeholder={t("contact.phMessage")} required />
            <Button type="submit" variant="hero" size="lg" className="w-full">{t("cta.sendMessage")}</Button>
            {sent && <p className="text-sm text-secondary text-center font-medium">{t("contact.thankYou")}</p>}
          </form>
        </div>
      </section>
    </>
  );
}
