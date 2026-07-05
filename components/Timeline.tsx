"use client";

import { motion } from "framer-motion";

interface Profile {
  place?: string;
  activity?: string;
  food?: string;
  music?: string;
}

interface Props {
  profile: Profile;
  next: () => void;
}

export default function Timeline({
  profile,
  next,
}: Props) {

  const events = [
    `☀️ On commence la journée dans ${profile.place ?? "un endroit magnifique"}.`,
    `☕ Ensuite : ${profile.activity ?? "une longue balade"}.`,
    `🍽️ On partage ${profile.food ?? "quelque chose de bon"}.`,
    `🎵 Puis ${profile.music ?? "une discussion qui dure des heures"}.`,
    `🌇 On termine devant un coucher de soleil.`,
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="max-w-2xl rounded-3xl bg-white/10 p-10 backdrop-blur-xl"
    >
      <h2 className="text-center text-4xl font-bold text-white">
        Ton rendez-vous idéal
      </h2>

      <div className="mt-10 space-y-8">

        {events.map((event, index) => (
          <motion.div
            key={event}
            initial={{
              opacity: 0,
              x: -30,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * .6,
            }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 text-lg text-white"
          >
            {event}
          </motion.div>
        ))}

      </div>

      <button
        onClick={next}
        className="mt-12 w-full rounded-full bg-pink-500 py-4 text-white"
      >
        Continuer ❤️
      </button>
    </motion.div>
  );
}