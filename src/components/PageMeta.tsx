import { Helmet } from "react-helmet-async";
import { useLocation } from "react-router-dom";
import { getPageMeta } from "@/config/metadata";

const DEFAULT_SITE_URL = "https://bickosa.com";

/**
 * Resolves base URL for canonical and og:url.
 * Uses VITE_SITE_URL if set, otherwise bickosa.com in production and window.origin in dev.
 */
function getBaseUrl(): string {
  if (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) {
    return import.meta.env.VITE_SITE_URL.replace(/\/$/, "");
  }
  if (typeof import.meta !== "undefined" && import.meta.env?.PROD) {
    return DEFAULT_SITE_URL;
  }
  if (typeof window !== "undefined") {
    return window.location.origin;
  }
  return DEFAULT_SITE_URL;
}

const PageMeta = () => {
  const { pathname } = useLocation();
  const baseUrl = getBaseUrl();
  const { title, description, ogImage } = getPageMeta(pathname);
  const canonicalUrl = baseUrl ? `${baseUrl}${pathname}` : undefined;

  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} />

      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
    </Helmet>
  );
};

export default PageMeta;
