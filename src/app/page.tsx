import WaitlistForm from "@/components/waitlist-form";

// ─── Terminal Mock ──────────────────────────────────────────────────────────
function TerminalMock() {
  return (
    <div
      className="rounded-xl overflow-hidden border"
      style={{
        borderColor: "var(--border-bright)",
        backgroundColor: "var(--bg-card)",
        boxShadow:
          "0 0 60px rgba(168,255,53,0.08), 0 24px 80px rgba(0,0,0,0.6)",
        fontFamily: "'JetBrains Mono', monospace",
      }}
    >
      {/* Window chrome */}
      <div
        className="flex items-center gap-2 px-4 py-3 border-b"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "rgba(255,255,255,0.02)",
        }}
      >
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#ff5f57" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#febc2e" }} />
        <div className="w-3 h-3 rounded-full" style={{ backgroundColor: "#28c840" }} />
        <span className="ml-3 text-xs" style={{ color: "var(--text-muted)" }}>
          interviewassit — overlay
        </span>
        <div className="ml-auto flex items-center gap-2">
          <span
            className="text-xs px-2 py-0.5 rounded-full"
            style={{
              color: "var(--accent)",
              backgroundColor: "rgba(168,255,53,0.1)",
              border: "1px solid rgba(168,255,53,0.2)",
            }}
          >
            &#x25cf; LIVE
          </span>
        </div>
      </div>

      {/* Input section */}
      <div className="p-4 border-b" style={{ borderColor: "var(--border)" }}>
        <div className="text-xs mb-2" style={{ color: "var(--text-dim)" }}>
          // detected from interviewer audio
        </div>
        <div className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          <span style={{ color: "var(--accent)" }}>&quot;</span>
          Given an array of integers and a target sum, find two numbers that
          add up to the target. What approach would you use?
          <span style={{ color: "var(--accent)" }}>&quot;</span>
        </div>
      </div>

      {/* Response section */}
      <div className="p-4">
        <div
          className="text-xs mb-3 flex items-center gap-2"
          style={{ color: "var(--text-dim)" }}
        >
          <span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "var(--accent)" }}
          />
          response in 3.2s
        </div>

        <div className="space-y-2 text-sm">
          <div style={{ color: "var(--accent)" }} className="font-semibold">
            Hash Map approach — O(n) time, O(n) space
          </div>
          <div style={{ color: "var(--text-muted)" }} className="text-xs leading-relaxed">
            Single pass. For each num, check if (target - num) is in the map.
            If yes, return the pair. If no, store num with its index.
          </div>

          <div
            className="mt-3 rounded-lg p-3 text-xs leading-relaxed"
            style={{
              backgroundColor: "rgba(0,0,0,0.4)",
              border: "1px solid var(--border)",
              color: "#9fcba4",
            }}
          >
            <div style={{ color: "var(--text-dim)" }}>def two_sum(nums, target):</div>
            <div className="pl-4">seen = &#x7b;&#x7d;</div>
            <div className="pl-4">for i, n in enumerate(nums):</div>
            <div className="pl-8">diff = target - n</div>
            <div className="pl-8">
              <span style={{ color: "var(--text-dim)" }}>if</span> diff{" "}
              <span style={{ color: "var(--text-dim)" }}>in</span> seen:
            </div>
            <div className="pl-12">
              <span style={{ color: "var(--text-dim)" }}>return</span>{" "}
              [seen[diff], i]
            </div>
            <div className="pl-8">seen[n] = i</div>
          </div>

          <div className="text-xs pt-1" style={{ color: "var(--text-dim)" }}>
            Edge cases: duplicates, no solution, single element
            <span
              className="inline-block w-2 h-4 ml-1 align-middle cursor-blink"
              style={{ backgroundColor: "var(--accent)", opacity: 0.8 }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

// ─── Stat ────────────────────────────────────────────────────────────────────
function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="text-center">
      <div
        className="text-3xl font-bold font-display"
        style={{ color: "var(--accent)" }}
      >
        {value}
      </div>
      <div className="text-xs mt-1" style={{ color: "var(--text-muted)" }}>
        {label}
      </div>
    </div>
  );
}

