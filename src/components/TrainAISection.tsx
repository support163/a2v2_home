import { Link2, Cpu, Rocket } from "lucide-react";
import type { ReactNode } from "react";

interface StepCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  step: number;
}

function StepCard({ icon, title, description, step }: StepCardProps) {
  return (
    <div className="bg-grey-950 rounded-[20px] p-8 flex flex-col items-start relative overflow-hidden">
      {/* Step number watermark */}
      <span className="absolute top-4 right-6 text-[80px] font-bold text-white/5 leading-none select-none">
        {step}
      </span>

      {/* Icon */}
      <div className="w-12 h-12 rounded-12 bg-accent-600/20 flex items-center justify-center mb-6">
        <div className="text-accent-400">{icon}</div>
      </div>

      {/* Content */}
      <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
      <p className="text-sm text-grey-400 leading-relaxed">{description}</p>
    </div>
  );
}

export function TrainAISection() {
  return (
    <section className="py-16 sm:py-24 bg-white" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900">
            Train your AI in seconds.
          </h2>
          <p className="mt-4 text-lg text-grey-500 leading-relaxed">
            No coding. Just upload your content, and we build your digital twin.
          </p>
        </div>

        {/* Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <StepCard
            icon={<Link2 size={24} />}
            title="Connect"
            description="Sync your YouTube, PDFs, and website URLs."
            step={1}
          />
          <StepCard
            icon={<Cpu size={24} />}
            title="Train"
            description="Our engine learns your voice, facts, and offers."
            step={2}
          />
          <StepCard
            icon={<Rocket size={24} />}
            title="Deploy"
            description="Share your a2v2 link anywhere."
            step={3}
          />
        </div>
      </div>
    </section>
  );
}
