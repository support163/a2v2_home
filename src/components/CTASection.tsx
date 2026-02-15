import { Button } from "./ui/Button";

export function CTASection() {
  return (
    <section className="py-16 sm:py-24 bg-grey-950">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-white leading-tight">
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
      </div>
    </section>
  );
}
