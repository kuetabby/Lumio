"use client";

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-12 cyber-text-glow">
            ABOUT THE IDE
          </h2>

          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* IDE Description */}
            <div className="cyber-panel">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyber-secondary">
                LUMIO SOLANA IDE
              </h3>
              <p className="text-sm font-mono leading-relaxed mb-4">
                In the evolving world of blockchain technology, Lumio provides
                developers with a seamless environment to create, test, and
                deploy applications on the Solana blockchain. Our IDE is
                designed to help you navigate the complexities of smart contract
                development with ease.
              </p>
              <p className="text-sm font-mono leading-relaxed">
                Experience cutting-edge tools and features that enhance your
                workflow and facilitate coding in a robust, user-friendly
                interface.
              </p>
            </div>

            {/* Features */}
            <div className="cyber-panel">
              <h3 className="text-xl sm:text-2xl font-bold mb-4 text-cyber-secondary">
                IDE FEATURES
              </h3>
              <ul className="space-y-2 text-sm font-mono">
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  Real-time code validation and linting
                </li>
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  Built-in debugging tools for smart contracts
                </li>
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  Access to official Solana documentation
                </li>
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  Integrated version control
                </li>
                <li className="flex items-center">
                  <span className="text-cyber-primary mr-2">▶</span>
                  Collaborative coding features
                </li>
              </ul>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
            <div className="cyber-panel text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-primary mb-2">
                100+
              </div>
              <div className="text-xs sm:text-sm text-cyber-secondary">
                LINES OF CODE WRITTEN IN BETA
              </div>
            </div>
            <div className="cyber-panel text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-primary mb-2">
                200+
              </div>
              <div className="text-xs sm:text-sm text-cyber-secondary">
                TEST CASES PASSED
              </div>
            </div>
            <div className="cyber-panel text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-primary mb-2">
                99.9%
              </div>
              <div className="text-xs sm:text-sm text-cyber-secondary">
                UPTIME
              </div>
            </div>
            <div className="cyber-panel text-center">
              <div className="text-2xl sm:text-3xl font-bold text-cyber-primary mb-2">
                24/7
              </div>
              <div className="text-xs sm:text-sm text-cyber-secondary">
                SUPPORT
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
