import { motion } from 'framer-motion';
import { BookOpen, Crosshair, Trophy, Users, Shield, LineChart } from 'lucide-react';

const features = [
  { icon: Crosshair, title: 'Puzzle Arena', desc: 'Dynamic puzzles adapted to your ELO in real-time. Features 3D piece visualization.' },
  { icon: BookOpen, title: 'Opening Trainer', desc: 'Memorize main lines and sidesteps with spaced repetition and AI feedback.' },
  { icon: Users, title: 'Multiplayer Battles', desc: 'Challenge friends or global opponents in an immersive 3D environment.' },
  { icon: Trophy, title: 'Tournament Mode', desc: 'Join massive scheduled tournaments with live cinematic spectating.' },
  { icon: LineChart, title: 'Performance Analytics', desc: 'Track your rating changes, accuracy, and opening success rates via glowing charts.' },
  { icon: Shield, title: 'Anti-Cheat AI', desc: 'State-of-the-art heuristic analysis to ensure fair play across all games.' },
];

export default function Features() {
  return (
    <section id="features" className="relative py-32 bg-[#05070D]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Everything you need to <span className="text-[#D4AF37]">dominate</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            A comprehensive suite of tools wrapped in a stunning, distraction-free interface designed specifically for serious chess improvement.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group relative glass-card p-8 rounded-none overflow-hidden hover:-translate-y-2 transition-transform duration-300 border-t-2 border-transparent hover:border-[#D4AF37]"
            >
              {/* Hover Glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#D4AF37]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
              
              <div className="relative z-10">
                <div className="w-12 h-12 bg-[#050505] border border-white/10 flex items-center justify-center text-[#D4AF37] mb-6 group-hover:scale-110 transition-transform">
                  <feat.icon className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-heading font-semibold text-white mb-3">{feat.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
