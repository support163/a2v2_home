import { FileText, Globe, Instagram, Linkedin, Youtube } from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Card 1 – Connect                                                  */
/* ------------------------------------------------------------------ */
function ConnectIllustration() {
  return (
    <div className="relative w-full h-[320px] flex items-start justify-center pt-6 overflow-hidden">
      {/* Dot-grid background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        aria-hidden="true"
      >
        <pattern
          id="dot-connect"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dot-connect)" />
      </svg>

      {/* A2V2 logo badge */}
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-14 h-14 rounded-14 bg-white flex items-center justify-center shadow-lg">
          <span className="text-grey-900 text-sm font-bold tracking-tight">
            A/
          </span>
        </div>

        {/* Dashed connector lines */}
        <svg
          width="240"
          height="80"
          viewBox="0 0 240 80"
          fill="none"
          className="mt-1"
          aria-hidden="true"
        >
          <path
            d="M120 0 L40 70"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
          <path
            d="M120 0 L120 70"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
          <path
            d="M120 0 L200 70"
            stroke="#3B82F6"
            strokeWidth="1.5"
            strokeDasharray="5 4"
          />
          <circle cx="40" cy="70" r="3" fill="#3B82F6" />
          <circle cx="120" cy="70" r="3" fill="#3B82F6" />
          <circle cx="200" cy="70" r="3" fill="#3B82F6" />
        </svg>

        {/* Source cards */}
        <div className="flex gap-3 mt-1">
          {/* YouTube */}
          <div className="bg-[#1a1a1f] rounded-10 px-3 py-2.5 flex items-center gap-2 border border-white/10">
            <div className="w-6 h-6 bg-red-600 rounded-[4px] flex items-center justify-center">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="white"
                aria-hidden="true"
              >
                <polygon points="9.5,7.5 16.5,12 9.5,16.5" />
              </svg>
            </div>
            <span className="text-[11px] text-grey-300 font-medium">
              YouTube
            </span>
          </div>

          {/* PDF */}
          <div className="bg-[#1a1a1f] rounded-10 px-3 py-2.5 flex items-center gap-2 border border-white/10">
            <div className="w-6 h-6 bg-white/10 rounded-[4px] flex items-center justify-center">
              <FileText size={12} className="text-grey-400" />
            </div>
            <span className="text-[11px] text-grey-300 font-medium">PDF</span>
          </div>

          {/* Website */}
          <div className="bg-[#1a1a1f] rounded-10 px-3 py-2.5 flex items-center gap-2 border border-white/10">
            <div className="w-6 h-6 bg-white/10 rounded-[4px] flex items-center justify-center">
              <Globe size={12} className="text-grey-400" />
            </div>
            <span className="text-[11px] text-grey-300 font-medium">
              Example.com
            </span>
          </div>
        </div>

        {/* Placeholder content blocks */}
        <div className="flex gap-3 mt-4 w-full max-w-[280px]">
          <div className="flex-1 h-2.5 rounded-infinite bg-white/5" />
          <div className="w-16 h-2.5 rounded-infinite bg-white/5" />
        </div>
        <div className="flex gap-3 mt-2 w-full max-w-[280px]">
          <div className="w-20 h-2.5 rounded-infinite bg-white/5" />
          <div className="flex-1 h-2.5 rounded-infinite bg-white/5" />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 2 – Train                                                    */
/* ------------------------------------------------------------------ */
function TrainIllustration() {
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden">
      {/* Dot-grid background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        aria-hidden="true"
      >
        <pattern
          id="dot-train"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dot-train)" />
      </svg>

      {/* Diamond network pattern */}
      <svg
        width="260"
        height="260"
        viewBox="0 0 260 260"
        fill="none"
        className="relative z-10"
        aria-hidden="true"
      >
        {/* Outer dashed diamond lines */}
        <path
          d="M130 20 L240 130 L130 240 L20 130 Z"
          stroke="#3B82F6"
          strokeWidth="1"
          strokeDasharray="6 4"
          opacity="0.3"
        />
        <path
          d="M130 60 L200 130 L130 200 L60 130 Z"
          stroke="#3B82F6"
          strokeWidth="1"
          strokeDasharray="6 4"
          opacity="0.2"
        />

        {/* Diagonal lines from center */}
        <path
          d="M130 130 L50 50"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          opacity="0.5"
        />
        <path
          d="M130 130 L210 50"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          opacity="0.5"
        />
        <path
          d="M130 130 L50 210"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          opacity="0.5"
        />
        <path
          d="M130 130 L210 210"
          stroke="#3B82F6"
          strokeWidth="1.5"
          strokeDasharray="5 4"
          opacity="0.5"
        />

        {/* Endpoint dots */}
        <circle cx="50" cy="50" r="4" fill="#3B82F6" opacity="0.6" />
        <circle cx="210" cy="50" r="4" fill="#3B82F6" opacity="0.6" />
        <circle cx="50" cy="210" r="4" fill="#3B82F6" opacity="0.6" />
        <circle cx="210" cy="210" r="4" fill="#3B82F6" opacity="0.6" />
        <circle cx="130" cy="20" r="4" fill="#3B82F6" opacity="0.4" />
        <circle cx="240" cy="130" r="4" fill="#3B82F6" opacity="0.4" />
        <circle cx="130" cy="240" r="4" fill="#3B82F6" opacity="0.4" />
        <circle cx="20" cy="130" r="4" fill="#3B82F6" opacity="0.4" />
      </svg>

      {/* Center diamond with icon */}
      <div className="absolute z-20 w-16 h-16 rotate-45 rounded-[12px] border-2 border-accent-500 bg-grey-950 flex items-center justify-center shadow-lg shadow-accent-500/20">
        <span className="-rotate-45 text-accent-400 text-lg font-mono font-bold">
          &lt;/&gt;
        </span>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card 3 – Deploy                                                   */
/* ------------------------------------------------------------------ */
function DeployIllustration() {
  return (
    <div className="relative w-full h-[320px] flex items-center justify-center overflow-hidden">
      {/* Dot-grid background */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.07]"
        aria-hidden="true"
      >
        <pattern
          id="dot-deploy"
          x="0"
          y="0"
          width="20"
          height="20"
          patternUnits="userSpaceOnUse"
        >
          <circle cx="1" cy="1" r="1" fill="white" />
        </pattern>
        <rect width="100%" height="100%" fill="url(#dot-deploy)" />
      </svg>

      {/* Phone mockup */}
      <div className="relative z-10 w-[200px] bg-[#111115] rounded-[24px] border border-white/10 p-3 shadow-2xl transform rotate-3">
        {/* Profile header */}
        <div className="text-center pt-3 pb-2">
          <div className="w-12 h-12 rounded-infinite bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center mx-auto mb-2">
            <span className="text-white text-sm font-bold">IH</span>
          </div>
          <h4 className="text-white text-xs font-semibold">Isabella Hart</h4>
          <p className="text-grey-500 text-[9px] mt-0.5 px-3 leading-snug">
            Blending the science of horticulture with the art of floral design
          </p>
        </div>

        {/* Social icons row */}
        <div className="flex justify-center gap-2 my-2">
          {[
            <span key="f" className="text-[9px] font-bold">
              f
            </span>,
            <Instagram key="ig" size={10} />,
            <Linkedin key="li" size={10} />,
            <Youtube key="yt" size={10} />,
            <span key="x" className="text-[9px] font-bold">
              X
            </span>,
          ].map((icon, i) => (
            <div
              key={i}
              className="w-6 h-6 rounded-infinite bg-white/10 flex items-center justify-center text-grey-400"
            >
              {icon}
            </div>
          ))}
        </div>

        {/* Ask me section */}
        <div className="bg-white/5 rounded-12 p-2.5 mt-2">
          <p className="text-[10px] text-grey-400 mb-1.5">
            <span className="mr-1">👋</span> Ask me anything
          </p>
          <div className="bg-white/5 rounded-8 px-2.5 py-1.5 flex items-center justify-between border border-white/5">
            <span className="text-[9px] text-grey-600">Ask a Question...</span>
            <div className="flex gap-1 text-grey-600">
              <svg
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                aria-hidden="true"
              >
                <path d="M21.44 11.05l-9.19 9.19a6 6 0 01-8.49-8.49l9.19-9.19a4 4 0 015.66 5.66l-9.2 9.19a2 2 0 01-2.83-2.83l8.49-8.48" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                      */
/* ------------------------------------------------------------------ */
export function TrainAISection() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header – left-aligned */}
        <div className="max-w-xl mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900">
            Train your AI in seconds.
          </h2>
          <p className="mt-4 text-lg text-grey-500 leading-relaxed">
            No coding. Just upload your content, and we build your digital twin.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Connect */}
          <div className="bg-[#0e0e12] rounded-[20px] overflow-hidden flex flex-col">
            <ConnectIllustration />
            <div className="px-6 pb-6 pt-2">
              <h3 className="text-lg font-semibold text-white mb-1.5">
                Connect
              </h3>
              <p className="text-sm text-grey-500 leading-relaxed">
                Sync your YouTube, PDFs, and website URLs.
              </p>
            </div>
          </div>

          {/* Train */}
          <div className="bg-[#0e0e12] rounded-[20px] overflow-hidden flex flex-col">
            <TrainIllustration />
            <div className="px-6 pb-6 pt-2">
              <h3 className="text-lg font-semibold text-white mb-1.5">Train</h3>
              <p className="text-sm text-grey-500 leading-relaxed">
                Our engine learns your voice, facts, and offers.
              </p>
            </div>
          </div>

          {/* Deploy */}
          <div className="bg-[#0e0e12] rounded-[20px] overflow-hidden flex flex-col">
            <DeployIllustration />
            <div className="px-6 pb-6 pt-2">
              <h3 className="text-lg font-semibold text-white mb-1.5">
                Deploy
              </h3>
              <p className="text-sm text-grey-500 leading-relaxed">
                Share your a2v2 link anywhere.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
