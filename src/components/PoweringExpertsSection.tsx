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

interface Listing {
  image: string;
  rating: string;
  address: string;
  beds: number;
  baths: number;
  sqft: string;
  price: string;
}

interface TabContent {
  name: string;
  subtitle: string;
  initials: string;
  socials: { icon: React.ElementType; label: string }[];
  chatPlaceholder: string;
  listings: Listing[];
  title: string;
  description: string;
}

const content: Record<TabId, TabContent> = {
  "real-estate": {
    name: "James Sterling",
    subtitle: "Luxury Estates.",
    initials: "JS",
    socials: [
      { icon: Facebook, label: "Facebook" },
      { icon: Instagram, label: "Instagram" },
      { icon: Linkedin, label: "LinkedIn" },
      { icon: Youtube, label: "YouTube" },
      { icon: Twitter, label: "X" },
    ],
    chatPlaceholder: "Ask about any listing...",
    listings: [
      {
        image:
          "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=280&q=80",
        rating: "4.9",
        address: "123 Ocean Blvd, Malibu",
        beds: 4,
        baths: 3,
        sqft: "3,200",
        price: "$820",
      },
      {
        image:
          "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=280&q=80",
        rating: "4.8",
        address: "456 Sunset Dr, Beverly Hills",
        beds: 5,
        baths: 4,
        sqft: "4,100",
        price: "$647",
      },
      {
        image:
          "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=280&q=80",
        rating: "4.7",
        address: "789 Palm Ave, Santa Monica",
        beds: 3,
        baths: 2,
        sqft: "2,800",
        price: "$520",
      },
    ],
    title: "Your 24/7 Inside Sales Agent.",
    description:
      "Stop losing commissions to missed calls. Your AI qualifies leads, answers detailed listing questions, and schedules private viewings automatically, so you only focus on serious buyers.",
  },
  creators: {
    name: "Maya Rodriguez",
    subtitle: "Content & Coaching.",
    initials: "MR",
    socials: [
      { icon: Youtube, label: "YouTube" },
      { icon: Instagram, label: "Instagram" },
      { icon: Twitter, label: "X" },
      { icon: Linkedin, label: "LinkedIn" },
      { icon: Facebook, label: "Facebook" },
    ],
    chatPlaceholder: "Ask about my programs...",
    listings: [
      {
        image:
          "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=280&q=80",
        rating: "4.9",
        address: "Creator Bootcamp 2024",
        beds: 8,
        baths: 0,
        sqft: "12",
        price: "$197",
      },
      {
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=280&q=80",
        rating: "4.8",
        address: "Content Mastery Course",
        beds: 6,
        baths: 0,
        sqft: "8",
        price: "$97",
      },
      {
        image:
          "https://images.unsplash.com/photo-1551434678-e076c223a692?w=280&q=80",
        rating: "4.7",
        address: "Brand Strategy Guide",
        beds: 4,
        baths: 0,
        sqft: "5",
        price: "$47",
      },
    ],
    title: "Turn followers into customers.",
    description:
      "Your AI assistant handles DMs, recommends your products contextually, and captures leads while you focus on creating. Never miss a sales opportunity again.",
  },
  healthcare: {
    name: "Dr. Emily Park",
    subtitle: "Integrative Medicine.",
    initials: "EP",
    socials: [
      { icon: Linkedin, label: "LinkedIn" },
      { icon: Instagram, label: "Instagram" },
      { icon: Youtube, label: "YouTube" },
      { icon: Facebook, label: "Facebook" },
      { icon: Twitter, label: "X" },
    ],
    chatPlaceholder: "Ask about services...",
    listings: [
      {
        image:
          "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=280&q=80",
        rating: "4.9",
        address: "Wellness Consultation",
        beds: 1,
        baths: 0,
        sqft: "60",
        price: "$250",
      },
      {
        image:
          "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=280&q=80",
        rating: "4.8",
        address: "Nutrition Planning",
        beds: 1,
        baths: 0,
        sqft: "45",
        price: "$180",
      },
      {
        image:
          "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=280&q=80",
        rating: "4.7",
        address: "Stress Management Program",
        beds: 4,
        baths: 0,
        sqft: "90",
        price: "$350",
      },
    ],
    title: "Your AI-Powered Patient Concierge.",
    description:
      "Patients get instant answers about services, insurance, and availability. Your AI books appointments and triages inquiries — all HIPAA-compliant.",
  },
};

