import { Send } from "lucide-react";
import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section className="bg-white py-16 sm:py-20 lg:py-24 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-grey-900 leading-[1.1] tracking-tight">
              Clone Yourself.
              <br />
              Scale Your
              <br />
              Influence.
            </h1>
            <p className="mt-6 text-lg text-grey-500 leading-relaxed max-w-lg">
              The all-in-one bio hub that chats like you, captures leads like a
              CRM, and converts while you sleep.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Button variant="primary" size="lg">
                Try For Free
              </Button>
              <Button variant="outline" size="lg">
                See a Demo
              </Button>
            </div>
            <p className="mt-4 text-sm text-grey-400">
              No credit card required
            </p>
          </div>

          {/* Right - Chat Mockup */}
          <div className="relative">
            <div className="bg-grey-50 rounded-[20px] border border-grey-200 p-6 shadow-xl">
              {/* Chat Header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-infinite bg-accent-600 flex items-center justify-center">
                  <span className="text-white text-sm font-bold">A2</span>
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-grey-900">
                    A2V2 AI Assistance
                  </h3>
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-infinite bg-success-500" />
                    <span className="text-xs text-grey-500">Online</span>
                  </div>
                </div>
              </div>

              {/* Chat Messages */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-end">
                  <div className="bg-accent-600 text-white px-4 py-2.5 rounded-[16px] rounded-tr-[4px] text-sm max-w-[260px]">
                    Tell me about your coaching programs
                  </div>
                </div>
                <div className="flex justify-start">
                  <div className="bg-white border border-grey-200 px-4 py-2.5 rounded-[16px] rounded-tl-[4px] text-sm text-grey-700 max-w-[280px] shadow-sm">
                    I offer 3 programs tailored to your growth stage. Want me to
                    recommend one based on your goals?
                  </div>
                </div>
              </div>

              {/* Featured Image Card */}
              <div className="bg-white rounded-12 border border-grey-200 overflow-hidden shadow-sm">
                <img
                  src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&q=80"
                  alt="Mountain landscape"
                  className="w-full h-32 object-cover"
                />
                <div className="p-3">
                  <p className="text-xs font-medium text-grey-900">
                    Featured Content
                  </p>
                  <p className="text-xs text-grey-500 mt-0.5">
                    Explore my latest resources
                  </p>
                </div>
              </div>

              {/* Chat Input */}
              <div className="mt-4 flex items-center gap-2 bg-white rounded-infinite border border-grey-200 px-4 py-2.5">
                <input
                  type="text"
                  placeholder="Ask me anything..."
                  className="flex-1 text-sm text-grey-500 outline-none bg-transparent"
                  disabled
                  aria-label="Chat input"
                />
                <button
                  className="w-8 h-8 rounded-infinite bg-accent-600 flex items-center justify-center"
                  aria-label="Send message"
                  disabled
                >
                  <Send size={14} className="text-white" />
                </button>
              </div>

              {/* Branding */}
              <p className="text-center text-[10px] text-grey-400 mt-3">
                Agent by A2V2.ai
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
