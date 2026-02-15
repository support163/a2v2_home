import { Shield, Lock, Heart } from "lucide-react";
import { Button } from "./ui/Button";

const cards = [
  {
    icon: Shield,
    iconBg: "bg-accent-600/15",
    iconColor: "text-accent-400",
    title: "Enterprise-Grade Data Security",
    description:
      "SOC2 Type II certified with AES-256 encryption at rest and in transit.",
  },
  {
    icon: Lock,
    iconBg: "bg-emerald-500/15",
    iconColor: "text-emerald-400",
    title: "Zero-Retention Private AI",
    description:
      "Your data is isolated and never used to train our public models.",
  },
  {
    icon: Heart,
    iconBg: "bg-rose-500/15",
    iconColor: "text-rose-400",
    title: "HIPAA Compliant Architecture",
    description:
      "Full BAA support and PHI protection for all healthcare providers.",
  },
];

export function DataProtectionSection() {
  return (
    <section className="py-16 sm:py-24 bg-[#0e0e12]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-white">
            Your data. Your audience. Protected.
          </h2>
          <p className="mt-4 text-lg text-grey-400 leading-relaxed">
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
            className="text-sm font-semibold text-accent-400 hover:text-accent-300 transition-colors"
          >
            Learn more &rarr;
          </a>
        </div>

        {/* Security Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.title}
                className="bg-white/[0.04] rounded-[20px] border border-white/[0.06] p-8"
              >
                <div
                  className={`w-12 h-12 rounded-12 ${card.iconBg} flex items-center justify-center mb-5`}
                >
                  <Icon size={24} className={card.iconColor} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {card.title}
                </h3>
                <p className="text-sm text-grey-400 leading-relaxed">
                  {card.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
