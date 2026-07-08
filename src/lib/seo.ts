const SITE_URL = "https://couchmode.app/";

/**
 * BreadcrumbList JSON-LD for a subpage: Home > {name}. Pass the page's
 * canonical URL (trailing slash) as `url` so structured data matches the
 * indexable URL.
 */
export function breadcrumbLd(name: string, url: string) {
  return {
    "script:ld+json": {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
        { "@type": "ListItem", position: 2, name, item: url },
      ],
    },
  } as const;
}
