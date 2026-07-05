"use client";

import { motion } from "framer-motion";
import { useEffect } from "react";

interface Props {
  next: () => void;
}

export default function Reveal({ next }: Props) {
  useEffect(() => {
    const timer = setTimeout(next, 5000);
    return () => clearTimeout(timer);
  }, [next]);

  return (
    <div className="text-center text-white">

      <motion.h1
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="text-6xl font-bold"
      >
        🤖
      </motion.h1>

      <motion.h2
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-4xl"
      >
        Analyse terminée...
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="mt-6 text-xl text-white/70"
      >
        Je crois avoir trouvé le rendez-vous parfait.
      </motion.p>

    </div>
  );
}