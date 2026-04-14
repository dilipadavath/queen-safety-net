import { MessageCircleMore, PhoneCall } from "lucide-react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";

const StickyCallBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-2 py-3 shadow-2xl backdrop-blur md:hidden">
      <div className="mx-auto flex max-w-md flex-wrap items-center gap-2 min-[420px]:flex-nowrap">
        <div className="min-w-0 flex-1">
          <p className="text-[10px] font-semibold uppercase tracking-[0.15em] text-primary min-[420px]:text-[11px] min-[420px]:tracking-[0.2em]">
            Free Site Visit In Chennai
          </p>
          <p className="text-xs font-semibold text-foreground min-[420px]:truncate min-[420px]:text-sm">
            Same-day call support available
          </p>
        </div>
        <a
          href={`tel:${BUSINESS_PHONE}`}
          onClick={() => trackLeadClick("call", "sticky_mobile")}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-primary px-3 py-2.5 text-sm font-bold text-primary-foreground shadow-lg transition-colors hover:bg-primary/90 min-[420px]:gap-2 min-[420px]:px-4 min-[420px]:py-3"
        >
          <PhoneCall className="h-4 w-4" />
          Call
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noreferrer"
          onClick={() => trackLeadClick("whatsapp", "sticky_mobile")}
          className="inline-flex shrink-0 items-center gap-1.5 rounded-lg bg-[#25D366] px-3 py-2.5 text-sm font-bold text-white shadow-lg transition-colors hover:bg-[#1ebe5a] min-[420px]:gap-2 min-[420px]:px-4 min-[420px]:py-3"
        >
          <MessageCircleMore className="h-4 w-4" />
          WhatsApp
        </a>
      </div>
    </div>
  );
};

export default StickyCallBar;
