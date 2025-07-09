import { Layers3 } from "lucide-react";
import { SiX, SiGithub, SiLinkedin, SiDiscord } from "react-icons/si";

export default function Footer() {
  const productLinks = [
    { name: "SDK & APIs", href: "#" },
    { name: "Distribution Channels", href: "#" },
    { name: "AI Tools", href: "#" },
    { name: "Ecosystem Apps", href: "#" },
  ];

  const developerLinks = [
    { name: "Documentation", href: "#" },
    { name: "API Reference", href: "#" },
    { name: "Examples", href: "#" },
    { name: "Community", href: "#" },
  ];

  const companyLinks = [
    { name: "About", href: "#" },
    { name: "Blog", href: "#" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "#" },
  ];

  const legalLinks = [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Cookie Policy", href: "#" },
  ];

  const socialLinks = [
    { icon: SiX, href: "#", label: "X (Twitter)" },
    { icon: SiGithub, href: "#", label: "GitHub" },
    { icon: SiLinkedin, href: "#", label: "LinkedIn" },
    { icon: SiDiscord, href: "#", label: "Discord" },
  ];

  return (
    <footer className="bg-neutral-dark text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <div className="flex items-center mb-6">
              <Layers3 className="text-primary text-2xl mr-3" />
              <span className="text-xl font-bold">Ply Network</span>
            </div>
            <p className="text-gray-400 mb-6">
              The complete crowdfunding ecosystem for the future of work.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Products</h4>
            <ul className="space-y-2 text-gray-400">
              {productLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Developers</h4>
            <ul className="space-y-2 text-gray-400">
              {developerLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              {companyLinks.map((link, index) => (
                <li key={index}>
                  <a href={link.href} className="hover:text-white transition-colors">
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Ply Network. All rights reserved.
          </p>
          <div className="flex space-x-6 text-gray-400 text-sm mt-4 md:mt-0">
            {legalLinks.map((link, index) => (
              <a key={index} href={link.href} className="hover:text-white transition-colors">
                {link.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
