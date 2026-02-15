import { Star } from "lucide-react";
import { Button } from "./ui/Button";

const avatars = [
  { initials: "AR", bg: "bg-accent-600" },
  { initials: "MK", bg: "bg-rose-500" },
  { initials: "JL", bg: "bg-amber-500" },
];

export function CTASection() {
  return (
    <section className="relative py-20 sm:py-32 bg-[#0e0e12] overflow-hidden">
      {/* Radial glow background */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        {/* Outer ring */}
        <div className="absolute w-[900px] h-[500px] rounded-[50%] border border-white/[0.03]" />
        {/* Mid ring */}
        <div className="absolute w-[650px] h-[380px] rounded-[50%] border border-white/[0.05]" />
        {/* Inner ring */}
        <div className="absolute w-[400px] h-[250px] rounded-[50%] border border-white/[0.07]" />
        {/* Center glow */}
        <div className="absolute w-[500px] h-[300px] rounded-[50%] bg-accent-600/[0.06] blur-[80px]" />
      </div>

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight">
          Your audience is waiting
          <br />
          to talk to you.
        </h2>
        <p className="mt-6 text-lg text-grey-400 leading-relaxed max-w-xl mx-auto">
          Join thousands of creators and professionals who use A2V2 to engage
          their audience, capture leads, and grow their business &mdash; on
          autopilot.
        </p>
        <div className="mt-10">
          <Button variant="primary" size="lg">
            Sign up Free
          </Button>
        </div>
        <p className="mt-4 text-sm text-grey-500">No credit card required</p>

        {/* Social proof */}
        <div className="mt-10 flex items-center justify-center gap-3">
          {/* Overlapping avatars */}
          <div className="flex -space-x-2">
            {avatars.map((a) => (
              <div
                key={a.initials}
                className={`w-8 h-8 rounded-infinite ${a.bg} flex items-center justify-center ring-2 ring-[#0e0e12]`}
              >
                <span className="text-[9px] font-bold text-white">
                  {a.initials}
                </span>
              </div>
            ))}
          </div>

          {/* Stars + text */}
          <div className="flex flex-col items-start gap-0.5">
            <div className="flex items-center gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={12}
                  className="text-amber-400 fill-amber-400"
                />
              ))}
            </div>
            <span className="text-[11px] text-grey-400">
              Loved by 5,000+ creators &amp; professionals
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
