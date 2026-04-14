import Layout from "@/components/Layout";
import WhyUsFeatures from "@/components/WhyUsFeatures";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { toImageSrc } from "@/lib/image";

import parallaxBg from "@/assets/parallax-bg.jpg";
import balconyNets from "@/assets/balcony-nets.jpg";
import buildingNets from "@/assets/building-nets.jpg";

const WhyUs = () => {
  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">About Queen Safety Nets</h1>
          <p className="text-background/80 text-lg">Your Trusted Safety Net Partner in Chennai</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Who We Are</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Queen Safety Nets is a leading safety net installation company based in Chennai. With years of experience in the industry, we have served thousands of happy customers across the city. Our team of trained professionals ensures high-quality installation of safety nets for balconies, buildings, bird protection, sports areas, and more.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We use premium quality nylon and HDPE nets that are UV-resistant, weather-proof, and durable. Our nets come with a warranty and are tested to withstand heavy loads, ensuring maximum safety for your family, children, and pets.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                From residential apartments to commercial buildings, we provide customized safety net solutions tailored to your specific requirements. Our free installation service and competitive pricing make us the preferred choice for safety nets in Chennai.
              </p>
            </div>
            <div className="rounded-lg overflow-hidden shadow-xl">
              <img src={toImageSrc(balconyNets)} alt="Balcony Safety Net Installation" loading="lazy" className="w-full h-80 object-cover" />
            </div>
          </div>

          <WhyUsFeatures />

          <div className="grid md:grid-cols-2 gap-12 items-center mt-16">
            <div className="rounded-lg overflow-hidden shadow-xl order-2 md:order-1">
              <img src={toImageSrc(buildingNets)} alt="Building Safety Nets" loading="lazy" className="w-full h-80 object-cover" />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl font-heading font-bold text-primary mb-6">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Our mission is to make every home, building, and commercial space safe with high-quality safety nets. We believe that safety should be affordable and accessible to everyone.
              </p>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  100% Quality Materials with Warranty
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Free Site Inspection & Installation
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Experienced & Trained Installation Team
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Same Day Service Available
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-primary font-bold">✓</span>
                  Competitive Pricing with No Hidden Charges
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default WhyUs;
