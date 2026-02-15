import { Send, Mail } from "lucide-react";

export function SmartestLinkSection() {
  return (
    <section className="py-16 sm:py-24 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900">
            The smartest link in your bio.
          </h2>
          <p className="mt-4 text-lg text-grey-500 leading-relaxed">
            Replace your static buttons with an interactive profile. A2V2
            combines your content, your personality, and your sales funnel into
            one link.
          </p>
        </div>

        {/* Two Panel Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Panel - AI Profile Mockup */}
          <div className="bg-white rounded-[20px] border border-grey-200 p-8 shadow-sm">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-infinite bg-accent-600 flex items-center justify-center">
                <span className="text-white text-sm font-bold">A2</span>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-grey-900">
                  A2V2 AI Assistance
                </h3>
                <span className="text-xs text-grey-500">
                  Interactive Profile
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <div className="bg-grey-50 rounded-12 p-4">
                <p className="text-sm text-grey-700">
                  Hi! I&apos;m an AI trained on Sarah&apos;s content. Ask me
                  anything about her coaching programs, or browse her latest
                  resources below.
                </p>
              </div>
              <div className="flex gap-2">
                <span className="px-3 py-1.5 bg-accent-50 text-accent-700 text-xs font-medium rounded-infinite">
                  Coaching
                </span>
                <span className="px-3 py-1.5 bg-accent-50 text-accent-700 text-xs font-medium rounded-infinite">
                  Resources
                </span>
                <span className="px-3 py-1.5 bg-accent-50 text-accent-700 text-xs font-medium rounded-infinite">
                  Book a Call
                </span>
              </div>
            </div>

            <div className="mt-4 flex items-center gap-2 bg-grey-50 rounded-infinite border border-grey-200 px-4 py-2.5">
              <input
                type="text"
                placeholder="Ask me anything..."
                className="flex-1 text-sm text-grey-400 outline-none bg-transparent"
                disabled
                aria-label="Chat input"
              />
              <div className="w-7 h-7 rounded-infinite bg-accent-600 flex items-center justify-center">
                <Send size={12} className="text-white" />
              </div>
            </div>
          </div>

          {/* Right Panel - Lead Capture */}
          <div className="bg-white rounded-[20px] border border-grey-200 p-8 shadow-sm flex flex-col">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-infinite bg-amber-100 flex items-center justify-center">
                <Mail size={20} className="text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-grey-900">
                Instant Lead Capture
              </h3>
            </div>
            <p className="text-grey-500 leading-relaxed mb-6">
              Stop losing traffic. The AI automatically asks for emails when
              intent is high, sending leads directly to your dashboard.
            </p>

            {/* Lead capture mockup */}
            <div className="bg-grey-50 rounded-12 p-5 mt-auto">
              <div className="bg-white rounded-8 border border-grey-200 p-4 shadow-sm">
                <p className="text-sm font-medium text-grey-900 mb-3">
                  Want me to send you the full pricing guide?
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="your@email.com"
                    className="flex-1 text-sm border border-grey-200 rounded-8 px-3 py-2 outline-none bg-white"
                    disabled
                    aria-label="Email input"
                  />
                  <button
                    className="px-4 py-2 bg-accent-600 text-white text-sm font-medium rounded-8"
                    disabled
                  >
                    Send
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
