"use client";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-12 cyber-text-glow">
            ABOUT LUMIO
          </h2>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* IDE Description */}
            <div className="cyber-panel">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyber-secondary">
                LUMIO AI
              </h3>
              <p className="text-sm font-mono leading-relaxed mb-4">
                Lumio AI is a daily-use AI workspace built for creators, coders,
                and innovators. Every day, you get free usage points for core
                tools designed to accelerate your ideas — without friction,
                fluff, or wasted time. Whether you're writing, generating, or
                coding — Lumio has your back.
              </p>
              {/* <p className="text-sm font-mono leading-relaxed">
                Experience cutting-edge tools and features that enhance your
                workflow and facilitate coding in a robust, user-friendly
                interface.
              </p> */}
            </div>

            {/* Features */}
            <div className="cyber-panel">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyber-secondary">
                Workspace FEATURES
              </h3>
              <ul className="space-y-2 text-sm font-mono">
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  LumioGen™
                </li>
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  VisionLight™
                </li>
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  SyntaxGlow™
                </li>
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  Daily Points System
                </li>
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  Premium Loop
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="cyber-panel text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-primary mb-2">
                1M+
              </div>
              <div className="text-xs sm:text-sm text-cyber-secondary uppercase">
                generations powered by LumioGen™
              </div>
            </div>
            <div className="cyber-panel text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-primary mb-2">
                350K+
              </div>
              <div className="text-xs sm:text-sm text-cyber-secondary uppercase">
                image renders via VisionLight™
              </div>
            </div>
            <div className="cyber-panel text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-primary mb-2">
                50K+
              </div>
              <div className="text-xs sm:text-sm text-cyber-secondary uppercase">
                code snippets completed using SyntaxGlow™
              </div>
            </div>
            <div className="cyber-panel text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-primary mb-2">
                99.9%
              </div>
              <div className="text-xs sm:text-sm text-cyber-secondary uppercase">
                uptime across all tools
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
