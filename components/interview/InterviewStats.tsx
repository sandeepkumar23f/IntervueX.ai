"use client";

import { Clock, Trophy, Target } from "lucide-react";

type Props = {
  currentQuestion: number;
  totalQuestions: number;
};

export default function InterviewStats({
  currentQuestion,
  totalQuestions,
}: Props) {
  return (
    <aside className="w-72 border-l border-zinc-800 bg-[#171717] p-6">

      <h2 className="text-lg font-semibold mb-6">
        Interview Stats
      </h2>

      <div className="space-y-4">

        <div className="bg-zinc-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Target size={18} />
            <span>Progress</span>
          </div>

          <p className="text-2xl font-bold">
            {currentQuestion}/{totalQuestions}
          </p>
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Clock size={18} />
            <span>Duration</span>
          </div>

          <p className="text-2xl font-bold">
            00:00
          </p>
        </div>

        <div className="bg-zinc-900 p-4 rounded-xl">
          <div className="flex items-center gap-2 mb-2">
            <Trophy size={18} />
            <span>Score</span>
          </div>

          <p className="text-2xl font-bold">
            --
          </p>
        </div>

      </div>

    </aside>
  );
}