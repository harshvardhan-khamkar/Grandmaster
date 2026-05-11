import { BrainCircuit } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-[#05070D] pt-20 pb-10 overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1/2 h-1/2 bg-[#AA3BFF] opacity-10 blur-[150px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#AA3BFF] to-[#00F0FF] p-[1px]">
                <div className="w-full h-full bg-[#0A0D1A] rounded-full flex items-center justify-center">
                  <BrainCircuit className="w-4 h-4 text-[#00F0FF]" />
                </div>
              </div>
              <span className="text-lg font-heading font-bold tracking-wide">
                Grandmaster <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00F0FF] to-[#AA3BFF]">AI</span>
              </span>
            </div>
            <p className="text-gray-400 max-w-sm">
              The next-generation AI-powered chess platform. Train smarter, analyze deeper, and master the game with cinematic learning experiences.
            </p>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-[#00F0FF] transition-all">
                <span className="w-5 h-5 flex items-center justify-center font-bold">X</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-[#AA3BFF] transition-all">
                <span className="w-5 h-5 flex items-center justify-center font-bold">Git</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-white transition-all">
                <span className="w-5 h-5 flex items-center justify-center font-bold">YT</span>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-white/10 hover:text-[#00F0FF] transition-all">
                <span className="w-5 h-5 flex items-center justify-center font-bold">In</span>
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Platform</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">AI Analysis</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Tournaments</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold text-white mb-6">Company</h4>
            <ul className="flex flex-col gap-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-sm text-gray-500">
          <p>© {new Date().getFullYear()} Grandmaster AI Inc. All rights reserved.</p>
          <p className="mt-4 md:mt-0 flex items-center gap-1">
            Engineered with <span className="text-[#AA3BFF]">♥</span> for Chess
          </p>
        </div>
      </div>
    </footer>
  );
}
