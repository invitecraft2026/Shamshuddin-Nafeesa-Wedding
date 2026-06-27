import { motion, AnimatePresence } from "framer-motion";

// Import your flower corner/side images
import flowerLeftTop from "/flowerleft-t.png";
import flowerRightTop from "/flowerright-t.png";
import flowerLeftBottom from "/flowerleft-b.png";
import flowerRightBottom from "/flowerright-b.png";

import namesMonogram from "/names.png";

interface InvitationCoverProps {
  onOpen: () => void;
}

const OrnamentDivider = () => (
  <svg width="240" height="18" viewBox="0 0 240 18" fill="none">
    <line
      x1="0"
      y1="9"
      x2="90"
      y2="9"
      stroke="#D4AF37"
      strokeWidth="0.7"
      opacity="0.6"
    />
    <path
      d="M96 9 C100 4 106 4 110 9 C114 14 120 14 124 9"
      stroke="#D4AF37"
      strokeWidth="1"
      fill="none"
    />
    <circle cx="122" cy="9" r="3.5" fill="#D4AF37" opacity="0.85" />
    <path
      d="M124 9 C128 4 134 4 138 9 C142 14 148 14 152 9"
      stroke="#D4AF37"
      strokeWidth="1"
      fill="none"
    />
    <line
      x1="150"
      y1="9"
      x2="240"
      y2="9"
      stroke="#D4AF37"
      strokeWidth="0.7"
      opacity="0.6"
    />
  </svg>
);

const LeafBranch = ({ flip }: { flip: boolean }) => (
  <svg
    width="70"
    height="24"
    viewBox="0 0 70 24"
    fill="none"
    style={{ transform: flip ? "scaleX(-1)" : undefined }}
  >
    <path
      d="M2 12 Q24 12 50 6"
      stroke="#D4AF37"
      strokeWidth="0.8"
      opacity="0.65"
    />
    <ellipse
      cx="22"
      cy="9"
      rx="8"
      ry="3.2"
      transform="rotate(-20 22 9)"
      fill="#2d6b3a"
      stroke="#D4AF37"
      strokeWidth="0.5"
    />
    <ellipse
      cx="36"
      cy="6.5"
      rx="7"
      ry="2.8"
      transform="rotate(-13 36 6.5)"
      fill="#245c30"
      stroke="#D4AF37"
      strokeWidth="0.5"
    />
    <ellipse
      cx="50"
      cy="5.5"
      rx="5.5"
      ry="2.2"
      transform="rotate(-7 50 5.5)"
      fill="#2d6b3a"
      stroke="#D4AF37"
      strokeWidth="0.5"
    />
    <circle cx="60" cy="4.5" r="2.2" fill="white" opacity="0.88" />
    <circle cx="47" cy="2.8" r="1.6" fill="white" opacity="0.76" />
  </svg>
);

