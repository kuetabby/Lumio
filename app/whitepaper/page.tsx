"use client";
import { JSX, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // Import from next/navigation

// Define a section type for TypeScript
interface Section {
  title: string;
  content: JSX.Element;
}

const sections: Record<string, Section> = {
  abstract: {
    title: "Abstract",
    content: (
      <>
        <p className="mt-2">
          In the rapidly evolving landscape of technology and creativity, Lumio
          AI emerges as a groundbreaking daily-use workspace tailored
          specifically for creators, coders, and innovators. Our platform is
          meticulously designed to streamline the process of ideation,
          development, and production, enabling users to efficiently transform
          their ideas into tangible outcomes through artificial intelligence and
          sophisticated algorithmic processes.
        </p>
        <p className="mt-2">
          Unlike traditional tools that often create friction in the creative
          workflow, Lumio AI allows for a seamless interaction between users and
          technology, facilitating a more productive environment. This
          innovation empowers users to harness the full potential of artificial
          intelligence to enhance their creativity and productivity.
        </p>
        <h3 className="mt-4">Key Features</h3>
        <table className="min-w-full border border-cyber-primary mt-2">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-cyber-primary text-left px-4 py-2">
                Feature
              </th>
              <th className="border border-cyber-primary text-left px-4 py-2">
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            <tr>
              <td className="border border-cyber-primary px-4 py-2">
                LumioGen™
              </td>
              <td className="border border-cyber-primary px-4 py-2">
                An intelligent content generator using deep learning models to
                create human-like text based on user inputs.
              </td>
            </tr>
            <tr>
              <td className="border border-cyber-primary px-4 py-2">
                VisionLight™
              </td>
              <td className="border border-cyber-primary px-4 py-2">
                A visual content generator that transforms textual descriptions
                into images, making visual storytelling accessible to everyone.
              </td>
            </tr>
            <tr>
              <td className="border border-cyber-primary px-4 py-2">
                SyntaxGlow™
              </td>
              <td className="border border-cyber-primary px-4 py-2">
                A multilingual code assistant designed to increase coding
                efficiency by providing smart suggestions and error checking.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          These features are designed to help users simplify complex tasks,
          enabling them to focus more on output while minimizing the time spent
          on intricacies. Furthermore, Lumio AI continuously evolves by
          integrating user feedback and adapting to changing trends in
          technology.
        </p>
        <h3 className="mt-4">Illustrative Graphic</h3>
        <p className="mt-2">
          Below is a diagram showcasing how Lumio AI connects different aspects
          of creative workflow:
        </p>
        <div className="flex justify-center mt-4">
          <Image
            src="/path-to-your-diagram.png" // Placeholder image path
            alt="Lumio AI Workflow Diagram"
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
        <p className="mt-2">
          This diagram illustrates how Lumio AI integrates within a typical
          creative workflow, highlighting how users can effectively leverage the
          platform's strengths to achieve superior results. By connecting tools
          and processes, Lumio AI enhances overall productivity and creativity.
        </p>
      </>
    ),
  },
  introduction: {
    title: "Introduction",
    content: (
      <>
        <p className="mt-2">
          The contemporary digital landscape poses significant challenges for
          individuals striving to maintain productivity and creativity amidst
          overwhelming distractions and time constraints. Lumio AI addresses
          these challenges directly by offering a unique suite of AI-driven
          tools powered by advanced machine learning algorithms and natural
          language processing techniques.
        </p>
        <p className="mt-2">
          These tools facilitate efficient content creation, coding, and visual
          expression across diverse disciplines, enabling users to produce
          high-quality outputs more quickly and easily. Lumio AI stands out by
          marrying innovative technology with user-friendly design.
        </p>
        <h3 className="mt-4">Challenges Addressed</h3>
        <table className="min-w-full border border-cyber-primary mt-2">
          <thead>
            <tr className="bg-gray-800">
              <th className="border border-cyber-primary text-left px-4 py-2">
                Challenge
              </th>
              <th className="border border-cyber-primary text-left px-4 py-2">
                Solution Provided by Lumio AI
              </th>
            </tr>
          </thead>
          <tbody className="bg-gray-900">
            <tr>
              <td className="border border-cyber-primary px-4 py-2">
                Time Consumption
              </td>
              <td className="border border-cyber-primary px-4 py-2">
                AI-generated outputs save users time on complex tasks.
              </td>
            </tr>
            <tr>
              <td className="border border-cyber-primary px-4 py-2">
                Creativity Block
              </td>
              <td className="border border-cyber-primary px-4 py-2">
                Intelligent suggestions help brainstorm ideas and overcome
                creative barriers.
              </td>
            </tr>
            <tr>
              <td className="border border-cyber-primary px-4 py-2">
                Technical Complexity
              </td>
              <td className="border border-cyber-primary px-4 py-2">
                User-friendly interfaces simplify technical processes.
              </td>
            </tr>
          </tbody>
        </table>
        <p className="mt-2">
          By providing solutions to these challenges, Lumio AI empowers
          creators, allowing them to focus on their core activities without
          being hampered by technical or creative hurdles. Ultimately, users are
          encouraged to explore their ingenuity and realize their visions more
          effortlessly than ever before.
        </p>
      </>
    ),
  },
  coreFeatures: {
    title: "Core Features",
    content: (
      <>
        <h3 className="mt-4">LumioGen™</h3>
        <p className="mt-2">
          At the heart of Lumio AI lies LumioGen™, an intelligent content
          generator leveraging deep learning models. Its ability to understand
          and generate human-like text enables users to create blog posts,
          articles, and marketing copy efficiently.
        </p>
        <p className="mt-2">
          With customizable settings, users can adjust tone and style, ensuring
          the generated content aligns with their branding and messaging goals.
          As a result, LumioGen™ not only saves time but also enhances the
          quality of output significantly.
        </p>

        <h3 className="mt-4">VisionLight™</h3>
        <p className="mt-2">
          Complementing LumioGen™ is VisionLight™, an advanced visual content
          generator that utilizes generative adversarial networks (GANs) to
          transform textual descriptions into striking images. This tool
          redefines the way visuals are created, allowing for the rapid
          generation of artwork, infographics, and more based on simple textual
          prompts.
        </p>
        <p className="mt-2">
          VisionLight™ is particularly valuable for marketers and designers
          looking to create compelling visual content quickly and effectively,
          eliminating the need for extensive design skills or resources.
        </p>

        <h3 className="mt-4">SyntaxGlow™</h3>
        <p className="mt-2">
          For software developers, SyntaxGlow™ serves as an indispensable
          multilingual code assistant. This tool combines the power of natural
          language processing with sophisticated syntax analysis algorithms to
          provide real-time coding suggestions, error detection, and debugging
          assistance.
        </p>
        <p className="mt-2">
          SyntaxGlow™ streamlines the coding process and significantly reduces
          bugs, allowing developers to focus on building innovative applications
          without the usual complexity and frustration that comes from coding
          errors.
        </p>
      </>
    ),
  },
  roadmap: {
    title: "Development Roadmap",
    content: (
      <div>
        <h3 className="mt-4">Phase 1 - In Progress</h3>
        <p className="mt-2">
          In the initial phase of development, Lumio AI focuses on establishing
          its core functionalities. This includes user testing and feedback
          collection to ensure a robust platform that meets user needs.
        </p>

        <h3 className="mt-4">Phase 2 - Planned</h3>
        <p className="mt-2">
          Looking forward, Lumio AI has planned an expansion phase aimed at
          diversifying its offerings. This will involve adding new features,
          such as enhanced collaboration tools and deeper integrations with
          existing platforms used by creators, coders, and innovators.
        </p>

        <h3 className="mt-4">Phase 3 - Future</h3>
        <p className="mt-2">
          In its final phase, Lumio AI envisions a transformative evolution of
          the workspace that leverages user data and AI to provide personalized
          suggestions, making the creative process smoother and more intuitive.
        </p>
      </div>
    ),
  },
  conclusion: {
    title: "Conclusion",
    content: (
      <p className="mt-2">
        In conclusion, Lumio AI is poised to revolutionize how creators, coders,
        and innovators approach their daily activities. With an array of
        powerful tools designed to enhance productivity, Lumio AI not only
        addresses current challenges but also anticipates future needs in the
        ever-evolving digital landscape. By choosing Lumio AI, users are better
        equipped to harness their creativity and bring their visions to life
        effortlessly.
      </p>
    ),
  },
};

const Whitepaper: React.FC = () => {
  const [currentSection, setCurrentSection] =
    useState<keyof typeof sections>("abstract");
  const router = useRouter();

  const handleSidebarClick = (sectionKey: keyof typeof sections) => {
    setCurrentSection(sectionKey);
  };

  return (
    <div className="flex h-screen bg-black text-white">
      {/* Sidebar */}
      <aside className="w-1/4 h-full p-4 border-r border-cyber-primary bg-gray-900">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center">
            <Image
              src="/Logo.jpg" // update to your logo path
              alt="Lumio Logo"
              width={50}
              height={50}
              className="mr-2"
            />
            <h1 className="text-2xl font-bold text-cyber-primary">LUMIO AI</h1>
          </div>
          <button
            onClick={() => router.push("/")} // Navigate back to home
            className="ml-4 px-2 py-1 bg-cyber-primary text-black rounded hover:opacity-80 transition"
          >
            Back to Home
          </button>
        </div>
        <h3 className="text-xl font-bold mb-4">Contents</h3>
        <ul className="space-y-2">
          {Object.keys(sections).map((key) => (
            <li key={key}>
              <button
                onClick={() => handleSidebarClick(key as keyof typeof sections)}
                className={`w-full text-left px-2 py-1 rounded ${
                  currentSection === key ? "bg-gray-800" : ""
                } text-cyber-primary hover:underline`}
              >
                {sections[key as keyof typeof sections].title}
              </button>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 h-full p-8 overflow-y-auto">
        <h1 className="text-3xl font-bold mb-4 underline">
          {sections[currentSection].title}
        </h1>
        <div className="border border-cyber-primary p-4 rounded-lg bg-gray-800">
          {sections[currentSection].content}
        </div>
      </main>
    </div>
  );
};

export default Whitepaper;
