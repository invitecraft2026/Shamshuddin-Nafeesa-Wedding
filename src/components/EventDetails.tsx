import { motion } from "framer-motion";
import { Clock, MapPin } from "lucide-react";

const events = [
  {
    title: "Shukrana",
    icon: "🤲",
    date: "Saturday, August 1, 2026",
    time: "8:00 PM",
    venue: "SA1 Function Hall",
    address: "Rajampeta",
  },
  {
    title: "Nikah & Valima",
    icon: "🕌",
    date: "Sunday, August 2, 2026",
    time: "12:00 PM",
    venue: "SA1 Function Hall",
    address: "Rajampeta",
  },
];

const EventDetails = () => {
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
          Join Us
        </p>

        <h2 className="display-text text-3xl md:text-4xl text-primary mb-2">
          Event Details
        </h2>

        <div className="section-divider" />
      </motion.div>

      <div className="max-w-3xl mx-auto grid gap-6 md:grid-cols-2">
        {events.map((event, i) => (
          <motion.div
            key={event.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              delay: i * 0.2,
              duration: 0.6,
            }}
            whileHover={{ y: -5 }}
            className="glass-card p-8 text-center gold-border rounded-2xl"
          >
            <span className="text-5xl mb-5 block">
              {event.icon}
            </span>

            <h3 className="display-text text-2xl text-primary mb-5">
              {event.title}
            </h3>

            <div className="space-y-4">
              <p className="elegant-text text-secondary text-lg font-semibold">
                {event.date}
              </p>

              <div className="flex items-center justify-center gap-2 text-muted-foreground">
                <Clock className="w-4 h-4 text-secondary" />
                <span className="text-sm font-body">
                  {event.time}
                </span>
              </div>

              <div
                className="w-14 h-0.5 mx-auto"
                style={{
                  background: "var(--gradient-gold)",
                }}
              />

              <div className="flex items-center justify-center gap-2 text-foreground">
                <MapPin className="w-4 h-4 text-secondary" />
                <span className="font-body font-semibold text-base">
                  {event.venue}
                </span>
              </div>

              <p className="text-muted-foreground text-sm">
                {event.address}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default EventDetails;