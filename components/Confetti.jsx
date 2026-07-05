"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function Confetti() {
  useEffect(() => {

    const duration = 3500;
    const end = Date.now() + duration;

    const frame = () => {

      confetti({
        particleCount: 3,
        angle: 60,
        spread: 80,
        origin: { x: 0 },
      });

      confetti({
        particleCount: 3,
        angle: 120,
        spread: 80,
        origin: { x: 1 },
      });

      if (Date.now() < end) {
        requestAnimationFrame(frame);
      }
    };

    frame();

  }, []);

  return null;
}