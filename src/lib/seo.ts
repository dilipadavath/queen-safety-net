export const SITE_URL = "https://queensafetynets.com";
export const SITE_NAME = "Queen Safety Nets";
export const DEFAULT_OG_IMAGE = "/favicon.png";

export const BUSINESS = {
  name: "Queen Safety Nets",
  phone: "+91 7550022405",
  email: "queensafetynets@gmail.com",
  address: "400, Sai Balaji Nagar, Pari Nagar, Pallikaranai, Chennai, Tamil Nadu 600100",
  city: "Chennai",
  region: "Karnataka",
  country: "IN",
};

export const getPageSchema = (url: string, title: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: title,
  description,
  url,
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: BUSINESS.name,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  url: SITE_URL,
  telephone: BUSINESS.phone,
  email: BUSINESS.email,
  address: {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.address,
    addressLocality: BUSINESS.city,
    addressRegion: BUSINESS.region,
    addressCountry: BUSINESS.country,
  },
  areaServed: {
    "@type": "City",
    name: "Chennai",
  },
});

export const getBreadcrumbSchema = (
  items: Array<{ name: string; path: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: `${SITE_URL}${item.path}`,
  })),
});

