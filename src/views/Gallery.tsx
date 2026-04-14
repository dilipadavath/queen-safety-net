import Layout from "@/components/Layout";
import ParallaxSection from "@/components/ParallaxSection";
import EnquiryBar from "@/components/EnquiryBar";
import { toImageSrc } from "@/lib/image";

import parallaxBg from "@/assets/parallax-bg.jpg";
import balconyNets from "@/assets/balcony-nets.jpg";
import pigeonNets from "@/assets/pigeon-nets.jpg";
import cricketNets from "@/assets/cricket-nets.jpg";
import buildingNets from "@/assets/building-nets.jpg";
import industrialNets from "@/assets/industrial-nets.jpg";
import staircaseNets from "@/assets/staircase-nets.jpg";
import swimmingPoolNets from "@/assets/swimming-pool-nets.jpg";
import carParkingNets from "@/assets/car-parking-nets.jpg";
import coconutNets from "@/assets/coconut-nets.jpg";
import birdSpikes from "@/assets/bird-spikes.jpg";
import sportsNets from "@/assets/sports-nets.jpg";

const images = [
  { src: balconyNets, title: "Balcony Safety Nets" },
  { src: pigeonNets, title: "Pigeon Protection Nets" },
  { src: cricketNets, title: "Cricket Practice Nets" },
  { src: buildingNets, title: "Building Safety Nets" },
  { src: industrialNets, title: "Industrial Safety Nets" },
  { src: staircaseNets, title: "Staircase Safety Nets" },
  { src: swimmingPoolNets, title: "Swimming Pool Nets" },
  { src: carParkingNets, title: "Car Parking Nets" },
  { src: coconutNets, title: "Coconut Tree Nets" },
  { src: birdSpikes, title: "Bird Spikes" },
  { src: sportsNets, title: "Sports Nets" },
];

const Gallery = () => {
  return (
    <Layout>
      <ParallaxSection backgroundImage={parallaxBg}>
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-heading font-bold text-cta mb-4">Our Gallery</h1>
          <p className="text-background/80 text-lg">See Our Work Across Chennai</p>
        </div>
      </ParallaxSection>

      <section className="py-16 bg-background">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {images.map((img, i) => (
              <div key={i} className="group relative overflow-hidden rounded-lg shadow-lg">
                <img src={toImageSrc(img.src)} alt={img.title} loading="lazy" className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110" />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/60 transition-all duration-300 flex items-end">
                  <p className="text-background font-heading font-semibold p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    {img.title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <EnquiryBar />
    </Layout>
  );
};

export default Gallery;
