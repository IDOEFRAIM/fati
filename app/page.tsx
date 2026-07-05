"use client";

import { useState } from "react";

import Background from "@/components/Background";
import FloatingHearts from "@/components/FloatingHeart";
import Intro from "@/components/Intro";
import Question from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgresBar";
import Ending from "@/components/Ending";
import MovingButton from "@/components/MovingButton";

import { useGame } from "@/hooks/useGame";

export default function Home() {
  const game = useGame();

  const [accepted, setAccepted] = useState(false);
  console.log("accepted",accepted)
  if (!accepted) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <Background />
        <FloatingHearts />

        <div className="w-full max-w-xl rounded-3xl border border-white/10 bg-white/10 p-10 text-center backdrop-blur-xl">
          <h1 className="text-4xl font-bold text-white">
            Acceptes-tu un rendez-vous avec moi ? ❤️
          </h1>

          <p className="mt-5 text-white/70">
            Réfléchis bien... il n'y a peut-être qu'une seule bonne réponse. 😌
          </p>

          <div className="relative mt-12 flex h-36 items-center justify-center">
            <button
              onClick={() => setAccepted(true)}
              className="rounded-full bg-pink-500 px-8 py-4 text-lg font-semibold text-white shadow-lg"
            >
              Oui ❤️
            </button>

            <MovingButton />
          </div>
        </div>
      </main>
    );
  }

  if (game.step === 0) {
    return (
      <main className="relative min-h-screen overflow-hidden">
        <Background />
        <FloatingHearts />
        <Intro next={game.next} />
      </main>
    );
  }

  if (game.finished) {
    return (
      <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
        <Background />
        <FloatingHearts />
        <Ending />
      </main>
    );
  }

  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden px-6">
      <Background />
      <FloatingHearts />

      <ProgressBar value={game.progress} />

      {game.currentQuestion && (
        <Question
          title={game.currentQuestion.title}
          choices={game.currentQuestion.choices.map((choice) => ({
            label: choice,
            value: choice,
          }))}
          onSelect={game.answer}
        />
      )}
    </main>
  );
}