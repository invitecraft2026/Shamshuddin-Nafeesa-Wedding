import { motion } from "framer-motion";
import { Heart, Send } from "lucide-react";
import { useState } from "react";

const WeddingWishes = () => {
  const [guestName, setGuestName] = useState("");
  const [message, setMessage] = useState("");

  const whatsappNumber = "9747457461";

  const handleSendWish = () => {
    const text = `Hi, I am ${guestName || "Your Guest"} 💌

${message || "Wishing you both a lifetime of happiness, love, and endless blessings. May Allah bless your beautiful journey together 🤍✨"}`;

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      text
    )}`;

    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="py-24 px-4 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-2xl mx-auto text-center"
      >
        {/* Top Title */}
        <p className="text-secondary tracking-[0.35em] uppercase text-xs md:text-sm font-body mb-3">
          Bless The Couple
        </p>

        <h2 className="display-text text-3xl md:text-5xl text-primary mb-3">
          Send Your Wishes
        </h2>

        <div className="section-divider mb-10" />

        <p className="text-muted-foreground text-sm md:text-base font-body leading-relaxed mb-10 max-w-lg mx-auto">
          Your blessings mean the world to us. Share your warm wishes,
          prayers, and love for our new journey together.
        </p>

        {/* Form Card */}
        <div className="glass-card gold-border rounded-3xl p-6 md:p-10 text-left">
          {/* Name */}
          <div className="mb-6">
            <label className="block text-sm font-body text-primary mb-2">
              Your Name
            </label>

            <input
              type="text"
              placeholder="Enter your beautiful name"
              value={guestName}
              onChange={(e) => setGuestName(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-border bg-background/70 outline-none focus:ring-2 focus:ring-secondary font-body"
            />
          </div>

          {/* Message */}
          <div className="mb-8">
            <label className="block text-sm font-body text-primary mb-2">
              Your Blessing Message
            </label>

            <textarea
              rows={5}
              placeholder="Write your heartfelt wishes here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full px-5 py-4 rounded-xl border border-border bg-background/70 outline-none focus:ring-2 focus:ring-secondary resize-none font-body"
            />
          </div>

          {/* Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.97 }}
            onClick={handleSendWish}
            className="w-full flex items-center justify-center gap-3 px-6 py-4 rounded-full bg-primary text-primary-foreground font-body tracking-wide text-sm md:text-base hover:opacity-90 transition-all duration-300"
          >
            <Heart className="w-5 h-5" />
            Send Wishes on WhatsApp
            <Send className="w-5 h-5" />
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default WeddingWishes;