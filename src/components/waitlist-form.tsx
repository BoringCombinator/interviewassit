"use client";

import { useState } from "react";

interface WaitlistFormProps {
  dark?: boolean;
}

export default function WaitlistForm({ dark = false }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!email) return;

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
        err instanceof Error ? err.message : "Something went wrong."
      );
    }
  }

  if (status === "success") {
    return (
      <div
        className={`rounded-xl px-6 py-4 text-center border ${
          dark
            ? "bg-[#0F0F1A]/20 border-[#0F0F1A]/30 text-[#0F0F1A]"
            : "bg-[#C8F135]/10 border-[#C8F135]/30 text-[#C8F135]"
        }`}
      >
        <p className="font-black text-lg mb-1">You're on the list 🎯</p>
        <p className={`text-sm ${dark ? "text-[#0F0F1A]/70" : "text-[#E8E8F0]/60"}`}>
          We'll reach out when your practice session is ready.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
      <input
        type="email"
        required
        placeholder="you@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        disabled={status === "loading"}
        className={`flex-1 rounded-xl px-4 py-3 text-sm outline-none transition-all duration-200 disabled:opacity-50 ${
          dark
            ? "bg-[#0F0F1A]/20 text-[#0F0F1A] placeholder-[#0F0F1A]/40 border border-[#0F0F1A]/20 focus:border-[#0F0F1A]/60"
            : "bg-[#1A1A2E] text-[#E8E8F0] placeholder-[#E8E8F0]/30 border border-[#E8E8F0]/10 focus:border-[#C8F135]/50"
        }`}
      />
      <button
        type="submit"
        disabled={status === "loading" || !email}
        className={`rounded-xl px-5 py-3 text-sm font-black whitespace-nowrap transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed ${
          dark
            ? "bg-[#0F0F1A] text-[#C8F135] hover:bg-[#1A1A2E]"
            : "bg-[#C8F135] text-[#0F0F1A] hover:bg-[#d4f54a]"
        }`}
      >
        {status === "loading" ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
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
                d="M4 12a8 8 0 018-8v8z"
              />
            </svg>
            Joining…
          </span>
        ) : (
          "Get Early Access →"
        )}
      </button>

      {status === "error" && (
        <p className="w-full text-xs text-red-400 mt-1 text-left">
          {errorMessage}
        </p>
      )}
    </form>
  );
}