import { MessageCircleMore, Phone } from "lucide-react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";

const EnquiryBar = () => {
  return (
    <section className="bg-primary py-4">
      <div className="container flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-center md:text-left">
          <h3 className="font-heading font-bold text-xl text-primary-foreground">
            Call For Free Inspection And Instant Quote
          </h3>
          <p className="text-sm text-primary-foreground/85">
            Best for urgent enquiries, balcony safety, pigeon nets, and same-day service requests.
          </p>
        </div>
        <div className="flex flex-col items-center gap-3 sm:flex-row">
          <a
            href={`tel:${BUSINESS_PHONE}`}
            onClick={() => trackLeadClick("call", "enquiry_bar")}
            className="inline-flex items-center gap-2 rounded-md border border-primary-foreground/20 bg-primary/85 px-6 py-3 text-sm font-bold uppercase tracking-[0.05em] text-primary-foreground transition-colors hover:bg-primary"
          >
            <Phone className="w-4 h-4" />
            Call +91 {BUSINESS_PHONE}
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noreferrer"
            onClick={() => trackLeadClick("whatsapp", "enquiry_bar")}
            className="inline-flex items-center gap-2 rounded-md bg-[#25D366] px-6 py-3 text-sm font-bold text-white transition-colors hover:bg-[#1ebe5a]"
          >
            <MessageCircleMore className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
};

export default EnquiryBar;
