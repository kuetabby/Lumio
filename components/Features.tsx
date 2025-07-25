"use client";

const Features = () => {
  const features = [
    // {
    //   icon: "🔍",
    //   title: "ADDRESS VALIDATION",
    //   description: "Quickly verify the validity of Solana wallet addresses.",
    //   status: "ACTIVE",
    // },
    {
      icon: "📝",
      title: "LumioGen™",
      description:
        "Smart content generator for fast, polished outputs. From tweets to essays — just prompt and go.",
      status: "ACTIVE",
    },
    {
      icon: "🎨",
      title: "VisionLight™",
      description:
        "Generate sharp, expressive images from text with full creative control.",
      status: "ACTIVE",
    },
    {
      icon: "💻",
      title: "SyntaxGlow™",
      description:
        "Multilingual code assistant built to help you debug, complete, and explore ideas faster.",
      status: "ACTIVE",
    },
    {
      icon: "💾",
      title: "Daily Points System",
      description:
        "3 points daily for every tool. Use them or stack them with Lumio Premium.",
      status: "ACTIVE",
    },
    {
      icon: "💎",
      title: "Premium Loop",
      description:
        "Every premium unlock powers the ecosystem — liquidity, buybacks, and upgrades.",
      status: "DEVELOPMENT",
    },
    // {
    //   icon: "📈",
    //   title: "REAL-TIME ANALYTICS",
    //   description: "Access real-time metrics on your Solana transactions.",
    //   status: "ACTIVE",
    // },
    // {
    //   icon: "🔐",
    //   title: "SECURITY MONITORING",
    //   description: "Real-time assessments of your application’s security.",
    //   status: "MONITORING",
    // },
    // {
    //   icon: "📝",
    //   title: "SMART CONTRACT TEMPLATES",
    //   description: "Easily create and manage common smart contract templates.",
    //   status: "BETA",
    // },
    // {
    //   icon: "⚙️",
    //   title: "DEBUGGING TOOLS",
    //   description: "Advanced tools for debugging your Solana applications.",
    //   status: "ACTIVE",
    // },
    // {
    //   icon: "🛡️",
    //   title: "POST-QUANTUM SECURITY",
    //   description: "Implement cryptographic defenses against quantum threats.",
    //   status: "DEVELOPMENT",
    // },
  ];

  return (
    <section id="features" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 cyber-text-glow">
            FEATURES
          </h2>
          <p className="text-center text-cyber-secondary font-mono mb-12">
            Advanced tools for seamless Solana development
          </p>

          {/* Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="cyber-panel hover:cyber-border-glow transition-all duration-300 group"
              >
                {/* Status Badge */}
                <div className="flex justify-between items-start mb-4">
                  <div className="text-3xl">{feature.icon}</div>
                  <span
                    className={`text-xs px-2 py-1 border font-mono ${
                      feature.status === "ACTIVE"
                        ? "border-cyber-secondary text-cyber-secondary"
                        : feature.status === "BETA"
                        ? "border-yellow-400 text-yellow-400"
                        : feature.status === "MONITORING"
                        ? "border-cyber-accent text-cyber-accent"
                        : "border-cyber-primary text-cyber-primary"
                    }`}
                  >
                    {feature.status}
                  </span>
                </div>

                {/* Feature Content */}
                <h3 className="text-xl font-bold mb-3 text-cyber-primary group-hover:cyber-text-glow transition-all duration-300">
                  {feature.title}
                </h3>
                <p className="text-sm font-mono text-gray-300 leading-relaxed h-[100px]">
                  {feature.description}
                </p>

                {/* Action Button */}
                <div className="mt-4 pt-4 border-t border-cyber-primary/20">
                  <button className="cyber-button text-xs w-full">
                    ACCESS MODULE
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <p className="text-cyber-secondary font-mono mb-4">
              Ready to build smarter?
            </p>
            <button className="cyber-button-secondary text-lg px-8 py-3">
              START YOUR JOURNEY
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
