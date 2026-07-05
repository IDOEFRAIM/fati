"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Star = {
  left: string;
  top: string;
  size: number;
  opacity: number;
  duration: number;
};

export default function Background() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars = Array.from({ length: 80 }).map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      size: 2 + Math.random() * 3,
      opacity: 0.2 + Math.random(),
      duration: 2 + Math.random() * 5,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-gradient-to-br from-slate-950 via-purple-950 to-pink-950">

      {/* Halo 1 */}
      <motion.div
        animate={{
          x: [0, 100, -80, 0],
          y: [0, -120, 60, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
        }}
        className="absolute left-20 top-20 h-96 w-96 rounded-full bg-pink-500/20 blur-[120px]"
      />

      {/* Halo 2 */}
      <motion.div
        animate={{
          x: [0, -120, 90, 0],
          y: [0, 80, -70, 0],
          scale: [1, 0.8, 1.3, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
        }}
        className="absolute bottom-20 right-20 h-[450px] w-[450px] rounded-full bg-purple-500/20 blur-[120px]"
      />

      {/* Stars */}
      {stars.map((star, i) => (
        <motion.span
          key={i}
          initial={{
            opacity: star.opacity,
            scale: 1,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
          }}
          transition={{
            repeat: Infinity,
            duration: star.duration,
          }}
          className="absolute rounded-full bg-white"
          style={{
            width: star.size,
            height: star.size,
            left: star.left,
            top: star.top,
          }}
        />
      ))}
    </div>
  );
}