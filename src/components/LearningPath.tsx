import { motion } from 'framer-motion';

const pathNodes = [
  { title: "Opening Principles", level: "Beginner", x: "10%", y: "20%" },
  { title: "Tactical Motifs", level: "Intermediate", x: "40%", y: "40%" },
  { title: "Endgame Mastery", level: "Advanced", x: "70%", y: "20%" },
  { title: "Positional Play", level: "Master", x: "90%", y: "60%" },
];

export default function LearningPath() {
  return (
    <section id="learning" className="relative py-32 bg-[#0A0D1A] overflow-hidden border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 text-center mb-16 relative z-10">
        <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
          Your 3D <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#AA3BFF]">Skill Tree</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Navigate your personalized learning journey. Unlock new concepts, track your mastery, and visually see your progression from Novice to Grandmaster.
        </p>
      </div>

      <div className="relative h-[400px] max-w-5xl mx-auto">
        {/* Connection Line */}
        <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" style={{ filter: 'drop-shadow(0 0 8px #AA3BFF)' }}>
          <motion.path
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 0.5 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 2, ease: "easeInOut" }}
            d="M 100 80 Q 300 200 400 160 T 700 80 T 900 240"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="4"
          />
          <defs>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#00F0FF" />
              <stop offset="100%" stopColor="#AA3BFF" />
            </linearGradient>
          </defs>
        </svg>

        {/* Nodes */}
        {pathNodes.map((node, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5, delay: i * 0.4 }}
            className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
            style={{ left: node.x, top: node.y }}
          >
            <div className="relative">
              <div className="absolute inset-0 bg-[#AA3BFF] rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="w-16 h-16 rounded-full glass border-2 border-[#00F0FF] flex items-center justify-center relative z-10 group-hover:scale-110 transition-transform">
                <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#00F0FF] to-[#AA3BFF]" />
              </div>
              
              {/* Tooltip */}
              <div className="absolute top-full mt-4 left-1/2 -translate-x-1/2 whitespace-nowrap glass px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-all group-hover:translate-y-0 translate-y-2 pointer-events-none">
                <p className="text-white font-semibold text-sm">{node.title}</p>
                <p className="text-[#00F0FF] text-xs">{node.level}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
