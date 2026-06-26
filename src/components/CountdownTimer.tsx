import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/*
Wedding Date
Sunday, August 2, 2026
Nikah & Valima
12:00 PM
Venue: SA1 Function Hall, Rajampeta
*/

const WEDDING_DATE = new Date("2026-08-02T12:00:00").getTime();

const CountdownTimer = () => {
  const getTimeLeft = () => {
    const diff = Math.max(0, WEDDING_DATE - Date.now());

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: timeLeft.days },
    { label: "Hours", value: timeLeft.hours },
    { label: "Minutes", value: timeLeft.minutes },
    { label: "Seconds", value: timeLeft.seconds },
  ];

  return (
    <section className="py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        {/* Heading */}
        <p className="text-muted-foreground tracking-[0.25em] uppercase text-xs mb-2 font-body">
          Counting Down To
        </p>

        <h2 className="display-text text-3xl md:text-4xl text-primary mb-2">
          Our Special Day
        </h2>

        <div className="section-divider mb-4" />

        <p className="text-muted-foreground text-sm md:text-base mb-10">
          Sunday, August 2, 2026 • 12:00 PM
        </p>

        {/* Countdown */}
        <div className="grid grid-cols-4 gap-3 md:gap-5 max-w-lg mx-auto">
          {units.map((unit, index) => (
            <motion.div
              key={unit.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                delay: index * 0.1,
                duration: 0.5,
              }}
              className="glass-card gold-border rounded-2xl py-5 px-2"
            >
              <motion.div
                key={unit.value}
                initial={{ scale: 1.15, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.25 }}
                className="display-text text-2xl sm:text-3xl md:text-5xl text-primary"
              >
                {String(unit.value).padStart(2, "0")}
              </motion.div>

              <div className="mt-2 text-[10px] md:text-sm uppercase tracking-[0.2em] text-muted-foreground">
                {unit.label}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Quote */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6 }}
          className="mt-10 max-w-xl mx-auto text-muted-foreground italic text-sm md:text-base"
        >
          "Every passing second brings us closer to the blessed moment
          Allah has written for us."
        </motion.p>
      </motion.div>
    </section>
  );
};

export default CountdownTimer;