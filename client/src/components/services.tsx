import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Home, Building2, Droplets, ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

import imgResidential from "@/assets/services/residential-window-cleaning.jpg";
import imgCommercial from "@/assets/services/commercial-window-cleaning.jpg";
import imgGutter from "@/assets/services/gutter-cleaning.jpg";
import imgPressure from "@/assets/services/pressure-washing.jpg";

export default function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-primary" />,
      image: imgResidential,
      title: "Residential Window Cleaning",
      subtitle: "Homes & Condos",
      description: "Interior & exterior window cleaning that leaves your home brighter, cleaner, and streak-free.",
      highlight: true
    },
    {
      icon: <Building2 className="w-10 h-10 text-primary" />,
      image: imgCommercial,
      title: "Commercial Services",
      subtitle: "Storefronts & Offices",
      description: "Reliable storefront and low-rise window cleaning that keeps your business looking professional."
    },
    {
      icon: <Droplets className="w-10 h-10 text-primary" />,
      image: imgGutter,
      title: "Gutter Cleaning",
      subtitle: "Downspouts Included",
      description: "Thorough gutter and downspout cleaning to prevent overflow and water damage."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      image: imgPressure,
      title: "Pressure Washing",
      subtitle: "Driveways & Walkways",
      description: "High-pressure cleaning to restore driveways, walkways, and siding."
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
          <p className="text-sm text-muted-foreground/70 mt-2">
            Free estimates • No obligation • Transparent pricing
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
              <div className="relative h-24 w-full overflow-hidden rounded-t-xl">
                <img
                  src={service.image}
                  alt={service.title}
                  loading="lazy"
                  className="w-full h-full object-cover rounded-t-xl"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-black/10" />
              </div>
              <CardHeader className="pb-2">
                <div className="mb-4 p-3 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
                    {service.highlight && (
                      <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-primary/10 text-primary border border-primary/20 whitespace-nowrap">
                        ⭐ Most Popular
                      </span>
                    )}
                  </div>
                  <p className="text-xs font-bold uppercase tracking-wider text-primary/70">{service.subtitle}</p>
                </div>
              </CardHeader>
              <CardContent className="flex flex-col flex-grow">
                <CardDescription className="text-base leading-relaxed mb-6 flex-grow">
                  {service.description}
                </CardDescription>
                <a 
                  href="#quote" 
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
