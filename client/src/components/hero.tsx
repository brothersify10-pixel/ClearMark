import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
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
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      <div className="container relative z-10 px-4 py-20 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6 max-w-2xl"
        >
          <div className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary font-bold text-sm tracking-wide uppercase border border-primary/20">
            Serving Barrie, Innisfil & The GTA
          </div>
          <h1 className="font-heading text-4xl md:text-6xl font-extrabold text-foreground leading-[1.1]">
            We Don't Just Clean Windows, We <span className="text-primary">Transform Views</span>.
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Experience the crystal clear difference with Ontario's most trusted window cleaning service. Residential & Commercial.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button size="lg" className="font-bold text-lg px-8 h-14 shadow-primary/25 shadow-lg hover:shadow-primary/40 transition-all">
              Get an Instant Quote
            </Button>
            <Button size="lg" variant="outline" className="font-bold text-lg px-8 h-14 bg-background/80 backdrop-blur hover:bg-background">
              Our Services
            </Button>
          </div>
          
          <div className="flex items-center gap-6 pt-8 text-sm font-medium text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Fully Insured
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-green-500" />
              Satisfaction Guaranteed
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
