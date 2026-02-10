import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Home, Building2, Droplets, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

export default function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-primary" />,
      title: "Residential Window Cleaning",
      subtitle: "Homes & Condos",
      description: "Interior and exterior cleaning for homes of all sizes. We treat your home with respect and leave your windows sparkling.",
      highlight: true
    },
    {
      icon: <Building2 className="w-10 h-10 text-primary" />,
      title: "Commercial Services",
      subtitle: "Storefronts & Offices",
      description: "Reliable storefront and low-rise commercial window cleaning to keep your business looking professional."
    },
    {
      icon: <Droplets className="w-10 h-10 text-primary" />,
      title: "Gutter Cleaning",
      subtitle: "Downspouts Included",
      description: "Protect your home from water damage with our thorough gutter cleaning and downspout flushing services."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "Pressure Washing",
      subtitle: "Driveways & Walkways",
      description: "Revitalize your driveway, walkways, and siding with our high-pressure cleaning solutions."
    },
  ];

  return (
    <section id="services" className="py-24 bg-background">
      <div className="container px-4 mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6 text-foreground">
            Our Cleaning Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We bring the sparkle to your home or business with a full range of exterior cleaning services.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className={cn(
                "group hover:shadow-xl transition-all duration-300 flex flex-col h-full",
                service.highlight 
                  ? "border-primary/40 shadow-md ring-1 ring-primary/10" 
                  : "border-primary/10 hover:border-primary/30"
              )}
            >
              <CardHeader className="pb-2">
                <div className="mb-4 p-3 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary/70">{service.subtitle}</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="text-base leading-relaxed mb-6 flex-grow">
                  {service.description}
                </CardDescription>
                <a 
                  href="#contact" 
                  className="inline-flex items-center justify-center w-full px-4 py-2 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors gap-2 group/btn"
                >
                  Get Quote
                  <ArrowRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" />
                </a>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
