declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
    gtag?: (...args: unknown[]) => void;
  }
}

export const BUSINESS_PHONE = "7550022405";
export const BUSINESS_PHONE_E164 = "917550022405";
export const WHATSAPP_URL = `https://wa.me/${BUSINESS_PHONE_E164}?text=${encodeURIComponent(
  "Hello, I need a quote for safety nets in Chennai."
)}`;

export const trackLeadClick = (type: "call" | "whatsapp", placement: string) => {
  const eventPayload = {
    event: "lead_click",
    lead_type: type,
    placement,
  };

  window.dataLayer?.push(eventPayload);

  if (typeof window.gtag === "function") {
    window.gtag("event", "lead_click", {
      lead_type: type,
      placement,
    });
  }
};

