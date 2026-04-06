"use client";

import { useState } from "react";

interface WaitlistFormProps {
  variant?: "hero" | "cta";
}

export default function WaitlistForm({ variant = "hero" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !email.includes("@")) {
      setErrorMsg("Enter a valid email address.");
      return;
    }

    setStatus("loading");
    setErrorMsg("");

    try {
      const res = await fetch("https://boringcombinator.com/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ slug: "interviewassit", email }),
      });

      if (!res.ok) throw new Error("Request failed");

      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMsg("Something went wrong. Try again.");
    }
  }

  if (status === "success") {
    return (
      <div
        className="flex items-center gap-3 px-5 py-4 rounded-lg border"
        style={{
          borderColor: "var(--accent)",
          backgroundColor: "rgba(168,255,53,0.06)",
        }}
      >
        <span style={{ color: "var(--accent)", fontSize: "1.25rem" }}>
          &#10003;
        </span>
        <p style={{ color: "var(--text)" }} className="font-mono-code text-sm">
          You&apos;re in. We&apos;ll reach out before your next interview.
        </p>
      </div>
    );
  }

  const isHero = variant === "hero";

  return (
    <form onSubmit={handleSubmit} className="w-full" noValidate>
      <div
        className={`flex ${isHero ? "flex-col sm:flex-row" : "flex-col"} gap-3 w-full`}
      >
        <div className="flex-1 relative">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (errorMsg) setErrorMsg("");
            }}
            placeholder="your@email.com"
            required
            className="w-full rounded-lg px-4 py-3 text-sm outline-none transition-all duration-200 font-mono-code"
            style={{
              backgroundColor: "var(--bg-surface)",
              border: "1px solid",
              borderColor: errorMsg ? "var(--red)" : "var(--border-bright)",
              color: "var(--text)",
              boxShadow: "none",
            }}
            onFocus={(e) => {
              e.currentTarget.style.borderColor = "var(--accent)";
              e.currentTarget.style.boxShadow = "0 0 0 2px rgba(168,255,53,0.12)";
            }}
            onBlur={(e) => {
              e.currentTarget.style.borderColor = errorMsg
                ? "var(--red)"
                : "var(--border-bright)";
              e.currentTarget.style.boxShadow = "none";
            }}
            disabled={status === "loading"}
          />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="rounded-lg px-6 py-3 text-sm font-semibold transition-all duration-200 whitespace-nowrap font-display"
          style={{
            backgroundColor: status === "loading" ? "var(--accent-dim)" : "var(--accent)",
            color: "var(--bg)",
            cursor: status === "loading" ? "not-allowed" : "pointer",
            letterSpacing: "0.01em",
          }}
          onMouseEnter={(e) => {
            if (status !== "loading") {
              e.currentTarget.style.filter = "brightness(1.1)";
              e.currentTarget.style.boxShadow = "0 0 20px rgba(168,255,53,0.4)";
            }
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.filter = "";
            e.currentTarget.style.boxShadow = "";
          }}
        >
          {status === "loading" ? (
            <span className="flex items-center gap-2">
              <span className="font-mono-code">...</span>
            </span>
          ) : (
            "Start Free Practice Session"
          )}
        </button>
      </div>

      {errorMsg && (
        <p className="mt-2 text-xs font-mono-code" style={{ color: "var(--red)" }}>
          {errorMsg}
        </p>
      )}

      <p className="mt-3 text-xs" style={{ color: "var(--text-muted)" }}>
        No credit card. Pay $49/session or $149/month only when you go live.
      </p>
    </form>
  );
}
