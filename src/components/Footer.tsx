import { Send } from "lucide-react";

const footerLinks = {
  About: [
    { label: "Contact", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Blog", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-white border-t border-grey-200" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand */}
          <div>
            <a href="/" className="flex items-center gap-1.5">
              <div className="w-7 h-7 bg-accent-600 rounded-8 flex items-center justify-center">
                <span className="text-white text-xs font-bold">A2</span>
              </div>
              <span className="text-lg font-bold text-grey-900">
                A2V2<span className="text-accent-600">.ai</span>
              </span>
            </a>
            <p className="mt-4 text-sm text-grey-500 leading-relaxed max-w-xs">
              Turn Your YouTube Videos into a Personal AI Clone
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-grey-900 mb-4">
                {heading}
              </h3>
              <ul className="flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-grey-500 hover:text-grey-900 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold text-grey-900 mb-4">
              Subscribe to our Newsletter
            </h3>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 min-w-0 text-sm border border-grey-200 rounded-8 px-3 py-2 outline-none focus:ring-2 focus:ring-accent-500 focus:border-accent-500"
                aria-label="Email for newsletter"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-accent-600 text-white text-sm font-medium rounded-8 hover:bg-accent-700 transition-colors flex items-center gap-1.5"
              >
                <Send size={14} />
                Subscribe
              </button>
            </form>

            {/* Social Icons */}
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#"
                className="w-9 h-9 rounded-infinite bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-grey-200 transition-colors"
                aria-label="Facebook"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-infinite bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-grey-200 transition-colors"
                aria-label="X (Twitter)"
              >
                <span className="text-sm font-bold">X</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-infinite bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-grey-200 transition-colors"
                aria-label="Instagram"
              >
                <span className="text-sm font-bold">in</span>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-infinite bg-grey-100 flex items-center justify-center text-grey-600 hover:bg-grey-200 transition-colors"
                aria-label="LinkedIn"
              >
                <span className="text-sm font-bold">Li</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-grey-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-grey-500">
            &copy;2026 A2V2.AI All rights reserved
          </p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="text-sm text-grey-500 hover:text-grey-900 transition-colors"
            >
              Privacy Policy
            </a>
            <span className="text-grey-300">|</span>
            <a
              href="#"
              className="text-sm text-grey-500 hover:text-grey-900 transition-colors"
            >
              Terms &amp; Conditions
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
