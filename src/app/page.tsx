import WaitlistForm from "@/components/waitlist-form";

const valueProps = [
  {
    title: "Hears the Question",
    description:
      "It picks up your interviewer's audio directly and returns a tailored approach in under 5 seconds — before the awkward silence gets weird.",
    icon: "🎙️",
  },
  {
    title: "Invisible by Design",
    description:
      "Built to stay off the radar of AI proctoring tools and screen-share monitoring, so nothing looks out of the ordinary on your end.",
    icon: "👁️",
  },
  {
    title: "Interview-Tuned Output",
    description:
      "Suggestions are calibrated for live coding interviews — framework-aware, concise, and ready to say out loud — not a wall of ChatGPT text you have to decode mid-call.",
    icon: "⚡",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F4F0] text-[#1A1A2E]">
      {/* Nav */}
      <nav className="border-b border-[#1A1A2E]/10 bg-[#F5F4F0]/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 py-4 flex items-center justify-between">
          <span className="font-bold text-lg tracking-tight text-[#1A1A2E]">
            Interview<span className="text-[#00C896]">Assist</span>
          </span>
          <a
            href="#waitlist"
            className="text-sm font-semibold bg-[#00C896] text-[#1A1A2E] px-4 py-2 rounded-full hover:bg-[#00C896]/90 transition-colors"
          >
            Get Early Access
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="max-w-5xl mx-auto px-4 pt-20 pb-24 text-center">
        <div className="inline-flex items-center gap-2 bg-[#1A1A2E] text-[#00C896] text-xs font-semibold px-3 py-1.5 rounded-full mb-8 tracking-widest uppercase">
          <span className="w-1.5 h-1.5 bg-[#00C896] rounded-full animate-pulse" />
          Real-Time Interview Intelligence
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-[#1A1A2E] leading-tight tracking-tight max-w-4xl mx-auto mb-6">
          Your Next Technical Interview
          <br />
          <span className="text-[#00C896]">Has a Secret Weapon</span>
        </h1>

        <p className="text-lg sm:text-xl text-[#1A1A2E]/70 max-w-2xl mx-auto mb-4 leading-relaxed">
          InterviewAssist listens to your interviewer in real time and feeds you
          exact coding approaches in under 5 seconds. No second screen. No
          fumbling with ChatGPT. Just answers, right when you need them.
        </p>

        <p className="text-sm text-[#1A1A2E]/50 max-w-xl mx-auto mb-10">
          Built for bootcamp grads and career switchers going for FAANG-tier
          roles — where one 45-minute coding round separates you from a
          $30–50K salary jump.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-6">
          <a
            href="#waitlist"
            className="w-full sm:w-auto bg-[#1A1A2E] text-[#F5F4F0] font-bold px-8 py-4 rounded-xl text-base hover:bg-[#1A1A2E]/90 transition-colors"
          >
            Try a Free Practice Round →
          </a>
          <a
            href="#how-it-works"
            className="w-full sm:w-auto text-[#1A1A2E] font-semibold px-8 py-4 rounded-xl text-base border-2 border-[#1A1A2E]/20 hover:border-[#1A1A2E]/40 transition-colors"
          >
            See How It Works
          </a>
        </div>

        <p className="text-xs text-[#1A1A2E]/40">
          Pay only when it's the real thing. Free forever for practice.
        </p>

        {/* Hero visual */}
        <div className="mt-16 relative max-w-2xl mx-auto">
          <div className="bg-[#1A1A2E] rounded-2xl p-6 text-left shadow-2xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-3 h-3 rounded-full bg-red-400" />
              <div className="w-3 h-3 rounded-full bg-yellow-400" />
              <div className="w-3 h-3 rounded-full bg-green-400" />
              <span className="ml-2 text-[#F5F4F0]/30 text-xs font-mono">
                interviewassist — active
              </span>
              <span className="ml-auto flex items-center gap-1.5 text-[#00C896] text-xs font-semibold">
                <span className="w-1.5 h-1.5 bg-[#00C896] rounded-full animate-pulse" />
                LISTENING
              </span>
            </div>
            <div className="space-y-3">
              <div className="bg-[#F5F4F0]/5 rounded-lg p-3">
                <p className="text-[#F5F4F0]/40 text-xs mb-1 font-mono">
                  INTERVIEWER AUDIO →
                </p>
                <p className="text-[#F5F4F0]/70 text-sm font-mono">
                  "...can you find the longest substring without repeating
                  characters?"
                </p>
              </div>
              <div className="flex items-center gap-2 text-[#00C896] text-xs font-mono">
                <span className="animate-spin">⟳</span>
                Processing... 2.1s
              </div>
              <div className="bg-[#00C896]/10 border border-[#00C896]/30 rounded-lg p-3">
                <p className="text-[#00C896] text-xs mb-2 font-semibold uppercase tracking-wider">
                  Suggested Approach
                </p>
                <p className="text-[#F5F4F0] text-sm font-mono leading-relaxed">
                  Sliding window + HashSet. Track char indices, expand right,
                  shrink left on duplicate. O(n) time, O(min(n,m)) space.
                  Start with two-pointer setup.
                </p>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 bg-[#00C896] text-[#1A1A2E] text-xs font-bold px-4 py-1.5 rounded-full shadow-lg">
            Response in 2.1 seconds
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        className="bg-[#1A1A2E] py-20"
      >
        <div className="max-w-5xl mx-auto px-4">
          <p className="text-[#00C896] text-xs font-bold uppercase tracking-widest text-center mb-3">
            How It Works
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F4F0] text-center mb-4">
            Three things that make it different
          </h2>
          <p className="text-[#F5F4F0]/50 text-center max-w-xl mx-auto mb-14 text-base">
            Every other tool makes you stop, switch tabs, type a prompt, and
            hope. InterviewAssist works in the background while you stay locked
            in.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {valueProps.map((vp, i) => (
              <div
                key={i}
                className="bg-[#F5F4F0]/5 border border-[#F5F4F0]/10 rounded-2xl p-6 hover:border-[#00C896]/40 transition-colors group"
              >
                <div className="text-4xl mb-4">{vp.icon}</div>
                <h3 className="text-[#F5F4F0] font-bold text-xl mb-3 group-hover:text-[#00C896] transition-colors">
                  {vp.title}
                </h3>
                <p className="text-[#F5F4F0]/60 text-sm leading-relaxed">
                  {vp.description}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 text-center">
            {[
              { stat: "&lt;5s", label: "Average response latency" },
              { stat: "Zero", label: "Extra tabs or windows needed" },
              { stat: "100%", label: "Focused on interview formats" },
            ].map((item, i) => (
              <div key={i} className="py-6">
                <p
                  className="text-4xl font-extrabold text-[#00C896] mb-1"
                  dangerouslySetInnerHTML={{ __html: item.stat }}
                />
                <p className="text-[#F5F4F0]/50 text-sm">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Differentiation */}
      <section className="py-20 max-w-5xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-[#00C896] text-xs font-bold uppercase tracking-widest mb-3">
              Why Not Just Use ChatGPT?
            </p>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mb-6 leading-tight">
              Purpose-built beats repurposed.
              <span className="text-[#00C896]"> Every time.</span>
            </h2>
            <p className="text-[#1A1A2E]/60 text-base leading-relaxed mb-8">
              Sub-5-second latency, purpose-built for the exact format of
              technical interviews — not repurposed from a general chatbot.
              InterviewAssist knows the difference between a LeetCode hard and
              a system design walkthrough, and calibrates accordingly.
            </p>
            <div className="space-y-3">
              {[
                "No manual prompting mid-interview",
                "No switching windows or losing focus",
                "Undetectable to screen-share monitoring",
                "Output you can say out loud immediately",
              ].map((point, i) => (
                <div key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#00C896] flex items-center justify-center flex-shrink-0">
                    <svg
                      className="w-3 h-3 text-[#1A1A2E]"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={3}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </div>
                  <span className="text-[#1A1A2E]/80 text-sm font-medium">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {[
              {
                label: "ChatGPT / Claude",
                steps: ["Stop coding", "Switch tabs", "Type prompt", "Parse wall of text", "Hope you're not caught"],
                bad: true,
              },
              {
                label: "InterviewAssist",
                steps: ["Keep coding", "Hear the answer", "Stay in flow"],
                bad: false,
              },
            ].map((tool, i) => (
              <div
                key={i}
                className={`rounded-2xl p-5 border-2 ${
                  tool.bad
                    ? "bg-red-50 border-red-200"
                    : "bg-[#00C896]/10 border-[#00C896]"
                }`}
              >
                <p
                  className={`font-bold text-sm mb-3 ${
                    tool.bad ? "text-red-700" : "text-[#00C896]"
                  }`}
                >
                  {tool.bad ? "✗" : "✓"} {tool.label}
                </p>
                <div className="flex flex-wrap gap-2">
                  {tool.steps.map((step, j) => (
                    <span
                      key={j}
                      className={`text-xs px-2.5 py-1 rounded-full font-medium ${
                        tool.bad
                          ? "bg-red-100 text-red-700"
                          : "bg-[#00C896]/20 text-[#1A1A2E]"
                      }`}
                    >
                      {j + 1}. {step}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section className="py-20 bg-[#1A1A2E]/5 border-y border-[#1A1A2E]/10">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p className="text-[#00C896] text-xs font-bold uppercase tracking-widest mb-3">
            Pricing
          </p>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1A1A2E] mb-4">
            Pay only when it's the real thing
          </h2>
          <p className="text-[#1A1A2E]/60 mb-12 max-w-xl mx-auto">
            Practice sessions are always free. You put money on the line only
            when the stakes are actually there.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            {[
              {
                name: "Practice",
                price: "Free",
                period: "forever",
                description: "Unlimited practice rounds to get comfortable",
                features: [
                  "Full AI assistance",
                  "Real-time audio processing",
                  "All question types",
                ],
                cta: "Start Practicing",
                accent: false,
              },
              {
                name: "Single Session",
                price: "$49",
                period: "per interview",
                description: "One real interview, fully covered",
                features: [
                  "Everything in Practice",
                  "Live interview mode",
                  "Priority processing",
                ],
                cta: "Buy a Session",
                accent: true,
              },
              {
                name: "Job Hunt Mode",
                price: "$149",
                period: "per month",
                description: "Unlimited sessions while actively interviewing",
                features: [
                  "Everything in Single",
                  "Unlimited real interviews",
                  "Cancel anytime",
                ],
                cta: "Start Hunting",
                accent: false,
              },
            ].map((plan, i) => (
              <div
                key={i}
                className={`rounded-2xl p-6 text-left border-2 ${
                  plan.accent
                    ? "bg-[#1A1A2E] border-[#00C896] scale-105 shadow-xl"
                    : "bg-white border-[#1A1A2E]/10"
                }`}
              >
                {plan.accent && (
                  <div className="bg-[#00C896] text-[#1A1A2E] text-xs font-bold px-3 py-1 rounded-full inline-block mb-4 uppercase tracking-wider">
                    Most Popular
                  </div>
                )}
                <p
                  className={`font-bold text-sm mb-1 ${
                    plan.accent ? "text-[#F5F4F0]/60" : "text-[#1A1A2E]/60"
                  }`}
                >
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-1">
                  <span
                    className={`text-4xl font-extrabold ${
                      plan.accent ? "text-[#00C896]" : "text-[#1A1A2E]"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={`text-sm ${
                      plan.accent ? "text-[#F5F4F0]/40" : "text-[#1A1A2E]/40"
                    }`}
                  >
                    /{plan.period}
                  </span>
                </div>
                <p
                  className={`text-xs mb-5 ${
                    plan.accent ? "text-[#F5F4F0]/50" : "text-[#1A1A2E]/50"
                  }`}
                >
                  {plan.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((f, j) => (
                    <li key={j} className="flex items-center gap-2">
                      <span className="text-[#00C896] text-sm">✓</span>
                      <span
                        className={`text-xs ${
                          plan.accent ? "text-[#F5F4F0]/70" : "text-[#1A1A2E]/70"
                        }`}
                      >
                        {f}
                      </span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#waitlist"
                  className={`block text-center py-2.5 rounded-xl text-sm font-bold transition-colors ${
                    plan.accent
                      ? "bg-[#00C896] text-[#1A1A2E] hover:bg-[#00C896]/90"
                      : "bg-[#1A1A2E]/10 text-[#1A1A2E] hover:bg-[#1A1A2E]/20"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA */}
      <section
        id="waitlist"
        className="py-24 max-w-2xl mx-auto px-4 text-center"
      >
        <div className="bg-[#1A1A2E] rounded-3xl px-8 py-12 shadow-2xl">
          <div className="inline-flex items-center gap-2 bg-[#00C896]/20 text-[#00C896] text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 bg-[#00C896] rounded-full animate-pulse" />
            Early Access
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#F5F4F0] mb-4 leading-tight">
            Try a Free Practice Round —{" "}
            <span className="text-[#00C896]">Pay Only When It Counts</span>
          </h2>
          <p className="text-[#F5F4F0]/60 mb-8 text-base leading-relaxed">
            Join the waitlist and get early access. Practice free for as long
            as you need. That $30–50K bump is one round away.
          </p>
          <WaitlistForm />
          <p className="mt-5 text-[#F5F4F0]/30 text-xs">
            No spam. No credit card. Just early access when we launch.
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[#1A1A2E]/10 py-8">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4">
          <span className="font-bold text-[#1A1A2E]">
            Interview<span className="text-[#00C896]">Assist</span>
          </span>
          <p className="text-[#1A1A2E]/40 text-xs text-center">
            © {new Date().getFullYear()} InterviewAssist. All rights reserved.
          </p>
          <a
            href="https://boringcombinator.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#1A1A2E]/5 border border-[#1A1A2E]/10 text-[#1A1A2E]/50 text-xs font-medium px-3 py-1.5 rounded-full hover:text-[#1A1A2E]/70 transition-colors"
          >
            🥱 Built with Boring Combinator
          </a>
        </div>
      </footer>
    </main>
  );
}