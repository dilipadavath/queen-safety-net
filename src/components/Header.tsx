import { useEffect, useState } from "react";
import { Phone, Mail, Menu, X, ChevronDown, CheckCircle2, Zap } from "lucide-react";
import queenLogo from "@/assets/queen-logo.png";
import { toImageSrc } from "@/lib/image";

const safetyNetsDropdown = [
  { label: "Balcony Safety Nets", path: "/safety-nets/balcony" },
  { label: "Kids Net For Balcony", path: "/safety-nets/kids" },
  { label: "Pets Safety Nets", path: "/safety-nets/pets" },
  { label: "Grill Balcony Safety Nets", path: "/safety-nets/grill-balcony" },
  { label: "Terrace Top Nets", path: "/safety-nets/terrace" },
  { label: "Industrial Safety Nets", path: "/safety-nets/industrial" },
  { label: "Building Safety Nets", path: "/safety-nets/building" },
  { label: "Duct Area Safety Nets", path: "/safety-nets/duct-area" },
  { label: "Open Area Safety Nets", path: "/safety-nets/open-area" },
  { label: "Staircase Safety Nets", path: "/safety-nets/staircase" },
  { label: "Construction Safety Nets", path: "/safety-nets/construction" },
  { label: "Swimming Pool Safety Nets", path: "/safety-nets/swimming-pool" },
  { label: "Monkey Net For Balconies", path: "/safety-nets/monkey" },
  { label: "Car Parking Safety Nets", path: "/safety-nets/car-parking" },
  { label: "Coconut Tree Safety Nets", path: "/safety-nets/coconut-tree" },
  { label: "HDPE Nets, Nylon Nets", path: "/safety-nets/hdpe-nylon" },
];

const birdDropdown = [
  { label: "Pigeon Nets", path: "/bird-protection/pigeon-nets" },
  { label: "Pigeon Safety Nets", path: "/bird-protection/pigeon-safety" },
  { label: "Pigeon Nets Installation", path: "/bird-protection/pigeon-installation" },
  { label: "Bird Spikes", path: "/bird-protection/bird-spikes" },
  { label: "Bird Protection Nets", path: "/bird-protection/bird-protection" },
  { label: "Anti Bird Nets", path: "/bird-protection/anti-bird" },
  { label: "Pigeon Nets For Balconies", path: "/bird-protection/pigeon-balconies" },
  { label: "Sparrow Protection Nets", path: "/bird-protection/sparrow" },
  { label: "Anti Seagull Nets", path: "/bird-protection/anti-seagull" },
];

const sportsDropdown = [
  { label: "Cricket Practice Nets", path: "/sports-nets/cricket" },
  { label: "Sports Ball Stop Nets", path: "/sports-nets/ball-stop" },
  { label: "Football Stop Netting", path: "/sports-nets/football" },
  { label: "Terrace Cricket Nets", path: "/sports-nets/terrace-cricket" },
  { label: "Sports Nets Installation", path: "/sports-nets/installation" },
  { label: "All Sports Nets", path: "/sports-nets/all" },
];

const whyUsDropdown = [
  { label: "About", path: "/why-us" },
  { label: "Gallery", path: "/gallery" },
  { label: "FAQ's", path: "/faq" },
];

interface DropdownProps {
  label: string;
  items: { label: string; path: string }[];
  isActive: boolean;
}

