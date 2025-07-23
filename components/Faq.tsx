"use client";

import { useState } from "react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What is Lumio Solana IDE?",
      answer:
        "Lumio is an integrated development environment (IDE) designed specifically for developing applications on the Solana blockchain. It provides tools for coding, testing, and deploying smart contracts with ease.",
    },
    {
      question: "How do I get started with Lumio?",
      answer:
        "Simply create an account on our platform, and you can start writing smart contracts right away. Comprehensive tutorials and documentation are available to assist you.",
    },
    {
      question: "Do I need prior programming experience?",
      answer:
        "While prior experience can be beneficial, we offer various resources and tutorials that cater to beginners. You'll learn the essentials of smart contract development in no time!",
    },
    {
      question: "What features does Lumio offer?",
      answer:
        "Lumio includes features such as real-time code validation, debugging tools, integrated version control, and access to official Solana documentation.",
    },
    {
      question: "Is Lumio free to use?",
      answer:
        "Yes, Lumio Solana IDE is completely free to use. Our goal is to make Solana development accessible to everyone.",
    },
    {
      question: "Can I collaborate with other developers?",
      answer:
        "Absolutely! Lumio supports collaboration features, allowing multiple users to work on the same project in real time.",
    },
    {
      question: "How is my data managed and secured?",
      answer:
        "We prioritize user privacy. Lumio runs in your browser and does not collect personal data. All projects are stored locally on your device unless shared with collaborators.",
    },
    {
      question: "Where can I find additional help or resources?",
      answer:
        "For more help, visit our documentation page or reach out to our support team through the contact button below.",
    },
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 relative">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-6xl font-bold text-center mb-4 cyber-text-glow">
            FAQ
          </h2>
          <p className="text-center text-cyber-secondary font-mono mb-12">
            Frequently Asked Questions
          </p>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="cyber-panel">
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center text-left"
                >
                  <h3 className="text-lg font-bold text-cyber-primary font-mono">
                    {faq.question}
                  </h3>
                  <span
                    className={`text-cyber-secondary text-2xl transition-transform duration-300 ${
                      openIndex === index ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>

                {openIndex === index && (
                  <div className="mt-4 pt-4 border-t border-cyber-primary/20">
                    <p className="text-sm font-mono text-gray-300 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-12">
            <p className="text-cyber-secondary font-mono mb-4">
              Still have questions?
            </p>
            <button className="cyber-button text-sm px-6 py-3">
              CONTACT SUPPORT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
