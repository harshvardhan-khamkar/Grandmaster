import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AIAnalysis from './components/AIAnalysis';
import Features from './components/Features';
import Footer from './components/Footer';
import Pricing from './components/Pricing';
import LearningPath from './components/LearningPath';

function App() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="bg-[#05070D] min-h-screen text-white overflow-hidden font-sans">
      <Navbar />
      
      <main>
        <Hero />
        <AIAnalysis />
        <LearningPath />
        <Features />
        <Pricing />
      </main>

      <Footer />
    </div>
  );
}

export default App;
