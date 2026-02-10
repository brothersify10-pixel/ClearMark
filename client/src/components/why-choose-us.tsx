import { CheckCircle2, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import teamImage from "@/assets/team-van.png";

export default function WhyChooseUs() {
  const benefits = [
    {
      title: "Commercial-Grade Equipment",
      body: "Purified water systems and pro tools for a streak-free finish.",
    },
    {
      title: "Trained, Vetted Technicians",
      body: "A consistent checklist every visit. No shortcuts.",
    },
    {
      title: "Safety-First Process",
      body: "Strict ladder and site-safety standards on every job.",
    },
    {
      title: "Transparent Pricing",
      body: "Free estimates with clear scope and no surprise charges.",
    },
    {
      title: "Detail-Oriented Service",
      body: "Frames, sills, and edges cleaned with care when included.",
    },
    {
      title: "Respect for Your Property",
      body: "Clean work area, careful access, zero mess left behind.",
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container px-4 mx-auto grid lg:grid-cols-2 gap-12 items-center">
        <div className="relative order-2 lg:order-1">
          <div className="absolute inset-0 bg-primary/10 rounded-3xl transform rotate-3 scale-105" />
          <img
            src={teamImage}
            alt="Our Friendly Team"
            className="relative rounded-2xl shadow-2xl w-full object-cover aspect-[4/3]"
          />
        </div>

        <div className="order-1 lg:order-2 space-y-8">
          <div>
            <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
              Why Choose <span className="text-primary">ClearMark</span>
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Professional exterior care backed by process, safety, and a real guarantee.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-start gap-3 p-3 bg-background rounded-lg shadow-sm border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-medium text-sm md:text-base">{benefit.title}</span>
                  <p className="text-xs md:text-sm text-muted-foreground mt-0.5">{benefit.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ClearMark Promise */}
      <div className="container px-4 mx-auto mt-16">
        <div className="rounded-2xl border border-primary/20 bg-primary/5 p-6 md:p-8 text-center max-w-3xl mx-auto">
          <h3 className="font-heading text-xl md:text-2xl font-bold mb-2">The ClearMark Promise</h3>
          <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
            If you're not satisfied, let us know within 48 hours and we'll re-clean the affected area at no extra cost.
          </p>
        </div>
      </div>

      {/* Conversion CTA */}
      <div className="container px-4 mx-auto mt-12">
        <div className="text-center max-w-2xl mx-auto space-y-4">
          <h3 className="font-heading text-2xl md:text-3xl font-bold">Ready for streak-free results?</h3>
          <p className="text-muted-foreground text-sm md:text-base">
            Get a fast, no-obligation quote. Most replies within 2 business hours.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Button asChild size="lg" className="w-full sm:w-auto font-bold">
              <a href="#quote">Get My Free Quote</a>
            </Button>
            <Button asChild variant="outline" size="lg" className="w-full sm:w-auto font-bold">
              <a href="tel:+12263408236">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