/* ------------------------------------------------------------------ */
/*  Phone Mockup                                                      */
/* ------------------------------------------------------------------ */
function PhoneMockup({ data }: { data: TabContent }) {
  return (
    <div className="w-[320px] sm:w-[340px] shrink-0">
      {/* Phone frame */}
      <div className="bg-white rounded-[32px] border-[3px] border-grey-700/30 p-2 shadow-2xl">
        <div className="bg-white rounded-[26px] overflow-hidden">
          {/* Status / header bar */}
          <div className="flex items-center justify-between px-5 pt-4 pb-2">
            <div className="flex items-center gap-2.5">
              <div className="w-7 h-7 rounded-infinite bg-accent-600 flex items-center justify-center">
                <span className="text-[8px] font-bold text-white">
                  {data.initials}
                </span>
              </div>
              <span className="text-[11px] font-semibold text-grey-900">
                {data.name}
              </span>
            </div>
            <Menu size={16} className="text-grey-400" />
          </div>

          {/* Profile */}
          <div className="text-center px-5 pb-3">
            <div className="w-14 h-14 rounded-infinite bg-accent-600 flex items-center justify-center mx-auto mb-2">
              <span className="text-white text-sm font-bold">
                {data.initials}
              </span>
            </div>
            <div className="flex items-center justify-center gap-1.5">
              <h4 className="text-sm font-semibold text-grey-900">
                {data.name}
              </h4>
              {/* Verified badge */}
              <div className="w-4 h-4 rounded-infinite bg-amber-400 flex items-center justify-center">
                <svg
                  width="8"
                  height="8"
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
            </div>
            <p className="text-[11px] text-grey-400 mt-0.5">{data.subtitle}</p>
          </div>

          {/* Social icons row */}
          <div className="flex items-center justify-center gap-3 pb-3">
            {data.socials.map((s) => (
              <div
                key={s.label}
                className="w-8 h-8 rounded-infinite bg-grey-100 flex items-center justify-center"
              >
                <s.icon size={13} className="text-grey-600" />
              </div>
            ))}
          </div>

          {/* Chat input */}
          <div className="mx-4 mb-3 flex items-center gap-2 bg-grey-50 rounded-infinite border border-grey-200 px-3 py-2">
            <input
              type="text"
              placeholder={data.chatPlaceholder}
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

          {/* Listings row */}
          <div className="px-4 pb-4 overflow-hidden">
            <div className="flex gap-2.5 overflow-x-auto scrollbar-hide">
              {data.listings.map((listing, i) => (
                <div
                  key={i}
                  className="w-[140px] shrink-0 bg-white rounded-12 border border-grey-100 overflow-hidden shadow-sm"
                >
                  <div className="relative">
                    <img
                      src={listing.image}
                      alt={listing.address}
                      className="w-full h-[80px] object-cover"
                    />
                    <div className="absolute top-1.5 left-1.5 bg-white/90 backdrop-blur-sm rounded-infinite px-1.5 py-0.5 flex items-center gap-0.5">
                      <Star
                        size={8}
                        className="text-amber-400 fill-amber-400"
                      />
                      <span className="text-[8px] font-semibold text-grey-800">
                        {listing.rating}
                      </span>
                    </div>
                  </div>
                  <div className="p-2">
                    <p className="text-[8px] text-grey-500 truncate">
                      {listing.address}
                    </p>
                    <div className="flex items-center gap-2 mt-1 text-[7px] text-grey-400">
                      <span className="flex items-center gap-0.5">
                        <Bed size={8} />
                        {listing.beds}
                      </span>
                      {listing.baths > 0 && (
                        <span className="flex items-center gap-0.5">
                          <Bath size={8} />
                          {listing.baths}
                        </span>
                      )}
                      <span>{listing.sqft} sqft</span>
                    </div>
                    <div className="flex items-center justify-between mt-1.5">
                      <p className="text-[9px] font-bold text-grey-900">
                        {listing.price}{" "}
                        <span className="text-[7px] font-normal text-grey-400">
                          Night
                        </span>
                      </p>
                      <button className="text-[7px] font-semibold text-white bg-accent-600 rounded-infinite px-2 py-0.5">
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
  );
}

/* ------------------------------------------------------------------ */
/*  Main Section                                                      */
/* ------------------------------------------------------------------ */
export function PoweringExpertsSection() {
  const [activeTab, setActiveTab] = useState<TabId>("real-estate");
  const data = content[activeTab];

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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
          <div className="flex flex-col lg:flex-row items-center lg:items-end gap-10 lg:gap-16">
            {/* Left — overlay text */}
            <div className="flex-1 order-2 lg:order-1 text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight">
                {data.title}
              </h3>
              <p className="mt-4 text-base text-grey-500 leading-relaxed max-w-lg mx-auto lg:mx-0">
                {data.description}
              </p>
            </div>

            {/* Right — phone mockup */}
            <div className="order-1 lg:order-2">
              <PhoneMockup data={data} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