const InvitationCover = ({ onOpen }: InvitationCoverProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{ background: "#0c311e" }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* ── Ambient glow ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 25% 20%, rgba(212,175,55,0.07) 0%, transparent 55%), radial-gradient(ellipse at 75% 78%, rgba(212,175,55,0.06) 0%, transparent 50%)",
          }}
        />

        {/* ── Animated sparkle dots ── */}
        {[...Array(30)].map((_, i) => {
          const size = 1.5 + Math.random() * 2.5;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: size,
                height: size,
                top: `${4 + Math.random() * 92}%`,
                left: `${4 + Math.random() * 92}%`,
                background: "#D4AF37",
              }}
              animate={{ opacity: [0.15, 0.65, 0.15], scale: [1, 1.5, 1] }}
              transition={{
                duration: 2.5 + Math.random() * 2.5,
                repeat: Infinity,
                delay: Math.random() * 4,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* ── Full-screen gold double border frame ── */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ zIndex: 10 }}
        >
          {/* Outer border */}
          <div
            className="absolute"
            style={{
              inset: "clamp(8px, 2vw, 20px)",
              border: "1.5px solid rgba(212,175,55,0.82)",
            }}
          />
          {/* Inner border */}
          <div
            className="absolute"
            style={{
              inset: "clamp(14px, 3vw, 32px)",
              border: "0.6px solid rgba(212,175,55,0.38)",
            }}
          />
        </div>

        {/* ══════════════════════════════════════
            FLOWER CORNER IMAGES
            Each image is absolutely placed at its
            corner with z-index above the border frame.
            clamp() sizes them to look right on any screen.
        ══════════════════════════════════════ */}

        {/* Top-left corner flower */}
        <motion.img
          src={flowerLeftTop}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.9 }}
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "clamp(120px, 18vw, 220px)",
            height: "auto",
            pointerEvents: "none",
            zIndex: 20,
            objectFit: "contain",
          }}
        />

        {/* Top-right corner flower */}
        <motion.img
          src={flowerRightTop}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.9 }}
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: "clamp(120px, 18vw, 220px)",
            height: "auto",
            pointerEvents: "none",
            zIndex: 20,
            objectFit: "contain",
          }}
        />

        {/* Bottom-left corner flower */}
        <motion.img
          src={flowerLeftBottom}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.9 }}
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: "clamp(120px, 18vw, 220px)",
            height: "auto",
            pointerEvents: "none",
            zIndex: 20,
            objectFit: "contain",
          }}
        />

        {/* Bottom-right corner flower */}
        <motion.img
          src={flowerRightBottom}
          alt=""
          aria-hidden="true"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.9 }}
          style={{
            position: "absolute",
            bottom: 0,
            right: 0,
            width: "clamp(120px, 18vw, 220px)",
            height: "auto",
            pointerEvents: "none",
            zIndex: 20,
            objectFit: "contain",
          }}
        />

        {/* ── Centred content ── */}
        <div
          className="relative z-30 flex flex-col items-center text-center px-10"
          style={{ width: "100%", maxWidth: 560 }}
        >
          {/* NS Monogram */}
          {/* NS Monogram + ornament image — replaces SVG and top divider */}
          <motion.div
            initial={{ opacity: 0, y: -22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.9 }}
            style={{ marginBottom: "clamp(16px, 3vh, 28px)" }}
          >
            <img
              src={namesMonogram}
              alt="NS monogram"
              style={{
                width: "clamp(140px, 22vw, 260px)",
                height: "auto",
                objectFit: "contain",
                display: "block",
                margin: "0 auto",
              }}
            />
          </motion.div>

          {/* "THE WEDDING OF" */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.7 }}
            style={{
              color: "#D4AF37",
              letterSpacing: "0.3em",
              fontSize: "clamp(10px, 1.2vw, 13px)",
              fontFamily: "Georgia, serif",
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "clamp(12px, 2.5vh, 22px)",
            }}
          >
            The Wedding Of
          </motion.p>

          {/* Groom name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{
              fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
              fontSize: "clamp(38px, 7vw, 72px)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.05,
              marginBottom: "clamp(2px, 0.5vh, 6px)",
            }}
          >
            Shamshuddin
          </motion.h1>

          {/* Leaf & ampersand row */}
          <motion.div
            initial={{ opacity: 0, scale: 0.6 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.35, duration: 0.6 }}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "clamp(8px, 1.5vw, 16px)",
              margin: "clamp(6px, 1vh, 12px) 0",
            }}
          >
            <LeafBranch flip={false} />
            <span
              style={{
                fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
                fontSize: "clamp(28px, 4vw, 40px)",
                color: "#D4AF37",
                fontStyle: "italic",
                lineHeight: 1,
              }}
            >
              &amp;
            </span>
            <LeafBranch flip={true} />
          </motion.div>

          {/* Bride name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            style={{
              fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
              fontSize: "clamp(38px, 7vw, 72px)",
              fontWeight: 400,
              color: "#FFFFFF",
              lineHeight: 1.05,
              marginTop: "clamp(2px, 0.5vh, 6px)",
            }}
          >
            Nafeesa
          </motion.h1>

          {/* Bottom ornamental divider */}
          <motion.div
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ delay: 1.75, duration: 0.7 }}
            style={{
              marginTop: "clamp(14px, 2.5vh, 28px)",
              marginBottom: "clamp(18px, 3vh, 36px)",
            }}
          >
            <OrnamentDivider />
          </motion.div>

          {/* CTA button */}
          <motion.button
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.1, duration: 0.7 }}
            whileHover={{
              scale: 1.04,
              boxShadow: "0 0 32px rgba(212,175,55,0.38)",
            }}
            whileTap={{ scale: 0.97 }}
            onClick={onOpen}
            style={{
              border: "1.5px solid #D4AF37",
              borderRadius: "40px",
              background: "transparent",
              padding: "clamp(10px, 1.5vh, 15px) clamp(24px, 4vw, 44px)",
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              gap: "clamp(6px, 1vw, 10px)",
              color: "#D4AF37",
              fontFamily: "Georgia, serif",
              fontSize: "clamp(9px, 1vw, 12px)",
              letterSpacing: "0.22em",
              textTransform: "uppercase",
              fontWeight: 500,
              transition: "all 0.25s ease",
            }}
          >
            <span style={{ fontSize: "clamp(12px, 1.4vw, 16px)" }}>⟶</span>
            Tap to Open Invitation
            <span style={{ fontSize: "clamp(12px, 1.4vw, 16px)" }}>⟵</span>
          </motion.button>
        </div>

        {/* Bottom centre ornament */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.3, duration: 0.9 }}
          style={{
            position: "absolute",
            bottom: "clamp(18px, 4vh, 44px)",
            left: "50%",
            transform: "translateX(-50%)",
            zIndex: 30,
          }}
        >
          <svg width="54" height="32" viewBox="0 0 54 32" fill="none">
            <path
              d="M27 2 C22 9 13 11 8 18 C13 16 20 17 27 23 C34 17 41 16 46 18 C41 11 32 9 27 2Z"
              fill="#D4AF37"
              opacity="0.68"
            />
            <circle cx="27" cy="28" r="3.5" fill="#D4AF37" opacity="0.55" />
            <circle cx="13" cy="23" r="1.8" fill="#D4AF37" opacity="0.38" />
            <circle cx="41" cy="23" r="1.8" fill="#D4AF37" opacity="0.38" />
          </svg>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

export default InvitationCover;
