import { MapPin } from "lucide-react";

export default function Locations() {
  const areas = [
    "Barrie", "Innisfil", "Newmarket", "Aurora", 
    "Vaughan", "Richmond Hill", "Markham", "Toronto (GTA)"
  ];

  return (
    <section id="locations" className="py-24 bg-primary text-primary-foreground relative overflow-hidden">
      {/* Abstract Pattern Overlay */}
      <div className="absolute inset-0 opacity-10" 
           style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px' }}>
      </div>

      <div className="container px-4 mx-auto relative z-10 text-center">
        <h2 className="font-heading text-3xl md:text-5xl font-bold mb-6">
          Proudly Serving Ontario
        </h2>
        <p className="text-primary-foreground/80 text-lg max-w-2xl mx-auto mb-12">
          From the shores of Lake Simcoe to the heart of the GTA, our trucks are in your neighborhood.
        </p>

        <div className="flex flex-wrap justify-center gap-4">
          {areas.map((area) => (
            <div 
              key={area}
              className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-6 py-3 rounded-full font-bold border border-white/20 hover:bg-white/20 transition-colors cursor-default"
            >
              <MapPin className="w-4 h-4" />
              {area}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
