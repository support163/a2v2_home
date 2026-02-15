import { ChevronDown, Menu, X } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/Button";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing" },
  { label: "Blog", href: "#blog" },
];

export function Navigation() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav
      className="bg-white border-b border-grey-100 sticky top-0 z-50"
      role="navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a
            href="/"
            className="flex items-center gap-1.5"
            aria-label="A2V2 Home"
          >
            <div className="w-7 h-7 bg-accent-600 rounded-8 flex items-center justify-center">
              <span className="text-white text-xs font-bold">A2</span>
            </div>
            <span className="text-lg font-bold text-grey-900">
              A2V2<span className="text-accent-600">.ai</span>
            </span>
          </a>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm font-medium text-grey-600 hover:text-grey-900 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right Side Actions */}
          <div className="hidden md:flex items-center gap-4">
            <button className="flex items-center gap-1 text-sm font-medium text-grey-600 hover:text-grey-900 transition-colors">
              Sign in
              <ChevronDown size={16} />
            </button>
            <Button variant="primary" size="md">
              Try For Free
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-8 hover:bg-grey-100 transition-colors text-grey-600"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden pb-4 border-t border-grey-100">
            <div className="flex flex-col gap-1 pt-4">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="px-3 py-2 rounded-8 text-sm font-medium text-grey-600 hover:text-grey-900 hover:bg-grey-50"
                >
                  {link.label}
                </a>
              ))}
              <hr className="my-2 border-grey-100" />
              <button className="px-3 py-2 text-sm font-medium text-grey-600 text-left">
                Sign in
              </button>
              <div className="px-3 pt-2">
                <Button variant="primary" size="md" className="w-full">
                  Try For Free
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
