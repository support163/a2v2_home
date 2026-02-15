import { Shield, Lock, Heart } from "lucide-react";
import { Button } from "./ui/Button";

export function DataProtectionSection() {
  return (
    <section className="py-16 sm:py-24 bg-grey-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900">
            Your data. Your audience. Protected.
          </h2>
          <p className="mt-4 text-lg text-grey-500 leading-relaxed">
            We built A2V2 on a privacy-first architecture. We never train public
            models on your private client data, and every conversation is
            encrypted.
          </p>
        </div>

        {/* CTAs */}
        <div className="flex justify-center items-center gap-4 mb-14">
          <Button variant="primary" size="lg">
            Book a Demo
          </Button>
          <a
            href="#"
            className="text-sm font-semibold text-accent-600 hover:text-accent-700 transition-colors"
          >
            Learn more &rarr;
          </a>
        </div>

        {/* Security Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-[20px] border border-grey-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-12 bg-accent-100 flex items-center justify-center mb-5">
              <Shield size={24} className="text-accent-600" />
            </div>
            <h3 className="text-lg font-semibold text-grey-900 mb-3">
              Enterprise-Grade Data Security
            </h3>
            <p className="text-sm text-grey-500 leading-relaxed">
              SOC2 Type II certified with AES-256 encryption at rest and in
              transit.
            </p>
          </div>

          <div className="bg-white rounded-[20px] border border-grey-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-12 bg-success-100 flex items-center justify-center mb-5">
              <Lock size={24} className="text-success-600" />
            </div>
            <h3 className="text-lg font-semibold text-grey-900 mb-3">
              Zero-Retention Private AI
            </h3>
            <p className="text-sm text-grey-500 leading-relaxed">
              Your data is isolated and never used to train our public models.
            </p>
          </div>

          <div className="bg-white rounded-[20px] border border-grey-200 p-8 shadow-sm">
            <div className="w-12 h-12 rounded-12 bg-error-100 flex items-center justify-center mb-5">
              <Heart size={24} className="text-error-600" />
            </div>
            <h3 className="text-lg font-semibold text-grey-900 mb-3">
              HIPAA Compliant Architecture
            </h3>
            <p className="text-sm text-grey-500 leading-relaxed">
              Full BAA support and PHI protection for all healthcare providers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
