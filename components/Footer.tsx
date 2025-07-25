"use client";

import Link from "next/link";

const Footer = () => {
  return (
    <footer className="py-12 border-t border-cyber-primary/30 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Main Footer Content */}
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand */}
            <div className="col-span-2">
              <h3 className="text-2xl font-bold font-mono mb-4">
                <span className="cyber-text-glow mr-1">LUMIO</span>
                <span className="text-cyber-secondary">AI</span>
              </h3>
              <p className="text-sm font-mono text-gray-300 leading-relaxed max-w-md">
                Smarter tools for everyday creators.
              </p>
              <p className="text-sm font-mono text-gray-300 leading-relaxed max-w-md">
                Build faster, think clearer with AI that stays out of your way.
              </p>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-bold text-cyber-primary mb-4 font-mono">
                QUICK LINKS
              </h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>
                  <a
                    href="#"
                    className="text-gray-300 hover:text-cyber-primary transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-cyber-primary transition-colors"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#features"
                    className="text-gray-300 hover:text-cyber-primary transition-colors"
                  >
                    Features
                  </a>
                </li>
                <li>
                  <a
                    href="#roadmap"
                    className="text-gray-300 hover:text-cyber-primary transition-colors"
                  >
                    Roadmap
                  </a>
                </li>
                {/* <li>
                  <a
                    href="#faq"
                    className="text-gray-300 hover:text-cyber-primary transition-colors"
                  >
                    FAQ
                  </a>
                </li> */}
              </ul>
            </div>

            {/* Tools */}
            <div>
              <h4 className="text-lg font-bold text-cyber-primary mb-4 font-mono">
                TOOLS
              </h4>
              <ul className="space-y-2 text-sm font-mono">
                <li>
                  <a
                    href="#LumioGen"
                    className="text-gray-300 hover:text-cyber-primary transition-colors"
                  >
                    LumioGen
                  </a>
                </li>
                <li>
                  <a
                    href="#VisionLight"
                    className="text-gray-300 hover:text-cyber-primary transition-colors"
                  >
                    VisionLight
                  </a>
                </li>
                <li>
                  <a
                    href="#SyntaxGlow"
                    className="text-gray-300 hover:text-cyber-primary transition-colors"
                  >
                    SyntaxGlow
                  </a>
                </li>
                <li>
                  <a
                    href="#docs"
                    className="text-gray-300 hover:text-cyber-primary transition-colors"
                  >
                    Documentation
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* Social & Legal */}
          <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-cyber-primary/20">
            {/* Social Links */}
            <div className="flex space-x-4 mb-4 md:mb-0">
              <Link
                href="https://x.com/useLumio"
                target="_blank"
                rel="noopener noreferrer"
                className="cyber-button text-xs px-3 py-2"
              >
                TWITTER
              </Link>
              <a href="#" className="cyber-button text-xs px-3 py-2">
                GITHUB
              </a>
              <a href="#" className="cyber-button text-xs px-3 py-2">
                DISCORD
              </a>
            </div>

            {/* Legal Links */}
            <div className="flex space-x-4 text-sm font-mono">
              <a
                href="#"
                className="text-gray-300 hover:text-cyber-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-cyber-primary transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-center mt-8 pt-4 border-t border-cyber-primary/20">
            <p className="text-sm font-mono text-gray-400">
              © 2025 Lumio AI. All rights reserved.
              {/* <span className="text-cyber-secondary">
                Smarter tools for everyday creators.
              </span> */}
            </p>
          </div>
        </div>
      </div>

      {/* Background Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyber-primary via-cyber-secondary to-cyber-accent opacity-30"></div>
    </footer>
  );
};

export default Footer;
