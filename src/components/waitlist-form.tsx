"use client";

import { useState } from "react";

export default function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email.trim()) return;

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: "interviewassit", email: email.trim() }),
      });

      if (!res.ok) {
        throw new Error("Something went wrong. Please try again.");
      }

      setStatus("success");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setErrorMsg(
        err instanceof Error ? err.message : "Something went wrong. Please try again."
      );
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-emerald-500/30 bg-emerald-500/10 px-6 py-8 text-center">
        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mx-auto mb-4">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#10b981"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>
        <h3 className="text-white font-black text-xl mb-2">You&apos;re on the list.</h3>
        <p className="text-white/60 text-sm">
          We&apos;ll reach out when early access is ready. Practice sessions are free from day one.
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
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="your@email.com"
          disabled={status === "loading"}
          className="flex-1 rounded-full px-5 py-4 bg-white/10 border border-white/20 text-white placeholder:text-white/40 focus:outline-none focus:border-[#C84B31] focus:bg-white/15 transition-all text-sm disabled:opacity-60"
        />
        <button
          type="submit"
          disabled={status === "loading" || !email.trim()}
          className="shrink-0 rounded-full px-7 py-4 bg-[#C84B31] text-white font-bold text-sm hover:bg-[#a83a24] transition-colors disabled:opacity-60 disabled:cursor-not-allowed shadow-lg shadow-[#C84B31]/30 whitespace-nowrap"
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <svg
                className="animate-spin"
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
              >
                <path d="M21 12a9 9 0 1 1-6.219-8.56" />
              </svg>
              Joining...
            </span>
          ) : (
            "Get Early Access"
          )}
        </button>
      </div>
      {status === "error" && (
        <p className="mt-3 text-sm text-red-400 text-center">{errorMsg}</p>
      )}
      <p className="mt-4 text-xs text-white/30 text-center">
        No spam. No credit card. Unsubscribe anytime.
      </p>
    </form>
  );
}