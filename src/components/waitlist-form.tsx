"use client";

import { useState } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email || status === "loading") return;

    setStatus("loading");
    setErrorMessage("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: "interviewassit", email }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error
          ? err.message
          : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="flex flex-col items-center gap-4 py-8 px-6 bg-[#1A1A2E] border border-[#E94560]/30 rounded-2xl">
        <div className="w-14 h-14 rounded-full bg-[#E94560]/15 border border-[#E94560]/30 flex items-center justify-center text-2xl">
          🎯
        </div>
        <h3 className="text-xl font-bold text-[#F0EFF4]">You're in.</h3>
        <p className="text-[#F0EFF4]/60 text-sm text-center leading-relaxed max-w-xs">
          We'll notify you the moment early access opens. Get ready — that $40K
          raise isn't going to negotiate itself.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="w-full max-w-md mx-auto">
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="email"
          required
          placeholder="your@email.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          className="flex-1 bg-[#1A1A2E] border border-white/10 focus:border-[#E94560]/60 text-[#F0EFF4] placeholder-[#F0EFF4]/30 px-5 py-4 rounded-xl outline-none transition-colors text-sm disabled:opacity-60 focus:ring-2 focus:ring-[#E94560]/20"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email}
          className="bg-[#E94560] hover:bg-[#c73550] disabled:bg-[#E94560]/50 disabled:cursor-not-allowed text-white font-bold px-7 py-4 rounded-xl transition-all hover:scale-105 disabled:hover:scale-100 text-sm whitespace-nowrap shadow-lg shadow-[#E94560]/20"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
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
              Joining…
            </span>
          ) : (
            "Get Early Access"
          )}
        </button>
      </div>

      {status === "error" && (
        <p className="mt-3 text-sm text-[#E94560] text-center">{errorMessage}</p>
      )}

      <p className="mt-4 text-xs text-[#F0EFF4]/30 text-center">
        No spam. No credit card. Just early access when we launch.
      </p>
    </form>
  );
}