import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

import parallaxBg from "@/assets/parallax-bg.jpg";

const faqs = [
  { q: "What types of safety nets do you provide?", a: "We provide all types of safety nets including Balcony Safety Nets, Pigeon Nets, Bird Protection Nets, Bird Spikes, Children Safety Nets, Swimming Pool Safety Nets, Cricket Practice Nets, Sports Nets, Industrial Safety Nets, Construction Safety Nets, Staircase Safety Nets, Car Parking Nets, Coconut Tree Nets, and more." },
  { q: "What material are your safety nets made of?", a: "Our safety nets are made from high-quality Nylon and HDPE (High-Density Polyethylene) material. These materials are UV-resistant, weather-proof, and highly durable with a lifespan of 5-10 years." },
  { q: "Do you provide free installation?", a: "Yes! We provide completely free installation with every safety net purchase. Our trained team will visit your site, take measurements, and install the nets professionally at no additional cost." },
  { q: "How long does installation take?", a: "Most residential installations are completed within 2-4 hours. Larger commercial or building-wide installations may take 1-2 days depending on the scope of work." },
  { q: "Do you provide same-day service?", a: "Yes, we offer same-day installation service for most standard requirements. Contact us early in the day for same-day service availability." },
  { q: "What areas in Chennai do you serve?", a: "We serve all areas across Chennai including Whitefield, Electronic City, Koramangala, HSR Layout, BTM Layout, Jayanagar, JP Nagar, Hebbal, Yelahanka, Banashankari, and all other localities." },
  { q: "Do your nets come with a warranty?", a: "Yes, all our safety nets come with a warranty. The warranty period varies based on the product and material type. Contact us for specific warranty details." },
  { q: "Are your nets safe for children?", a: "Absolutely! Our nets are specifically designed with child safety in mind. We use non-toxic materials with appropriate mesh sizes that children cannot pass through." },
  { q: "Can safety nets be removed later?", a: "Yes, our safety nets can be removed when no longer needed. The installation method we use causes minimal damage to your property." },
  { q: "How do I get a quote?", a: "Simply call us at +91 7550022405 or email us at queensafetynets@gmail.com. We will arrange a free site visit and provide a detailed quote based on your requirements." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">FAQ's</h1>
          <p className="text-background/80 text-lg">Frequently Asked Questions About Safety Nets</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container max-w-3xl">
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <div key={i} className="bg-card rounded-lg shadow-md overflow-hidden">
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex justify-between items-center p-5 text-left font-heading font-semibold text-foreground hover:text-primary transition-colors"
                >
                  {faq.q}
                  <ChevronDown className={`w-5 h-5 shrink-0 transition-transform ${open === i ? 'rotate-180' : ''}`} />
                </button>
                {open === i && (
                  <div className="px-5 pb-5 text-muted-foreground leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default FAQ;
