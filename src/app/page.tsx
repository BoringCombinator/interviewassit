import WaitlistForm from "@/components/waitlist-form";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0F0F1A] text-[#E8E8F0]">
      {/* Nav */}
      <nav className="flex items-center justify-between px-6 py-5 max-w-6xl mx-auto">
        <span className="text-[#C8F135] font-black text-xl tracking-tight">
          Interview<span className="text-[#E8E8F0]">Assist</span>
        </span>
        <a
          href="#waitlist"
          className="text-sm border border-[#C8F135] text-[#C8F135] px-4 py-2 rounded-full hover:bg-[#C8F135] hover:text-[#0F0F1A] transition-all duration-200 font-semibold"
        >
          Get Early Access
        </a>
      </nav>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-[#1A1A2E] border border-[#C8F135]/20 rounded-full px-4 py-1.5 mb-8">
          <span className="w-2 h-2 rounded-full bg-[#C8F135] animate-pulse"></span>
          <span className="text-xs text-[#C8F135] font-medium uppercase tracking-widest">
            Real-time AI interview copilot
          </span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6 max-w-5xl mx-auto">
          The AI{" "}
          <span className="relative inline-block">
            <span className="text-[#C8F135]">Whispering Answers</span>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-[#C8F135]/40 rounded-full"></span>
          </span>{" "}
          In Your Ear While You Interview
        </h1>

        <p className="text-lg sm:text-xl text-[#E8E8F0]/70 max-w-2xl mx-auto mb-4 leading-relaxed">
          It hears your interviewer. It gives you a real answer in under 5
          seconds. No second screen, no copy-pasting, no getting caught.{" "}
          <span className="text-[#E8E8F0] font-medium">
            Just you landing the job you've been grinding toward.
          </span>
        </p>

        <p className="text-sm text-[#E8E8F0]/50 max-w-xl mx-auto mb-10">
          Bootcamp grads and career-switchers going up against CS majors at
          top-tier companies. The gap between your skills and their bar is real.{" "}
          <span className="text-[#C8F135]/80 font-medium">This closes it.</span>
        </p>

        <div id="waitlist" className="flex justify-center">
          <div className="w-full max-w-md">
            <WaitlistForm />
            <p className="text-xs text-[#E8E8F0]/30 mt-3">
              Free practice sessions — no card required to start
            </p>
          </div>
        </div>

        {/* Social proof strip */}
        <div className="mt-14 flex flex-wrap justify-center gap-6 text-sm text-[#E8E8F0]/40">
          <span>✓ Undetectable by proctoring tools</span>
          <span>✓ Under 5-second response</span>
          <span>✓ Free to practice</span>
        </div>
      </section>

      {/* How it looks */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="relative rounded-2xl overflow-hidden border border-[#1A1A2E] bg-[#1A1A2E]">
          <div className="flex items-center gap-2 px-4 py-3 border-b border-[#E8E8F0]/5">
            <span className="w-3 h-3 rounded-full bg-red-500/60"></span>
            <span className="w-3 h-3 rounded-full bg-yellow-500/60"></span>
            <span className="w-3 h-3 rounded-full bg-green-500/60"></span>
            <span className="text-xs text-[#E8E8F0]/20 ml-2">
              InterviewAssist — live session
            </span>
          </div>
          <div className="p-6 sm:p-10 grid md:grid-cols-2 gap-6">
            <div className="space-y-3">
              <p className="text-xs uppercase tracking-widest text-[#E8E8F0]/30 font-semibold">
                Interviewer Audio
              </p>
              <div className="bg-[#0F0F1A] rounded-lg p-4 text-sm text-[#E8E8F0]/60 leading-relaxed border border-[#E8E8F0]/5">
                "Given an array of integers, find the two numbers that sum to
                the target. What's your approach and what's the time
                complexity?"
              </div>
              <div className="flex items-center gap-2 mt-2">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="w-1 rounded-full bg-[#C8F135]/60 animate-pulse"
                      style={{
                        height: `${8 + Math.random() * 16}px`,
                        animationDelay: `${i * 100}ms`,
                      }}
                    ></div>
                  ))}
                </div>
                <span className="text-xs text-[#C8F135]/60">Listening…</span>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-widest text-[#E8E8F0]/30 font-semibold">
                  InterviewAssist Response
                </p>
                <span className="text-xs bg-[#C8F135]/10 text-[#C8F135] px-2 py-0.5 rounded-full font-semibold">
                  4.2s
                </span>
              </div>
              <div className="bg-[#0F0F1A] rounded-lg p-4 text-sm leading-relaxed border border-[#C8F135]/20 space-y-2">
                <p className="text-[#C8F135] font-semibold">
                  Two Sum — Hash Map approach
                </p>
                <p className="text-[#E8E8F0]/80">
                  "I'd use a hash map to store complements as I iterate. For
                  each number, I check if{" "}
                  <code className="text-[#C8F135]/80 bg-[#C8F135]/10 px-1 rounded">
                    target - nums[i]
                  </code>{" "}
                  already exists in the map. That gets us O(n) time and O(n)
                  space."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Value Props */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-black mb-3">
            Built different.{" "}
            <span className="text-[#C8F135]">For the real thing.</span>
          </h2>
          <p className="text-[#E8E8F0]/50 text-sm">
            Not a study tool. Not a chatbot. An active copilot.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              number: "01",
              title: "Answers In 5 Seconds",
              description:
                "InterviewAssist listens to your interviewer's audio and surfaces a tailored coding approach before the awkward silence gets weird — no manual prompting required.",
              icon: "⚡",
            },
            {
              number: "02",
              title: "Invisible By Design",
              description:
                "Built specifically to stay off the radar of AI proctoring tools and screen-share monitoring, so what happens in your interview stays in your interview.",
              icon: "👁",
            },
            {
              number: "03",
              title: "Interview-Tuned Output",
              description:
                "Suggestions are framed for live coding interviews — framework-aware, language-specific, and formatted the way a strong candidate actually talks through a problem.",
              icon: "🎯",
            },
          ].map((prop) => (
            <div
              key={prop.number}
              className="group relative bg-[#1A1A2E] rounded-2xl p-6 sm:p-8 border border-[#E8E8F0]/5 hover:border-[#C8F135]/30 transition-all duration-300"
            >
              <div className="flex items-start justify-between mb-5">
                <span className="text-3xl">{prop.icon}</span>
                <span className="text-xs text-[#E8E8F0]/20 font-mono font-bold">
                  {prop.number}
                </span>
              </div>
              <h3 className="text-lg font-black mb-3 group-hover:text-[#C8F135] transition-colors duration-200">
                {prop.title}
              </h3>
              <p className="text-sm text-[#E8E8F0]/60 leading-relaxed">
                {prop.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Differentiation */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-[#1A1A2E] rounded-2xl p-8 sm:p-12 border border-[#E8E8F0]/5 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C8F135]/5 rounded-full blur-3xl pointer-events-none"></div>
          <div className="relative z-10 grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-xs uppercase tracking-widest text-[#C8F135] font-semibold mb-4">
                InterviewAssist vs. ChatGPT
              </p>
              <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
                You don't operate it.{" "}
                <span className="text-[#C8F135]">It operates with you.</span>
              </h2>
              <p className="text-[#E8E8F0]/60 leading-relaxed">
                ChatGPT is a tool you operate. InterviewAssist is a copilot that
                operates with you. It listens, it understands context, and it
                responds in real time — without you typing a single prompt
                mid-interview.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  label: "Context from audio",
                  them: false,
                  us: true,
                },
                {
                  label: "Zero prompting needed",
                  them: false,
                  us: true,
                },
                {
                  label: "Real-time response",
                  them: false,
                  us: true,
                },
                {
                  label: "Proctoring-invisible",
                  them: false,
                  us: true,
                },
                {
                  label: "Interview-framed output",
                  them: false,
                  us: true,
                },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center gap-3 bg-[#0F0F1A] rounded-xl px-4 py-3 border border-[#E8E8F0]/5"
                >
                  <span className="flex-1 text-sm text-[#E8E8F0]/70">
                    {row.label}
                  </span>
                  <span className="w-20 text-center text-xs text-[#E8E8F0]/30">
                    {row.them ? (
                      <span className="text-green-400">✓</span>
                    ) : (
                      <span className="text-red-400/60">✗ ChatGPT</span>
                    )}
                  </span>
                  <span className="w-24 text-center text-xs">
                    {row.us && (
                      <span className="text-[#C8F135] font-bold bg-[#C8F135]/10 px-2 py-0.5 rounded-full">
                        ✓ Ours
                      </span>
                    )}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-black mb-2">
            Simple, honest pricing
          </h2>
          <p className="text-[#E8E8F0]/50 text-sm">
            Pay only when it matters.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          <div className="bg-[#1A1A2E] rounded-2xl p-6 border border-[#E8E8F0]/5 text-center">
            <p className="text-xs uppercase tracking-widest text-[#E8E8F0]/40 font-semibold mb-3">
              Practice
            </p>
            <p className="text-4xl font-black text-[#C8F135] mb-1">Free</p>
            <p className="text-xs text-[#E8E8F0]/40 mb-4">
              No card required
            </p>
            <p className="text-sm text-[#E8E8F0]/60">
              Unlimited practice sessions to get comfortable before the real
              thing
            </p>
          </div>
          <div className="bg-[#1A1A2E] rounded-2xl p-6 border border-[#C8F135]/30 text-center relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C8F135] text-[#0F0F1A] text-xs font-black px-3 py-1 rounded-full">
              MOST POPULAR
            </div>
            <p className="text-xs uppercase tracking-widest text-[#E8E8F0]/40 font-semibold mb-3">
              Per Session
            </p>
            <p className="text-4xl font-black text-[#C8F135] mb-1">$49</p>
            <p className="text-xs text-[#E8E8F0]/40 mb-4">per interview</p>
            <p className="text-sm text-[#E8E8F0]/60">
              Pay only when you're interviewing for real
            </p>
          </div>
          <div className="bg-[#1A1A2E] rounded-2xl p-6 border border-[#E8E8F0]/5 text-center">
            <p className="text-xs uppercase tracking-widest text-[#E8E8F0]/40 font-semibold mb-3">
              Job Search Mode
            </p>
            <p className="text-4xl font-black text-[#C8F135] mb-1">$149</p>
            <p className="text-xs text-[#E8E8F0]/40 mb-4">per month</p>
            <p className="text-sm text-[#E8E8F0]/60">
              Interviewing often? Unlimited sessions all month
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="max-w-6xl mx-auto px-6 pb-24">
        <div className="bg-[#C8F135] rounded-2xl p-8 sm:p-14 text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute rounded-full border border-[#0F0F1A]"
                style={{
                  width: `${80 + i * 60}px`,
                  height: `${80 + i * 60}px`,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                }}
              ></div>
            ))}
          </div>
          <div className="relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-[#0F0F1A] mb-4 leading-tight">
              Try a Free Practice Session
            </h2>
            <p className="text-[#1A1A2E]/70 mb-8 text-lg font-medium">
              You Only Pay When It's the Real Thing
            </p>
            <div className="flex justify-center">
              <div className="w-full max-w-md">
                <WaitlistForm dark />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8 border-t border-[#E8E8F0]/5">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="text-[#C8F135] font-black text-lg">
            Interview<span className="text-[#E8E8F0]">Assist</span>
          </span>
          <p className="text-xs text-[#E8E8F0]/30">
            © {new Date().getFullYear()} InterviewAssist. All rights reserved.
          </p>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-[#E8E8F0]/30 hover:text-[#E8E8F0]/60 transition-colors duration-200"
          >
            Built with{" "}
            <span className="font-semibold text-[#E8E8F0]/50">
              Boring Combinator
            </span>
            <span className="text-[#C8F135]">⚙</span>
          </a>
        </div>
      </footer>
    </main>
  );
}