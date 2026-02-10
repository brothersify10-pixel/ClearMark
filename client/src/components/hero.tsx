import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Shield, CheckCircle, Award, Phone } from "lucide-react";
import heroImage from "@/assets/hero-window-clean.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[80vh] flex items-center justify-center overflow-hidden bg-foreground/5">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Professional Window Cleaning"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 py-16 md:py-24 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8 max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase border border-primary/20">
            Serving Barrie, Innisfil & The GTA
          </div>
          
          <div className="space-y-4">
            <h1 className="font-heading text-4xl md:text-7xl font-extrabold text-foreground leading-[1.1] tracking-tight">
              We Don't Just Clean Windows, We <span className="text-primary">Transform Views</span>.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Streak-free window cleaning using professional equipment, trained technicians, and a real satisfaction guarantee.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
            <Button asChild size="lg" className="w-full sm:w-auto font-bold text-xl px-10 h-16 shadow-primary/25 shadow-xl hover:shadow-primary/40 transition-all scale-105">
              <a href="#quote">Get My Free Quote</a>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto font-bold text-base px-8 h-12 bg-background/50 backdrop-blur hover:bg-background">
              <a href="tel:+12263408236">
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-4">
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
              <Shield className="h-5 w-5 text-primary" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
              <Award className="h-5 w-5 text-primary" />
              <span>WSIB Compliant</span>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-foreground/80">
              <CheckCircle className="h-5 w-5 text-primary" />
              <span>48-Hour Re-Clean Guarantee</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
