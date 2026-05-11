import { motion } from 'framer-motion';
import { Activity, Target, Zap } from 'lucide-react';

export default function AIAnalysis() {
  return (
    <section id="analysis" className="relative py-32 bg-[#05070D] overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-[#00F0FF] opacity-10 blur-[150px] -translate-y-1/2 rounded-full pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#00F0FF]/10 text-[#00F0FF] text-sm font-medium mb-6">
              <Zap className="w-4 h-4" /> Real-time Evaluation
            </div>
            <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
              See the board through the <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#AA3BFF]">eyes of an engine</span>
            </h2>
            <p className="text-lg text-gray-400 mb-8">
              Our neural network evaluates every position in milliseconds. Discover hidden tactics, understand positional advantages, and identify blunders before they happen.
            </p>

            <div className="space-y-6">
              {[
                { icon: Activity, title: 'Dynamic Evaluation Bar', desc: 'Watch the advantage swing in real-time as you explore different lines.' },
                { icon: Target, title: 'Brilliant Move Detection', desc: 'The AI highlights exceptional sacrifices and positional masterclasses.' },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-[#AA3BFF]">
                    <feature.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                    <p className="text-gray-400 text-sm">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Visual / UI Mockup */}
          <motion.div
            initial={{ opacity: 0, x: 50, rotateY: 20 }}
            whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative perspective-[1000px]"
          >
            <div className="relative z-10 glass-card rounded-2xl p-2 transform transition-transform hover:scale-[1.02] duration-500 shadow-2xl shadow-[#AA3BFF]/20">
              {/* Fake UI Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500/80" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                  <div className="w-3 h-3 rounded-full bg-green-500/80" />
                </div>
                <div className="text-sm font-mono text-gray-400">Eval: +2.4</div>
              </div>
              
              {/* Fake Chess Board Graphic */}
              <div className="aspect-square bg-[#0A0D1A] rounded-xl mt-2 relative overflow-hidden flex flex-col">
                {Array.from({ length: 8 }).map((_, rank) => (
                  <div key={rank} className="flex-1 flex">
                    {Array.from({ length: 8 }).map((_, file) => (
                      <div key={file} className={`flex-1 ${ (rank + file) % 2 === 0 ? 'bg-[#1A1F35]' : 'bg-[#0F1322]' } relative`}>
                         {/* Highlight a fake move */}
                         {rank === 4 && file === 4 && (
                           <div className="absolute inset-0 bg-[#00F0FF]/30 border-2 border-[#00F0FF] rounded-sm animate-pulse" />
                         )}
                      </div>
                    ))}
                  </div>
                ))}
                
                {/* Overlay Evaluation Graph */}
                <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#AA3BFF]/40 to-transparent flex items-end">
                  <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full opacity-50">
                    <path d="M0,100 L0,80 Q25,50 50,70 T100,20 L100,100 Z" fill="url(#grad1)" />
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                        <stop offset="0%" style={{ stopColor: '#AA3BFF', stopOpacity: 1 }} />
                        <stop offset="100%" style={{ stopColor: '#00F0FF', stopOpacity: 0.2 }} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </motion.div>
          
        </div>
      </div>
    </section>
  );
}
