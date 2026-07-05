"use client";

import { motion } from "framer-motion";
import Confetti from "./Confetti";

export default function Ending() {

  return (
    <>
      <Confetti />

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mx-auto max-w-2xl rounded-3xl border border-white/10 bg-white/10 p-10 backdrop-blur-xl text-center text-white"
      >

        <motion.div
          initial={{ scale: .5 }}
          animate={{ scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 120,
          }}
          className="mb-6 text-7xl"
        >
          ❤️
        </motion.div>

        <motion.h1
          initial={{ y: 25 }}
          animate={{ y: 0 }}
          transition={{ delay: .3 }}
          className="text-4xl font-bold"
        >
          Une dernière chose...
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-8 text-lg leading-8 text-gray-200"
        >
          Je ne suis pas toujours la personne la plus démonstrative.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2 }}
          className="mt-4 text-lg leading-8 text-gray-200"
        >
          Et parfois, mes actes ne montrent pas vraiment ce que je ressens.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.2 }}
          className="mt-8 text-lg leading-8"
        >
          Si un jour tu as l'impression que je t'ai blessée...
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 4 }}
          className="mt-4 text-lg leading-8"
        >
          promets-moi une chose :
        </motion.p>

        <motion.div
          initial={{ scale: .8 }}
          animate={{ scale: 1 }}
          transition={{ delay: 5 }}
          className="mt-6 rounded-2xl bg-white/10 p-6"
        >
          <p className="text-xl font-semibold">
            Viens simplement m'en parler.
          </p>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 6.5 }}
          className="mt-10 text-lg leading-8 text-gray-200"
        >
          Tu comptes énormément pour moi.
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 7.5 }}
          className="mt-4 text-lg leading-8 text-gray-200"
        >
          Loin des yeux,pret du coeur
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 8.5 }}
          className="mt-4 text-lg leading-8 text-gray-200"
        >
          Tu resteras toujours une personne très importante dans ma vie.
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, scale: .8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 10 }}
          className="mt-14 text-3xl font-bold"
        >
          Alors...
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 11 }}
          className="mt-5 text-xl"
        >
          Si on se revoit,TO BE CONTINUED.....
        </motion.p>

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: .95,
          }}
          className="mt-10 rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold shadow-lg shadow-pink-500/40"
        >
          Accepter ce rendez-vous imaginaire 🌸
        </motion.button>

      </motion.div>
    </>
  );
}