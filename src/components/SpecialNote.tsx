import { motion } from "framer-motion";

const SpecialNote = () => {
  return (
    <section className="py-24 px-4 text-center relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto"
      >
        {/* Top Divider */}
        <div className="section-divider mb-10" />

        {/* Title */}
        <p className="text-secondary tracking-[0.4em] uppercase text-xs md:text-sm font-body mb-8 font-semibold">
          Special Note
        </p>

        {/* Simple Quote */}
        <p className="text-primary text-base md:text-xl leading-loose font-serif italic font-medium px-2 md:px-6">
          With the blessings of
          <span className="text-secondary font-semibold">
            {" "}Allah (SWT)
          </span>
          , we begin this beautiful journey together.
          Your presence, prayers, and blessings will make our
          <span className="text-secondary font-semibold">
            {" "}Nikah &amp; Valima
          </span>
          {" "}even more memorable.
        </p>

        {/* Bottom Divider */}
        <div
          className="w-20 h-0.5 mx-auto mt-10"
          style={{
            background: "var(--gradient-gold)",
          }}
        />
      </motion.div>
    </section>
  );
};

export default SpecialNote;