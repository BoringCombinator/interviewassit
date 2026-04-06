"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: "interviewassit", email }),
      });

      if (!res.ok) throw new Error("Something went wrong. Please try again.");

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  if (status === "success") {
    return (
      <div className="bg-[#00C896]/15 border border-[#00C896]/40 rounded-2xl px-6 py-6 text-center">
        <div className="text-3xl mb-3">🎉</div>
        <p className="text-[#00C896] font-bold text-lg mb-1">You're on the list!</p>
        <p className="text-[#F5F4F0]/60 text-sm">
          We'll reach out when early access opens. Go practice your two-pointers.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="you@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 bg-[#F5F4F0]/10 border border-[#F5F4F0]/20 text-[#F5F4F0] placeholder-[#F5F4F0]/30 rounded-xl px-4 py-3 text-sm outline-none focus:border-[#00C896] focus:ring-2 focus:ring-[#00C896]/20 transition-all disabled:opacity-50"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="bg-[#00C896] text-[#1A1A2E] font-bold px-6 py-3 rounded-xl text-sm hover:bg-[#00C896]/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap flex items-center justify-center gap-2 min-w-[160px]"
        >
          {status === "loading" ? (
            <>
              <svg
                className="animate-spin w-4 h-4"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8H4z"
                />
              </svg>
              Joining...
            </>
          ) : (
            "Get Early Access →"
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-3 text-red-400 text-xs text-left flex items-center gap-1.5">
          <span>⚠</span> {errorMsg}
        </p>
      )}
    </form>
  );
}