import React from 'react';
import EmergencyBar from './components/EmergencyBar';
import Ticker from './components/Ticker';
import Hero from './components/Hero';
import Highlights from './components/Highlights';
import Curriculum from './components/Curriculum';
import Valuestack from './components/Valuestack';
import Guarantee from './components/Guarantee';
import FAQ from './components/FAQ';
import SocialMedia from './components/SocialMedia';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import ParticleBackground from './components/ParticleBackground';
import WhatsAppButton from './components/WhatsAppButton';

const App: React.FC = () => {
  return (
    <div className="min-h-screen text-white selection:bg-primary selection:text-black font-sans">
      <ParticleBackground />
      <EmergencyBar />
      <Ticker />
      
      <main className="relative z-10">
        <Hero />
        <Highlights />
        <Curriculum />
        <Valuestack />
        <Guarantee />
        <FAQ />
        <FinalCTA />
        <SocialMedia />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default App;
