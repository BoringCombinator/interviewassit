import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Faster Than Thinking",
    description:
      "The moment your interviewer finishes the prompt, you get a tailored coding approach in your ear — specific to the language, framework, and constraints they actually mentioned.",
    icon: "⚡",
  },
  {
    title: "Invisible by Design",
    description:
      "Built around how proctoring tools and screen-share monitoring actually work, so nothing suspicious shows up on their end while you're getting help on yours.",
    icon: "👁",
  },
  {
    title: "Interview-Tuned, Not Generic",
    description:
      "Forget copy-pasting from ChatGPT mid-call — InterviewAssist is trained on real technical interview patterns and gives you structured hints, not a wall of code to awkwardly explain.",
    icon: "🎯",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0F0F1A] text-[#F0EFF4] font-sans">
      {/* Nav */}
      <nav className="border-b border-white/5 px-6 py-4">
        <div className="max-w-5xl mx-auto flex items-center justify-between">
          <span className="text-lg font-bold tracking-tight">
            <span className="text-[#E94560]">Interview</span>Assist
          </span>
          <a
            href="#waitlist"
            className="hidden sm:inline-flex items-center gap-2 text-sm bg-[#E94560] hover:bg-[#c73550] text-white px-4 py-2 rounded-lg transition-colors font-medium"
          >
            Try Free
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden px-6 pt-20 pb-24 sm:pt-28 sm:pb-32">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-[#E94560]/10 rounded-full blur-[100px]" />
        </div>
        <div className="relative max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-[#E94560] bg-[#E94560]/10 border border-[#E94560]/20 px-4 py-2 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-[#E94560] animate-pulse" />
            Real-time AI for live technical interviews
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-6">
            Your Next Interviewer{" "}
            <br className="hidden sm:block" />
            <span className="text-[#E94560]">Won't Know</span> You Have a
            Copilot.
          </h1>
          <p className="text-lg sm:text-xl text-[#F0EFF4]/70 max-w-2xl mx-auto leading-relaxed mb-10">
            InterviewAssist listens to your interview in real time and whispers
            back the exact approach you need — in under 5 seconds. No
            tab-switching. No panic. Just the{" "}
            <span className="text-[#F0EFF4] font-semibold">$40K raise</span>{" "}
            you've been chasing.
          </p>
          <a
            href="#waitlist"
            className="inline-flex items-center gap-3 bg-[#E94560] hover:bg-[#c73550] text-white text-base sm:text-lg font-bold px-8 py-4 rounded-xl transition-all hover:scale-105 shadow-lg shadow-[#E94560]/25"
          >
            Try a Free Practice Session
            <span className="text-white/70 font-normal text-sm">
              Pay only when it counts
            </span>
          </a>
          <p className="mt-4 text-sm text-[#F0EFF4]/40">
            No credit card required for practice sessions
          </p>
        </div>
      </section>

      {/* Target Audience Banner */}
      <section className="px-6 py-10 border-y border-white/5 bg-[#1A1A2E]/60">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#F0EFF4]/60 text-sm sm:text-base leading-relaxed">
            Built for{" "}
            <span className="text-[#F0EFF4] font-medium">
              bootcamp grads and career-switchers
            </span>{" "}
            going up against FAANG-level interviews. You're not unqualified —
            you're{" "}
            <span className="text-[#E94560] font-medium">under-rehearsed</span>{" "}
            for a format that rewards speed and pattern recognition over actual
            ability.
          </p>
        </div>
      </section>

      {/* Value Props */}
      <section className="px-6 py-20 sm:py-28">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Why it actually works
            </h2>
            <p className="text-[#F0EFF4]/50 text-sm sm:text-base">
              Three things other tools get wrong that InterviewAssist gets right.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {valueProps.map((vp) => (
              <div
                key={vp.title}
                className="relative group bg-[#1A1A2E] border border-white/5 hover:border-[#E94560]/30 rounded-2xl p-7 transition-all hover:-translate-y-1"
              >
                <div className="absolute inset-0 rounded-2xl bg-[#E94560]/0 group-hover:bg-[#E94560]/5 transition-colors" />
                <div className="relative">
                  <span className="text-3xl mb-4 block">{vp.icon}</span>
                  <h3 className="text-lg font-bold mb-3 text-[#F0EFF4]">
                    {vp.title}
                  </h3>
                  <p className="text-[#F0EFF4]/60 text-sm leading-relaxed">
                    {vp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="px-6 py-16 sm:py-24 bg-[#1A1A2E]">
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-12 items-center">
            <div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E94560] mb-4 block">
                The difference
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold leading-tight mb-6">
                Every other tool makes you do the work.
              </h2>
              <p className="text-[#F0EFF4]/60 leading-relaxed">
                Open a tab, write a prompt, parse a generic answer, then act
                natural. InterviewAssist{" "}
                <span className="text-[#F0EFF4]">listens with you</span> and
                responds before the silence gets uncomfortable.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#0F0F1A] border border-white/5">
                <span className="text-xl mt-0.5">❌</span>
                <div>
                  <p className="font-semibold text-sm mb-1 text-[#F0EFF4]/80">
                    Other tools
                  </p>
                  <p className="text-sm text-[#F0EFF4]/50">
                    Tab switch → write prompt → wait → parse wall of code →
                    awkwardly explain → lose the interviewer
                  </p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-xl bg-[#E94560]/10 border border-[#E94560]/20">
                <span className="text-xl mt-0.5">✅</span>
                <div>
                  <p className="font-semibold text-sm mb-1 text-[#E94560]">
                    InterviewAssist
                  </p>
                  <p className="text-sm text-[#F0EFF4]/70">
                    Interviewer finishes prompt → you hear the approach in{" "}
                    <span className="text-[#F0EFF4] font-bold">&lt;5 seconds</span>{" "}
                    → you respond with confidence
                  </p>
                </div>
              </div>
              <div className="p-4 rounded-xl border border-white/5 bg-[#0F0F1A]">
                <p className="text-xs text-[#F0EFF4]/40 leading-relaxed">
                  "The only tool purpose-built for the 45-minute live coding
                  format where{" "}
                  <span className="text-[#F0EFF4]/60">
                    latency is everything
                  </span>
                  ."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="px-6 py-20 sm:py-28">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-2xl sm:text-3xl font-bold mb-3">
              Simple, stakes-based pricing
            </h2>
            <p className="text-[#F0EFF4]/50">
              Practice for free. Pay only when it's real.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-5">
            <div className="bg-[#1A1A2E] border border-white/5 rounded-2xl p-7 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F0EFF4]/40">
                Practice
              </span>
              <p className="text-3xl font-extrabold text-[#F0EFF4]">Free</p>
              <p className="text-sm text-[#F0EFF4]/50 leading-relaxed flex-1">
                Sharpen your instincts without spending a dime. All features
                enabled.
              </p>
              <span className="text-xs text-[#F0EFF4]/30 font-medium">
                No credit card needed
              </span>
            </div>
            <div className="bg-[#1A1A2E] border border-[#E94560]/40 rounded-2xl p-7 flex flex-col gap-3 relative">
              <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                <span className="text-xs bg-[#E94560] text-white px-3 py-1 rounded-full font-bold uppercase tracking-wider">
                  Most Popular
                </span>
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-[#E94560]">
                Single Session
              </span>
              <p className="text-3xl font-extrabold text-[#F0EFF4]">$49</p>
              <p className="text-sm text-[#F0EFF4]/50 leading-relaxed flex-1">
                One real interview. Full AI support for the entire 45-minute
                session.
              </p>
              <span className="text-xs text-[#F0EFF4]/30 font-medium">
                Pay per interview
              </span>
            </div>
            <div className="bg-[#1A1A2E] border border-white/5 rounded-2xl p-7 flex flex-col gap-3">
              <span className="text-xs font-bold uppercase tracking-widest text-[#F0EFF4]/40">
                Job Hunt Mode
              </span>
              <p className="text-3xl font-extrabold text-[#F0EFF4]">
                $149
                <span className="text-sm font-normal text-[#F0EFF4]/40">
                  /mo
                </span>
              </p>
              <p className="text-sm text-[#F0EFF4]/50 leading-relaxed flex-1">
                Deep in the job hunt? Unlimited real sessions for a month.
              </p>
              <span className="text-xs text-[#F0EFF4]/30 font-medium">
                Cancel anytime
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Waitlist / CTA */}
      <section
        id="waitlist"
        className="relative px-6 py-20 sm:py-28 overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-[#E94560]/10 rounded-full blur-[80px]" />
        </div>
        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E94560] mb-4 block">
            Join the waitlist
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Try a Free Practice Session.
            <br />
            <span className="text-[#E94560]">Pay Only When It Counts.</span>
          </h2>
          <p className="text-[#F0EFF4]/60 mb-10 text-base sm:text-lg leading-relaxed">
            Get early access and be first in line when InterviewAssist launches.
            Real-time AI guidance, invisible to your interviewer, ready in under
            5 seconds.
          </p>
          <WaitlistForm />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#F0EFF4]/30">
          <span>
            © {new Date().getFullYear()}{" "}
            <span className="text-[#F0EFF4]/50 font-semibold">
              InterviewAssist
            </span>
            . All rights reserved.
          </span>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-[#F0EFF4]/30 hover:text-[#F0EFF4]/60 transition-colors text-xs"
          >
            <span className="px-2 py-1 rounded-md bg-white/5 border border-white/5 font-mono">
              Built with Boring Combinator
            </span>
          </a>
        </div>
      </footer>
    </main>
  );
}