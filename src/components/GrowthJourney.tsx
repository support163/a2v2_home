import { BookOpen, Clock, Trophy } from "lucide-react";
import type { ReactNode } from "react";

interface StatCardProps {
  icon: ReactNode;
  value: string;
  label: string;
  description: string;
  iconBgColor: string;
  iconColor: string;
}

function StatCard({
  icon,
  value,
  label,
  description,
  iconBgColor,
  iconColor,
}: StatCardProps) {
  return (
    <div className="bg-white rounded-12 border border-grey-200 p-6 flex flex-col items-center text-center shadow-sm">
      <div
        className={`w-12 h-12 rounded-infinite flex items-center justify-center ${iconBgColor} ${iconColor}`}
      >
        {icon}
      </div>
      <span className="mt-4 text-3xl font-bold text-grey-900">{value}</span>
      <span className="mt-1 text-sm font-semibold text-grey-700">{label}</span>
      <p className="mt-2 text-sm text-grey-500">{description}</p>
    </div>
  );
}

export function GrowthJourney() {
  return (
    <section className="py-16 sm:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900">
            Your Growth Journey
          </h2>
          <p className="mt-4 text-lg text-grey-500 leading-relaxed">
            Track your progress and celebrate your achievements along the way.
          </p>
        </div>

        {/* Stats Grid */}
        <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <StatCard
            icon={<BookOpen size={24} />}
            value="3"
            label="Active Programs"
            description="Currently enrolled programs"
            iconBgColor="bg-accent-100"
            iconColor="text-accent-600"
          />
          <StatCard
            icon={<Clock size={24} />}
            value="47"
            label="Hours Completed"
            description="Total learning hours logged"
            iconBgColor="bg-amber-100"
            iconColor="text-amber-600"
          />
          <StatCard
            icon={<Trophy size={24} />}
            value="12"
            label="Achievements"
            description="Milestones reached so far"
            iconBgColor="bg-success-100"
            iconColor="text-success-600"
          />
        </div>
      </div>
    </section>
  );
}
