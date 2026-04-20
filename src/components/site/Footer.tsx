import { Link } from "@tanstack/react-router";
import { Facebook, Instagram, Youtube, Linkedin, Twitter, Phone, Mail, MapPin, Leaf } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/site/LanguageSwitcher";

export default function Footer() {
  const { t } = useTranslation();
  return (
    <footer className="bg-primary text-primary-foreground pt-16 pb-8 mt-20">
      <div className="container grid lg:grid-cols-4 md:grid-cols-2 gap-10">
        <div>
          <div className="flex items-center gap-2.5">
            <div className="h-11 w-11 rounded-full bg-gold-gradient grid place-items-center">
              <Leaf className="h-5 w-5 text-primary" />
            </div>
            <div>
              <div className="font-display text-xl font-semibold">{t("brand.name")}</div>
              <div className="text-[10px] tracking-[0.18em] uppercase opacity-70">{t("brand.tagline")}</div>
            </div>
          </div>
          <p className="mt-5 text-sm text-primary-foreground/80 max-w-xs">{t("footer.blurb")}</p>
          <div className="mt-6 flex gap-3">
            {[
              { Icon: Facebook, href: "https://www.facebook.com/drjoshiclinic" },
              { Icon: Instagram, href: "https://www.instagram.com/drjoshisclinic/" },
              { Icon: Youtube, href: "https://www.youtube.com/@dr.vyanketeshjoshi9848" },
              { Icon: Linkedin, href: "http://linkedin.com/company/dr-joshi-s-holistic-multispecialty-clinic" },
              { Icon: Twitter, href: "http://twitter.com/drjoshisclinic" },
            ].map(({ Icon, href }, i) => (
              <a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="h-9 w-9 rounded-full bg-primary-foreground/10 hover:bg-secondary hover:text-secondary-foreground grid place-items-center transition"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="font-display text-xl text-secondary mb-5">{t("footer.quickLinks")}</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/85">
            <li>
              <Link to="/" className="hover:text-secondary transition">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:text-secondary transition">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link to="/services" className="hover:text-secondary transition">
                {t("nav.services")}
              </Link>
            </li>
            <li>
              <Link to="/treatments" className="hover:text-secondary transition">
                {t("nav.treatments")}
              </Link>
            </li>
            <li>
              <Link to="/blogs" className="hover:text-secondary transition">
                {t("nav.blogs")}
              </Link>
            </li>
            <li>
              <Link to="/faq" className="hover:text-secondary transition">
                {t("nav.faq")}
              </Link>
            </li>
            <li>
              <Link to="/franchise" className="hover:text-secondary transition">
                {t("nav.franchise")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-secondary mb-5">{t("footer.branches")}</h4>
          <ul className="space-y-2.5 text-sm text-primary-foreground/85">
            <li><a href="https://www.google.com/maps/search/?api=1&query=Dr.+Joshi+Ayurvedic+Clinic+Borivali+West" target="_blank" className="hover:text-secondary transition">{t("footer.branch1")}</a></li>
            <li><a href="https://www.google.com/maps/search/?api=1&query=Dr.+Joshi+Ayurvedic+Clinic+Dadar+West" target="_blank" className="hover:text-secondary transition">{t("footer.branch2")}</a></li>
            <li><a href="https://www.google.com/maps/search/?api=1&query=Dr.+Joshi+Ayurvedic+Clinic+Thane+West" target="_blank" className="hover:text-secondary transition">{t("footer.branch3")}</a></li>
            <li><a href="https://www.google.com/maps/search/?api=1&query=Dr.+Joshi+Ayurvedic+Clinic+Pune" target="_blank" className="hover:text-secondary transition">{t("footer.branch4")}</a></li>
            <li><a href="https://www.google.com/maps/search/?api=1&query=Dr.+Joshi+Ayurvedic+Clinic+Nashik" target="_blank" className="hover:text-secondary transition">{t("footer.branch5")}</a></li>
          </ul>
        </div>

        <div>
          <h4 className="font-display text-xl text-secondary mb-5">{t("footer.contact")}</h4>
          <ul className="space-y-3 text-sm text-primary-foreground/85">
            <li className="flex gap-2">
              <Phone className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
              <a href="tel:+919075390753" className="hover:text-secondary">
                +91 90753 90753
              </a>
            </li>
            <li className="flex gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
              <a href="mailto:contact@drjoshis.in" className="hover:text-secondary">
                contact@drjoshis.in
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0 text-secondary" />
              <a href="https://www.google.com/maps/search/?api=1&query=Dr.+Joshi+Ayurvedic+Clinic+Dadar+West+Mumbai+400028" target="_blank" className="hover:text-secondary transition">{t("footer.address")}</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="container mt-12 pt-6 border-t border-primary-foreground/15 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-primary-foreground/70">
        <p>
          © {new Date().getFullYear()} {t("footer.copyright")} {t("footer.rights")}
        </p>
        <LanguageSwitcher variant="onPrimary" compact />
      </div>
    </footer>
  );
}
