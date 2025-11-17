"use client";

import React, { useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";

type QuizOption = {
  id: string;
  label: string;
  isNegative?: boolean;
};

type NegativeModalContent = {
  title: string;
  body: string;
  recommendation?: string;
  support?: {
    phone: string;
    email: string;
  };
};

type QuizQuestion = {
  id: string;
  prompt: string;
  options: QuizOption[];
  negativeModal?: NegativeModalContent;
};

const STORAGE_KEY = "lemon_quiz_state_v1";

// --- GHL form config ---
const GHL_FORM_BASE =
  "https://api.leadconnectorhq.com/widget/form/pjrscRE8vX6dq3R0Ksqz";

/** Hidden field keys in GHL (plain text) */
const FIELD_KEY_Q1 = "question_1";
const FIELD_KEY_Q2 = "question_2";
const FIELD_KEY_Q3 = "question_3";
const FIELD_KEY_Q4 = "question_4";
const FIELD_KEY_Q5 = "question_5";
const FIELD_KEY_Q6 = "question_6";

/**********************
 * DATA
 **********************/
const Q1A: QuizQuestion = {
  id: "q1a",
  prompt: "Did you buy or lease your vehicle new?",
  options: [
    { id: "q1a_yes", label: "Yes, purchased new" },
    { id: "q1a_no", label: "No, purchased used" },
  ],
};

const Q1B: QuizQuestion = {
  id: "q1b",
  prompt: "Was it purchased directly from the original owner?",
  options: [
    { id: "q1b_yes", label: "Yes, from original owner" },
    { id: "q1b_no", label: "No, from dealer/other", isNegative: true },
  ],
  negativeModal: {
    title: "Vehicle Must Be Purchased New",
    body: "Florida's Lemon Law primarily covers vehicles purchased or leased new from authorized dealers. However, you may still have protection under the federal Magnuson-Moss Warranty Act.",
    recommendation:
      "Recommendation: Consider consulting with an attorney about federal warranty protections that may apply to your situation.",
    support: { phone: "561-835-1727", email: "cuzlaw@yourlemon.com" },
  },
};

const Q2: QuizQuestion = {
  id: "q2",
  prompt: "Was your vehicle delivered in Florida?",
  options: [
    { id: "q2_yes", label: "Yes, delivered in Florida" },
    { id: "q2_no", label: "No, delivered elsewhere", isNegative: true },
  ],
  negativeModal: {
    title: "Must Be Delivered in Florida",
    body: "Florida's Lemon Law only covers vehicles delivered within Florida. However, your state may have similar protections.",
    recommendation:
      "Check with attorneys in your state about local lemon law protections that may apply.",
  },
};

const Q3: QuizQuestion = {
  id: "q3",
  prompt: "Was your vehicle delivered within the last 36 months?",
  options: [
    { id: "q3_yes", label: "Yes, within 36 months" },
    { id: "q3_no", label: "No, more than 36 months ago", isNegative: true },
  ],
  negativeModal: {
    title: "Vehicle Age Limitation",
    body: "Florida's Lemon Law covers vehicles within their first 24 months or 24,000 miles. However, you may still have warranty protections.",
    recommendation:
      "Federal warranty laws and manufacturer warranties may still provide protection for your situation.",
    support: { phone: "561-835-1727", email: "cuzlaw@yourlemon.com" },
  },
};

const Q4: QuizQuestion = {
  id: "q4",
  prompt: "How many repair attempts for the same issue?",
  options: [
    { id: "q4_a", label: "0 - 2 attempts" },
    { id: "q4_b", label: "3 or more attempts" },
  ],
};

const Q5: QuizQuestion = {
  id: "q5",
  prompt: "Total days your vehicle was in the shop?",
  options: [
    { id: "q5_a", label: "0 - 14 days" },
    { id: "q5_b", label: "15+ days" },
  ],
};

const LINEAR_FLOW: QuizQuestion[] = [Q1A, Q2, Q3, Q4, Q5];

/**********************
 * UI PRIMITIVES
 **********************/
function ProgressBar({ value }: { value: number }) {
  return (
    <div className="w-full">
      <div className="mb-3 flex items-center justify-between text-xs font-semibold text-neutral-700">
        <span>Progress</span>
        <span>{Math.round(value)}%</span>
      </div>
      <div className="h-[16px] w-full overflow-hidden rounded-full bg-[#DDE6F5]">
        <div
          className="h-full rounded-full bg-amber-400 transition-all duration-300"
          style={{ width: `${value}%` }}
        />
      </div>
    </div>
  );
}

function Card({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-3xl border border-neutral-200 bg-white p-8 md:p-12 shadow-sm ${className}`}
    >
      {children}
    </div>
  );
}

function Modal({
  open,
  title,
  body,
  recommendation,
  support,
  onRetake,
}: NegativeModalContent & { open: boolean; onRetake: () => void }) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center bg-black/30 p-4 md:p-6">
      <div className="mt-8 w-full max-w-4xl rounded-[28px] border border-amber-200 bg-[#FBF1E2] p-6 md:p-10 shadow-[0_12px_40px_rgba(0,0,0,0.15)]">
        <div className="mb-6 text-center">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full border border-rose-200 bg-white text-2xl font-extrabold text-rose-500 shadow-sm">
            !
          </div>
          <h3 className="text-[28px] md:text-[32px] font-extrabold text-neutral-900">
            {title}
          </h3>
        </div>

        <p className="mx-auto max-w-3xl text-center text-[16px] md:text-[17px] leading-7 text-neutral-700">
          {body}
        </p>

        {recommendation && (
          <div className="mx-auto mt-6 max-w-3xl rounded-2xl border-2 border-[#89A9D8] bg-[#EAF3FF] px-5 py-5 text-center text-[15px] font-semibold text-neutral-900">
            {recommendation}
          </div>
        )}

        <div className="mx-auto mt-6 max-w-3xl">
          <button
            className="w-full rounded-2xl border-2 border-neutral-300 bg-white px-5 py-4 text-base font-semibold text-neutral-900 shadow-sm hover:bg-neutral-50 active:scale-[0.99]"
            onClick={onRetake}
          >
            <span className="mr-2 inline-block">↻</span> Retake Quiz
          </button>
        </div>

        {support && (
          <>
            <hr className="my-7 border-neutral-200" />
            <div className="text-center">
              <h4 className="text-lg font-bold text-neutral-900">
                Still have questions?
              </h4>
              <p className="mt-1 text-[14px] text-neutral-600">
                Our team is here to help you understand your options and the
                next steps.
              </p>
              <div className="mt-3 space-y-1 font-semibold">
                <div className="text-sky-700">Call us: {support.phone}</div>
                <div className="text-sky-700">Email us: {support.email}</div>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

/**********************
 * GHL FORM (maps 6 hidden fields, STABLE by QID)
 **********************/
function GhlForm({
  allAnswers,
  onSuccess,
}: {
  allAnswers: Array<{ qid: string; id: string; label: string }>;
  onSuccess: () => void;
}) {
  // Build a dictionary so we can address answers by qid
  const byId = useMemo(() => {
    const m = new Map<string, string>();
    for (const a of allAnswers) m.set(a.qid, a.label);
    return m;
  }, [allAnswers]);

  // Explicit, stable mapping of fields -> qids
  // Field 1: q1a
  // Field 2: q1b (may be empty if skipped)
  // Field 3..6: q2..q5
  const [a1, a2, a3, a4, a5, a6] = useMemo(() => {
    const v1 = byId.get("q1a") ?? ""; // FIELD_KEY_Q1
    const v2 = byId.get("q1b") ?? ""; // FIELD_KEY_Q2 (empty if skipped)
    const v3 = byId.get("q2") ?? ""; // FIELD_KEY_Q3
    const v4 = byId.get("q3") ?? ""; // FIELD_KEY_Q4
    const v5 = byId.get("q4") ?? ""; // FIELD_KEY_Q5
    const v6 = byId.get("q5") ?? ""; // FIELD_KEY_Q6
    return [v1, v2, v3, v4, v5, v6] as const;
  }, [byId]);

  const query = useMemo(() => {
    const params = new URLSearchParams();
    params.set(FIELD_KEY_Q1, a1);
    params.set(FIELD_KEY_Q2, a2);
    params.set(FIELD_KEY_Q3, a3);
    params.set(FIELD_KEY_Q4, a4);
    params.set(FIELD_KEY_Q5, a5);
    params.set(FIELD_KEY_Q6, a6);
    return params.toString();
  }, [a1, a2, a3, a4, a5, a6]);

  const src = `${GHL_FORM_BASE}?${query}`;

  // Listen for submission success from the embedded GHL form
  useEffect(() => {
    const handler = (ev: MessageEvent) => {
      const okOrigin =
        typeof ev.origin === "string" &&
        (ev.origin.includes("leadconnectorhq.com") ||
          ev.origin.includes("msgsndr.com") ||
          ev.origin.includes("highlevel") ||
          ev.origin.includes("leadconnector"));
      if (!okOrigin) return;

      const d = ev.data as unknown;
      if (
        (typeof d === "object" &&
          d !== null &&
          // @ts-expect-error dynamic SDK payloads
          (d.type === "ghlFormSuccess" ||
            // @ts-expect-error dynamic SDK payloads
            d.event === "formSubmission" ||
            // @ts-expect-error dynamic SDK payloads
            d.name === "formSubmitted")) ||
        (typeof d === "string" &&
          (d.includes("ghlFormSuccess") ||
            d.toLowerCase().includes("formsubmitted")))
      ) {
        onSuccess();
      }
    };

    window.addEventListener("message", handler);
    return () => window.removeEventListener("message", handler);
  }, [onSuccess]);

  return (
    <div className="px-4 py-10 md:py-14 mx-auto w-full max-w-4xl">
      <Card>
        <div className="mx-auto max-w-3xl text-center">
          <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-green-100 text-3xl">
            ✓
          </div>
          <h2 className="mb-2 text-4xl font-extrabold">
            You May Qualify for a Refund
          </h2>
          <p className="mb-8 text-[16px] leading-7 text-neutral-700">
            Provide your contact details and our team will review your case and
            reach out to discuss options.
          </p>

          <iframe
            src={src}
            style={{
              width: "100%",
              height: "752px",
              border: "none",
              borderRadius: "12px",
              display: "block",
            }}
            id="inline-pjrscRE8vX6dq3R0Ksqz"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Form 6"
            data-height="752"
            data-layout-iframe-id="inline-pjrscRE8vX6dq3R0Ksqz"
            data-form-id="pjrscRE8vX6dq3R0Ksqz"
            title="Form 6"
          />

          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script src="https://link.msgsndr.com/js/form_embed.js" />
        </div>
      </Card>
    </div>
  );
}

/**********************
 * THANK YOU OVERLAY
 **********************/
function ThankYouOverlay({ onClose }: { onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-[60] flex items-center justify-center bg-black/50 p-4">
      <div className="w-full max-w-lg rounded-3xl bg-white p-8 text-center shadow-2xl">
        <div className="mx-auto mb-5 grid h-16 w-16 place-items-center rounded-full bg-green-100 text-3xl">
          ✓
        </div>
        <h3 className="text-3xl font-extrabold text-neutral-900">
          Thank you! Your form has been submitted.
        </h3>
        <p className="mt-3 text-neutral-700">
          We’ll review your details and reach out shortly.
        </p>
        <button
          onClick={onClose}
          className="mt-6 w-full rounded-2xl bg-amber-500 px-5 py-3 font-semibold text-white hover:bg-amber-600 active:scale-[0.99]"
        >
          Close
        </button>
      </div>
    </div>
  );
}

/**********************
 * QUESTION CARD
 **********************/
function QuestionCard({
  question,
  onAnswer,
  stepIndex,
  totalSteps,
}: {
  question: QuizQuestion;
  onAnswer: (option: QuizOption) => void;
  stepIndex: number;
  totalSteps: number;
}) {
  return (
    <Card>
      <p className="mb-3 text-center text-xs font-semibold tracking-[0.18em] text-neutral-600">
        QUESTION {stepIndex} OF {totalSteps}
      </p>
      <h2 className="mb-8 text-center text-4xl font-extrabold tracking-tight text-neutral-900">
        {question.prompt}
      </h2>
      <div className="mx-auto grid max-w-2xl gap-4">
        {question.options.map((opt) => (
          <button
            key={opt.id}
            onClick={() => onAnswer(opt)}
            className={
              "w-full rounded-2xl border-2 px-7 py-6 text-xl font-semibold transition-all duration-300 " +
              "bg-white border-neutral-300 " +
              "hover:-translate-y-0.5 hover:shadow-[0_10px_28px_rgba(0,0,0,0.07)] " +
              "hover:border-amber-400 hover:bg-amber-50 " +
              "focus:outline-none focus-visible:ring-2 focus-visible:ring-amber-400 " +
              "active:scale-[0.99]"
            }
          >
            {opt.label}
          </button>
        ))}
      </div>
      <p className="mt-8 text-center text-sm text-neutral-500">
        This quiz is for informational purposes only and does not provide legal
        advice.
      </p>
    </Card>
  );
}

/**********************
 * MAIN PAGE COMPONENT
 **********************/
export default function QuizPage() {
  const totalSteps = 5;

  const [step, setStep] = useState<number>(0);
  const [q1b, setQ1b] = useState<boolean>(false);
  const [modal, setModal] = useState<{
    open: boolean;
    content?: NegativeModalContent;
  }>({ open: false });

  const [showThanks, setShowThanks] = useState<boolean>(false);

  // Track answers in order (can be up to 6: q1a, maybe q1b, q2..q5)
  const [answers, setAnswers] = useState<
    Array<{ qid: string; id: string; label: string }>
  >([]);

  // restore
  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) {
        const s = JSON.parse(raw) as {
          step: number;
          q1b: boolean;
          answers?: Array<{ qid: string; id: string; label: string }>;
        };
        if (typeof s.step === "number")
          setStep(Math.min(Math.max(s.step, 0), totalSteps));
        if (typeof s.q1b === "boolean") setQ1b(s.q1b);
        if (Array.isArray(s.answers)) setAnswers(s.answers);
      }
    } catch {
      // ignore corrupted storage
    }
  }, [totalSteps]);

  // persist
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ step, q1b, answers }));
  }, [step, q1b, answers]);

  const progress = useMemo(() => (step / totalSteps) * 100, [step, totalSteps]);

  const currentQuestion: QuizQuestion = useMemo(() => {
    if (step === 0) return q1b ? Q1B : Q1A;
    return LINEAR_FLOW[step];
  }, [step, q1b]);

  const resetQuiz = () => {
    setStep(0);
    setQ1b(false);
    setModal({ open: false, content: undefined });
    setAnswers([]);
    localStorage.removeItem(STORAGE_KEY);
  };

  const recordAnswer = (qid: string, opt: QuizOption) => {
    setAnswers((prev) => {
      const idx = prev.findIndex((a) => a.qid === qid);
      const entry = { qid, id: opt.id, label: opt.label };
      if (idx >= 0) {
        const copy = prev.slice();
        copy[idx] = entry;
        return copy;
      }
      return [...prev, entry];
    });
  };

  const handleAnswer = (opt: QuizOption) => {
    // Q1 branching
    if (step === 0 && !q1b) {
      recordAnswer("q1a", opt);
      if (opt.id === "q1a_no") {
        setQ1b(true);
        return;
      }
      setStep(1);
      return;
    }

    if (step === 0 && q1b) {
      recordAnswer("q1b", opt);
      if (opt.isNegative) {
        setModal({ open: true, content: Q1B.negativeModal });
        return;
      }
      setStep(1);
      return;
    }

    // negative handlers for Q2/Q3
    if ((step === 1 || step === 2) && opt.isNegative) {
      const m = LINEAR_FLOW[step].negativeModal;
      recordAnswer(LINEAR_FLOW[step].id, opt);
      if (m) setModal({ open: true, content: m });
      return;
    }

    // record and advance
    recordAnswer(LINEAR_FLOW[step].id, opt);
    setStep((s) => Math.min(s + 1, totalSteps));
  };

  const isComplete = step >= totalSteps;
  const questionNumber = 1 + Math.max(0, Math.min(step, totalSteps - 1));
  const displayNumber = step === 0 ? 1 : questionNumber;

  return (
    <div className="min-h-screen w-full bg-[#EAF1FF]">
      {/* headings like your screenshot */}
      <div className="px-4 pt-10 md:pt-14 mx-auto w-full max-w-4xl">
        <header className="mb-6 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight text-neutral-900">
            Florida Lemon Law Quiz
          </h1>
          <p className="mt-2 text-[15px] font-medium text-neutral-700">
            Find out if you qualify in just 30 seconds
          </p>
        </header>
        <ProgressBar value={progress} />
      </div>

      {/* content area */}
      {isComplete ? (
        <GhlForm allAnswers={answers} onSuccess={() => setShowThanks(true)} />
      ) : (
        <div className="px-4 py-8 mx-auto w-full max-w-4xl">
          <div className="mt-2">
            <QuestionCard
              question={currentQuestion}
              onAnswer={handleAnswer}
              stepIndex={displayNumber}
              totalSteps={totalSteps}
            />
          </div>
        </div>
      )}

      <Modal
        open={modal.open}
        title={modal.content?.title ?? "More Info"}
        body={modal.content?.body ?? "This selection may impact eligibility."}
        recommendation={modal.content?.recommendation}
        support={modal.content?.support}
        onRetake={resetQuiz}
      />

      {showThanks && <ThankYouOverlay onClose={() => setShowThanks(false)} />}
    </div>
  );
}
