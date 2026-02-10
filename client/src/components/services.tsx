import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Sparkles, Home, Building2, Droplets, ShieldCheck, ArrowRight } from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: <Home className="w-10 h-10 text-primary" />,
      title: "Residential Window Cleaning",
      description: "Interior and exterior cleaning for homes of all sizes. We treat your home with respect and leave your windows sparkling."
    },
    {
      icon: <Building2 className="w-10 h-10 text-primary" />,
      title: "Commercial Services",
      description: "Reliable storefront and low-rise commercial window cleaning to keep your business looking professional."
    },
    {
      icon: <Droplets className="w-10 h-10 text-primary" />,
      title: "Gutter Cleaning",
      description: "Protect your home from water damage with our thorough gutter cleaning and downspout flushing services."
    },
    {
      icon: <Sparkles className="w-10 h-10 text-primary" />,
      title: "Pressure Washing",
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
            <Card key={index} className="group hover:shadow-xl transition-all duration-300 border-primary/10 hover:border-primary/30">
              <CardHeader>
                <div className="mb-4 p-3 bg-primary/5 rounded-2xl w-fit group-hover:bg-primary/10 transition-colors">
                  {service.icon}
                </div>
                <CardTitle className="font-heading text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed mb-4">
                  {service.description}
                </CardDescription>
                <div className="flex items-center text-primary font-bold text-sm group-hover:translate-x-1 transition-transform cursor-pointer">
                  Learn more <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
