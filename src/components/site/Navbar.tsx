import { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import { Menu, X, Phone, ChevronDown, Leaf } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useI18n } from "@/lib/i18n";
import { services, treatments } from "@/data/services";
import LanguageSwitcher from "@/components/site/LanguageSwitcher";
import { localizedTitle } from "@/lib/localizeContentPage";
import type { TFunction } from "i18next";

function buildLinks(t: TFunction, lang: string) {
  return [
    { label: t("nav.home"), href: "/" },
    { label: t("nav.about"), href: "/about" },
    {
      label: t("nav.services"),
      href: "/services",
      dropdown: services.map((s) => ({ label: localizedTitle(s, lang, t), href: `/services/${s.slug}` })),
    },
    {
      label: t("nav.treatments"),
      href: "/treatments",
      dropdown: treatments.map((s) => ({ label: localizedTitle(s, lang, t), href: `/treatments/${s.slug}` })),
    },
    {
      label: t("nav.blog"),
      href: "/blogs",
      dropdown: [
        { label: t("nav.blogs"), href: "/blogs" },
        { label: t("nav.faq"), href: "/faq" },
      ],
    },
    {
      label: t("nav.contact"),
      href: "/contact",
      dropdown: [
        { label: t("nav.contact_page"), href: "/contact" },
        { label: t("nav.franchise"), href: "/franchise" },
      ],
    },
  ];
}

function Dropdown({ items }: { items: { label: string; href: string }[] }) {
  return (
    <div className="absolute top-full left-0 mt-1 min-w-[300px] max-h-[70vh] overflow-y-auto bg-background border border-border rounded-xl shadow-elegant py-2 z-50 animate-fade-up">
      {items.map((item) => (
        <Link
          key={item.href + item.label}
          to={item.href}
          className="block px-4 py-2.5 text-sm text-foreground/80 hover:text-primary hover:bg-muted transition"
        >
          {item.label}
        </Link>
      ))}
    </div>
  );
}

export default function Navbar() {
  const { t, lang } = useI18n();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();
  const navLinks = buildLinks(t, lang);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [location.pathname]);

  const handleEnter = (label: string) => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setActiveDropdown(label);
  };
  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setActiveDropdown(null), 120);
  };

  return (
    <header
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-background/95 backdrop-blur shadow-soft" : "bg-background/80 backdrop-blur-sm",
      )}
    >
      <div className="container flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-2.5">
          <div className="h-11 w-11 rounded-full bg-gold-gradient grid place-items-center shadow-soft">
            <Leaf className="h-5 w-5 text-primary" />
          </div>
          <div className="leading-tight">
            <div className="font-display text-xl text-primary font-semibold">{t("brand.name")}</div>
            <div className="text-[10px] tracking-[0.18em] uppercase text-muted-foreground">{t("brand.tagline")}</div>
          </div>
        </Link>

        <nav className="hidden lg:flex items-center gap-5">
          {navLinks.map((l) =>
            l.dropdown ? (
              <div
                key={l.label}
                className="relative"
                onMouseEnter={() => handleEnter(l.label)}
                onMouseLeave={handleLeave}
              >
                <Link
                  to={l.href}
                  className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-primary transition py-2 link-underline"
                >
                  {l.label}
                  <ChevronDown
                    className={cn(
                      "h-3.5 w-3.5 transition-transform duration-200",
                      activeDropdown === l.label ? "rotate-180" : "",
                    )}
                  />
                </Link>
                {activeDropdown === l.label && <Dropdown items={l.dropdown} />}
              </div>
            ) : (
              <Link
                key={l.label}
                to={l.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition py-2 link-underline"
              >
                {l.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <a href="tel:+919075390753" className="flex items-center gap-2 text-sm font-semibold text-primary">
            <Phone className="h-4 w-4" /> +91 90753 90753
          </a>
          <LanguageSwitcher compact />
          <Link to="/contact">
            <Button variant="hero" size="lg">{t("cta.book")}</Button>
          </Link>
        </div>

        <div className="flex items-center gap-1 lg:hidden">
          <LanguageSwitcher compact />
          <button type="button" className="p-2 text-primary" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-label="Menu">
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t bg-background">
          <div className="container py-4 flex flex-col gap-1 max-h-[70vh] overflow-y-auto">
            {navLinks.map((l) =>
              l.dropdown ? (
                <div key={l.label}>
                  <button
                    onClick={() => setMobileExpanded(mobileExpanded === l.label ? null : l.label)}
                    className="w-full flex items-center justify-between py-2.5 text-base font-medium text-foreground/80 hover:text-primary"
                  >
                    {l.label}
                    <ChevronDown
                      className={cn(
                        "h-4 w-4 transition-transform",
                        mobileExpanded === l.label ? "rotate-180" : "",
                      )}
                    />
                  </button>
                  {mobileExpanded === l.label && (
                    <div className="pl-4 flex flex-col gap-1 pb-2">
                      {l.dropdown.map((d) => (
                        <Link
                          key={d.href + d.label}
                          to={d.href}
                          className="py-1.5 text-sm text-foreground/70 hover:text-primary"
                        >
                          {d.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={l.label}
                  to={l.href}
                  className="py-2.5 text-base font-medium text-foreground/80 hover:text-primary"
                >
                  {l.label}
                </Link>
              ),
            )}
            <Link to="/contact" className="mt-3">
              <Button variant="hero" size="lg" className="w-full">{t("cta.book")}</Button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
