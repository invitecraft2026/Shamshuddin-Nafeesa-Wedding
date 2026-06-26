import { motion, AnimatePresence } from "framer-motion";

interface InvitationCoverProps {
  onOpen: () => void;
}

const InvitationCover = ({ onOpen }: InvitationCoverProps) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden"
        style={{ background: "#0d3320" }}
        exit={{ opacity: 0, scale: 1.05 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        {/* Ambient texture overlay */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at 30% 20%, rgba(212,175,55,0.07) 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, rgba(212,175,55,0.05) 0%, transparent 55%)",
          }}
        />

        {/* Gold sparkle dots */}
        {[...Array(28)].map((_, i) => {
          const size = 1.5 + Math.random() * 2.5;
          return (
            <motion.div
              key={i}
              className="absolute rounded-full pointer-events-none"
              style={{
                width: size,
                height: size,
                top: `${5 + Math.random() * 90}%`,
                left: `${5 + Math.random() * 90}%`,
                background: "#D4AF37",
                opacity: 0.25 + Math.random() * 0.4,
              }}
              animate={{ opacity: [0.2, 0.7, 0.2], scale: [1, 1.4, 1] }}
              transition={{
                duration: 2.5 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 3,
                ease: "easeInOut",
              }}
            />
          );
        })}

        {/* Outer gold border frame */}
        <div
          className="relative w-full h-full max-w-sm mx-auto"
          style={{ maxHeight: "96vh" }}
        >
          {/* Double border frame */}
          <div
            className="absolute inset-3 pointer-events-none"
            style={{
              border: "1.5px solid rgba(212,175,55,0.8)",
              borderRadius: 2,
              zIndex: 10,
            }}
          />
          <div
            className="absolute inset-5 pointer-events-none"
            style={{
              border: "0.5px solid rgba(212,175,55,0.4)",
              borderRadius: 1,
              zIndex: 10,
            }}
          />

          {/* Corner ornaments — SVG filigree */}
          {(["tl", "tr", "bl", "br"] as const).map((pos) => {
            const isRight = pos.includes("r");
            const isBottom = pos.includes("b");
            return (
              <svg
                key={pos}
                width="64"
                height="64"
                viewBox="0 0 64 64"
                className="absolute pointer-events-none"
                style={{
                  zIndex: 20,
                  top: isBottom ? undefined : 4,
                  bottom: isBottom ? 4 : undefined,
                  left: isRight ? undefined : 4,
                  right: isRight ? 4 : undefined,
                  transform: `scale(${isRight ? -1 : 1}, ${isBottom ? -1 : 1})`,
                  opacity: 0.85,
                }}
              >
                {/* Corner bracket lines */}
                <path
                  d="M4 4 L4 28 M4 4 L28 4"
                  stroke="#D4AF37"
                  strokeWidth="1.5"
                  fill="none"
                />
                {/* Decorative corner leaf cluster */}
                <g fill="#2d6b3a" stroke="#D4AF37" strokeWidth="0.6">
                  {/* Main leaf top-right */}
                  <ellipse
                    cx="28"
                    cy="12"
                    rx="8"
                    ry="4"
                    transform="rotate(-45 28 12)"
                  />
                  <ellipse
                    cx="38"
                    cy="10"
                    rx="7"
                    ry="3.5"
                    transform="rotate(-30 38 10)"
                  />
                  <ellipse
                    cx="46"
                    cy="16"
                    rx="6"
                    ry="3"
                    transform="rotate(-15 46 16)"
                  />
                  <ellipse
                    cx="12"
                    cy="28"
                    rx="4"
                    ry="8"
                    transform="rotate(-45 12 28)"
                  />
                  <ellipse
                    cx="10"
                    cy="38"
                    rx="3.5"
                    ry="7"
                    transform="rotate(-60 10 38)"
                  />
                  <ellipse
                    cx="16"
                    cy="46"
                    rx="3"
                    ry="6"
                    transform="rotate(-75 16 46)"
                  />
                  {/* Small accent leaves */}
                  <ellipse
                    cx="34"
                    cy="20"
                    rx="5"
                    ry="2.5"
                    transform="rotate(-55 34 20)"
                  />
                  <ellipse
                    cx="20"
                    cy="34"
                    rx="2.5"
                    ry="5"
                    transform="rotate(-35 20 34)"
                  />
                </g>
                {/* Gold stem lines */}
                <path
                  d="M8 8 Q22 14 36 28 Q44 36 52 52"
                  stroke="#D4AF37"
                  strokeWidth="0.8"
                  fill="none"
                  opacity="0.6"
                />
                {/* Tiny white blossom dots */}
                <circle cx="30" cy="8" r="2" fill="white" opacity="0.9" />
                <circle cx="42" cy="12" r="1.5" fill="white" opacity="0.8" />
                <circle cx="50" cy="22" r="1.5" fill="white" opacity="0.8" />
                <circle cx="8" cy="30" r="2" fill="white" opacity="0.9" />
                <circle cx="12" cy="42" r="1.5" fill="white" opacity="0.8" />
                <circle cx="22" cy="50" r="1.5" fill="white" opacity="0.8" />
              </svg>
            );
          })}

          {/* Main content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center px-8 z-30">
            {/* NS Monogram */}
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.9 }}
              className="mb-4"
            >
              <svg width="72" height="80" viewBox="0 0 72 80" fill="none">
                <defs>
                  <linearGradient id="goldGrad" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#F5E07A" />
                    <stop offset="40%" stopColor="#D4AF37" />
                    <stop offset="100%" stopColor="#A87C1F" />
                  </linearGradient>
                </defs>
                {/* N */}
                <path
                  d="M8 16 L8 58 L32 16 L32 58"
                  stroke="url(#goldGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                />
                {/* S */}
                <path
                  d="M42 22 C42 17 50 14 56 16 C64 18 66 26 60 30 C54 34 46 36 44 42 C42 48 46 56 56 58 C62 60 68 56 68 52"
                  stroke="url(#goldGrad)"
                  strokeWidth="5"
                  strokeLinecap="round"
                  fill="none"
                />
              </svg>
            </motion.div>

            {/* Top ornamental divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="flex items-center gap-2 mb-5 w-full justify-center"
            >
              <OrnamentDivider />
            </motion.div>

            {/* "THE WEDDING OF" */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.7 }}
              style={{
                color: "#D4AF37",
                letterSpacing: "0.28em",
                fontSize: "11px",
                fontFamily: "Georgia, serif",
                fontWeight: 600,
                textTransform: "uppercase",
                marginBottom: "16px",
              }}
            >
              The Wedding Of
            </motion.p>

            {/* Groom */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              style={{
                fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
                fontSize: "clamp(36px, 9vw, 52px)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginBottom: "4px",
                textAlign: "center",
              }}
            >
              Shamshuddin
            </motion.h1>

            {/* Leaf & ampersand divider */}
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.35, duration: 0.6 }}
              className="flex items-center gap-3 my-2"
            >
              <LeafBranch flip={false} />
              <span
                style={{
                  fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
                  fontSize: "32px",
                  color: "#D4AF37",
                  fontStyle: "italic",
                  lineHeight: 1,
                }}
              >
                &amp;
              </span>
              <LeafBranch flip={true} />
            </motion.div>

            {/* Bride */}
            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.8 }}
              style={{
                fontFamily: "'Palatino Linotype', Palatino, Georgia, serif",
                fontSize: "clamp(36px, 9vw, 52px)",
                fontWeight: 400,
                color: "#FFFFFF",
                lineHeight: 1.1,
                marginTop: "4px",
                textAlign: "center",
              }}
            >
              Nafeesa
            </motion.h1>

            {/* Bottom divider */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ delay: 1.75, duration: 0.7 }}
              className="flex items-center gap-2 mt-5 mb-7 w-full justify-center"
            >
              <OrnamentDivider />
            </motion.div>

            {/* CTA Button */}
            <motion.button
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.1, duration: 0.7 }}
              whileHover={{ scale: 1.04, boxShadow: "0 0 28px rgba(212,175,55,0.4)" }}
              whileTap={{ scale: 0.97 }}
              onClick={onOpen}
              style={{
                border: "1.5px solid #D4AF37",
                borderRadius: "40px",
                background: "transparent",
                padding: "13px 32px",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "8px",
                color: "#D4AF37",
                fontFamily: "Georgia, serif",
                fontSize: "11px",
                letterSpacing: "0.22em",
                textTransform: "uppercase",
                fontWeight: 500,
                transition: "all 0.25s ease",
              }}
            >
              <span style={{ color: "#D4AF37", fontSize: "14px" }}>⟶</span>
              Tap to Open Invitation
              <span style={{ color: "#D4AF37", fontSize: "14px" }}>⟵</span>
            </motion.button>
          </div>

          {/* Bottom ornament */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.3, duration: 0.8 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center"
            style={{ zIndex: 30 }}
          >
            <svg width="48" height="28" viewBox="0 0 48 28" fill="none">
              <path
                d="M24 2 C20 8 12 10 8 16 C12 14 18 15 24 20 C30 15 36 14 40 16 C36 10 28 8 24 2Z"
                fill="#D4AF37"
                opacity="0.7"
              />
              <circle cx="24" cy="24" r="3" fill="#D4AF37" opacity="0.6" />
              <circle cx="12" cy="20" r="1.5" fill="#D4AF37" opacity="0.4" />
              <circle cx="36" cy="20" r="1.5" fill="#D4AF37" opacity="0.4" />
            </svg>
          </motion.div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

const OrnamentDivider = () => (
  <svg width="220" height="18" viewBox="0 0 220 18" fill="none">
    <line x1="0" y1="9" x2="78" y2="9" stroke="#D4AF37" strokeWidth="0.7" opacity="0.6" />
    <path d="M84 9 C88 4 94 4 98 9 C102 14 108 14 112 9" stroke="#D4AF37" strokeWidth="1" fill="none" />
    <circle cx="110" cy="9" r="3" fill="#D4AF37" opacity="0.8" />
    <path d="M112 9 C116 4 122 4 126 9 C130 14 136 14 140 9" stroke="#D4AF37" strokeWidth="1" fill="none" />
    <line x1="142" y1="9" x2="220" y2="9" stroke="#D4AF37" strokeWidth="0.7" opacity="0.6" />
  </svg>
);

const LeafBranch = ({ flip }: { flip: boolean }) => (
  <svg
    width="60"
    height="22"
    viewBox="0 0 60 22"
    fill="none"
    style={{ transform: flip ? "scaleX(-1)" : undefined }}
  >
    <path d="M2 11 Q20 11 42 6" stroke="#D4AF37" strokeWidth="0.8" opacity="0.7" />
    <ellipse cx="20" cy="8" rx="7" ry="3" transform="rotate(-20 20 8)" fill="#2d6b3a" stroke="#D4AF37" strokeWidth="0.5" />
    <ellipse cx="34" cy="6" rx="6" ry="2.5" transform="rotate(-15 34 6)" fill="#2d6b3a" stroke="#D4AF37" strokeWidth="0.5" />
    <ellipse cx="46" cy="5" rx="5" ry="2" transform="rotate(-10 46 5)" fill="#2d6b3a" stroke="#D4AF37" strokeWidth="0.5" />
    <circle cx="55" cy="4" r="2" fill="white" opacity="0.85" />
    <circle cx="43" cy="3" r="1.5" fill="white" opacity="0.75" />
  </svg>
);

export default InvitationCover;