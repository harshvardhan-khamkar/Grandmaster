import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Standard',
    price: 'Free',
    desc: 'Perfect for casual players looking to improve.',
    features: ['Unlimited unrated games', '3 Game reviews per day', 'Basic puzzles', 'Standard 2D board'],
    highlighted: false,
  },
  {
    name: 'Grandmaster',
    price: '$12/mo',
    desc: 'For serious players demanding the best tools.',
    features: ['Unlimited AI Game reviews', 'Full 3D cinematic experience', 'Advanced opening trainer', 'Custom holographic boards', 'Priority matchmaking'],
    highlighted: true,
  }
];

export default function Pricing() {
  return (
    <section id="pricing" className="relative py-32 bg-[#0A0D1A] border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-heading font-bold text-white mb-6">
            Unlock your full <span className="text-[#D4AF37]">Potential</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative glass rounded-none p-8 overflow-hidden ${
                plan.highlighted ? 'border-[#D4AF37] shadow-[0_10px_30px_rgba(212,175,55,0.15)]' : 'border-white/5'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-[#D4AF37] text-xs font-bold px-4 py-1 rounded-bl-none text-[#050505]">
                  RECOMMENDED
                </div>
              )}
              
              <h3 className="text-2xl font-heading font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-4">{plan.price}</div>
              <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`w-5 h-5 flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-[#D4AF37]/20 text-[#D4AF37]' : 'bg-white/5 text-white'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-none font-semibold transition-all uppercase tracking-widest text-sm ${
                plan.highlighted 
                  ? 'bg-[#D4AF37] text-[#050505] hover:bg-[#F0C84B] shadow-lg shadow-[#D4AF37]/20' 
                  : 'bg-white/5 text-[#F5F5F0] hover:bg-white/10 border border-white/10'
              }`}>
                Choose {plan.name}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
