import { motion } from "framer-motion";
import islamicPattern from "@/assets/islamic-pattern.png";

interface InvitationCoverProps {
  onOpen: () => void;
}

const floatingFlowers = [
  { top: "8%", left: "10%", delay: 0 },
  { top: "18%", right: "12%", delay: 0.5 },
  { bottom: "20%", left: "8%", delay: 1 },
  { bottom: "12%", right: "10%", delay: 1.5 },
  { top: "45%", left: "5%", delay: 2 },
  { top: "55%", right: "6%", delay: 2.5 },
];

const InvitationCover = ({ onOpen }: InvitationCoverProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-primary overflow-hidden"
      exit={{ opacity: 0, scale: 1.1 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-10">
        <img
          src={islamicPattern}
          alt=""
          className="absolute top-4 left-4 w-32 h-32 md:w-48 md:h-48"
        />
        <img
          src={islamicPattern}
          alt=""
          className="absolute top-4 right-4 w-32 h-32 md:w-48 md:h-48 rotate-90"
        />
        <img
          src={islamicPattern}
          alt=""
          className="absolute bottom-4 left-4 w-32 h-32 md:w-48 md:h-48 -rotate-90"
        />
        <img
          src={islamicPattern}
          alt=""
          className="absolute bottom-4 right-4 w-32 h-32 md:w-48 md:h-48 rotate-180"
        />
      </div>

      {/* Floating Floral Aesthetic */}
      {floatingFlowers.map((flower, i) => (
        <motion.div
          key={i}
          className="absolute text-2xl md:text-4xl opacity-70 pointer-events-none"
          style={{
            top: flower.top,
            left: flower.left,
            right: flower.right,
            bottom: flower.bottom,
          }}
          animate={{
            y: [0, -15, 0],
            rotate: [0, 8, -8, 0],
            opacity: [0.5, 0.9, 0.5],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: flower.delay,
            ease: "easeInOut",
          }}
        >
          ✿
        </motion.div>
      ))}

      {/* Sparkles */}
      {[...Array(20)].map((_, i) => (
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

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center px-6 relative z-10"
      >
        {/* Heading */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-gold-light/80 text-sm md:text-lg mb-4 tracking-[0.35em] uppercase font-serif font-semibold"
        >
          The Wedding of
        </motion.p>

        {/* Groom */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="display-text text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-2"
        >
          Anas
        </motion.h1>

        {/* Ampersand */}
        <motion.span
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="gold-text text-3xl md:text-4xl display-text italic inline-block my-2"
        >
          &
        </motion.span>

        {/* Bride */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.8 }}
          className="display-text text-4xl md:text-6xl lg:text-7xl text-primary-foreground mb-6"
        >
          Anshidha
        </motion.h1>

        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.8, duration: 0.8 }}
          className="section-divider mb-8"
        />

        {/* Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.4, duration: 0.6 }}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 0 40px hsl(43 72% 55% / 0.5)",
          }}
          whileTap={{ scale: 0.95 }}
          onClick={onOpen}
          className="px-10 py-4 rounded-full border-2 border-gold text-gold-light font-body tracking-[0.2em] uppercase text-sm hover:bg-gold/10 transition-all duration-300 cursor-pointer"
        >
          Tap to Open Invitation
        </motion.button>
      </motion.div>
    </motion.div>
  );
};

export default InvitationCover;