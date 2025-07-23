import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Features from "@/components/Features";
import Roadmap from "@/components/Roadmap";
import FAQ from "@/components/Faq";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-cyber-dark text-cyber-primary">
      <Navbar />
      <Hero />
      <About />
      <Features />
      <Roadmap />
      <FAQ />
      <Footer />
    </div>
  );
}
