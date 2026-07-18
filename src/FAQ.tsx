import React, { useState } from "react";
import { Sparkles, ChevronDown, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { FAQ_DATA } from "../data";

export const FAQ: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="relative py-20 bg-[#09090B] border-t border-[#25D366]/10">
      {/* Background glow decoration */}
      <div className="absolute top-1/2 right-1/4 w-[400px] h-[400px] rounded-full bg-[#25D366]/5 blur-[120px] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-xs font-semibold text-[#00FF88] mb-4">
            <Sparkles size={14} className="text-[#25D366]" />
            <span>أسئلة شائعة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            الأسئلة الشائعة والإجابات
          </h2>
          <p className="text-base text-[#A1A1AA]">
            ابحث عن إجابات واضحة ومباشرة حول كيفية عمل وكيل واتساب الذكي وعمليات الإعداد، التخصيص، والتكلفة.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_DATA.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-zinc-900 border border-[#25D366]/30 shadow-lg"
                    : "glass-card border border-[#25D366]/10 hover:border-[#25D366]/30"
                }`}
              >
                {/* Accordion Header Button */}
                <button
                  onClick={() => toggleAccordion(faq.id)}
                  className="w-full flex items-center justify-between p-6 text-right font-bold text-white cursor-pointer transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle
                      size={18}
                      className={`shrink-0 transition-colors ${
                        isOpen ? "text-[#00FF88]" : "text-[#25D366]"
                      }`}
                    />
                    <span className="text-sm sm:text-base leading-snug">{faq.question}</span>
                  </div>
                  
                  {/* Rotating Chevron Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.2 }}
                    className={`p-1 rounded-full ${isOpen ? "bg-[#25D366]/10 text-[#00FF88]" : "text-[#A1A1AA]"}`}
                  >
                    <ChevronDown size={18} />
                  </motion.div>
                </button>

                {/* Animated Body Expansion */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.25, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-xs sm:text-sm text-[#A1A1AA] leading-relaxed border-t border-white/5 bg-white/[0.01]">
                        <p className="whitespace-pre-wrap">{faq.answer}</p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
