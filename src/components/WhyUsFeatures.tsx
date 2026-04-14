import { Wrench, ShieldCheck, IndianRupee, Smile } from "lucide-react";

const features = [
  { icon: Wrench, title: "Free Installation", color: "bg-primary" },
  { icon: ShieldCheck, title: "Quality Assurance", color: "bg-secondary" },
  { icon: IndianRupee, title: "Reasonable Prices", color: "bg-primary/80" },
  { icon: Smile, title: "Happy Customers", color: "bg-primary/60" },
];

const WhyUsFeatures = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
      {features.map((f) => (
        <div key={f.title} className="flex flex-col items-center text-center">
          <div className={`w-20 h-20 rounded-full ${f.color} flex items-center justify-center mb-3 border-2 border-dashed border-cta`}>
            <f.icon className="w-10 h-10 text-background" />
          </div>
          <h3 className="font-heading font-semibold text-lg">{f.title}</h3>
        </div>
      ))}
    </div>
  );
};

export default WhyUsFeatures;
