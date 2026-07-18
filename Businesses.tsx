import React from "react";
import { Sparkles, HelpCircle } from "lucide-react";
import { BUSINESS_TYPES } from "../data";
import { LucideIcon } from "./LucideIcon";

export const Businesses: React.FC = () => {
  return (
    <section id="businesses" className="relative py-20 bg-[#09090B] border-t border-[#25D366]/10">
      {/* Background visual accents */}
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-[#25D366]/5 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-xs font-semibold text-[#00FF88] mb-4">
            <Sparkles size={14} className="text-[#25D366]" />
            <span>مرونة لا محدودة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            الأنشطة التجارية المدعومة
          </h2>
          <p className="text-base text-[#A1A1AA]">
            ندعم تشكيلة واسعة من القطاعات، ونقوم بتخصيص نموذج المعرفة لكل نشاط تجاري بشكل منفصل ليطابق آلية عملك بالكامل.
          </p>
        </div>

        {/* Categories Grid - strictly the 9 items from requirements */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-9 gap-4">
          {BUSINESS_TYPES.map((biz) => (
            <div
              key={biz.id}
              className="group flex flex-col items-center justify-center p-6 rounded-2xl glass-card transition-all duration-300 border border-[#25D366]/10 hover:border-[#00FF88]/40 hover:scale-105 hover:shadow-[0_10px_20px_rgba(37,211,102,0.1)] text-center min-h-[140px]"
            >
              {/* Dynamic Icon with hover scale */}
              <div className="w-12 h-12 rounded-full bg-zinc-900 border border-white/5 flex items-center justify-center mb-4 text-[#25D366] group-hover:text-[#00FF88] group-hover:bg-[#25D366]/10 transition-all duration-300">
                <LucideIcon name={biz.iconName} size={20} className="transition-transform duration-300 group-hover:scale-110" />
              </div>
              <span className="text-sm font-bold text-white group-hover:text-[#00FF88] transition-colors">
                {biz.title}
              </span>
            </div>
          ))}
        </div>

        {/* Footer Subtext */}
        <div className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3.5 rounded-2xl bg-white/5 border border-white/10 max-w-xl mx-auto backdrop-blur-sm">
            <HelpCircle size={18} className="text-[#25D366] shrink-0" />
            <p className="text-sm text-[#A1A1AA] leading-relaxed text-right">
              هل نشاطك غير مدرج بالقريد؟ لا تقلق! <span className="text-white font-bold">الخدمة تصلح فعليًا لأي نشاط تجاري تقريبًا</span> بمجرد تزويد الوكيل بملف المعلومات وسيناريوهات الحوار الخاصة بك.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};
