import { CheckCircle2 } from "lucide-react";
import teamImage from "@/assets/team-van.png";

export default function WhyChooseUs() {
  const benefits = [
    "Fully Insured & WSIB Compliant",
    "Background Checked Professionals",
    "100% Satisfaction Guarantee",
    "Eco-Friendly Cleaning Solutions",
    "Uniformed & Professional Team",
    "Competitive, Transparent Pricing"
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
              Why Choose <span className="text-primary">Crystal Clear</span>?
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              We're not just window cleaners; we're your neighbors. Serving the entire GTA and Simcoe County area with a smile, we bring a level of professionalism that's hard to find in the industry.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex items-center gap-3 p-3 bg-background rounded-lg shadow-sm border border-border/50">
                <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                <span className="font-medium text-sm md:text-base">{benefit}</span>
              </div>
            ))}
          </div>

          <div className="pt-4 border-t border-border/50">
            <p className="font-heading font-bold text-2xl text-primary">
              "We treat your home like our own."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
