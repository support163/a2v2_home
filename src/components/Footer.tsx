const footerLinks = {
  Platform: [
    { label: "Programs", href: "#" },
    { label: "Community", href: "#" },
    { label: "Journal", href: "#" },
    { label: "Resources", href: "#" },
  ],
  Resources: [
    { label: "Help Center", href: "#" },
    { label: "Blog", href: "#" },
    { label: "Guides", href: "#" },
    { label: "Events", href: "#" },
  ],
  Company: [
    { label: "About Us", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary-950 text-white" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <span className="text-xl font-bold tracking-tight">a2v2</span>
            <p className="mt-4 text-sm text-primary-400 leading-relaxed max-w-xs">
              Empowering individuals through faith-centered growth programs and
              a supportive community.
            </p>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([heading, links]) => (
            <div key={heading}>
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                {heading}
              </h3>
              <ul className="mt-4 flex flex-col gap-3" role="list">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-primary-400 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-800">
          <p className="text-sm text-primary-500 text-center">
            &copy; {new Date().getFullYear()} A2V2. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