// ─── Feature Card ────────────────────────────────────────────────────────────
function FeatureCard({
  icon,
  title,
  body,
}: {
  icon: string;
  title: string;
  body: string;
}) {
  return (
    <div
      className="rounded-xl p-6 border card-hover"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <div
        className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 text-lg"
        style={{
          backgroundColor: "rgba(168,255,53,0.1)",
          border: "1px solid rgba(168,255,53,0.2)",
        }}
      >
        <span style={{ color: "var(--accent)" }}>{icon}</span>
      </div>
      <h3
        className="font-semibold mb-2 font-display"
        style={{ color: "var(--text)" }}
      >
        {title}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {body}
      </p>
    </div>
  );
}

// ─── Step ────────────────────────────────────────────────────────────────────
function Step({
  number,
  title,
  body,
  isLast,
}: {
  number: string;
  title: string;
  body: string;
  isLast?: boolean;
}) {
  return (
    <div className="flex gap-5 relative">
      <div className="flex flex-col items-center">
        <div
          className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold font-mono-code flex-shrink-0 relative z-10"
          style={{
            backgroundColor: "var(--bg-card)",
            border: "2px solid var(--accent)",
            color: "var(--accent)",
          }}
        >
          {number}
        </div>
        {!isLast && (
          <div
            className="w-px flex-1 mt-2"
            style={{
              background: "linear-gradient(to bottom, var(--accent-dim), transparent)",
              minHeight: "40px",
            }}
          />
        )}
      </div>
      <div className="pb-8">
        <h3
          className="font-semibold mb-1 font-display"
          style={{ color: "var(--text)" }}
        >
          {title}
        </h3>
        <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
          {body}
        </p>
      </div>
    </div>
  );
}

// ─── Pricing Card ────────────────────────────────────────────────────────────
function PricingCard({
  price,
  period,
  description,
  features,
  highlighted,
  badge,
}: {
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  badge?: string;
}) {
  return (
    <div
      className="rounded-xl p-8 border relative flex flex-col"
      style={{
        backgroundColor: highlighted ? "rgba(168,255,53,0.04)" : "var(--bg-card)",
        borderColor: highlighted ? "var(--accent)" : "var(--border)",
        boxShadow: highlighted ? "0 0 40px rgba(168,255,53,0.1)" : undefined,
      }}
    >
      {badge && (
        <div
          className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-3 py-1 rounded-full font-semibold font-mono-code"
          style={{ backgroundColor: "var(--accent)", color: "var(--bg)" }}
        >
          {badge}
        </div>
      )}

      <div className="mb-6">
        <div className="flex items-baseline gap-1">
          <span
            className="text-4xl font-bold font-display"
            style={{ color: "var(--text)" }}
          >
            {price}
          </span>
          <span className="text-sm" style={{ color: "var(--text-muted)" }}>
            {period}
          </span>
        </div>
        <p className="mt-2 text-sm" style={{ color: "var(--text-muted)" }}>
          {description}
        </p>
      </div>

      <ul className="space-y-3 mb-8 flex-1">
        {features.map((f, i) => (
          <li key={i} className="flex items-start gap-2 text-sm">
            <span
              className="mt-0.5 flex-shrink-0 text-xs"
              style={{ color: "var(--accent)" }}
            >
              &#10003;
            </span>
            <span style={{ color: "var(--text-muted)" }}>{f}</span>
          </li>
        ))}
      </ul>

      <a
        href="#waitlist"
        className={highlighted ? "btn-accent-filled" : "btn-outline-accent"}
      >
        Get Started Free
      </a>
    </div>
  );
}

