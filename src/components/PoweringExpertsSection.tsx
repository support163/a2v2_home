import { useState } from "react";
import {
  Facebook,
  Instagram,
  Linkedin,
  Youtube,
  Twitter,
  Link2,
  Smile,
  Mic,
  Send,
  Star,
  Bed,
  Bath,
  Menu,
  Home,
  User,
  Heart,
  MapPin,
  Calendar,
  Paperclip,
  Lock,
  Shield,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/*  Tab definitions                                                   */
/* ------------------------------------------------------------------ */
const tabs = [
  { id: "real-estate" as const, label: "Real Estate", icon: Home },
  { id: "creators" as const, label: "Creators", icon: User },
  { id: "healthcare" as const, label: "Healthcare", icon: Heart },
];
type TabId = (typeof tabs)[number]["id"];

/* ------------------------------------------------------------------ */
/*  Verified badge (reusable)                                         */
/* ------------------------------------------------------------------ */
function VerifiedBadge({ size = 16 }: { size?: number }) {
  const inner = Math.round(size * 0.5);
  return (
    <div
      className="rounded-infinite bg-amber-400 flex items-center justify-center"
      style={{ width: size, height: size }}
    >
      <svg
        width={inner}
        height={inner}
        viewBox="0 0 12 12"
        fill="none"
        aria-hidden="true"
      >
        <path
          d="M10 3L4.5 8.5 2 6"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Social icon row                                                   */
/* ------------------------------------------------------------------ */
const socialIcons = [
  { icon: Facebook, label: "Facebook" },
  { icon: Instagram, label: "Instagram" },
  { icon: Linkedin, label: "LinkedIn" },
  { icon: Youtube, label: "YouTube" },
  { icon: Twitter, label: "X" },
];

function SocialRow({ dark = false }: { dark?: boolean }) {
  return (
    <div className="flex items-center justify-center gap-3">
      {socialIcons.map((s) => (
        <div
          key={s.label}
          className={`w-8 h-8 rounded-infinite flex items-center justify-center ${
            dark ? "bg-white/10" : "bg-grey-100"
          }`}
        >
          <s.icon
            size={13}
            className={dark ? "text-white/70" : "text-grey-600"}
          />
        </div>
      ))}
    </div>
  );
}

/* ================================================================== */
/*  REAL ESTATE MOCKUP                                                */
/* ================================================================== */
const listings = [
  {
    image:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=280&q=80",
    name: "The Marina Vue",
    rating: "4.8",
    reviews: "20",
    address: "123 Ocean Blvd, Malibu",
    beds: 4,
    baths: 3,
    sqft: "3,200",
    price: "$820",
  },
  {
    image:
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=280&q=80",
    name: "Sunset Ridge",
    rating: "4.9",
    reviews: "34",
    address: "456 Sunset Dr, Beverly Hills",
    beds: 5,
    baths: 4,
    sqft: "4,100",
    price: "$647",
  },
  {
    image:
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=280&q=80",
    name: "Palm Retreat",
    rating: "4.7",
    reviews: "15",
    address: "789 Palm Ave, Santa Monica",
    beds: 3,
    baths: 2,
    sqft: "2,800",
    price: "$520",
  },
];

function RealEstateMockup() {
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0">
      <div className="bg-grey-800 rounded-[32px] border-[3px] border-grey-700/40 p-2 shadow-2xl">
        <div className="bg-[#1a1a2e] rounded-[26px] overflow-hidden">
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 pt-5 pb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-infinite bg-accent-600 flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">JS</span>
              </div>
              <span className="text-[11px] font-semibold text-white">
                James Sterling
              </span>
            </div>
            <Menu size={16} className="text-grey-400" />
          </div>

          {/* Dark profile header area */}
          <div className="relative px-5 pt-4 pb-6">
            {/* Dark gradient overlay at top */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a2e] via-[#1a1a2e]/90 to-[#1a1a2e]" />
            <div className="relative text-center">
              <div className="w-16 h-16 rounded-infinite bg-accent-600 flex items-center justify-center mx-auto mb-2 ring-2 ring-white/20">
                <span className="text-white text-lg font-bold">JS</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <h4 className="text-sm font-semibold text-white">
                  James Sterling
                </h4>
                <VerifiedBadge />
              </div>
              <p className="text-[11px] text-grey-400 mt-0.5">
                Luxury Estates.
              </p>
              <div className="mt-3">
                <SocialRow dark />
              </div>
            </div>
          </div>

          {/* White content area */}
          <div className="bg-white rounded-t-[20px]">
            {/* Chat input */}
            <div className="mx-4 pt-4 pb-3">
              <div className="flex items-center gap-2 bg-grey-50 rounded-infinite border border-grey-200 px-3 py-2">
                <input
                  type="text"
                  placeholder="Ask about any listing..."
                  className="flex-1 text-[10px] text-grey-400 outline-none bg-transparent"
                  disabled
                  aria-label="Chat input"
                />
                <div className="flex items-center gap-1.5 text-grey-300">
                  <Link2 size={12} />
                  <Smile size={12} />
                  <Mic size={12} />
                  <button
                    className="w-5 h-5 rounded-infinite bg-accent-600 flex items-center justify-center ml-0.5"
                    aria-label="Send"
                    disabled
                  >
                    <Send size={8} className="text-white" />
                  </button>
                </div>
              </div>
            </div>

            {/* Property listings */}
            <div className="px-4 pb-5 overflow-hidden">
              <div className="flex gap-2.5 overflow-x-auto scrollbar-hide">
                {listings.map((listing, i) => (
                  <div
                    key={i}
                    className="w-[150px] shrink-0 bg-white rounded-14 border border-grey-100 overflow-hidden shadow-sm"
                  >
                    <div className="relative">
                      <img
                        src={listing.image}
                        alt={listing.name}
                        className="w-full h-[85px] object-cover"
                      />
                      <div className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-sm rounded-infinite px-1.5 py-0.5 flex items-center gap-0.5">
                        <Star
                          size={8}
                          className="text-amber-400 fill-amber-400"
                        />
                        <span className="text-[8px] font-semibold text-grey-800">
                          {listing.rating}
                        </span>
                        <span className="text-[7px] text-grey-400">
                          ({listing.reviews})
                        </span>
                      </div>
                    </div>
                    <div className="p-2.5">
                      <p className="text-[10px] font-semibold text-grey-900">
                        {listing.name}
                      </p>
                      <div className="flex items-center gap-0.5 mt-0.5">
                        <MapPin size={8} className="text-grey-400" />
                        <p className="text-[8px] text-grey-400 truncate">
                          {listing.address}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5 text-[7px] text-grey-400">
                        <span className="flex items-center gap-0.5">
                          <Bed size={8} />
                          {listing.beds}
                        </span>
                        <span className="flex items-center gap-0.5">
                          <Bath size={8} />
                          {listing.baths}
                        </span>
                        <span>{listing.sqft} sqft</span>
                      </div>
                      <div className="flex items-center justify-between mt-2">
                        <p className="text-[10px] font-bold text-grey-900">
                          {listing.price}{" "}
                          <span className="text-[7px] font-normal text-grey-400">
                            Night
                          </span>
                        </p>
                        <button className="text-[7px] font-semibold text-white bg-accent-600 rounded-infinite px-2.5 py-1">
                          Reserve
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  CREATORS MOCKUP                                                   */
/* ================================================================== */
function CreatorsMockup() {
  return (
    <div className="w-[340px] sm:w-[380px] shrink-0">
      <div className="bg-grey-800 rounded-[32px] border-[3px] border-grey-700/40 p-2 shadow-2xl">
        <div className="bg-white rounded-[26px] overflow-hidden">
          {/* Header bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-infinite bg-rose-400 flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">IH</span>
              </div>
              <span className="text-[11px] font-semibold text-grey-900">
                Isabella Hart
              </span>
            </div>
            <Menu size={16} className="text-grey-400" />
          </div>

          {/* Background image + profile overlay */}
          <div className="relative mx-3">
            <div className="rounded-16 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600&q=80"
                alt="Sky background"
                className="w-full h-[130px] object-cover"
              />
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent rounded-16" />
            </div>

            {/* Profile positioned overlapping the image bottom */}
            <div className="relative -mt-10 text-center pb-2">
              <div className="w-16 h-16 rounded-infinite bg-rose-400 flex items-center justify-center mx-auto mb-1.5 ring-3 ring-white shadow-lg">
                <span className="text-white text-lg font-bold">IH</span>
              </div>
              <div className="flex items-center justify-center gap-1.5">
                <h4 className="text-sm font-semibold text-grey-900">
                  Isabella Hart
                </h4>
                <VerifiedBadge />
              </div>
              <p className="text-[10px] text-grey-500 mt-0.5 px-8 leading-snug">
                Blending the science of horticulture with the art of design
              </p>
            </div>
          </div>

          {/* Social icons */}
          <div className="py-2">
            <SocialRow />
          </div>

          {/* Ask me anything heading */}
          <div className="text-center pt-2 pb-1">
            <p className="text-sm font-semibold text-grey-900">
              <span className="mr-1">&#128075;</span> Ask me anything
            </p>
          </div>

          {/* Chat input */}
          <div className="mx-4 mb-4 mt-2">
            <div className="flex items-center gap-2 bg-grey-50 rounded-infinite border border-grey-200 px-3 py-2.5">
              <input
                type="text"
                placeholder="Ask a Question"
                className="flex-1 text-[10px] text-grey-400 outline-none bg-transparent"
                disabled
                aria-label="Chat input"
              />
              <div className="flex items-center gap-1.5 text-grey-300">
                <Link2 size={12} />
                <Smile size={12} />
                <Mic size={12} />
                <button
                  className="w-5 h-5 rounded-infinite bg-accent-600 flex items-center justify-center ml-0.5"
                  aria-label="Send"
                  disabled
                >
                  <Send size={8} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  HEALTHCARE MOCKUP                                                 */
/* ================================================================== */
function HealthcareMockup() {
  return (
    <div className="relative w-[340px] sm:w-[380px] shrink-0">
      {/* Main chat card */}
      <div className="bg-grey-800 rounded-[32px] border-[3px] border-grey-700/40 p-2 shadow-2xl">
        <div className="bg-white rounded-[26px] overflow-hidden">
          {/* Chat header */}
          <div className="flex items-center gap-3 px-5 pt-5 pb-4 border-b border-grey-100">
            <div className="w-9 h-9 rounded-infinite bg-teal-500 flex items-center justify-center">
              <span className="text-[10px] font-bold text-white">SB</span>
            </div>
            <div>
              <h4 className="text-xs font-semibold text-grey-900">
                Dr. Sarah Bennet
              </h4>
              <p className="text-[10px] text-grey-400 leading-snug">
                Ready to help you 24/7 with instant information.
              </p>
            </div>
          </div>

          {/* Messages */}
          <div className="space-y-4 px-5 pt-4 pb-3">
            {/* Visitor message */}
            <div className="flex flex-col items-end">
              <div className="bg-[#1a1a2e] text-white px-3.5 py-2.5 rounded-[14px] rounded-tr-[4px] text-[11px] leading-relaxed max-w-[260px]">
                I have a sharp pain in my lower right molar. Do you have any
                emergency slots?
              </div>
              <span className="text-[9px] text-grey-400 mt-1">
                Visitor &middot; 1m
              </span>
            </div>

            {/* AI response */}
            <div className="flex flex-col items-start">
              <div className="bg-grey-50 px-3.5 py-2.5 rounded-[14px] rounded-tl-[4px] text-[11px] text-grey-700 leading-relaxed max-w-[270px]">
                I&apos;m sorry to hear that. We classify that as urgent. I have
                an emergency slot open tomorrow at 9:00 AM.
              </div>

              {/* Booking action card */}
              <div className="mt-2 bg-grey-50 rounded-12 p-3 flex items-center gap-3 max-w-[270px] border border-grey-100">
                <div className="w-9 h-9 rounded-8 bg-teal-100 flex items-center justify-center shrink-0">
                  <Calendar size={16} className="text-teal-600" />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-[10px] font-semibold text-grey-900">
                    Book Emergency Slot: 9:00 AM
                  </p>
                  <button className="mt-1 text-[9px] font-semibold text-white bg-grey-900 rounded-8 px-3 py-1">
                    Secure Intake Form
                  </button>
                </div>
              </div>

              <span className="text-[9px] text-grey-400 mt-1">
                A2V2 &middot; AI Agent &middot; 1m
              </span>
            </div>
          </div>

          {/* Chat input */}
          <div className="px-5 pb-5 pt-1">
            <div className="flex items-center gap-2 bg-grey-50 rounded-infinite border border-grey-200 px-3.5 py-2.5">
              <input
                type="text"
                placeholder="Ask a Question"
                className="flex-1 text-[11px] text-grey-400 outline-none bg-transparent"
                disabled
                aria-label="Chat input"
              />
              <div className="flex items-center gap-1.5 text-grey-300">
                <Smile size={14} />
                <Paperclip size={14} />
                <button
                  className="w-6 h-6 rounded-infinite bg-accent-600 flex items-center justify-center ml-0.5"
                  aria-label="Send"
                  disabled
                >
                  <Send size={10} className="text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Floating HIPAA Compliance badge — positioned to overlap right edge */}
      <div className="absolute -right-4 top-1/2 -translate-y-1/2 z-10 hidden sm:block">
        <div className="bg-[#1a1a2e] border border-white/10 rounded-16 p-4 shadow-xl flex flex-col items-center gap-2 w-[120px]">
          <div className="w-10 h-10 rounded-12 bg-teal-500/20 flex items-center justify-center">
            <Shield size={20} className="text-teal-400" />
          </div>
          <div className="flex items-center gap-1">
            <Lock size={8} className="text-teal-400" />
            <span className="text-[10px] font-semibold text-white">HIPAA</span>
          </div>
          <span className="text-[8px] text-grey-500 text-center leading-tight">
            Compliant
          </span>
          <div className="w-full h-px bg-white/10 my-0.5" />
          <div className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-infinite bg-emerald-400" />
            <span className="text-[9px] text-grey-400">Active</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  Tab overlay text content                                          */
/* ================================================================== */
const tabOverlay: Record<TabId, { title: string; description: string }> = {
  "real-estate": {
    title: "Your 24/7 Inside Sales Agent.",
    description:
      "Stop losing commissions to missed calls. Your AI qualifies leads, answers detailed listing questions, and schedules private viewings automatically, so you only focus on serious buyers.",
  },
  creators: {
    title: "Scale your personal brand on autopilot.",
    description:
      "Stop answering the same DMs over and over. Your AI twin engages fans, recommends your products, and books high-ticket calls 24/7 — all while capturing leads and growing your email list.",
  },
  healthcare: {
    title: "Automated intake and triage, fully compliant.",
    description:
      "Reduce administrative burnout without sacrificing patient care. Securely answer FAQs, pre-screen appointments, and route urgent needs to your staff, all within a HIPAA-ready environment.",
  },
};

/* ================================================================== */
/*  Main Section                                                      */
/* ================================================================== */
export function PoweringExpertsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("real-estate");
  const overlay = tabOverlay[activeTab];

  return (
    <section className="pt-16 sm:pt-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <h2 className="text-3xl sm:text-4xl font-bold text-grey-900">
            Powering the next generation of experts.
          </h2>
          <p className="mt-4 text-lg text-grey-500 leading-relaxed">
            From viral creators to licensed clinicians, A2V2 adapts to your
            specific workflow. Toggle below to see how our engine transforms to
            meet your industry&apos;s unique demands.
          </p>
        </div>

        {/* Tab Bar with icons + underline */}
        <div className="flex justify-center mb-0">
          <div className="inline-flex gap-8 border-b border-grey-200">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 pb-3 text-sm font-medium transition-all border-b-2 -mb-px ${
                    isActive
                      ? "border-accent-600 text-grey-900"
                      : "border-transparent text-grey-400 hover:text-grey-600"
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Dark content area — full width with rounded top */}
      <div className="mt-10 bg-[#0e0e12] rounded-t-[32px] sm:rounded-t-[48px]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-16">
            {/* Left — overlay text */}
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {overlay.title}
              </h3>
              <p className="mt-4 text-base text-grey-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {overlay.description}
              </p>
            </div>

            {/* Right — tab-specific mockup */}
            <div className="order-1 lg:order-2 flex justify-center">
              {activeTab === "real-estate" && <RealEstateMockup />}
              {activeTab === "creators" && <CreatorsMockup />}
              {activeTab === "healthcare" && <HealthcareMockup />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
