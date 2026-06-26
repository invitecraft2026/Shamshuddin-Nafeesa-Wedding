import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const locations = [
  {
    title: "Nikah Venue",
    venue: "Ajwa Convention Centre",
    address: "Padapparamb",
    mapLink:
      "https://maps.app.goo.gl/452GYe9NYr4BsuZN8",
    embedLocation:
      "Ajwa+Convention+Centre,+Padapparamb",
  },
  {
    title: "Valima Reception",
    venue: "Groom House",
    address: "Puliyodan House, Omanoor",
    mapLink:
      "https://maps.app.goo.gl/yFkT71JktaYC9nqz8",
    embedLocation:
      "Puliyodan+House,+Omanoor",
  },
];

const LocationSection = () => {
  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-12"
      >
        <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-2 font-body">
          Find Us
        </p>

        <h2 className="display-text text-3xl md:text-4xl text-primary mb-2">
          Venue Locations
        </h2>

        <div className="section-divider" />
      </motion.div>

      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2">
        {locations.map((location, i) => (
          <motion.div
            key={location.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.8,
              delay: i * 0.2,
            }}
            className="glass-card gold-border overflow-hidden rounded-2xl"
          >
            {/* Map */}
            <div className="aspect-video bg-muted relative">
              <iframe
                src={`https://www.google.com/maps?q=${location.embedLocation}&output=embed`}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title={location.title}
                className="absolute inset-0"
              />
            </div>

            {/* Content */}
            <div className="p-6 text-center">
              <p className="text-secondary text-sm tracking-widest uppercase mb-2 font-body">
                {location.title}
              </p>

              <div className="flex items-center justify-center gap-2 mb-3">
                <MapPin className="w-5 h-5 text-secondary" />

                <h3 className="display-text text-xl text-primary">
                  {location.venue}
                </h3>
              </div>

              <p className="text-muted-foreground text-sm font-body mb-5">
                {location.address}
              </p>

              <a
                href={location.mapLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary text-primary-foreground font-body text-sm tracking-wider hover:opacity-90 transition-opacity"
              >
                <Navigation className="w-4 h-4" />
                Get Directions
              </a>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default LocationSection;