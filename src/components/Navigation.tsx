import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Avatar } from "./ui/Avatar";

const navLinks = [
  { label: "Home", href: "#", active: true },
  { label: "Programs", href: "#programs" },
  { label: "Community", href: "#community" },
  { label: "Spiritual Growth Journal", href: "#journal" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-primary-950 text-white" role="navigation">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-2"
            aria-label="A2V2 Home"
          >
            <span className="text-xl font-bold tracking-tight">a2v2</span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-white ${
                  link.active ? "text-white" : "text-primary-400"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Profile Avatar */}
          <div className="hidden md:flex items-center">
            <Avatar alt="User profile" size="sm" fallback="U" />
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-8 hover:bg-primary-900 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-primary-800">
            <div className="flex flex-col gap-2 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3 py-2 rounded-8 text-sm font-medium transition-colors ${
                    link.active
                      ? "bg-primary-900 text-white"
                      : "text-primary-400 hover:text-white hover:bg-primary-900"
                  }`}
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
