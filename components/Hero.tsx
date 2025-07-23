"use client";

import { useState, useEffect } from "react";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [currentIndex, setCurrentIndex] = useState(0);
  const fullText = "LUMIO SOLANA IDE";

  useEffect(() => {
    if (currentIndex < fullText.length) {
      const timer = setTimeout(() => {
        setDisplayText((prev) => prev + fullText[currentIndex]);
        setCurrentIndex((prev) => prev + 1);
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [currentIndex, fullText]);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 gap-4 h-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="border border-cyber-primary/20 animate-pulse"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        {/* IDE Icon */}
        <div className="mb-8 flex justify-center">
          <div className="cyber-panel w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
            <span className="text-2xl sm:text-3xl">🛠️</span>
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-8xl font-bold mb-6 glitch">
          <span className="terminal-cursor">{displayText}</span>
        </h1>

        {/* Subtitle */}
        <p className="text-base sm:text-lg md:text-xl mb-8 text-cyber-secondary font-mono">
          Build, test, and deploy Solana applications seamlessly!
        </p>

        {/* How to Use and Useful Commands - Responsive Layout */}
        <div className="flex flex-col md:flex-row justify-between space-y-4 md:space-y-0 mb-6">
          {/* How to Use Section */}
          <div className="cyber-panel max-w-md text-left flex-1 md:mr-2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-center cyber-text-glow">
              HOW TO USE:
            </h2>

            <div className="space-y-2 text-xs sm:text-sm font-mono">
              <p>🔸 Write smart contracts with ease</p>
              <p>🔸 Test your code in a simulated environment!</p>
              <p>🔸 Deploy your applications to the Solana blockchain</p>
              <p>🔸 Use the integrated debugger for troubleshooting</p>
              <p>🔸 Access official Solana documentation and resources</p>
              <p>🔸 Collaborate with others in real-time</p>
            </div>
          </div>

          {/* Useful Commands Section */}
          <div className="cyber-panel max-w-md text-left flex-1 md:ml-2">
            <h3 className="text-lg sm:text-xl font-bold mb-4 cyber-text-glow">
              USEFUL COMMANDS:
            </h3>

            <div className="space-y-2 text-xs sm:text-sm font-mono">
              <div className="flex justify-between">
                <span>Compile</span>
                <span className="text-cyber-secondary">CTRL + B</span>
              </div>
              <div className="flex justify-between">
                <span>Run</span>
                <span className="text-cyber-secondary">CTRL + R</span>
              </div>
              <div className="flex justify-between">
                <span>Debug</span>
                <span className="text-cyber-secondary">CTRL + D</span>
              </div>
              <div className="flex justify-between">
                <span>Deploy</span>
                <span className="text-cyber-secondary">CTRL + D</span>
              </div>
            </div>
          </div>
        </div>

        {/* Launch IDE Button */}
        <button className="cyber-button-secondary text-base sm:text-lg px-8 sm:px-12 py-3 sm:py-4 hover:animate-pulse-cyber mb-6">
          CLICK HERE TO START
        </button>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-cyber-primary animate-ping"></div>
      <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyber-secondary animate-ping delay-1000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-cyber-accent animate-ping delay-2000"></div>
    </section>
  );
};

export default Hero;
