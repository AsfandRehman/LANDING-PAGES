// app/page.tsx
"use client";

import React from "react";
import QuizPage from "./components/Form";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F4F7FF] flex flex-col items-center justify-center p-4">
      <QuizPage />
    </main>
  );
}
