"use client";

import { useRouter } from "next/navigation";

export default function StartButton() {
  const router = useRouter();

  return (
    <button
      onClick={() => router.push("/interview")}
      className="bg-blue-600 px-6 py-3 rounded-lg hover:bg-blue-700 transition"
    >
      Start Practicing
    </button>
  );
}