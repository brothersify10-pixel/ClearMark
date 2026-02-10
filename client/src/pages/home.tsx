import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Locations from "@/components/locations";
import WhyChooseUs from "@/components/why-choose-us";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  const [showSticky, setShowSticky] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > 200);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans pb-20 md:pb-0">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Locations />
        <ContactSection />
      </main>
      <Footer />

      {showSticky && (
        <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white border-t shadow-[0_-2px_8px_rgba(0,0,0,0.08)] px-4 py-3 flex gap-3">
          <a
            href="tel:+12263408236"
            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-bold rounded-lg border border-border bg-background hover:bg-muted transition-colors"
          >
            <Phone className="w-4 h-4" />
            Call Now
          </a>
          <button
            onClick={() => document.getElementById("quote")?.scrollIntoView({ behavior: "smooth" })}
            className="flex-1 px-4 py-2.5 text-sm font-bold text-white bg-primary rounded-lg hover:bg-primary/90 transition-colors"
          >
            Get Quote
          </button>
        </div>
      )}
    </div>
  );
}
