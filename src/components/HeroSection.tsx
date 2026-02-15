import { Button } from "./ui/Button";

export function HeroSection() {
  return (
    <section className="relative bg-primary-950 overflow-hidden">
      {/* Background image with overlay */}
      <div className="absolute inset-0">
        <img
          src="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1920&q=80"
          alt=""
          aria-hidden="true"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary-950/90 to-primary-950/60" />
      </div>

      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 sm:py-32 lg:py-40">
        <div className="max-w-2xl">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight">
            Your Journey,
            <br />
            Your Growth
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-primary-300 leading-relaxed max-w-lg">
            The ultimate resource for mastering modern growth strategies through
            faith-centered programs and community support.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <Button variant="primary" size="lg">
              Start Your Journey
            </Button>
            <Button variant="outline" size="lg">
              Explore Programs
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
