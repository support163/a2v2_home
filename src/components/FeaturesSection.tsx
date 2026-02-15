import { MessageSquare, ShieldCheck } from "lucide-react";

export function FeaturesSection() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Conversations Card */}
          <div className="bg-grey-50 rounded-[20px] border border-grey-200 p-8 sm:p-10">
            <div className="w-12 h-12 rounded-12 bg-accent-100 flex items-center justify-center mb-6">
              <MessageSquare size={24} className="text-accent-600" />
            </div>
            <h3 className="text-2xl font-bold text-grey-900 mb-4">
              Conversations, not just clicks.
            </h3>
            <p className="text-grey-500 leading-relaxed">
              Visitors don&apos;t just browse links &mdash; they want answers.
              Your AI suggests the right content based on the conversation,
              keeping users engaged 3x longer than standard bios.
            </p>
          </div>

          {/* Secure by Design Card */}
          <div className="bg-grey-50 rounded-[20px] border border-grey-200 p-8 sm:p-10">
            <div className="w-12 h-12 rounded-12 bg-success-100 flex items-center justify-center mb-6">
              <ShieldCheck size={24} className="text-success-600" />
            </div>
            <h3 className="text-2xl font-bold text-grey-900 mb-4">
              Secure by Design
            </h3>
            <p className="text-grey-500 leading-relaxed">
              Built on HIPAA-compliant infrastructure. Whether you&apos;re a
              creator or a clinician, your data and conversations are strictly
              private.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
