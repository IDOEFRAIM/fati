"use client";

import { useState } from "react";

const texts = [
  "Non 🙃",
  "T'es sûre ? 👀",
  "Encore une fois 😹",
  "Reflechis bien 😶‍🌫️",
  "Impossible 😂",
  "Essaie encore 😌",
  "Faaaaarrrrr 😅",
  "Raté 😏",
  "Toujours pas 😎",
  "Ah tchai 🙄",
  "J ai tout mn temps 👀"
];

export default function MovingButton() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  const [index, setIndex] = useState(0);

  function move() {
    const x = Math.random() * 350 - 175;
    const y = Math.random() * 220 - 110;

    setPosition({ x, y });

    setIndex((prev) => (prev + 1) % texts.length);
  }

  return (
    <button
      onMouseEnter={move}
      onClick={move}
      style={{
        transform: `translate(${position.x}px, ${position.y}px)`,
      }}
      className="absolute transition-all duration-300 rounded-full bg-red-500 px-6 py-3 font-semibold text-white shadow-lg"
    >
      {texts[index]}
    </button>
  );
}