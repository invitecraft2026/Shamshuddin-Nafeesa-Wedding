import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const venue = {
  title: "Wedding Venue",
  venue: "SA1 Function Hall",
  address: "Rajampeta, Andhra Pradesh",
  mapLink: "YOUR_GOOGLE_MAP_LINK",
  embedLocation: "SA1+Function+Hall,+Rajampeta",
};

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
          Venue Location
        </h2>

        <div className="section-divider" />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto glass-card gold-border overflow-hidden rounded-2xl"
      >
        {/* Google Map */}
        <div className="aspect-video relative bg-muted">
          <iframe
            src={`https://www.google.com/maps?q=${venue.embedLocation}&output=embed`}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            title={venue.title}
            className="absolute inset-0"
          />
        </div>

        {/* Venue Details */}
        <div className="p-8 text-center">
          <p className="text-secondary tracking-[0.3em] uppercase text-xs mb-3">
            Wedding Venue
          </p>

          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="w-5 h-5 text-secondary" />

            <h3 className="display-text text-2xl text-primary">
              {venue.venue}
            </h3>
          </div>

          <p className="text-muted-foreground mb-6">
            {venue.address}
          </p>

          <a
            href={venue.mapLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-8 py-3 bg-primary text-primary-foreground hover:opacity-90 transition"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default LocationSection;