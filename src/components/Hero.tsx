import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import ChessScene from './ChessScene';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center justify-center overflow-hidden bg-[#05070D]">
      {/* 3D Background Canvas */}
      <div className="absolute inset-0 z-0 opacity-80 mix-blend-screen">
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <ChessScene />
        </Canvas>
      </div>

      {/* Gradient Overlays for depth and readability */}
      <div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#05070D]/50 to-[#05070D]" />
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-[#05070D] via-transparent to-[#05070D]" />

      {/* Hero Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-center text-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 glass mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#00F0FF] animate-pulse" />
          <span className="text-sm font-medium text-gray-300">v2.0 Grandmaster Engine Live</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6"
        >
          Master Chess Like a <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] via-[#AA3BFF] to-[#00F0FF] bg-[length:200%_auto] animate-gradient">
            Grandmaster
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="max-w-2xl text-lg md:text-xl text-gray-400 mb-10"
        >
          Train with AI-powered analysis, immersive 3D lessons, and next-generation interactive learning.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-4"
        >
          <button className="group relative px-8 py-4 rounded-full bg-white text-black font-semibold text-lg overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#00F0FF] to-[#AA3BFF] opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="relative flex items-center gap-2 group-hover:text-white transition-colors">
              Start Learning <ChevronRight className="w-5 h-5" />
            </span>
          </button>
          
          <button className="px-8 py-4 rounded-full glass border border-white/10 text-white font-semibold text-lg flex items-center gap-2 hover:bg-white/5 transition-all hover:scale-105">
            <Play className="w-5 h-5 fill-current" /> Play AI Match
          </button>
        </motion.div>

        {/* Animated Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 border-t border-white/10 pt-10"
        >
          {[
            { label: 'Active Players', value: '1M+' },
            { label: 'Games Analyzed', value: '50M+' },
            { label: 'Elo Improvement', value: '+400' },
            { label: 'AI Engine Rating', value: '3500+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-center">
              <span className="text-3xl md:text-4xl font-heading font-bold text-white mb-2">{stat.value}</span>
              <span className="text-sm text-gray-500 uppercase tracking-wider">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Custom CSS for gradient animation inside Hero */}
      <style>{`
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        .animate-gradient {
          animation: gradient 3s ease infinite;
        }
      `}</style>
    </section>
  );
}
