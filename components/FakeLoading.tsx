"use client";

import { useEffect, useState } from "react";

interface Props {
  onComplete: () => void;
}

const messages = [
  "Analyse de vos réponses...",
  "Recherche du rendez-vous parfait...",
  "Étude de votre personnalité...",
  "Consultation des étoiles...",
  "Vérification de la distance Maroc 🇲🇦 ↔ Burkina 🇧🇫 ...",
  "Correction de mes 'D'accord'...",
  "Compilation des souvenirs...",
];

export default function FakeLoading({ onComplete }: Props) {
  const [progress, setProgress] = useState(0);
  const [message, setMessage] = useState(messages[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        const next = p + Math.random() * 10;

        if (next >= 100) {
          clearInterval(interval);

          setTimeout(() => {
            onComplete();
          }, 1200);

          return 100;
        }

        setMessage(messages[Math.floor(Math.random() * messages.length)]);

        return next;
      });
    }, 250);

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="mx-auto max-w-xl rounded-3xl bg-white/10 backdrop-blur-xl border border-white/10 p-10 text-white">

      <h2 className="text-3xl font-bold">
        🤖 Analyse...
      </h2>

      <p className="mt-8 text-gray-300">
        {message}
      </p>

      <div className="mt-8 h-4 overflow-hidden rounded-full bg-white/10">
        <div
          style={{
            width: `${progress}%`,
          }}
          className="h-full bg-gradient-to-r from-pink-500 to-purple-500 transition-all duration-300"
        />
      </div>

      <p className="mt-4 text-center text-xl">
        {Math.round(progress)} %
      </p>

    </div>
  );
}