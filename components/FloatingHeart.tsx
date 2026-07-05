"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

type Heart = {
  left: number;
  duration: number;
  delay: number;
  size: number;
};

export default function FloatingHearts() {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated = Array.from({ length: 18 }).map(() => ({
      left: Math.random() * 100,
      duration: 8 + Math.random() * 8,
      delay: Math.random() * 8,
      size: 18 + Math.random() * 20,
    }));

    setHearts(generated);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 overflow-hidden">
      {hearts.map((heart, index) => (
        <motion.div
          key={index}
          initial={{
            y: "110vh",
            opacity: 0,
            x: 0,
          }}
          animate={{
            y: "-20vh",
            opacity: [0.2, 0.8, 0],
            x: [-20, 20, -15, 15],
          }}
          transition={{
            repeat: Infinity,
            duration: heart.duration,
            delay: heart.delay,
            ease: "linear",
          }}
          style={{
            left: `${heart.left}%`,
            fontSize: heart.size,
          }}
          className="absolute"
        >
          ❤️
        </motion.div>
      ))}
    </div>
  );
}