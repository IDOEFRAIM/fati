"use client";

import { useEffect, useState } from "react";

interface Props {
  text: string;
  speed?: number;
}

export default function Typewriter({
  text,
  speed = 40,
}: Props) {

  const [display, setDisplay] = useState("");

  useEffect(() => {

    let index = 0;

    const interval = setInterval(() => {

      setDisplay(text.slice(0, index + 1));

      index++;

      if (index >= text.length) {
        clearInterval(interval);
      }

    }, speed);

    return () => clearInterval(interval);

  }, [text, speed]);

  return (
    <p className="whitespace-pre-line text-xl leading-9 text-white">
      {display}
      <span className="animate-pulse">|</span>
    </p>
  );
}