import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { BrainCircuit, Menu, X } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-[#AA3BFF] to-[#00F0FF] p-[1px]">
            <div className="w-full h-full bg-[#0A0D1A] rounded-full flex items-center justify-center">
              <BrainCircuit className="w-5 h-5 text-[#00F0FF]" />
            </div>
          </div>
          <span className="text-xl font-heading font-bold tracking-wide">
            Grandmaster <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#AA3BFF]">AI</span>
          </span>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#features" className="hover:text-white transition-colors">Features</a>
          <a href="#analysis" className="hover:text-white transition-colors">AI Coach</a>
          <a href="#learning" className="hover:text-white transition-colors">Path</a>
          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
          <button className="glow-border relative px-6 py-2.5 rounded-full bg-white/5 text-white font-medium hover:bg-white/10 transition-colors">
            Start Learning
          </button>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 right-0 glass border-t border-white/10 p-4 flex flex-col gap-4 md:hidden">
          <a href="#features" className="text-gray-300 hover:text-white p-2">Features</a>
          <a href="#analysis" className="text-gray-300 hover:text-white p-2">AI Coach</a>
          <a href="#learning" className="text-gray-300 hover:text-white p-2">Path</a>
          <a href="#pricing" className="text-gray-300 hover:text-white p-2">Pricing</a>
        </div>
      )}
    </motion.nav>
  );
}
