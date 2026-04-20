import { Phone, Mail, Clock } from "lucide-react";
import { useTranslation } from "react-i18next";
import LanguageSwitcher from "@/components/site/LanguageSwitcher";

export default function TopBar() {
  const { t } = useTranslation();
  return (
    <div className="hidden md:block bg-primary text-primary-foreground text-xs">
      <div className="container flex h-9 items-center justify-between gap-3">
        <div className="flex min-w-0 flex-1 items-center gap-5">
          <a href="tel:+919075390753" className="flex shrink-0 items-center gap-1.5 hover:text-secondary transition">
            <Phone className="h-3 w-3" /> +91 90753 90753
          </a>
          <a href="mailto:contact@drjoshis.in" className="hidden lg:flex items-center gap-1.5 hover:text-secondary transition truncate">
            <Mail className="h-3 w-3 shrink-0" /> contact@drjoshis.in
          </a>
          <span className="hidden xl:flex items-center gap-1.5 opacity-80">
            <Clock className="h-3 w-3 shrink-0" /> {t("topBar.hours")}
          </span>
        </div>
      </div>
    </div>
  );
}