// ─── FAQ Item ────────────────────────────────────────────────────────────────
function FaqItem({ q, a }: { q: string; a: string }) {
  return (
    <div className="border-b py-6" style={{ borderColor: "var(--border)" }}>
      <h3
        className="font-semibold mb-2 font-display"
        style={{ color: "var(--text)" }}
      >
        {q}
      </h3>
      <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
        {a}
      </p>
    </div>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────
export default function Home() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: "var(--bg)" }}>
      {/* Nav */}
      <nav
        className="fixed top-0 left-0 right-0 z-50 border-b"
        style={{
          borderColor: "var(--border)",
          backgroundColor: "rgba(6,12,8,0.85)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
        }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div
              className="w-2 h-2 rounded-full pulse-ring"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span
              className="font-bold font-display tracking-tight"
              style={{ color: "var(--text)" }}
            >
              Interview<span style={{ color: "var(--accent)" }}>Assit</span>
            </span>
          </div>
          <a href="#waitlist" className="btn-accent" style={{ padding: "0.4rem 1rem" }}>
            Practice Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="scanline-grid hero-glow relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
        {/* Radial accent */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse at center top, rgba(168,255,53,0.07) 0%, transparent 70%)",
          }}
        />

        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Copy */}
            <div>
              <div
                className="inline-flex items-center gap-2 text-xs font-mono-code mb-6 px-3 py-1.5 rounded-full border animate-fade-up"
                style={{
                  borderColor: "rgba(168,255,53,0.3)",
                  backgroundColor: "rgba(168,255,53,0.06)",
                  color: "var(--accent)",
                }}
              >
                <span
                  className="w-1.5 h-1.5 rounded-full pulse-ring"
                  style={{ backgroundColor: "var(--accent)" }}
                />
                AI Copilot for Technical Interviews
              </div>

              <h1
                className="font-display font-extrabold leading-[1.05] mb-5 animate-fade-up delay-100"
                style={{
                  fontSize: "clamp(2.4rem, 5vw, 3.6rem)",
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                }}
              >
                Your interviewer speaks.{" "}
                <span style={{ color: "var(--accent)" }}>
                  You already have the answer.
                </span>
              </h1>

              <p
                className="text-lg leading-relaxed mb-8 animate-fade-up delay-200"
                style={{ color: "var(--text-muted)", maxWidth: "480px" }}
              >
                InterviewAssit hears your live interview and delivers precise
                coding approaches in under 5 seconds. No second screen. No
                alt-tabbing. Nobody knows.
              </p>

              <div id="waitlist" className="max-w-lg animate-fade-up delay-300">
                <WaitlistForm variant="hero" />
              </div>

              <p
                className="mt-6 text-xs font-mono-code animate-fade-up delay-400"
                style={{ color: "var(--text-dim)" }}
              >
                Joined by 2,400+ engineers in active job searches
              </p>
            </div>

            {/* Right: Terminal mock */}
            <div className="lg:pl-4 animate-fade-up delay-500">
              <TerminalMock />
            </div>
          </div>
        </div>
      </section>

      {/* Stats bar */}
      <section
        className="border-y py-10"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            <Stat value="&lt;5s" label="Average response time" />
            <Stat value="12+" label="Proctoring tools it avoids" />
            <Stat value="$40K+" label="Average salary jump when you land it" />
            <Stat value="94%" label="Users who say it kills the blank-out panic" />
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-20 sm:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <div>
              <div
                className="text-xs font-mono-code mb-4 uppercase tracking-widest"
                style={{ color: "var(--accent)" }}
              >
                How it works
              </div>
              <h2
                className="font-display font-bold mb-6"
                style={{
                  fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                  color: "var(--text)",
                  letterSpacing: "-0.02em",
                  lineHeight: 1.1,
                }}
              >
                Three steps.
                <br />
                <span style={{ color: "var(--accent)" }}>One passed interview.</span>
              </h2>
              <p className="text-sm leading-relaxed" style={{ color: "var(--text-muted)" }}>
                Set it up once before your interview. Then forget it is even
                there. It runs quietly while you focus on coding.
              </p>
            </div>

            <div className="pt-2">
              <Step
                number="01"
                title="Connect to your interview call"
                body="InterviewAssit runs as a lightweight overlay outside your browser. It routes audio from your call — Zoom, Google Meet, whatever — without touching your screen."
              />
              <Step
                number="02"
                title="Your interviewer asks a question"
                body="The second your interviewer finishes speaking, we process the audio. No manual prompting. No copy-pasting. You don't touch anything."
              />
              <Step
                number="03"
                title="Get a precise answer in under 5 seconds"
                body="A framework-aware, interview-specific approach appears in your overlay. Time complexity, edge cases, starter code. You read it. You speak. You pass."
                isLast
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section
        className="py-20 sm:py-28 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div
              className="text-xs font-mono-code mb-4 uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Why InterviewAssit
            </div>
            <h2
              className="font-display font-bold"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "var(--text)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Not ChatGPT.
              <br />
              <span style={{ color: "var(--accent)" }}>
                Purpose-built for live coding rounds.
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            <FeatureCard
              icon="🎧"
              title="Audio-first. Hands-free."
              body="No copy-pasting. No manual prompting mid-interview. It hears the question and answers before you start sweating. You stay in flow."
            />
            <FeatureCard
              icon="🛡"
              title="Invisible to proctoring tools"
              body="Delivered outside your browser window. No browser extension. Tested against screen-share monitoring and 12 AI proctoring systems. Not detectable."
            />
            <FeatureCard
              icon="⚡"
              title="Sub-5-second latency"
              body="Alt-tabbing to ChatGPT takes 15-30 seconds minimum. We deliver in under 5. The silence after a question never gets awkward."
            />
            <FeatureCard
              icon="💻"
              title="FAANG-tuned answers"
              body="Not generic chatbot prose. Actual interview patterns: hash maps, sliding windows, BFS/DFS, dynamic programming. With time complexity and edge cases."
            />
            <FeatureCard
              icon="🔧"
              title="Framework-aware"
              body="Python, JavaScript, Java, Go. LeetCode-style coding rounds and system design. It knows what language you are using and adapts the output."
            />
            <FeatureCard
              icon="📊"
              title="Practice mode included"
              body="Run unlimited mock interviews before you pay a cent. See exactly what you would get in a real session. No surprises on interview day."
            />
          </div>
        </div>
      </section>

      {/* Comparison callout */}
      <section
        className="py-16 sm:py-20 border-t"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6">
          <div
            className="rounded-2xl border p-8 sm:p-10 relative overflow-hidden"
            style={{
              borderColor: "var(--border-bright)",
              backgroundColor: "var(--bg-card)",
            }}
          >
            <div
              className="absolute top-0 right-0 w-64 h-64 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at top right, rgba(168,255,53,0.07) 0%, transparent 70%)",
              }}
            />
            <div
              className="text-xs font-mono-code mb-4 uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              The difference
            </div>
            <h2
              className="font-display font-bold mb-8"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2.2rem)",
                color: "var(--text)",
                letterSpacing: "-0.02em",
              }}
            >
              Built for the moment{" "}
              <span style={{ color: "var(--accent)" }}>ChatGPT fails you.</span>
            </h2>

            <div className="grid sm:grid-cols-2 gap-6">
              <div
                className="rounded-lg p-5 border"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "rgba(0,0,0,0.3)",
                }}
              >
                <div
                  className="text-xs font-mono-code mb-3 uppercase tracking-wider"
                  style={{ color: "var(--text-dim)" }}
                >
                  Alt-tabbing to ChatGPT
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    "15-30 seconds while the interviewer watches",
                    "You have to type the question manually",
                    "Generic answer, no interview context",
                    "Visible on screen share",
                    "Breaks your focus and your flow",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2"
                      style={{ color: "var(--text-dim)" }}
                    >
                      <span className="mt-0.5 text-xs" style={{ color: "#ff4545" }}>
                        &#x2717;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div
                className="rounded-lg p-5 border"
                style={{
                  borderColor: "rgba(168,255,53,0.25)",
                  backgroundColor: "rgba(168,255,53,0.03)",
                }}
              >
                <div
                  className="text-xs font-mono-code mb-3 uppercase tracking-wider"
                  style={{ color: "var(--accent)" }}
                >
                  InterviewAssit
                </div>
                <ul className="space-y-2 text-sm">
                  {[
                    "Answer in under 5 seconds, automatically",
                    "Hears the question directly from audio",
                    "Interview-specific: patterns, complexity, edge cases",
                    "Outside your browser, invisible to monitoring",
                    "You stay focused, calm, and in control",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-2"
                      style={{ color: "var(--text-muted)" }}
                    >
                      <span
                        className="mt-0.5 text-xs"
                        style={{ color: "var(--accent)" }}
                      >
                        &#10003;
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section
        className="py-20 sm:py-28 border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-14">
            <div
              className="text-xs font-mono-code mb-4 uppercase tracking-widest"
              style={{ color: "var(--accent)" }}
            >
              Pricing
            </div>
            <h2
              className="font-display font-bold mb-4"
              style={{
                fontSize: "clamp(1.8rem, 3.5vw, 2.6rem)",
                color: "var(--text)",
                letterSpacing: "-0.02em",
                lineHeight: 1.1,
              }}
            >
              Practice free.{" "}
              <span style={{ color: "var(--accent)" }}>
                Pay only when it matters.
              </span>
            </h2>
            <p
              className="text-sm max-w-md mx-auto"
              style={{ color: "var(--text-muted)" }}
            >
              The average FAANG offer is $180K+. A single session pays for
              itself a thousand times over.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <PricingCard
              price="$49"
              period="/ session"
              description="One real interview. Full access. Pay after you practice."
              features={[
                "Unlimited practice sessions before you pay",
                "Full AI copilot for one live interview",
                "Audio detection and real-time response",
                "All languages and frameworks",
                "Valid for 48 hours from activation",
              ]}
            />
            <PricingCard
              price="$149"
              period="/ month"
              description="Unlimited sessions during your job search. Cancel any time."
              features={[
                "Everything in the session plan",
                "Unlimited live interview sessions",
                "Priority response queue",
                "System design interview support",
                "Cancel any time, no lock-in",
              ]}
              highlighted
              badge="Most Popular"
            />
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section
        className="py-20 sm:py-28 border-t"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
      >
        <div className="max-w-3xl mx-auto px-4 sm:px-6">
          <div
            className="text-xs font-mono-code mb-4 uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            FAQ
          </div>
          <h2
            className="font-display font-bold mb-10"
            style={{
              fontSize: "clamp(1.8rem, 3.5vw, 2.4rem)",
              color: "var(--text)",
              letterSpacing: "-0.02em",
            }}
          >
            Questions you are probably asking.
          </h2>

          <div>
            <FaqItem
              q="Is this actually undetectable?"
              a="Yes. InterviewAssit runs as a separate overlay app outside your browser. There is no browser extension, no injected scripts, and nothing on your screen share. We have tested it against 12 proctoring tools including HackerRank and Codesignal. It does not show up."
            />
            <FaqItem
              q="What if I completely blank out mid-answer?"
              a="That is exactly what we are here for. You get a structured approach with the algorithm, the time complexity, and the edge cases in under 5 seconds. You read it, you talk through it, you code it. The cognitive load drops immediately."
            />
            <FaqItem
              q="Does it work for my programming language?"
              a="Python, JavaScript/TypeScript, Java, and Go are fully supported. C++ is in beta. The output adapts to whatever language you set during setup."
            />
            <FaqItem
              q="What about system design interviews?"
              a="Supported on the monthly plan. We handle distributed system questions, API design, database schema questions, and scalability discussions."
            />
            <FaqItem
              q="Will it give me the full solution or just a hint?"
              a="Both, depending on what you set in preferences. Default is a structured approach plus starter code so the solution still sounds like you. Full code generation is available if you need it."
            />
            <FaqItem
              q="What if I just want to practice first?"
              a="Practice is free. Run as many mock sessions as you want before you ever pay. When you are ready to go live, activate a session or subscribe. You will know exactly what to expect."
            />
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section
        className="py-20 sm:py-28 relative overflow-hidden border-t"
        style={{ borderColor: "var(--border)" }}
      >
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 100%, rgba(168,255,53,0.06) 0%, transparent 70%)",
          }}
        />
        <div className="scanline-grid absolute inset-0 opacity-50 pointer-events-none" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 text-center relative z-10">
          <div
            className="text-xs font-mono-code mb-6 uppercase tracking-widest"
            style={{ color: "var(--accent)" }}
          >
            Ready when you are
          </div>
          <h2
            className="font-display font-extrabold mb-5"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "var(--text)",
              letterSpacing: "-0.025em",
              lineHeight: 1.1,
            }}
          >
            Practice today.
            <br />
            <span style={{ color: "var(--accent)" }}>Interview with confidence.</span>
          </h2>
          <p
            className="mb-8 text-base leading-relaxed max-w-lg mx-auto"
            style={{ color: "var(--text-muted)" }}
          >
            One practice session is all it takes to see exactly what you would
            get in a real interview. No credit card. No commitment. Just find
            out if it works for you.
          </p>

          <div className="max-w-md mx-auto">
            <WaitlistForm variant="cta" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer
        className="border-t py-8"
        style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-surface)" }}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono-code">
          <div className="flex items-center gap-2">
            <div
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: "var(--accent)" }}
            />
            <span style={{ color: "var(--text-muted)" }}>
              Interview<span style={{ color: "var(--accent)" }}>Assit</span>
            </span>
            <span style={{ color: "var(--text-dim)" }}>
              &copy; {new Date().getFullYear()}
            </span>
          </div>

          <div
            className="flex items-center gap-1.5"
            style={{ color: "var(--text-dim)" }}
          >
            Built with{" "}
            <a
              href="https://boringcombinator.com"
              target="_blank"
              rel="noopener noreferrer"
              className="link-accent"
            >
              Boring Combinator
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
