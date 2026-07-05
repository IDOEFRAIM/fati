"use client";

import { motion } from "framer-motion";

interface IntroProps {
  next: () => void;
}

export default function Intro({ next }: IntroProps) {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="flex min-h-screen items-center justify-center px-6"
    >
      <motion.div
        initial={{ y: 40, scale: .95 }}
        animate={{ y: 0, scale: 1 }}
        transition={{
          duration: .8,
          type: "spring",
        }}
        className="max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-10 text-center text-white backdrop-blur-xl shadow-2xl"
      >
        <motion.div
          animate={{
            rotate: [0, 5, -5, 0],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
          }}
          className="text-7xl"
        >
          ✉️
        </motion.div>

        <h1 className="mt-8 text-5xl font-bold">
          Salut :-).
        </h1>

        <p className="mt-8 text-lg text-gray-300 leading-8">
          J'ai besoin de toi pour une mission un peu particulière.
        </p>

        <p className="mt-4 text-lg text-gray-300">
          Le but ?
        </p>

        <p className="mt-3 text-2xl font-semibold">
            Bofff,tu vas le decouvrir
        </p>

        <p className="mt-8 italic text-gray-400">
          (Made by IDEM...)
        </p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          onClick={next}
          className="mt-12 rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-pink-500/40"
        >
          Commencer 🚀
        </motion.button>
      </motion.div>
    </motion.section>
  );
}