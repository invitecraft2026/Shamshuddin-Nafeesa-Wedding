import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Volume2, VolumeX } from "lucide-react";

interface MusicPlayerProps {
  autoPlay?: boolean;
}

const MusicPlayer = ({ autoPlay = false }: MusicPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audio = new Audio();

    // Provide multiple formats — iOS picks what it supports
    // Best: convert your file to .mp3 and .m4a and host both
    audio.src = "yem_maya_chesave.mp3"; // ← rename/convert your file to mp3
    audio.loop = true;
    audio.volume = 0.4;
    audio.preload = "none"; // don't preload — iOS blocks it anyway

    audio.addEventListener("canplaythrough", () => setIsReady(true));
    audio.addEventListener("error", (e) => {
      console.warn("Audio load error:", e);
    });

    audioRef.current = audio;

    return () => {
      audio.pause();
      audio.src = "";
      audioRef.current = null;
    };
  }, []);

  // autoPlay: only attempt AFTER a user gesture has already happened
  // (e.g. they tapped "Open Invitation" — pass autoPlay=true after that)
  useEffect(() => {
    if (!autoPlay || !audioRef.current) return;

    const tryPlay = async () => {
      try {
        await audioRef.current!.play();
        setIsPlaying(true);
      } catch {
        // iOS blocked it — user must tap the button manually, that's fine
        setIsPlaying(false);
      }
    };

    tryPlay();
  }, [autoPlay]);

  const toggleMusic = async () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      try {
        // On iOS, play() MUST be called directly inside a user gesture handler
        await audioRef.current.play();
        setIsPlaying(true);
      } catch (err) {
        console.warn("Playback failed:", err);
      }
    }
  };

  return (
    <motion.button
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={toggleMusic}
      className="fixed bottom-6 right-6 z-50 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center shadow-lg hover:opacity-90 transition-opacity cursor-pointer"
      style={{ boxShadow: "var(--shadow-gold)" }}
      whileTap={{ scale: 0.9 }}
      aria-label={isPlaying ? "Pause music" : "Play music"}
    >
      <AnimatePresence mode="wait">
        {isPlaying ? (
          <motion.div key="playing" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <Volume2 className="w-5 h-5" />
          </motion.div>
        ) : (
          <motion.div key="paused" initial={{ scale: 0 }} animate={{ scale: 1 }} exit={{ scale: 0 }}>
            <VolumeX className="w-5 h-5" />
          </motion.div>
        )}
      </AnimatePresence>
    </motion.button>
  );
};

export default MusicPlayer;