import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import InvitationCover from "@/components/InvitationCover";
import HeroSection from "@/components/HeroSection";
import ScratchCard from "@/components/ScratchCard";
import CountdownTimer from "@/components/CountdownTimer";
import EventDetails from "@/components/EventDetails";
import LocationSection from "@/components/LocationSection";
import Gallery from "@/components/Gallery";
import MusicPlayer from "@/components/MusicPlayer";
import islamicPattern from "@/assets/islamic-pattern.png";
import SpecialNote from "@/components/SpecialNote";
import WeddingWishes from "@/components/WeddingWishes";

const Index = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence>
        {!isOpen && <InvitationCover onOpen={() => setIsOpen(true)} />}
      </AnimatePresence>

      {isOpen && (
        <>
          <MusicPlayer autoPlay />

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <HeroSection />
            <ScratchCard />
            <CountdownTimer />
            <EventDetails />
            <SpecialNote/>
            <WeddingWishes/>
            <LocationSection />
            {/* <Gallery /> */}

            {/* Footer */}
           <footer className="py-20 px-4 text-center relative overflow-hidden">
  <img
    src={islamicPattern}
    alt=""
    className="absolute bottom-0 left-1/2 -translate-x-1/2 w-40 opacity-10"
  />

  <div className="section-divider mb-10" />

  {/* Elegant Ending Note */}
  <div className="max-w-3xl mx-auto relative z-10">
    <p className="text-secondary tracking-[0.35em] uppercase text-xs md:text-sm font-body mb-6">
      A Final Note
    </p>

    <p className="text-primary/90 text-lg md:text-xl leading-loose font-serif italic tracking-wide mb-8">
  To our favorite souls,
  <br />
  A new chapter begins,
  <br />
  A shared prayer unfolds,
  <br />
  And our Nikah marks the start of forever.
  <br />
  <br />
  Insha'Allah, as our two worlds unite, we look forward to being
  surrounded by the faces that have always supported us,
  loved us, and prayed for us.
  <br />
  Your presence is our joy,
  <br />
  and your prayers are our greatest blessing.
</p>

    <div
      className="w-20 h-0.5 mx-auto mb-6"
      style={{ background: "var(--gradient-gold)" }}
    />

    <p className="elegant-text text-primary text-xl md:text-2xl italic mb-2">
      With love
    </p>

    <h3 className="display-text text-3xl md:text-4xl text-primary">
      Anas & Anshidha
    </h3>
  </div>
</footer>
          </motion.div>
        </>
      )}
    </div>
  );
};

export default Index;