const NavDropdown = ({ label, items, isActive }: DropdownProps) => {
  return (
    <div className="relative group">
      <button className={`flex items-center gap-1 px-3 py-2 font-heading text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-foreground hover:text-primary"}`}>
        {label}
        <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
      </button>
      <div className="absolute left-0 top-full z-50 hidden min-w-[220px] max-h-[calc(100vh-9rem)] overflow-y-auto rounded bg-foreground shadow-xl group-hover:block">
        {items.map((item) => (
          <a
            key={item.path}
            href={item.path}
            className="block px-4 py-2.5 text-sm text-background/90 hover:text-primary transition-colors hover:bg-background/90"
          >
            {item.label}
          </a>
        ))}
      </div>
    </div>
  );
};

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openMobileDropdown, setOpenMobileDropdown] = useState<string | null>(null);
  const [pathname, setPathname] = useState("/");

  useEffect(() => {
    setPathname(window.location.pathname);
  }, []);

  const toggleMobileDropdown = (name: string) => {
    setOpenMobileDropdown(openMobileDropdown === name ? null : name);
  };

  const allDropdowns = [
    { name: "Safety Nets", items: safetyNetsDropdown, prefix: "/safety-nets" },
    { name: "Bird Protection", items: birdDropdown, prefix: "/bird-protection" },
    { name: "Sports Nets", items: sportsDropdown, prefix: "/sports-nets" },
    { name: "Company", items: whyUsDropdown, prefix: "/why-us" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      {/* Innovative Top Bar with Benefits */}
      <div className="bg-gradient-to-r from-primary via-primary/95 to-primary text-white py-2.5 lg:py-3 overflow-hidden relative">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(45deg,_transparent,_transparent_35px,_rgba(255,255,255,.1)_35px,_rgba(255,255,255,.1)_70px)]"></div>
        <div className="container mx-auto px-4 relative z-10">
          {/* Desktop Layout */}
          <div className="hidden sm:flex items-center justify-center gap-6">
            {/* Left Benefit */}
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                <CheckCircle2 className="w-5 h-5 relative" />
              </div>
              <div className="text-xs lg:text-sm font-semibold tracking-wide">FREE INSPECTION & INSTALLATION</div>
            </div>
            
            {/* Divider */}
            <div className="w-px h-5 bg-white/30"></div>
            
            {/* Right Benefit */}
            <div className="flex items-center gap-2">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                <Zap className="w-5 h-5 relative" />
              </div>
              <div className="text-xs lg:text-sm font-semibold tracking-wide">100% BIRD FREE SOLUTION</div>
            </div>
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="sm:hidden flex flex-col gap-1.5 items-center text-center">
            {/* First Benefit */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                <CheckCircle2 className="w-4 h-4 relative" />
              </div>
              <div className="text-xs font-semibold tracking-wide">FREE INSPECTION & INSTALLATION</div>
            </div>
            
            {/* Second Benefit */}
            <div className="flex items-center justify-center gap-2">
              <div className="flex-shrink-0 relative">
                <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse"></div>
                <Zap className="w-4 h-4 relative" />
              </div>
              <div className="text-xs font-semibold tracking-wide">100% BIRD FREE SOLUTION</div>
            </div>

            {/* Phone Number */}
            <div className="text-xs font-bold tracking-wide mt-0.5">📞 +91 7550022405</div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          {/* Logo with Text */}
          <a href="/" className="flex items-center gap-3 shrink-0">
            <img src={toImageSrc(queenLogo)} alt="Queen Safety Nets Logo" className="h-auto w-auto max-h-12" />
          </a>

          {/* Desktop Navigation - Centered */}
          <div className="hidden lg:flex items-center gap-8 flex-1 justify-center">
            <a href="/" className={`font-heading text-sm font-medium transition-colors ${pathname === "/" ? "text-primary" : "text-foreground hover:text-primary"}`}>
              Home
            </a>
            {allDropdowns.map((dd) => (
              <NavDropdown
                key={dd.name}
                label={dd.name}
                items={dd.items}
                isActive={pathname.startsWith(dd.prefix)}
              />
            ))}
            <a href="/contact" className={`font-heading text-sm font-medium transition-colors ${pathname === "/contact" ? "text-primary" : "text-foreground hover:text-primary"}`}>
              Contact
            </a>
          </div>

          {/* Right Section - CTA */}
          <div className="hidden lg:flex items-center gap-4 shrink-0">
            {/* Free Call CTA Box */}
            <a
              href="tel:7550022405"
              className="bg-gradient-to-r from-primary to-primary/80 text-white px-3 py-2 rounded-lg flex items-center gap-3 hover:shadow-lg transition-all hover:from-primary/90 hover:to-primary/70"
            >
              <div className="p-2 rounded">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <div className="text-xs font-medium opacity-90">Free Call</div>
                <div className="text-sm font-bold">+91 7550022405</div>
              </div>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setMobileOpen(!mobileOpen)} className="lg:hidden p-2">
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t">
            <a href="/" onClick={() => setMobileOpen(false)} className="block px-4 py-3 font-heading text-sm font-medium hover:text-primary">Home</a>
            {allDropdowns.map((dd) => (
              <div key={dd.name}>
                <button onClick={() => toggleMobileDropdown(dd.name)} className="w-full flex justify-between items-center px-4 py-3 font-heading text-sm font-medium hover:text-primary">
                  {dd.name}
                  <ChevronDown className={`w-4 h-4 transition-transform ${openMobileDropdown === dd.name ? "rotate-180" : ""}`} />
                </button>
                {openMobileDropdown === dd.name && (
                  <div className="bg-muted">
                    {dd.items.map((item) => (
                      <a key={item.path} href={item.path} onClick={() => setMobileOpen(false)} className="block px-8 py-2 text-sm hover:text-primary">
                        {item.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href="/contact" onClick={() => setMobileOpen(false)} className="block px-4 py-3 font-heading text-sm font-medium hover:text-primary">Contact</a>
            <div className="px-4 pt-4 flex items-center gap-2">
              <a href="tel:7550022405" className="flex-1 bg-gradient-to-r from-primary to-primary/80 text-white px-4 py-3 rounded-lg text-center text-sm font-bold flex items-center justify-center gap-2">
                <Phone className="w-4 h-4" />
                Call Now
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
