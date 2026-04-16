
import { motion } from 'motion/react';

export default function Header() {
  return (
    <header className="mb-8 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <h1 className="text-[32px] font-semibold tracking-[-0.02em] text-sleek-main mb-1">
          The Library
        </h1>
        <p className="text-[18px] text-sleek-main font-medium mb-2">
          A curated collection of operational data science systems.
        </p>
        <p className="text-[14px] text-sleek-sub leading-normal">
          Use these systems to explore real-world questions before committing resources.
        </p>
      </motion.div>
    </header>
  );
}
