import React from "react";
import { MessageSquare, Sparkles, Phone, Mail, MapPin } from "lucide-react";

export const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="relative bg-[#050507] border-t border-white/5 pt-16 pb-8 overflow-hidden">
      {/* Background radial subtle light */}
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] rounded-full bg-[#25D366]/3 blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 border-b border-white/5 pb-12">
          
          {/* Right side for RTL - Brand Info */}
          <div className="md:col-span-5 flex flex-col items-start text-right">
            <div className="flex items-center gap-2 mb-4">
              <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30">
                <MessageSquare className="text-[#25D366]" size={20} />
                <Sparkles className="absolute -top-1 -left-1 text-[#00FF88]" size={12} />
              </div>
              <span className="text-xl font-extrabold tracking-tight bg-gradient-to-l from-white to-[#25D366] bg-clip-text text-transparent font-mono lowercase">
                autoverse
              </span>
            </div>
            
            <p className="text-sm text-[#A1A1AA] leading-relaxed mb-6 max-w-sm">
              أتمتة المحادثات الذكية لجميع الأنشطة التجارية. وكيل ذكي للرد الفوري على عملائك على مدار الساعة بجودة تضاهي الردود البشرية الدافئة.
            </p>
          </div>

          {/* Center - Quick Links */}
          <div className="md:col-span-3 text-right">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">روابط سريعة</h4>
            <ul className="space-y-2.5">
              {[
                { label: "الرئيسية", href: "#home" },
                { label: "المزايا", href: "#features" },
                { label: "فيديوهات تجريبية", href: "#demo" },
                { label: "طريقة العمل", href: "#how-it-works" },
                { label: "الأسعار", href: "#pricing" },
                { label: "الأسئلة الشائعة", href: "#faq" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleScrollTo(e, link.href)}
                    className="text-sm text-[#A1A1AA] hover:text-[#00FF88] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Left - Contact Info */}
          <div className="md:col-span-4 text-right">
            <h4 className="text-sm font-extrabold text-white uppercase tracking-wider mb-4">معلومات التواصل</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 justify-start">
                <Phone size={16} className="text-[#25D366] shrink-0" />
                <a
                  href="https://wa.me/201285060097"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-[#A1A1AA] font-mono hover:text-[#00FF88] transition-colors"
                  dir="ltr"
                >
                  01285060097
                </a>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <Mail size={16} className="text-[#25D366] shrink-0" />
                <a
                  href="mailto:autoverse511@gmail.com"
                  className="text-sm text-[#A1A1AA] font-mono hover:text-[#00FF88] transition-colors"
                >
                  autoverse511@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3 justify-start">
                <MapPin size={16} className="text-[#25D366] shrink-0" />
                <span className="text-sm text-[#A1A1AA]">القاهرة، مصر</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Copyright strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#52525B]">
          <p className="text-right">
            جميع الحقوق محفوظة © {currentYear} autoverse.
          </p>
          <div className="flex gap-4">
            <a href="#privacy" className="hover:text-[#A1A1AA] transition-colors">سياسة الخصوصية</a>
            <a href="#terms" className="hover:text-[#A1A1AA] transition-colors">شروط الاستخدام</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
