import WaitlistForm from "@/components/waitlist-form";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#F5F0EB] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="px-6 py-5 flex items-center justify-between max-w-6xl mx-auto">
        <span className="font-bold text-lg tracking-tight">
          Interview<span className="text-[#C84B31]">Assist</span>
        </span>
        <a
          href="#waitlist"
          className="text-sm font-semibold bg-[#C84B31] text-white px-4 py-2 rounded-full hover:bg-[#a83a24] transition-colors"
        >
          Get Early Access
        </a>
      </nav>

      {/* Hero */}
      <section className="px-6 pt-16 pb-24 max-w-4xl mx-auto text-center">
        <div className="inline-block mb-6 px-3 py-1 rounded-full border border-[#C84B31]/30 bg-[#C84B31]/10 text-[#C84B31] text-xs font-semibold tracking-widest uppercase">
          Real-Time AI Interview Coaching
        </div>
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight tracking-tight mb-6">
          Your Next Interviewer Has No Idea{" "}
          <span className="relative inline-block">
            <span className="relative z-10">You Have a Copilot</span>
            <span
              className="absolute left-0 bottom-1 w-full h-3 bg-[#C84B31]/20 -z-0 rounded"
              aria-hidden="true"
            />
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-[#1A1A2E]/70 max-w-2xl mx-auto mb-10 leading-relaxed">
          InterviewAssist listens to your interview in real time and feeds you
          the exact approach to answer — in under 5 seconds. No second screen.
          No copy-pasting. No panicking.
        </p>
        <a
          href="#waitlist"
          className="inline-block bg-[#C84B31] text-white font-bold px-8 py-4 rounded-full text-base sm:text-lg hover:bg-[#a83a24] transition-colors shadow-lg shadow-[#C84B31]/30"
        >
          Practice Free Today — Pay Only When the Interview Is Real
        </a>
        <p className="mt-4 text-sm text-[#1A1A2E]/50">
          No credit card required to practice.
        </p>
      </section>

      {/* Target Audience Banner */}
      <section className="bg-[#1A1A2E] text-white py-10 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-base sm:text-lg leading-relaxed text-white/80">
            Built for{" "}
            <span className="text-[#C84B31] font-semibold">
              bootcamp grads and career-switchers
            </span>{" "}
            going after FAANG-tier roles. You can do the job. The live coding
            bar is just brutally artificial — and a{" "}
            <span className="text-white font-semibold">$40K salary bump</span>{" "}
            shouldn&apos;t hinge on whether you blanked on a binary tree problem
            at 10am on a Tuesday.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 py-24 max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-4 tracking-tight">
          Everything You Need. Nothing They Can See.
        </h2>
        <p className="text-center text-[#1A1A2E]/60 mb-14 max-w-xl mx-auto">
          Designed around the exact conditions of a live technical interview —
          not some general-purpose AI stapled onto a use case.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="rounded-2xl border border-[#1A1A2E]/10 bg-white p-8 flex flex-col gap-4 hover:shadow-xl hover:shadow-[#1A1A2E]/5 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#C84B31]/10 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C84B31"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 6 12 12 16 14" />
              </svg>
            </div>
            <h3 className="text-xl font-black tracking-tight">
              Answers in 5 Seconds
            </h3>
            <p className="text-[#1A1A2E]/65 leading-relaxed text-sm">
              It hears the question the moment your interviewer asks it and
              surfaces a tailored, framework-aware coding approach before the
              awkward silence gets weird.
            </p>
          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-[#1A1A2E]/10 bg-white p-8 flex flex-col gap-4 hover:shadow-xl hover:shadow-[#1A1A2E]/5 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#C84B31]/10 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C84B31"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94" />
                <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19" />
                <line x1="1" y1="1" x2="23" y2="23" />
              </svg>
            </div>
            <h3 className="text-xl font-black tracking-tight">
              Invisible by Design
            </h3>
            <p className="text-[#1A1A2E]/65 leading-relaxed text-sm">
              Built from the ground up to stay off the radar — proctoring tools,
              screen-share monitoring, eye-tracking software — none of it picks
              up a thing.
            </p>
          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-[#1A1A2E]/10 bg-white p-8 flex flex-col gap-4 hover:shadow-xl hover:shadow-[#1A1A2E]/5 transition-shadow">
            <div className="w-12 h-12 rounded-xl bg-[#C84B31]/10 flex items-center justify-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#C84B31"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="16 18 22 12 16 6" />
                <polyline points="8 6 2 12 8 18" />
              </svg>
            </div>
            <h3 className="text-xl font-black tracking-tight">
              Interview-Specific Output
            </h3>
            <p className="text-[#1A1A2E]/65 leading-relaxed text-sm">
              This isn&apos;t a chatbot you have to babysit with prompts — it
              knows you&apos;re in a live coding interview and gives you
              structured, step-by-step thinking that actually sounds like a
              senior engineer.
            </p>
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="px-6 py-20 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1">
            <div className="text-[#C84B31] text-xs font-bold uppercase tracking-widest mb-3">
              Why Not Just Use ChatGPT?
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-white leading-tight mb-5 tracking-tight">
              Every Other Tool Makes You Stop. Ours Keeps You Going.
            </h2>
            <p className="text-white/65 leading-relaxed">
              Every other tool makes you stop, type, wait, and read.
              InterviewAssist runs in the background and talks to you —
              purpose-built for the exact pressure of a live interview, not
              retrofitted from a general AI product.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6 space-y-4">
              {[
                { label: "Stop what you're doing to type", them: true, us: false },
                { label: "Wait for a response", them: true, us: false },
                { label: "Looks suspicious on screen share", them: true, us: false },
                { label: "Hears the question automatically", them: false, us: true },
                { label: "Responds in under 5 seconds", them: false, us: true },
                { label: "Designed for live interviews", them: false, us: true },
              ].map((row) => (
                <div
                  key={row.label}
                  className="flex items-center justify-between gap-4"
                >
                  <span className="text-white/70 text-sm flex-1">{row.label}</span>
                  <div className="flex gap-6 shrink-0">
                    <span className="text-xs font-semibold w-16 text-center">
                      {row.them ? (
                        <span className="text-red-400">✗ Them</span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </span>
                    <span className="text-xs font-semibold w-16 text-center">
                      {row.us ? (
                        <span className="text-emerald-400">✓ Us</span>
                      ) : (
                        <span className="text-white/20">—</span>
                      )}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-24 max-w-5xl mx-auto">
        <h2 className="text-2xl sm:text-3xl font-black text-center mb-4 tracking-tight">
          Simple Pricing That Matches How You Interview
        </h2>
        <p className="text-center text-[#1A1A2E]/60 mb-14 max-w-lg mx-auto">
          Practice is always free. You only pay when it&apos;s the real thing.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="rounded-2xl border border-[#1A1A2E]/10 bg-white p-8 flex flex-col gap-3">
            <div className="text-[#C84B31] text-xs font-bold uppercase tracking-widest">
              Practice
            </div>
            <div className="text-4xl font-black">Free</div>
            <div className="text-[#1A1A2E]/60 text-sm leading-relaxed">
              Unlimited practice sessions. Get comfortable before it counts.
            </div>
            <div className="mt-auto pt-4">
              <div className="text-xs font-semibold text-[#1A1A2E]/40 uppercase tracking-wide">
                Always free
              </div>
            </div>
          </div>

          <div className="rounded-2xl border-2 border-[#C84B31] bg-white p-8 flex flex-col gap-3 relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#C84B31] text-white text-xs font-bold px-3 py-1 rounded-full">
              Most Popular
            </div>
            <div className="text-[#C84B31] text-xs font-bold uppercase tracking-widest">
              Single Session
            </div>
            <div className="text-4xl font-black">
              $49
            </div>
            <div className="text-[#1A1A2E]/60 text-sm leading-relaxed">
              One real interview. Pay once, use it when it matters most.
            </div>
            <div className="mt-auto pt-4">
              <div className="text-xs font-semibold text-[#1A1A2E]/40 uppercase tracking-wide">
                Per interview
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-[#1A1A2E]/10 bg-white p-8 flex flex-col gap-3">
            <div className="text-[#C84B31] text-xs font-bold uppercase tracking-widest">
              Unlimited
            </div>
            <div className="text-4xl font-black">
              $149
              <span className="text-base font-semibold text-[#1A1A2E]/50">
                /mo
              </span>
            </div>
            <div className="text-[#1A1A2E]/60 text-sm leading-relaxed">
              Full job-search mode. Unlimited sessions for as long as you need.
            </div>
            <div className="mt-auto pt-4">
              <div className="text-xs font-semibold text-[#1A1A2E]/40 uppercase tracking-wide">
                Per month
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section
        id="waitlist"
        className="px-6 py-24 bg-[#1A1A2E] text-white text-center"
      >
        <div className="max-w-xl mx-auto">
          <div className="inline-block mb-5 px-3 py-1 rounded-full border border-[#C84B31]/40 bg-[#C84B31]/15 text-[#C84B31] text-xs font-semibold tracking-widest uppercase">
            Early Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight tracking-tight">
            Practice Free Today — Pay Only When the Interview Is Real
          </h2>
          <p className="text-white/60 mb-10 leading-relaxed">
            Join the waitlist and get early access before we launch publicly.
            Practice sessions are free from day one.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="px-6 py-8 bg-[#F5F0EB] border-t border-[#1A1A2E]/10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-[#1A1A2E]">
            Interview<span className="text-[#C84B31]">Assist</span>
          </span>
          <p className="text-xs text-[#1A1A2E]/40 text-center">
            © {new Date().getFullYear()} InterviewAssist. All rights reserved.
          </p>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs text-[#1A1A2E]/40 hover:text-[#1A1A2E]/70 transition-colors flex items-center gap-1"
          >
            Built with{" "}
            <span className="font-semibold text-[#1A1A2E]/60">
              Boring Combinator
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}