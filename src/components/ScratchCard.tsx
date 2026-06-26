import { useRef, useState, useCallback, useEffect } from "react";
import { motion } from "framer-motion";

const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);
  const scratchPercentRef = useRef(0);

  // Google Calendar Link
  const googleCalendarLink =
    "https://calendar.google.com/calendar/render?action=TEMPLATE" +
    "&text=Shamshuddin+%26+Nafeesa+Nikah" +
    "&dates=20260802T120000/20260802T140000" +
    "&details=Nikah+%26+Valima+Ceremony" +
    "&location=SA1+Function+Hall,+Rajampeta" +
    "&sf=true&output=xml";

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * 2;
    canvas.height = rect.height * 2;
    ctx.scale(2, 2);

    // Gold gradient cover
    const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height);
    gradient.addColorStop(0, "#c9a84c");
    gradient.addColorStop(0.3, "#f0d78c");
    gradient.addColorStop(0.5, "#dbb84d");
    gradient.addColorStop(0.7, "#f0d78c");
    gradient.addColorStop(1, "#c9a84c");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, rect.width, rect.height);

    // Scratch text
    // ctx.fillStyle = "#8a6e2f";
    // ctx.font = `bold 14px 'Playfair Display', serif`;
    // ctx.textAlign = "center";
    // ctx.fillText(
    //   "✦ Hidden with love... reveal it ✦",
    //   rect.width / 2,
    //   rect.height / 2 - 10
    // );

    // ctx.font = `12px 'Lato', sans-serif`;
    // ctx.fillText(
    //   "the Wedding Date",
    //   rect.width / 2,
    //   rect.height / 2 + 14
    // );
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = canvas.getBoundingClientRect();
    const cx = x - rect.left;
    const cy = y - rect.top;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(cx, cy, 22, 0, Math.PI * 2);
    ctx.fill();

    // Scratch percentage
    scratchPercentRef.current += 0.5;

    if (scratchPercentRef.current > 40) {
      setIsRevealed(true);
    }
  };

  const handleMove = (clientX: number, clientY: number) => {
    if (isScratching) scratch(clientX, clientY);
  };

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-sm mx-auto text-center"
      >
        <p className="text-muted-foreground tracking-[0.3em] uppercase text-xs mb-2 font-body">
          Interactive
        </p>

        <h2 className="display-text text-3xl md:text-4xl text-primary mb-2">
          Save the Date
        </h2>

        <div className="section-divider mb-8" />

       <div className="relative w-full h-[300px] md:h-[340px] rounded-2xl overflow-hidden gold-border">
          {/* Revealed Content */}
          <div className="absolute inset-0 bg-[#0d1512] px-6 py-5 text-center flex items-center justify-center">
            <motion.div
              initial={false}
              animate={
                isRevealed
                  ? { opacity: 1, scale: 1 }
                  : { opacity: 0.3, scale: 0.95 }
              }
             className="flex flex-col items-center"
            >
              {/* Title */}
              <div>
                {/* <h2 className="display-text text-4xl md:text-5xl text-gold mb-8">
                  Save The Date
                </h2> */}

                {/* Couple */}
                <p  className="tracking-[0.35em] uppercase text-[11px] text-[#d8a8b8] mb-4">
                  SHAMSHUDDIN ♥ NAFEESA
                </p>

                {/* Date */}
                <h1 className="display-text text-[2.3rem] md:text-[2.8rem] text-gold leading-none">
  02 • 08 • 2026
</h1>

                {/* Day & Time */}
                <p className="mt-3 text-lg md:text-xl text-primary-foreground/90 elegant-text">
                  Sunday • 12:00 PM
                </p>

                {/* Venue */}
                <div className="mt-5 space-y-1">
                  <p className="text-[#d8a8b8] text-base md:text-lg elegant-text">
                    SA1 Function Hall
                  </p>

                  <p className="text-[#d8a8b8] text-base md:text-lg elegant-text">
                    Rajampeta
                  </p>
                </div>
              </div>

              {/* Calendar Button */}
              
            </motion.div>
          </div>

          {/* Scratch Canvas */}
          <canvas
            ref={canvasRef}
            className={`absolute inset-0 w-full h-full cursor-pointer transition-opacity duration-700 ${
              isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
            onMouseDown={() => setIsScratching(true)}
            onMouseUp={() => setIsScratching(false)}
            onMouseLeave={() => setIsScratching(false)}
            onMouseMove={(e) => handleMove(e.clientX, e.clientY)}
            onTouchStart={() => setIsScratching(true)}
            onTouchEnd={() => setIsScratching(false)}
            onTouchMove={(e) => {
              const touch = e.touches[0];
              handleMove(touch.clientX, touch.clientY);
            }}
          />
        </div>
{/* Add to Calendar Button (Outside Card) */}
{isRevealed && (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: 0.3 }}
    className="mt-8"
  >
    <motion.a
      href={googleCalendarLink}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      className="inline-flex items-center gap-3 rounded-full border-2 border-[#c9a84c] bg-[#0d1512] px-8 py-4 text-[#d4af37] font-medium transition-all duration-300 hover:bg-[#c9a84c]/10"
    >
      📅 Add to Google Calendar
    </motion.a>
  </motion.div>
)}
        {!isRevealed && (
          <p className="text-muted-foreground text-sm mt-4 font-body animate-pulse">
            ↑ Use your finger or mouse to scratch ↑
          </p>
        )}
      </motion.div>
    </section>
  );
};

export default ScratchCard;
