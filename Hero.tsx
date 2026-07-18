import React, { useState, useEffect, useRef } from "react";
import { Play, Sparkles, MessageSquare, Check, User } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ChatMessage {
  sender: "user" | "agent";
  text: string;
  time: string;
  status?: "read" | "sent";
}

const CONVERSATION_STEPS: ChatMessage[][] = [
  [
    { sender: "user", text: "السلام عليكم، حابب أستفسر عن دورات اللغة الإنجليزية المتوفرة عندكم ومواعيدها؟", time: "١١:٢٠ م" },
    { sender: "agent", text: "وعليكم السلام ورحمة الله وبركاته! أهلاً بك في مركزنا التعليمي الرائد. 📚 نعم، لدينا دورات لغة إنجليزية مكثفة لجميع المستويات (حضوري وأونلاين) تبدأ الأسبوع القادم. هل ترغب في الاستفسار عن دورات الكبار أم الأطفال؟", time: "١١:٢٠ م" }
  ],
  [
    { sender: "user", text: "أستفسر عن دورات الكبار الحضورية لو سمحت.", time: "١١:٢١ م" },
    { sender: "agent", text: "أهلاً بك. لدينا مسارين للدورات الحضورية للكبار: الفترة الصباحية (من ١٠:٠٠ ص إلى ١٢:٠٠ م) أو الفترة المسائية (من ٦:٠٠ م إلى ٨:٠٠ م). أي الفترات تفضل؟", time: "١١:٢١ م" }
  ],
  [
    { sender: "user", text: "الفترة المسائية تناسبني أكثر، الاسم محمد العتيبي.", time: "١١:٢٢ م" },
    { sender: "agent", text: "تم تسجيل اهتمامك بنجاح! 🎓 أستاذ محمد، حجزنا لك مقعداً مبدئياً في المجموعة المسائية. أرسلنا لك رابط اختبار تحديد المستوى المجاني وتفاصيل الرسوم والموقع عبر واتساب لتأكيد التسجيل. نتمنى لك رحلة تعليمية ممتعة! ✨", time: "١١:٢٢ م" }
  ]
];

