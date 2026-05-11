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
            Unlock your full <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFD700] to-[#AA3BFF]">Potential</span>
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
              className={`relative glass rounded-3xl p-8 overflow-hidden ${
                plan.highlighted ? 'border-[#AA3BFF]/50 shadow-[0_0_30px_rgba(170,59,255,0.2)]' : 'border-white/10'
              }`}
            >
              {plan.highlighted && (
                <div className="absolute top-0 right-0 bg-gradient-to-l from-[#AA3BFF] to-[#00F0FF] text-xs font-bold px-4 py-1 rounded-bl-lg text-black">
                  RECOMMENDED
                </div>
              )}
              
              <h3 className="text-2xl font-heading font-bold text-white mb-2">{plan.name}</h3>
              <div className="text-4xl font-bold text-white mb-4">{plan.price}</div>
              <p className="text-gray-400 text-sm mb-8">{plan.desc}</p>
              
              <ul className="space-y-4 mb-8">
                {plan.features.map((f, j) => (
                  <li key={j} className="flex items-center gap-3 text-sm text-gray-300">
                    <div className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 ${plan.highlighted ? 'bg-[#00F0FF]/20 text-[#00F0FF]' : 'bg-white/10 text-white'}`}>
                      <Check className="w-3 h-3" />
                    </div>
                    {f}
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold transition-all ${
                plan.highlighted 
                  ? 'bg-gradient-to-r from-[#00F0FF] to-[#AA3BFF] text-black hover:opacity-90 shadow-lg shadow-[#AA3BFF]/25' 
                  : 'bg-white/5 text-white hover:bg-white/10 border border-white/10'
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
