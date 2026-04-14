import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import { Phone, Mail, MapPin, Clock, MessageCircleMore } from "lucide-react";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { BUSINESS_PHONE, WHATSAPP_URL, trackLeadClick } from "@/lib/leadTracking";

import parallaxBg from "@/assets/parallax-bg.jpg";

const chennaiCoverageAreas = [
  "Adambakkam",
  "Adyar",
  "Alandur",
  "Alwarpet",
  "Aminjikarai",
  "Anna Nagar",
  "Arumbakkam",
  "Ashok Nagar",
  "Avadi",
  "Ayanavaram",
  "Chepauk",
  "Chintadripet",
  "Choolaimedu",
  "Chrompet",
  "Egmore",
  "Ekkaduthangal",
  "Ennore",
  "Fort St. George",
  "George Town",
  "Gopalapuram",
  "Guindy",
  "Guduvancheri",
  "IIT Madras",
  "Injambakkam",
  "ICF Colony",
  "Iyyapanthangal",
  "Karapakkam",
  "Kazhipattur",
  "K.K. Nagar",
  "Kilpauk",
  "Kodambakkam",
  "Kolathur",
  "Korattur",
  "Kelambakkam",
  "Koyambedu",
  "Kundrathur",
  "Madhavaram",
  "Madipakkam",
  "Manapakkam",
  "Mandaveli",
  "Medavakkam",
  "Meenambakkam",
  "Mambakkam",
  "Marina Mahal OMR",
  "MGR Nagar",
  "MCR Nagar",
  "Minjur",
  "Mogappair",
  "Mogappair West",
  "Mogappair East",
  "Mount Road",
  "Moolakadai",
  "Mugalivakkam",
  "Mudichur",
  "Mylapore",
  "Nanganallur",
  "Nolambur",
  "Nungambakkam",
  "Oragadam",
  "Padi",
  "Pallavaram",
  "Pallikaranai",
  "Park Town",
  "Parry's Corner",
  "Padur",
  "Perambur",
  "Peravallur",
  "Perumbakkam",
  "Perungalathur",
  "Perungudi",
  "Pozhichalur",
  "Poonamallee",
  "Porur",
  "Pudupet",
  "Purasaiwalkam",
  "Puzhal",
  "Puzhuthivakkam - Ullagaram",
  "Red Hills",
  "R A Puram",
  "Ramapuram",
  "Royapettah",
  "Royapuram",
  "Saidapet",
  "SRM University",
  "Saligramam",
  "Sembakkam",
  "Selaiyur",
  "Semenchery",
  "Shenoy Nagar",
  "Sholinganallur",
  "Sowcarpet",
  "St. Thomas Mount",
  "Tambaram",
  "Talambur",
  "Teynampet",
  "Tharamani",
  "T. Nagar",
  "Thiruninravur",
  "Thiruvanmiyur",
  "Thiruvallur",
  "Thiruverkadu",
  "Thiruvotriyur",
  "Thoraipakkam",
  "Tirusulam",
  "Tondiarpet",
  "United India Colony",
  "Vandalur",
  "Vadapalani",
  "Valasaravakkam",
  "Vallalar Nagar",
  "Vanagaram",
  "Velachery",
  "Villivakkam",
  "Virugambakkam",
  "Vyasarpadi",
  "Washermanpet",
  "West Mambalam",
  "West Tambaram",
];