export const Hero: React.FC = () => {
  const [visibleMessages, setVisibleMessages] = useState<ChatMessage[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Auto-scroll to bottom of conversation
  useEffect(() => {
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTo({
        top: chatContainerRef.current.scrollHeight,
        behavior: "smooth"
      });
    }
  }, [visibleMessages, isTyping]);

  useEffect(() => {
    let active = true;
    let timerId: NodeJS.Timeout;

    const playFullChatCycle = async () => {
      while (active) {
        // 1. Clear everything at start of cycle
        setVisibleMessages([]);
        setIsTyping(false);
        
        // Wait a bit before starting the cycle
        if (!active) break;
        await new Promise(resolve => { timerId = setTimeout(resolve, 1500); });

        // Loop through all steps
        for (let i = 0; i < CONVERSATION_STEPS.length; i++) {
          const stepMessages = CONVERSATION_STEPS[i];

          // 2. Show User message
          if (!active) break;
          await new Promise(resolve => { timerId = setTimeout(resolve, 1000); });
          if (!active) break;
          setVisibleMessages(prev => [...prev, stepMessages[0]]);

          // 3. Show Agent typing status
          if (!active) break;
          await new Promise(resolve => { timerId = setTimeout(resolve, 1200); });
          if (!active) break;
          setIsTyping(true);

          // 4. Wait for typing to complete
          if (!active) break;
          await new Promise(resolve => { timerId = setTimeout(resolve, 2000); });
          if (!active) break;
          setIsTyping(false);

          // 5. Show Agent message response
          setVisibleMessages(prev => [...prev, stepMessages[1]]);
        }

        // End of full conversation: pause for 8 seconds so they can read everything
        if (!active) break;
        await new Promise(resolve => { timerId = setTimeout(resolve, 8000); });
      }
    };

    playFullChatCycle();

    return () => {
      active = false;
      clearTimeout(timerId);
    };
  }, []);

  const handleScrollToDemo = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const demoSec = document.querySelector("#demo");
    if (demoSec) {
      demoSec.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleScrollToPricing = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const priceSec = document.querySelector("#pricing");
    if (priceSec) {
      priceSec.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section
      id="home"
      className="relative pt-32 pb-24 md:pt-40 md:pb-32 overflow-hidden bg-[#09090B]"
    >
      {/* Background gradients and blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute top-[10%] left-[5%] w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full bg-[#25D366]/10 blur-[120px] pointer-events-none" />
        <div className="absolute bottom-[10%] right-[10%] w-[250px] h-[250px] md:w-[400px] md:h-[400px] rounded-full bg-[#00FF88]/5 blur-[100px] pointer-events-none" />
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_1px,transparent_1px)] bg-[size:32px_32px] opacity-40 pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Right side for RTL - Title and Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            {/* Tag / Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-xs font-semibold text-[#00FF88] mb-6 self-start">
              <Sparkles size={14} className="text-[#25D366] animate-pulse" />
              <span>وكيل الذكاء الاصطناعي الأقوى لواتساب</span>
            </div>

            {/* Display Title */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              وكيل واتساب الذكي
              <span className="block mt-2 bg-gradient-to-l from-[#25D366] to-[#00FF88] bg-clip-text text-transparent">
                الرد الفوري على عملائك 24/7
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg md:text-xl text-[#A1A1AA] leading-relaxed mb-8 max-w-2xl">
              أتمتة ذكية ومحادثات طبيعية 100% باللغتين العربية والإنجليزية لإدارة مبيعاتك، تأكيد حجوزاتك، وخدمة استفسارات عملائك دون توقف أو تدخل بشري.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <a
                href="#pricing"
                onClick={handleScrollToPricing}
                className="relative inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-bold text-black bg-gradient-to-r from-[#25D366] to-[#00FF88] transition-all duration-300 hover:scale-105 hover:shadow-[0_0_30px_rgba(37,211,102,0.4)] text-center"
              >
                ابدأ التجربة الآن
              </a>
              <button
                onClick={handleScrollToDemo}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-2xl text-base font-bold text-[#FAFAFA] bg-white/5 border border-white/10 hover:bg-white/10 hover:border-[#25D366]/40 transition-all duration-300 hover:scale-105 backdrop-blur-sm"
              >
                <Play size={18} className="fill-[#25D366] text-[#25D366]" />
                <span>شاهد العرض التوضيحي</span>
              </button>
            </div>
          </div>

          {/* Left side for RTL - Mockup container */}
          <div className="lg:col-span-5 w-full flex justify-center">
            <div className="relative w-full max-w-[420px] rounded-3xl p-1 bg-gradient-to-b from-[#25D366]/30 via-white/5 to-[#00FF88]/10 shadow-[0_20px_50px_-12px_rgba(37,211,102,0.15)] glow-primary">
              
              {/* Device Notch / Shadow decoration */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-4 bg-black rounded-b-xl z-20 hidden sm:block" />

              {/* Chat App Window wrapper */}
              <div className="relative overflow-hidden rounded-[22px] bg-[#0c141a] h-[520px] flex flex-col font-sans border border-white/5">
                
                {/* Header of WhatsApp */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center justify-between border-b border-[#2a3942]">
                  {/* Verified Contact Details */}
                  <div className="flex items-center gap-3">
                    {/* User profile picture */}
                    <div className="relative w-10 h-10 rounded-full bg-[#25D366]/20 border border-[#25D366]/40 flex items-center justify-center overflow-hidden">
                      <MessageSquare className="text-[#25D366]" size={18} />
                    </div>
                    <div className="flex flex-col text-right">
                      <div className="flex items-center gap-1">
                        <span className="text-white text-sm font-bold">المساعد التعليمي الذكي</span>
                        <div className="w-4 h-4 rounded-full bg-[#25D366] flex items-center justify-center">
                          <Check className="text-black" size={10} strokeWidth={4} />
                        </div>
                      </div>
                      <span className="text-[#25D366] text-xs font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-ping inline-block" />
                        <span>متصل الآن</span>
                      </span>
                    </div>
                  </div>

                  {/* Top icons placeholder */}
                  <div className="flex items-center gap-3 text-[#aebac1]">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                </div>

                {/* Conversation area */}
                <div ref={chatContainerRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#0b141a] bg-opacity-95 bg-[radial-gradient(#111b21_1px,transparent_1px)] bg-[size:16px_16px] flex flex-col justify-start">
                  
                  <AnimatePresence initial={false}>
                    {visibleMessages.map((msg, index) => (
                      <motion.div
                        key={index + "-" + msg.text.slice(0, 5)}
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        className={`flex w-full ${
                          msg.sender === "user" ? "justify-start" : "justify-end"
                        }`}
                      >
                        {/* Bubble */}
                        <div
                          className={`relative max-w-[85%] px-3.5 py-2.5 rounded-2xl text-sm ${
                            msg.sender === "user"
                              ? "bg-[#202c33] text-[#e9edef] rounded-tr-none border border-white/5"
                              : "bg-[#005c4b] text-[#e9edef] rounded-tl-none border border-[#25D366]/20 glow-primary"
                          }`}
                        >
                          <p className="leading-relaxed text-right whitespace-pre-wrap">{msg.text}</p>
                          <div className="flex items-center justify-end gap-1 mt-1">
                            <span className="text-[10px] text-[#8696a0] font-mono">{msg.time}</span>
                            {msg.sender === "agent" && (
                              <div className="flex">
                                <Check size={12} className="text-[#53bdeb] -mr-1" />
                                <Check size={12} className="text-[#53bdeb]" />
                              </div>
                            )}
                          </div>
                        </div>
                      </motion.div>
                    ))}

                    {/* Agent typing indicator */}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0 }}
                        className="flex w-full justify-end"
                      >
                        <div className="bg-[#005c4b] px-4 py-3 rounded-2xl rounded-tl-none border border-[#25D366]/20 flex items-center gap-1.5 shadow-md">
                          <span className="text-xs text-[#e9edef]/80 font-medium">الوكيل يكتب</span>
                          <div className="flex gap-1 items-center h-2 mt-1">
                            <span className="w-1.5 h-1.5 rounded-full bg-white dot-blink" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white dot-blink" />
                            <span className="w-1.5 h-1.5 rounded-full bg-white dot-blink" />
                          </div>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Bottom send area placeholder */}
                <div className="bg-[#1f2c34] px-4 py-3 flex items-center gap-3 border-t border-[#2a3942]">
                  <div className="flex-1 bg-[#2a3942] rounded-xl px-4 py-2 text-right">
                    <span className="text-sm text-[#8696a0] font-sans">تحدث مع الوكيل...</span>
                  </div>
                  <div className="w-9 h-9 rounded-full bg-[#00a884] flex items-center justify-center text-white">
                    <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current transform rotate-180">
                      <path d="M2 21l21-9L2 3v7l15 2-15 2v7z" />
                    </svg>
                  </div>
                </div>

              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
