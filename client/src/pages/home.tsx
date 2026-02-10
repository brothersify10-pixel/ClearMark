import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Services from "@/components/services";
import Locations from "@/components/locations";
import WhyChooseUs from "@/components/why-choose-us";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground font-sans">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <WhyChooseUs />
        <Locations />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
