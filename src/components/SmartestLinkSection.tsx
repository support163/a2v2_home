import { ArrowRight, Paperclip, Send, Smile } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Left Card – Conversations Chat Mockup                             */
/* ------------------------------------------------------------------ */
function ConversationsMockup() {
  return (
    <div className="bg-white rounded-14 p-5 shadow-sm mx-4 mt-4 mb-2">
      {/* Chat header */}
      <div className="flex items-center gap-3 pb-4 border-b border-grey-100">
        <div className="w-9 h-9 rounded-infinite bg-accent-600 flex items-center justify-center">
          <span className="text-white text-[10px] font-bold">A2</span>
        </div>
        <div>
          <h4 className="text-xs font-semibold text-grey-900">
            A2V2 AI Assistance
          </h4>
          <p className="text-[10px] text-grey-400 leading-snug">
            Ready to help you 24/7 with instant information.
          </p>
        </div>
      </div>

      {/* Messages */}
      <div className="space-y-4 pt-4">
        {/* Visitor message */}
        <div className="flex flex-col items-end">
          <div className="bg-accent-600 text-white px-3.5 py-2.5 rounded-[14px] rounded-tr-[4px] text-[11px] leading-relaxed max-w-[240px]">
            I&apos;m struggling to grow my email list. Do you have any tips?
          </div>
          <span className="text-[9px] text-grey-400 mt-1">
            Visitor &middot; 1m
          </span>
        </div>

        {/* AI response */}
        <div className="flex flex-col items-start">
          <div className="bg-grey-50 px-3.5 py-2.5 rounded-[14px] rounded-tl-[4px] text-[11px] text-grey-700 leading-relaxed max-w-[260px]">
            I&apos;ve been there! The key is offering a high-value lead magnet.
            I actually broke down my exact strategy in my free playbook.
          </div>

          {/* Content card suggestion */}
          <div className="mt-2 bg-grey-50 rounded-10 p-3 flex items-center gap-3 max-w-[260px] border border-grey-100">
            <div className="w-9 h-9 rounded-8 bg-accent-100 flex items-center justify-center shrink-0">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#2563EB"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
                <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
              </svg>
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-[10px] font-semibold text-grey-900 truncate">
                The 0-to-10k Email Playbook
              </p>
              <button className="text-[10px] text-accent-600 font-medium flex items-center gap-0.5 mt-0.5">
                Get it Free
                <ArrowRight size={10} />
              </button>
            </div>
          </div>

          <span className="text-[9px] text-grey-400 mt-1">
            A2V2 &middot; AI Agent &middot; 1m
          </span>
        </div>
      </div>

      {/* Chat input */}
      <div className="mt-4 flex items-center gap-2 bg-grey-50 rounded-infinite border border-grey-200 px-3.5 py-2">
        <input
          type="text"
          placeholder="Ask a Question"
          className="flex-1 text-[11px] text-grey-400 outline-none bg-transparent"
          disabled
          aria-label="Chat input"
        />
        <div className="flex items-center gap-1.5 text-grey-300">
          <Smile size={14} />
          <Paperclip size={14} />
          <button
            className="w-6 h-6 rounded-infinite bg-accent-600 flex items-center justify-center ml-0.5"
            aria-label="Send"
            disabled
          >
            <Send size={10} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Top-right Card – Instant Lead Capture Mockup                      */
/* ------------------------------------------------------------------ */
function LeadCaptureMockup() {
  const leads = [
    { name: "Alex Rivera", email: "alex@gmail.com" },
    { name: "Ahanas Nillos", email: "ahanas@mail.com" },
    { name: "Jean Louis", email: "jean@mail.com" },
  ];

  return (
    <div className="bg-white rounded-14 p-4 shadow-sm mx-4 mt-4 mb-2">
      <div className="space-y-0">
        {leads.map((lead, i) => (
          <div
            key={lead.name}
            className={`flex items-center justify-between py-3 ${i < leads.length - 1 ? "border-b border-grey-100" : ""}`}
          >
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-infinite bg-grey-100 flex items-center justify-center">
                <span className="text-[10px] font-semibold text-grey-600">
                  {lead.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <div>
                <p className="text-[11px] font-semibold text-grey-900">
                  {lead.name}
                </p>
                <p className="text-[10px] text-grey-400">{lead.email}</p>
              </div>
            </div>
            <span className="px-2 py-0.5 bg-accent-50 text-accent-600 text-[9px] font-medium rounded-infinite">
              From Chat
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Bottom-right Card – Secure by Design Mockup                       */
/* ------------------------------------------------------------------ */
function SecureMockup() {
  return (
    <div className="flex flex-col items-center justify-center mx-4 mt-4 mb-2">
      <div className="bg-white/5 rounded-14 p-6 flex flex-col items-center w-full">
        {/* Shield icon */}
        <div className="relative mb-4">
          <svg
            width="64"
            height="72"
            viewBox="0 0 64 72"
            fill="none"
            aria-hidden="true"
          >
            <path
              d="M32 4L6 16v20c0 17.6 11.2 34 26 38 14.8-4 26-20.4 26-38V16L32 4z"
              fill="#1a1a2e"
              stroke="#2563EB"
              strokeWidth="1.5"
              opacity="0.8"
            />
            <rect
              x="24"
              y="28"
              width="16"
              height="14"
              rx="2"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="1.5"
            />
            <path
              d="M28 28v-4a4 4 0 018 0v4"
              fill="none"
              stroke="#93C5FD"
              strokeWidth="1.5"
            />
            <circle cx="32" cy="35" r="1.5" fill="#93C5FD" />
          </svg>
        </div>

        {/* Compliance badges */}
        <div className="flex gap-3">
          <div className="flex items-center gap-1.5 bg-white/10 rounded-infinite px-3 py-1.5">
            <div className="w-1.5 h-1.5 rounded-infinite bg-success-500" />
            <span className="text-[11px] font-medium text-grey-300">HIPAA</span>
          </div>
          <div className="flex items-center gap-1.5 bg-white/10 rounded-infinite px-3 py-1.5">
            <div className="w-1.5 h-1.5 rounded-infinite bg-success-500" />
            <span className="text-[11px] font-medium text-grey-300">SOC2</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                      */
/* ------------------------------------------------------------------ */
export function SmartestLinkSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header – left-aligned */}
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900">
            The smartest link in your bio.
          </h2>
          <p className="mt-4 text-lg text-grey-500 leading-relaxed">
            Replace your static buttons with an interactive profile. A2V2
            combines your content, your personality, and your sales funnel into
            one link.
          </p>
        </div>

        {/* Bento Grid: 1 tall left, 2 stacked right */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {/* Left – Conversations (tall) */}
          <div className="bg-[#0e0e12] rounded-[20px] overflow-hidden flex flex-col lg:row-span-2">
            <ConversationsMockup />
            <div className="px-6 pb-6 pt-4">
              <h3 className="text-lg font-semibold text-white mb-1.5">
                Conversations, not just clicks.
              </h3>
              <p className="text-sm text-grey-500 leading-relaxed">
                Visitors don&apos;t just want links; they want answers. Your AI
                suggests the right content based on the conversation, keeping
                users engaged 3x longer than standard bios.
              </p>
            </div>
          </div>

          {/* Top-right – Lead Capture */}
          <div className="bg-[#0e0e12] rounded-[20px] overflow-hidden flex flex-col">
            <LeadCaptureMockup />
            <div className="px-6 pb-6 pt-4">
              <h3 className="text-lg font-semibold text-white mb-1.5">
                Instant Lead Capture
              </h3>
              <p className="text-sm text-grey-500 leading-relaxed">
                Stop losing traffic. The AI automatically asks for emails when
                intent is high, syncing leads directly to your dashboard.
              </p>
            </div>
          </div>

          {/* Bottom-right – Secure */}
          <div className="bg-[#0e0e12] rounded-[20px] overflow-hidden flex flex-col">
            <SecureMockup />
            <div className="px-6 pb-6 pt-4">
              <h3 className="text-lg font-semibold text-white mb-1.5">
                Secure by Design.
              </h3>
              <p className="text-sm text-grey-500 leading-relaxed">
                Built on HIPAA-compliant infrastructure. Whether you&apos;re a
                creator or a clinician, your data and conversations are strictly
                private.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
