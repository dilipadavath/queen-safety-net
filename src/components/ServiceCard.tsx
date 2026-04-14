import { Star, Phone } from "lucide-react";
import { toImageSrc, type ImageLike } from "@/lib/image";

interface ServiceCardProps {
  image: ImageLike;
  title: string;
  path: string;
}

const ServiceCard = ({ image, title, path }: ServiceCardProps) => {
  return (
    <div className="service-card bg-card">
      <a href={path} className="block">
        <div className="aspect-square overflow-hidden border-4 border-secondary rounded-lg">
          <img src={toImageSrc(image)} alt={title} loading="lazy" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
        </div>
      </a>
      <div className="p-3 text-center">
        <h3 className="font-heading font-semibold text-sm mb-1">{title}</h3>
        <div className="flex justify-center gap-0.5 text-cta mb-2">
          {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
        </div>
        <a href="tel:7550022405" className="inline-flex items-center gap-1 bg-primary text-primary-foreground px-3 py-1.5 rounded text-xs font-semibold hover:bg-primary/90 transition-colors">
          <Phone className="w-3 h-3" />
          Call Us
        </a>
      </div>
    </div>
  );
};

export default ServiceCard;
