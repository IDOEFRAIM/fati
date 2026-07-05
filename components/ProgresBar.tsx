"use client";

import { motion } from "framer-motion";

interface ProgressBarProps {
  value: number;
}

export default function ProgressBar({
  value,
}: ProgressBarProps) {
  return (
    <div className="fixed left-1/2 top-6 z-50 w-[90%] max-w-xl -translate-x-1/2">

      <div className="overflow-hidden rounded-full bg-white/10 backdrop-blur-xl">

        <motion.div
          animate={{
            width: `${value}%`,
          }}
          transition={{
            duration: .4,
          }}
          className="h-3 rounded-full bg-gradient-to-r from-pink-500 via-fuchsia-500 to-purple-500"
        />

      </div>

      <p className="mt-3 text-center text-sm text-white/70">
        Progression {Math.round(value)} %
      </p>

    </div>
  );
}