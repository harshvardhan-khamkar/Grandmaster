import { Canvas } from '@react-three/fiber';
import { motion } from 'framer-motion';
import { Suspense } from 'react';
import ChessScene from './ChessScene';
import { ChevronRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative w-full h-screen flex items-center overflow-hidden bg-[#050505]">
      {/* 3D Background Canvas on the right side */}
      <div className="absolute inset-y-0 right-0 w-full md:w-[60%] z-0">
        <Canvas camera={{ position: [0, 2, 8], fov: 45 }}>
          <Suspense fallback={null}>
            <ChessScene />
          </Suspense>
        </Canvas>
        
        {/* Cinematic Fade Gradient to blend 3D canvas with the solid dark background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent pointer-events-none" />
      </div>

      {/* Hero Content - Left Aligned */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full flex flex-col items-start mt-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-none border-l-2 border-[#D4AF37] mb-8"
        >
          
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
          className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-6 leading-[1.1] text-white"
        >
          Master Chess <br />
          Like a <span className="text-[#D4AF37]">Grandmaster.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: 'easeOut' }}
          className="max-w-xl text-lg md:text-xl text-[#A0A0A0] font-light mb-10 leading-relaxed"
        >
          Immerse yourself in a luxury AI-powered chess universe. Analyze games with unprecedented depth and cinematic elegance.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.6, ease: 'easeOut' }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <button className="group relative px-8 py-4 bg-[#D4AF37] text-black font-semibold text-lg overflow-hidden transition-all hover:bg-[#F0C84B]">
            <span className="relative flex items-center gap-2 uppercase tracking-wider text-sm">
              Start Learning <ChevronRight className="w-4 h-4" />
            </span>
          </button>
          
          <button className="px-8 py-4 text-[#F5F5F0] font-semibold text-sm uppercase tracking-wider flex items-center gap-2 hover:text-[#D4AF37] transition-all border-b border-transparent hover:border-[#D4AF37]">
            <Play className="w-4 h-4 fill-current" /> Play AI Match
          </button>
        </motion.div>

        {/* Minimal Animated Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12"
        >
          {[
            { label: 'Active Masters', value: '1M+' },
            { label: 'Games Analyzed', value: '50M+' },
            { label: 'Avg Rating Gain', value: '+400' },
            { label: 'Engine ELO', value: '3500+' },
          ].map((stat, i) => (
            <div key={i} className="flex flex-col items-start border-l border-white/10 pl-4">
              <span className="text-2xl font-heading font-bold text-[#F5F5F0] mb-1">{stat.value}</span>
              <span className="text-xs text-[#888888] uppercase tracking-widest">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
