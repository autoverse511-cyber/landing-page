import React from "react";
import { Sparkles } from "lucide-react";
import { FEATURES_DATA } from "../data";
import { LucideIcon } from "./LucideIcon";

export const Features: React.FC = () => {
  return (
    <section id="features" className="relative py-20 bg-[#09090B]">
      {/* Background radial glowing light */}
      <div className="absolute top-0 right-0 w-[400px] h-[400px] rounded-full bg-[#25D366]/5 blur-[100px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-[#00FF88]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-xs font-semibold text-[#00FF88] mb-4">
            <Sparkles size={14} className="text-[#25D366]" />
            <span>المزايا الفائقة للوكيل</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            تواصل ذكي، مبيعات مضاعفة، وأتمتة لا تتوقف
          </h2>
          <p className="text-base text-[#A1A1AA]">
            لقد صممنا الوكيل المساعد ليكون شريك مبيعاتك وخدمة عملائك المثالي عبر واتساب، مستعيناً بأرقى تقنيات النماذج اللغوية.
          </p>
        </div>

        {/* 8 Features Grid (strictly 8 items as requested) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {FEATURES_DATA.map((feat) => (
            <div
              key={feat.id}
              className="group relative p-8 rounded-3xl glass-card glass-card-hover transition-all duration-300 border border-[#25D366]/15 hover:border-[#00FF88]/40 hover:-translate-y-1"
            >
              {/* Feature Icon */}
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-l from-[#25D366]/15 to-[#00FF88]/5 flex items-center justify-center border border-[#25D366]/30 group-hover:scale-110 group-hover:border-[#00FF88]/40 transition-transform duration-300 mb-6">
                <LucideIcon name={feat.iconName} className="text-[#00FF88]" size={22} />
              </div>

              {/* Title & Description */}
              <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#00FF88] transition-colors">
                {feat.title}
              </h3>
              <p className="text-sm text-[#A1A1AA] leading-relaxed">
                {feat.description}
              </p>
              
              {/* Subtle background glow effect */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-l from-[#25D366]/0 to-[#00FF88]/0 group-hover:from-[#25D366]/2 group-hover:to-[#00FF88]/2 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
