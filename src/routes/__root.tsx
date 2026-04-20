import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";

import appCss from "../styles.css?url";
import "@/i18n/config";
import { I18nProvider } from "@/lib/i18n";
import SiteLayout from "@/components/site/SiteLayout";
import { Button } from "@/components/ui/button";

function NotFoundContent() {
  const { t } = useTranslation();
  return (
    <div className="flex min-h-[60vh] items-center justify-center px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-7xl text-primary">404</h1>
        <h2 className="mt-4 font-display text-2xl text-primary">{t("notFound.title")}</h2>
        <p className="mt-2 text-sm text-muted-foreground">{t("notFound.desc")}</p>
        <Link to="/" className="inline-block mt-6">
          <Button variant="hero" size="lg">{t("notFound.goHome")}</Button>
        </Link>
      </div>
    </div>
  );
}

function NotFoundComponent() {
  return (
    <I18nProvider>
      <SiteLayout>
        <NotFoundContent />
      </SiteLayout>
    </I18nProvider>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Dr. Joshi's Holistic Multispecialty Clinic — Authentic Ayurveda in Mumbai" },
      { name: "description", content: "Trusted Ayurvedic care in Mumbai since 2004. Panchakarma, kidney, cancer, diabetes, infertility and chronic disease management — natural, safe and personalised." },
      { name: "author", content: "Dr. Joshi's Clinic" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { property: "og:title", content: "Dr. Joshi's Holistic Multispecialty Clinic — Authentic Ayurveda in Mumbai" },
      { name: "twitter:title", content: "Dr. Joshi's Holistic Multispecialty Clinic — Authentic Ayurveda in Mumbai" },
      { property: "og:description", content: "Trusted Ayurvedic care in Mumbai since 2004. Panchakarma, kidney, cancer, diabetes, infertility and chronic disease management — natural, safe and personalised." },
      { name: "twitter:description", content: "Trusted Ayurvedic care in Mumbai since 2004. Panchakarma, kidney, cancer, diabetes, infertility and chronic disease management — natural, safe and personalised." },
      { property: "og:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8d247f14-b9bf-4ccd-a5c8-a33c850e3cfa/id-preview-7cb4a8b4--fa0056d9-5f05-44a3-a7e4-ac688ad3c529.lovable.app-1776593957757.png" },
      { name: "twitter:image", content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/8d247f14-b9bf-4ccd-a5c8-a33c850e3cfa/id-preview-7cb4a8b4--fa0056d9-5f05-44a3-a7e4-ac688ad3c529.lovable.app-1776593957757.png" },
    ],
    links: [{ rel: "stylesheet", href: appCss }],
  }),
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootComponent() {
  return (
    <I18nProvider>
      <SiteLayout>
        <Outlet />
      </SiteLayout>
    </I18nProvider>
  );
}
