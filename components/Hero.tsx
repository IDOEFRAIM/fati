"use client";

import { motion } from "framer-motion";

interface HeroProps {
  next: () => void;
}

export default function Hero({ next }: HeroProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: .9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: .8 }}
      className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl text-center text-white shadow-2xl"
    >
      <motion.div
        animate={{
          rotate: [0, 8, -8, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 4,
        }}
        className="text-7xl"
      >
        💌
      </motion.div>

      <h1 className="mt-8 text-5xl font-bold">
        Bienvenue.
      </h1>

      <p className="mt-6 text-lg leading-8 text-gray-200">
        J'ai besoin de toi pour une mission.
      </p>

      <p className="mt-3 text-lg text-gray-300">
        On va organiser...
      </p>

      <p className="text-2xl font-semibold mt-2">
        notre premier faux rendez-vous.
      </p>

      <p className="mt-8 italic text-gray-400">
        (Qui n'aura probablement jamais lieu... 👀)
      </p>

      <motion.button
        whileHover={{
          scale: 1.05,
        }}
        whileTap={{
          scale: .95,
        }}
        onClick={next}
        className="mt-12 rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold shadow-xl shadow-pink-500/40"
      >
        Accepter la mission 🚀
      </motion.button>
    </motion.div>
  );
}