const locationSections = [
  {
    title: "Invisible Grills in Chennai",
    prefix: "Invisible Grills in",
    label: "Coverage",
    labelClassName: "bg-primary/10 text-primary",
  },
  {
    title: "Invisible Grills Near Me Chennai",
    prefix: "Invisible Grills near me",
    label: "Nearby",
    labelClassName: "bg-amber-50 text-amber-700",
  },
  {
    title: "Invisible Grills for Balcony in Chennai",
    prefix: "Invisible Grills for Balcony in",
    label: "Balcony",
    labelClassName: "bg-emerald-50 text-emerald-700",
  },
  {
    title: "Invisible Grills Installation in Chennai",
    prefix: "Invisible Grills Installation in",
    label: "Install",
    labelClassName: "bg-rose-50 text-rose-700",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    message: "",
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const subject = `Safety Net Enquiry${formData.service ? ` - ${formData.service}` : ""}`;
    const body = [
      `Name: ${formData.name}`,
      `Phone: ${formData.phone}`,
      `Email: ${formData.email || "Not provided"}`,
      `Service Required: ${formData.service || "Not specified"}`,
      "",
      "Message:",
      formData.message || "No additional message provided.",
    ].join("\n");

    window.location.href = `mailto:queensafetynets@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">Contact Us</h1>
          <p className="text-background/80 text-lg">Get in Touch for Free Safety Net Installation Quote</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-8">Get In Touch</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <MapPin className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Our Address</h3>
                    <p className="text-muted-foreground">400, Sai Balaji Nagar, Pari Nagar, Pallikaranai, Chennai, Tamil Nadu 600100</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shrink-0">
                    <Phone className="w-6 h-6 text-secondary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Phone</h3>
                    <a
                      href={`tel:${BUSINESS_PHONE}`}
                      onClick={() => trackLeadClick("call", "contact_page")}
                      className="text-primary hover:underline text-lg font-semibold"
                    >
                      +91 {BUSINESS_PHONE}
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#25D366] flex items-center justify-center shrink-0">
                    <MessageCircleMore className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">WhatsApp</h3>
                    <a
                      href={WHATSAPP_URL}
                      target="_blank"
                      rel="noreferrer"
                      onClick={() => trackLeadClick("whatsapp", "contact_page")}
                      className="text-primary hover:underline"
                    >
                      Chat for quick quote
                    </a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-accent flex items-center justify-center shrink-0">
                    <Mail className="w-6 h-6 text-accent-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Email</h3>
                    <a href="mailto:queensafetynets@gmail.com" className="text-primary hover:underline">queensafetynets@gmail.com</a>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-heading font-semibold text-lg">Working Hours</h3>
                    <p className="text-muted-foreground">Monday - Sunday: 8:00 AM - 8:00 PM</p>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.1!2d80.2707!3d13.0627!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s400%2C%20Sai%20Balaji%20Nagar%2C%20Pari%20Nagar%2C%20Pallikaranai%2C%20Chennai%2C%20Tamil%20Nadu%20600100!5e0!3m2!1sen!2sin!4v1"
                  width="100%"
                  height="250"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Queen Safety Nets Location"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-muted p-8 rounded-lg">
              <h2 className="text-2xl font-heading font-bold text-primary mb-6">Send Us a Message</h2>
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium mb-1">Your Name *</label>
                  <input
                    id="contact-name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Enter your name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-phone" className="block text-sm font-medium mb-1">Phone Number *</label>
                  <input
                    id="contact-phone"
                    name="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium mb-1">Email</label>
                  <input
                    id="contact-email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div>
                  <label htmlFor="contact-service" className="block text-sm font-medium mb-1">Service Required *</label>
                  <select
                    id="contact-service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all"
                  >
                    <option value="">Select a service</option>
                    <option>Balcony Safety Nets</option>
                    <option>Pigeon Nets</option>
                    <option>Bird Protection Nets</option>
                    <option>Bird Spikes</option>
                    <option>Cricket Practice Nets</option>
                    <option>Sports Nets</option>
                    <option>Building Safety Nets</option>
                    <option>Industrial Safety Nets</option>
                    <option>Swimming Pool Nets</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium mb-1">Message</label>
                  <textarea
                    id="contact-message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:ring-2 focus:ring-primary focus:border-primary outline-none transition-all resize-none"
                    placeholder="Tell us about your requirements"
                  />
                </div>
                <button type="submit" className="cta-button w-full text-center">
                  Send Enquiry
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Service Locations Section */}
      <section className="py-16 bg-muted">
        <div className="container">
          <h2 className="text-3xl md:text-4xl font-heading font-bold text-primary mb-6 text-center">Our Service Coverage Areas</h2>
          <p className="text-center text-muted-foreground mb-10 max-w-3xl mx-auto">
            We provide installation support across key service pockets in Chennai. Reach out if your locality is nearby and not listed.
          </p>

          <div className="space-y-6">
            {locationSections.map((section) => (
              <article key={section.title} className="overflow-hidden rounded-3xl border border-border bg-background shadow-sm">
                <div className="flex flex-col gap-3 border-b border-border bg-slate-50 px-4 py-4 md:flex-row md:items-center md:justify-between md:px-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-primary/70">Location Directory</p>
                    <h3 className="mt-2 text-xl font-heading font-bold text-primary md:text-2xl">{section.title}</h3>
                  </div>
                  <span className={`inline-flex w-fit items-center rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] ${section.labelClassName}`}>
                    {section.label}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-x-4 divide-y divide-border/70 sm:grid-cols-2 sm:divide-y-0">
                  {chennaiCoverageAreas.map((area) => (
                    <div key={`${section.prefix}-${area}`} className="grid grid-cols-[36px_minmax(0,1fr)] items-start gap-3 border-b border-border/70 px-4 py-3 last:border-b-0 sm:px-5">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                        {area
                          .split(" ")
                          .slice(0, 2)
                          .map((part) => part[0])
                          .join("")}
                      </div>
                      <p className="text-sm font-medium leading-6 text-foreground md:text-[15px]">
                        {section.prefix} {area}
                      </p>
                    </div>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
