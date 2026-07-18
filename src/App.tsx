import React from "react";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Hero } from "./Hero";
import { Demo } from "./Demo";
import { Features } from "./Features";
import { HowItWorks } from "./HowItWorks";
import { Businesses } from "./Businesses";
import { Pricing } from "./Pricing";
import { FAQ } from "./FAQ";
import { FinalCTA } from "./FinalCTA";
import { Footer } from "./Footer";

// Landing Page Component assembling all custom sections
const LandingPage: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#09090B] text-[#FAFAFA] font-sans selection:bg-[#25D366]/30 overflow-x-hidden">
      {/* Ambient background glowing accents */}
      <div className="absolute top-[20%] right-0 w-[450px] h-[450px] rounded-full bg-[#25D366]/5 blur-[120px] pointer-events-none" />
      <div className="absolute top-[60%] left-0 w-[500px] h-[500px] rounded-full bg-[#00FF88]/4 blur-[140px] pointer-events-none" />

      {/* Structured SaaS Sections */}
      <Navbar />
      <main>
        <Hero />
        <Demo />
        <Features />
        <HowItWorks />
        <Businesses />
        <Pricing />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        {/* Fallback routing to root */}
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}
