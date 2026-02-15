import { useState } from "react";
import {
  Instagram,
  Youtube,
  Twitter,
  Link as LinkIcon,
  Globe,
} from "lucide-react";

const tabs = ["Real Estate", "Creators", "Healthcare"] as const;
type Tab = (typeof tabs)[number];

interface ProfileData {
  name: string;
  title: string;
  bio: string;
  links: { icon: string; label: string }[];
}

const profilesByTab: Record<Tab, ProfileData> = {
  "Real Estate": {
    name: "James Sterling",
    title: "Luxury Real Estate Agent",
    bio: "Helping clients find their dream homes in the Bay Area. 15+ years of experience.",
    links: [
      { icon: "globe", label: "Website" },
      { icon: "instagram", label: "Instagram" },
      { icon: "youtube", label: "YouTube" },
      { icon: "link", label: "Listings" },
    ],
  },
  Creators: {
    name: "Maya Rodriguez",
    title: "Content Creator & Coach",
    bio: "Empowering creators to build sustainable businesses through authentic content.",
    links: [
      { icon: "youtube", label: "YouTube" },
      { icon: "instagram", label: "Instagram" },
      { icon: "twitter", label: "Twitter" },
      { icon: "link", label: "Course" },
    ],
  },
  Healthcare: {
    name: "Dr. Emily Park",
    title: "Integrative Medicine",
    bio: "Board-certified physician specializing in holistic health and wellness coaching.",
    links: [
      { icon: "globe", label: "Practice" },
      { icon: "youtube", label: "YouTube" },
      { icon: "instagram", label: "Instagram" },
      { icon: "link", label: "Book Appt" },
    ],
  },
};

function getIcon(icon: string) {
  const size = 16;
  switch (icon) {
    case "instagram":
      return <Instagram size={size} />;
    case "youtube":
      return <Youtube size={size} />;
    case "twitter":
      return <Twitter size={size} />;
    case "globe":
      return <Globe size={size} />;
    default:
      return <LinkIcon size={size} />;
  }
}

export function PoweringExpertsSection() {
  const [activeTab, setActiveTab] = useState<Tab>("Real Estate");
  const profile = profilesByTab[activeTab];

  return (
    <section className="py-16 sm:py-24 bg-grey-50">
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

        {/* Tab Toggles */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex bg-white rounded-infinite border border-grey-200 p-1">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-5 py-2 text-sm font-medium rounded-infinite transition-all ${
                  activeTab === tab
                    ? "bg-accent-600 text-white shadow-sm"
                    : "text-grey-600 hover:text-grey-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Phone Mockup */}
        <div className="flex justify-center">
          <div className="w-[300px] bg-white rounded-[32px] border-[3px] border-grey-200 p-2 shadow-xl">
            <div className="bg-grey-950 rounded-[26px] overflow-hidden">
              {/* Profile header */}
              <div className="p-6 text-center">
                <div className="w-16 h-16 rounded-infinite bg-accent-600 flex items-center justify-center mx-auto mb-3">
                  <span className="text-white text-lg font-bold">
                    {profile.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </span>
                </div>
                <h3 className="text-white font-semibold">{profile.name}</h3>
                <p className="text-grey-400 text-xs mt-1">{profile.title}</p>
                <p className="text-grey-500 text-xs mt-3 leading-relaxed px-4">
                  {profile.bio}
                </p>
              </div>

              {/* Social Links */}
              <div className="px-6 pb-6 space-y-2">
                {profile.links.map((link) => (
                  <div
                    key={link.label}
                    className="flex items-center gap-3 bg-white/10 rounded-12 px-4 py-3 text-white text-sm"
                  >
                    {getIcon(link.icon)}
                    <span>{link.label}</span>
                  </div>
                ))}
              </div>

              {/* Photos Grid */}
              <div className="px-6 pb-6">
                <div className="grid grid-cols-3 gap-1.5 rounded-12 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=120&q=80"
                    alt="Property"
                    className="w-full h-20 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=120&q=80"
                    alt="Property"
                    className="w-full h-20 object-cover"
                  />
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=120&q=80"
                    alt="Property"
                    className="w-full h-20 object-cover"
                  />
                </div>
              </div>

              {/* Branding */}
              <div className="text-center pb-4">
                <p className="text-[10px] text-grey-600">Powered by A2V2.ai</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
