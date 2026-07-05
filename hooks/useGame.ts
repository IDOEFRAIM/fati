"use client";

import { useMemo, useState } from "react";
import { questions } from "@/data/question";

export type Answer = {
  questionId: number;
  value: string;
};

export function useGame() {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Answer[]>([]);

  const total = questions.length;

  const currentQuestion = step < total ? questions[step] : null;

  function answer(value: string) {
    if (!currentQuestion) return;

    setAnswers((prev) => {
      const filtered = prev.filter(
        (a) => a.questionId !== currentQuestion.id
      );

      return [
        ...filtered,
        {
          questionId: currentQuestion.id,
          value,
        },
      ];
    });

    setStep((s) => Math.min(s + 1, total));
  }

  function next() {
    setStep((s) => Math.min(s + 1, total));
  }

  function previous() {
    setStep((s) => Math.max(s - 1, 0));
  }

  function restart() {
    setStep(0);
    setAnswers([]);
  }

  const progress = useMemo(
    () => (step / total) * 100,
    [step, total]
  );

  const finished = step >= total;

  const isFirstStep = step === 0;
  const isLastStep = step === total - 1;

  const profile = useMemo(() => {
    const get = (id: number) =>
      answers.find((a) => a.questionId === id)?.value ?? "";

    return {
      place: get(1),
      activity: get(2),
      music: get(3),
      food: get(4),
      sunset: get(5),
      coffee: get(6),
    };
  }, [answers]);

  return {
    step,
    total,
    progress,

    finished,
    isFirstStep,
    isLastStep,

    currentQuestion,

    answers,
    profile,

    answer,
    next,
    previous,
    restart,
  };
}