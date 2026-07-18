import React from "react";
import { Sparkles, ArrowDown } from "lucide-react";
import { HOW_IT_WORKS_DATA } from "../data";

export const HowItWorks: React.FC = () => {
  return (
    <section id="how-it-works" className="relative py-20 bg-[#09090B] border-t border-[#25D366]/10">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-[#00FF88]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-xs font-semibold text-[#00FF88] mb-4">
            <Sparkles size={14} className="text-[#25D366]" />
            <span>بساطة وسرعة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            3 خطوات بسيطة لبدء تفعيل وكيلك
          </h2>
          <p className="text-base text-[#A1A1AA]">
            ندير عنك الجانب الفني والتكنولوجي بالكامل لتحصل على تجربة ردود سلسة وفورية دون تعقيد.
          </p>
        </div>

        {/* Steps container */}
        <div className="relative mt-12">
          {/* Horizontal connecting line on desktop */}
          <div className="absolute top-[48px] right-[10%] left-[10%] h-[2px] bg-gradient-to-l from-[#25D366]/40 via-[#00FF88]/30 to-[#25D366]/5 hidden lg:block z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 relative z-10">
            {HOW_IT_WORKS_DATA.map((step, idx) => (
              <div key={idx} className="flex flex-col items-center text-center group">
                
                {/* Glowing Number Circle */}
                <div className="relative w-24 h-24 rounded-full flex items-center justify-center bg-zinc-900 border-2 border-[#25D366]/30 group-hover:border-[#00FF88] transition-all duration-300 shadow-xl mb-6 z-10">
                  {/* Glowing background halo */}
                  <div className="absolute inset-0 rounded-full bg-[#25D366]/5 group-hover:bg-[#00FF88]/10 blur-sm transition-all duration-300" />
                  
                  {/* Step index display */}
                  <span className="text-3xl font-extrabold bg-gradient-to-l from-white to-[#00FF88] bg-clip-text text-transparent">
                    {step.step}
                  </span>
                  
                  {/* Decorative faint background outline number */}
                  <span className="absolute -bottom-4 right-1/2 translate-x-1/2 text-8xl font-black text-white/5 select-none pointer-events-none font-sans leading-none">
                    0{step.step}
                  </span>
                </div>

                {/* Content card */}
                <div className="p-6 rounded-3xl glass-card border border-[#25D366]/15 group-hover:border-[#00FF88]/30 transition-all duration-300 w-full max-w-sm">
                  <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00FF88] transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed">
                    {step.description}
                  </p>
                </div>

                {/* Vertical arrows on mobile between steps */}
                {idx < 2 && (
                  <div className="mt-6 text-[#25D366] animate-bounce lg:hidden">
                    <ArrowDown size={20} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
