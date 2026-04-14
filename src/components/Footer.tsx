import { Phone, Mail, MapPin } from "lucide-react";
import queenLogo from "@/assets/queen-logo.png";
import { toImageSrc } from "@/lib/image";

const Footer = () => {
  const safetyServices = [
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

  const birdServices = [
    { label: "Pigeon Nets", path: "/bird-protection/pigeon-nets" },
    { label: "Pigeon Safety Nets", path: "/bird-protection/pigeon-safety" },
    { label: "Pigeon Nets Installation", path: "/bird-protection/pigeon-installation" },
    { label: "Bird Spikes", path: "/bird-protection/bird-spikes" },
    { label: "Bird Protection Nets", path: "/bird-protection/bird-protection" },
    { label: "Anti Bird Nets", path: "/bird-protection/anti-bird" },
    { label: "Pigeon Nets For Balconies", path: "/bird-protection/pigeon-balconies" },
    { label: "Sparrow Protection Nets", path: "/bird-protection/sparrow" },
    { label: "Anti Seagull Nets", path: "/bird-protection/anti-seagull" },
    { label: "Cricket Practice Nets", path: "/sports-nets/cricket" },
    { label: "Sports Ball Stop Nets", path: "/sports-nets/ball-stop" },
    { label: "Football Stop Netting", path: "/sports-nets/football" },
    { label: "Terrace Cricket Nets", path: "/sports-nets/terrace-cricket" },
    { label: "Sports Nets Installation", path: "/sports-nets/installation" },
    { label: "All Sports Nets", path: "/sports-nets/all" },
  ];

  return (
    <footer className="gradient-footer text-background/90">
      <div className="container py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="mb-4 flex items-center gap-2">
              <img
                src={toImageSrc(queenLogo)}
                alt="Queen Safety Nets Logo"
                className="h-16 w-auto opacity-90"
                loading="lazy"
              />
            </div>
            <p className="text-sm leading-relaxed opacity-80">
              Our services include Balcony Safety Net, Children Safety Net, Construction Safety Net,
              Duct Area Safety Net, Industrial Safety Net, Swimming Pool Safety Net, Staircase Safety
              Net, Monkey Safety Net, Bird Spikes, Anti Bird, Pigeon Nets for Balconies, Bird
              Protection Nets, Cricket Practice Net, All Sports Practice Nets.
            </p>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-cta">Our Services</h3>
            <ul className="space-y-1.5">
              {safetyServices.map((s) => (
                <li key={s.path}>
                  <a href={s.path} className="text-sm opacity-80 transition-colors hover:text-cta hover:opacity-100">
                    › {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-cta">More Services</h3>
            <ul className="space-y-1.5">
              {birdServices.map((s) => (
                <li key={s.path}>
                  <a href={s.path} className="text-sm opacity-80 transition-colors hover:text-cta hover:opacity-100">
                    › {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-heading text-lg font-bold text-cta">Get In Touch</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-5 w-5 shrink-0" />
                <p className="text-sm opacity-80">400, Sai Balaji Nagar, Pari Nagar, Pallikaranai, Chennai, Tamil Nadu 600100</p>
              </div>
              <a href="tel:7550022405" className="flex items-center gap-3 transition-colors hover:text-cta">
                <Phone className="h-5 w-5 shrink-0" />
                <span className="text-sm">+91 7550022405</span>
              </a>
              <a href="mailto:queensafetynets@gmail.com" className="flex items-center gap-3 transition-colors hover:text-cta">
                <Mail className="h-5 w-5 shrink-0" />
                <span className="text-sm">queensafetynets@gmail.com</span>
              </a>
            </div>
            <div className="mt-4 rounded overflow-hidden shadow-md">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1!2d80.2707!3d13.0627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s400%2C%20Sai%20Balaji%20Nagar%2C%20Pari%20Nagar%2C%20Pallikaranai%2C%20Chennai%2C%20Tamil%20Nadu%20600100!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="150"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Queen Safety Nets Location"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-background/20 py-4 text-center text-sm opacity-60">
        <p>© {new Date().getFullYear()} Queen Safety Nets, Chennai. All Rights Reserved.</p>
        <p>
          Designed by{" "}
          <a
            href="https://www.asksolutionsindia.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-cta"
          >
            Ask Solutions
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
