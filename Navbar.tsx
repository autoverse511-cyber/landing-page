import React, { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "الرئيسية", href: "#home" },
    { label: "المزايا", href: "#features" },
    { label: "فيديوهات تجريبية", href: "#demo" },
    { label: "طريقة العمل", href: "#how-it-works" },
    { label: "الأنشطة المدعومة", href: "#businesses" },
    { label: "الأسعار", href: "#pricing" },
    { label: "الأسئلة الشائعة", href: "#faq" },
  ];

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <>
      <header
        id="navbar-header"
        className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#09090B]/80 backdrop-blur-md border-b border-[#25D366]/15 py-3 shadow-lg"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo on the right for RTL */}
            <div className="flex items-center gap-2">
              <a href="#home" className="flex items-center gap-2 group">
                <div className="relative flex items-center justify-center w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/30 transition-transform group-hover:scale-105">
                  <MessageSquare className="text-[#25D366]" size={20} />
                  <Sparkles className="absolute -top-1 -left-1 text-[#00FF88]" size={12} />
                </div>
                <div className="flex flex-col font-sans">
                  <span className="text-xl font-extrabold tracking-tight bg-gradient-to-l from-white via-slate-100 to-[#25D366] bg-clip-text text-transparent font-mono lowercase">
                    autoverse
                  </span>
                  <span className="text-[10px] font-medium text-[#00FF88] uppercase tracking-wider -mt-1">
                    WhatsApp AI Agent
                  </span>
                </div>
              </a>
            </div>

            {/* Desktop Navigation Links */}
            <nav className="hidden lg:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="text-sm font-medium text-[#A1A1AA] hover:text-white hover:text-glow-accent transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* CTA Button on the left */}
            <div className="hidden lg:block">
              <a
                href="#pricing"
                className="relative inline-flex items-center justify-center px-6 py-2.5 rounded-full text-sm font-bold text-black bg-gradient-to-r from-[#25D366] to-[#00FF88] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(37,211,102,0.4)]"
              >
                ابدأ الآن
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex lg:hidden">
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="text-white hover:text-[#25D366] p-2 transition-colors"
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-[72px] z-40 bg-[#09090B]/95 backdrop-blur-lg lg:hidden overflow-y-auto"
          >
            <div className="px-4 pt-4 pb-12 space-y-3 shadow-xl border-t border-[#25D366]/10">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleScrollTo(e, link.href)}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-[#A1A1AA] hover:text-white hover:bg-white/5 border border-transparent hover:border-[#25D366]/15 transition-all duration-200"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-6 px-4">
                <a
                  href="#pricing"
                  onClick={(e) => {
                    setIsMobileMenuOpen(false);
                  }}
                  className="block w-full text-center px-6 py-3 rounded-xl text-base font-bold text-black bg-gradient-to-r from-[#25D366] to-[#00FF88] shadow-lg transition-transform active:scale-95"
                >
                  ابدأ الآن
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
