import { ProgramCard } from "./ProgramCard";

const programs = [
  {
    image:
      "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?w=600&q=80",
    tag: "Spiritual Growth",
    tagVariant: "purple" as const,
    title: "Faith & Leadership Bootcamp",
    description:
      "Develop your leadership skills through faith-based principles and practical exercises designed for modern challenges.",
    instructorName: "Rev. Sarah Johnson",
    sessions: 12,
    rating: 4.9,
  },
  {
    image:
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=600&q=80",
    tag: "Community",
    tagVariant: "blue" as const,
    title: "Community Service Initiative",
    description:
      "Join a movement of change-makers making a real difference in local communities through organized service projects.",
    instructorName: "Pastor Michael Chen",
    sessions: 8,
    rating: 4.8,
  },
  {
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=600&q=80",
    tag: "Youth",
    tagVariant: "green" as const,
    title: "Youth Empowerment Workshop",
    description:
      "Equipping young adults with the tools and confidence they need to navigate life and make a positive impact.",
    instructorName: "Dr. James Wilson",
    sessions: 10,
    rating: 4.7,
  },
];

export function FeaturedPrograms() {
  return (
    <section className="py-16 sm:py-24 bg-bg-neutral-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900">
            Featured Programs
          </h2>
          <p className="mt-4 text-lg text-grey-500 leading-relaxed">
            Explore our curated programs designed to help you grow spiritually,
            personally, and professionally.
          </p>
        </div>

        {/* Program Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program) => (
            <ProgramCard key={program.title} {...program} />
          ))}
        </div>
      </div>
    </section>
  );
}
