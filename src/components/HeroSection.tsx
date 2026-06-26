import { motion } from "framer-motion";
import coupleImage from "/couplephoto3.png";
import islamicPattern from "@/assets/islamic-pattern.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* Golden glow behind couple */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: "var(--gradient-hero)" }}
      />

      {/* Decorative patterns */}
      <img
        src={islamicPattern}
        alt=""
        className="absolute top-0 left-0 w-24 md:w-36 opacity-15"
      />
      <img
        src={islamicPattern}
        alt=""
        className="absolute top-0 right-0 w-24 md:w-36 opacity-15 rotate-90"
      />

      {/* Sparkles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          className="sparkle"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
            animationDuration: `${2 + Math.random() * 3}s`,
          }}
        />
      ))}

      {/* Bismillah */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
        className="elegant-text text-secondary text-xl md:text-2xl tracking-widest mb-4 text-center"
      >
        ﷽
      </motion.p>

      {/* Quran Verse */}
      <motion.p
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="text-muted-foreground text-[10px] sm:text-xs md:text-sm tracking-[0.15em] sm:tracking-[0.25em] md:tracking-[0.3em] uppercase mb-2 font-body text-center px-4 leading-relaxed"
      >
        And We created you in pairs (Surah An-Naba 78:8)
      </motion.p>

      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="section-divider mb-6"
      />

      {/* Quote */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.4 }}
        className="elegant-text text-muted-foreground text-base md:text-lg italic text-center max-w-xl mb-8"
      >
        <span className="mt-2 inline-block">
          With the blessings of Allah (SWT), our hearts unite in love, faith,
          and mercy as we begin a beautiful journey together.
        </span>
      </motion.p>

      {/* Couple Image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1, delay: 0.4 }}
        className="relative mb-8"
      >
        <div
          className="absolute inset-0 -m-10 rounded-full"
          style={{
            background:
              "radial-gradient(circle, hsl(43 80% 70% / 0.25) 0%, transparent 70%)",
            animation: "glow-pulse 3s ease-in-out infinite",
          }}
        />

        <motion.img
          src={coupleImage}
          alt="Wedding couple"
          className="relative w-64 md:w-80 lg:w-96 drop-shadow-2xl"
          animate={{ y: [0, -15, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </motion.div>

      {/* Couple Details */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="text-center"
      >
        {/* Groom */}
        <h1 className="display-text text-5xl md:text-7xl text-primary mb-2">
          Shamshuddin Nalband
        </h1>

        <p className="text-muted-foreground text-sm md:text-base mb-6 leading-relaxed">
          S/o Anwar Basha Nalband & Haseena Begum Nalband
          <br />
          Nandalur
        </p>

        {/* & */}
        <span className="gold-text text-4xl md:text-5xl display-text italic inline-block my-2">
          &
        </span>

        {/* Bride */}
        <h1 className="display-text text-5xl md:text-7xl text-primary mt-2 mb-2">
          Nafeesa Shaik
        </h1>

        <p className="text-muted-foreground text-sm md:text-base leading-relaxed">
          D/o Zakeer Hussain Shaik & Shajida Shaik
          <br />
          Rajampeta
        </p>
      </motion.div>
    </section>
  );
};

export default HeroSection;