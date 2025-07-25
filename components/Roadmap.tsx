"use client";

const Roadmap = () => {
  const roadmapItems = [
    {
      phase: "PHASE 1",
      title: "FOUNDATION",
      status: "IN PROGRESS",
      // date: "Q1 2025",
      items: ["Core tools", "Points system", "Early feedback loop"],
    },
    {
      phase: "PHASE 2",
      title: "EXPAND",
      status: "PLANNED",
      // date: "Q1 2025",
      items: ["Premium unlocks", "UI personalization", "Community leaderboard"],
    },
    {
      phase: "PHASE 3",
      title: "EVOLUTION",
      status: "FUTURE",
      // date: "Q1 2025",
      items: [
        "Agent-based workflows",
        "Workspace collaboration",
        "API access for advanced users",
      ],
    },
    // {
    //   phase: "PHASE 01",
    //   title: "FOUNDATION",
    //   status: "COMPLETED",
    //   date: "Q1 2025",
    //   items: [
    //     "Core IDE features",
    //     "Solana wallet integration",
    //     "Basic smart contract templates",
    //     "User-friendly interface design",
    //   ],
    // },
    // {
    //   phase: "PHASE 02",
    //   title: "FEATURE ENHANCEMENTS",
    //   status: "IN PROGRESS",
    //   date: "Q2 2025",
    //   items: [
    //     "Built-in debugging tools",
    //     "Real-time code validation",
    //     "Version control integration",
    //     "Collaborative coding features",
    //   ],
    // },
    // {
    //   phase: "PHASE 03",
    //   title: "ADVANCED TOOLS",
    //   status: "PLANNED",
    //   date: "Q3 2025",
    //   items: [
    //     "AI-assisted coding suggestions",
    //     "Customizable templates",
    //     "Performance analytics dashboard",
    //     "Integrated testing framework",
    //   ],
    // },
    // {
    //   phase: "PHASE 04",
    //   title: "EVOLUTION",
    //   status: "FUTURE",
    //   date: "Q4 2025",
    //   items: [
    //     "Cross-platform support",
    //     "Enhanced security features",
    //     "Community-driven plugins",
    //     "Full-scale documentation and tutorials",
    //   ],
    // },
  ];

  return (
    <section id="roadmap" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 cyber-text-glow">
            ROADMAP
          </h2>
          <p className="text-center text-cyber-secondary font-mono mb-12">
            The future of Solana development
          </p>

          {/* Timeline */}
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-cyber-primary/30 hidden md:block"></div>

            {/* Roadmap Items */}
            <div className="space-y-12">
              {roadmapItems.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  } flex-col`}
                >
                  {/* Content */}
                  <div
                    className={`w-full md:w-5/12 ${
                      index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                    }`}
                  >
                    <div className="cyber-panel relative">
                      {/* Status Badge */}
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-cyber-secondary text-sm font-mono">
                          {item.phase}
                        </span>
                        <span
                          className={`text-xs px-2 py-1 border font-mono ${
                            item.status === "COMPLETED"
                              ? "border-cyber-secondary text-cyber-secondary"
                              : item.status === "IN PROGRESS"
                              ? "border-yellow-400 text-yellow-400"
                              : item.status === "PLANNED"
                              ? "border-cyber-primary text-cyber-primary"
                              : "border-gray-400 text-gray-400"
                          }`}
                        >
                          {item.status}
                        </span>
                      </div>

                      {/* Title & Date */}
                      <h3 className="text-2xl font-bold mb-2 text-cyber-primary">
                        {item.title}
                      </h3>
                      {/* <p className="text-cyber-secondary text-sm font-mono mb-4">
                        {item.date}
                      </p> */}

                      {/* Items List */}
                      <ul className="space-y-2">
                        {item.items.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-center text-sm font-mono"
                          >
                            <span className="text-cyber-primary mr-2">▶</span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Timeline Dot */}
                  <div className="hidden md:flex w-2/12 justify-center">
                    <div
                      className={`w-4 h-4 rounded-full border-2 ${
                        item.status === "COMPLETED"
                          ? "bg-cyber-secondary border-cyber-secondary"
                          : item.status === "IN PROGRESS"
                          ? "bg-yellow-400 border-yellow-400 animate-pulse"
                          : "bg-transparent border-cyber-primary"
                      }`}
                    ></div>
                  </div>

                  {/* Spacer */}
                  <div className="w-full md:w-5/12"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
