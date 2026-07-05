"use client";

import { motion } from "framer-motion";
import MovingButton from "./MovingButton";

export interface Choice {
  label: string;
  value: string;
}

interface Props {
  title: string;
  description?: string;
  choices: Choice[];
  onSelect: (value: string) => void;
  showImpossibleNo?: boolean;
}

export default function QuestionCard({
  title,
  description,
  choices,
  onSelect,
  showImpossibleNo = false,
}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      className="relative w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-8 backdrop-blur-xl"
    >
      <h2 className="text-3xl font-bold text-white">
        {title}
      </h2>

      {description && (
        <p className="mt-4 text-white/70">
          {description}
        </p>
      )}

      <div className="mt-10 space-y-4">
        {choices.map((choice) => (
          <button
            key={choice.value}
            onClick={() => onSelect(choice.value)}
            className="w-full rounded-2xl bg-white/10 p-4 text-lg text-white transition hover:bg-pink-500"
          >
            {choice.label}
          </button>
        ))}
      </div>

      {showImpossibleNo && (
        <div className="relative mt-10 h-24">
          <MovingButton />
        </div>
      )}
    </motion.div>
  );
}