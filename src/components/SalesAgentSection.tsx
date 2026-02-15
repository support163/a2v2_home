import { Bot, Calendar, BarChart3 } from "lucide-react";

export function SalesAgentSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left - Mockup */}
          <div className="bg-grey-50 rounded-[20px] border border-grey-200 p-8">
            <div className="space-y-4">
              <div className="bg-white rounded-12 border border-grey-200 p-4 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-10 bg-accent-100 flex items-center justify-center shrink-0">
                  <Bot size={20} className="text-accent-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-grey-900">
                    Lead Qualified
                  </p>
                  <p className="text-xs text-grey-500 mt-0.5">
                    Sarah M. asked about 3BR listings in downtown. Score: 92/100
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-12 border border-grey-200 p-4 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-10 bg-success-100 flex items-center justify-center shrink-0">
                  <Calendar size={20} className="text-success-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-grey-900">
                    Viewing Scheduled
                  </p>
                  <p className="text-xs text-grey-500 mt-0.5">
                    Auto-booked for Tue, Feb 18 at 2:00 PM with Mark T.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-12 border border-grey-200 p-4 shadow-sm flex items-start gap-4">
                <div className="w-10 h-10 rounded-10 bg-amber-100 flex items-center justify-center shrink-0">
                  <BarChart3 size={20} className="text-amber-600" />
                </div>
                <div>
                  <p className="text-sm font-medium text-grey-900">
                    Weekly Report
                  </p>
                  <p className="text-xs text-grey-500 mt-0.5">
                    47 conversations, 12 leads captured, 5 appointments booked
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-grey-900 leading-tight">
              Your 24/7 Inside
              <br />
              Sales Agent.
            </h2>
            <p className="mt-6 text-lg text-grey-500 leading-relaxed">
              The AI profiles every lead, answers detailed listing questions,
              and schedules private viewings &mdash; automatically. You wake up
              to warm leads, not cold calls.
            </p>
            <ul className="mt-8 space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-infinite bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-infinite bg-accent-600" />
                </div>
                <span className="text-grey-700">
                  Intelligent lead scoring and qualification
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-infinite bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-infinite bg-accent-600" />
                </div>
                <span className="text-grey-700">
                  Automated appointment scheduling
                </span>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-6 h-6 rounded-infinite bg-accent-100 flex items-center justify-center shrink-0 mt-0.5">
                  <div className="w-2 h-2 rounded-infinite bg-accent-600" />
                </div>
                <span className="text-grey-700">
                  Detailed conversation analytics
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
