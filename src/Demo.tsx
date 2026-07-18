import React, { useState, useEffect } from "react";
import {
  Truck,
  Plane,
  Utensils,
  ShoppingBag,
  Stethoscope,
  Wrench,
  Home,
  Play,
  X,
  Sparkles,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface DemoVideo {
  id: string;
  title: string;
  category: string;
  description: string;
  vimeoId: string;
  iconName: string;
  chatUser: string;
  chatAgent: string;
}

const DEMO_VIDEOS: DemoVideo[] = [
  {
    id: "v1",
    title: "شركة شحن",
    category: "الخدمات اللوجستية والشحن",
    description: "مشاهدة كيفية تعامل الوكيل الذكي مع استفسارات العملاء وطلبات الشحن.",
    vimeoId: "1211068694",
    iconName: "Truck",
    chatUser: "أريد تتبع شحنتي رقم #92849 📦",
    chatAgent: "أهلاً بك! شحنتك قيد التوصيل الآن مع المندوب وسيتصل بك خلال ساعة 🚚💨"
  },
  {
    id: "v2",
    title: "شركة سياحة",
    category: "السياحة والسفر",
    description: "تعرف على كيفية الرد على العملاء والاستفسارات الخاصة بالرحلات والحجوزات.",
    vimeoId: "1211068764",
    iconName: "Plane",
    chatUser: "عايز أحجز رحلة لشرم الشيخ لشخصين 🏖️",
    chatAgent: "ممتاز! لدينا عرض خاص حالياً بخصم ٢٠٪ يشمل الإقامة والانتقالات ✈️"
  },
  {
    id: "v3",
    title: "مطاعم",
    category: "المطاعم والمقاهي",
    description: "عرض حي لكيفية استقبال الطلبات والإجابة على أسئلة العملاء.",
    vimeoId: "1211068835",
    iconName: "Utensils",
    chatUser: "أريد طلب بيتزا مارجريتا حجم وسط 🍕",
    chatAgent: "تم إضافة بيتزا مارجريتا لطلبك! هل تود إضافة بطاطس أو مشروب بارد؟"
  },
  {
    id: "v4",
    title: "متجر إلكتروني",
    category: "التجارة الإلكترونية",
    description: "شاهد كيفية مساعدة العملاء والإجابة عن المنتجات والطلبات.",
    vimeoId: "1211068994",
    iconName: "ShoppingBag",
    chatUser: "هل يتوفر مقاس XL من هذا القميص؟ 👕",
    chatAgent: "نعم متوفر! ويوجد شحن مجاني اليوم لأول طلب لك. هل تود تأكيد الشراء؟"
  },
  {
    id: "v5",
    title: "عيادات",
    category: "الرعاية الطبية والعيادات",
    description: "عرض طريقة الرد على المرضى والإجابة عن الاستفسارات الطبية العامة.",
    vimeoId: "1211069118",
    iconName: "Stethoscope",
    chatUser: "أود حجز موعد استشارة جلدية غداً 🩺",
    chatAgent: "مرحباً بك. لدينا موعد متاح غداً الساعة ٦:٠٠ مساءً مع د. أحمد. هل يناسبك؟"
  },
  {
    id: "v6",
    title: "شركة صيانة",
    category: "خدمات الصيانة والتشغيل",
    description: "شاهد كيف يساعد الوكيل الذكي العملاء في طلب الخدمات والإجابة عن الاستفسارات.",
    vimeoId: "1211069208",
    iconName: "Wrench",
    chatUser: "عندي عطل مفاجئ في التكييف لا يبرد ❄️❌",
    chatAgent: "ولا يهمك! تم حجز طلب صيانة طارئ وسيصلك الفني المختص خلال ساعتين 🛠️"
  },
  {
    id: "v7",
    title: "عقارات",
    category: "التطوير والتسويق العقاري",
    description: "استكشف طريقة تعامل الوكيل مع استفسارات العملاء حول العقارات والوحدات.",
    vimeoId: "1211069464",
    iconName: "Home",
    chatUser: "أبحث عن شقة ٣ غرف بالتجمع الخامس بالتقسيط 🏢",
    chatAgent: "لدينا وحدات مميزة بمقدم ١٠٪ وأقساط مريحة تصل لـ ٨ سنوات. تفضل بكتالوج الأسعار 👇"
  }
];

const iconsMap: { [key: string]: React.ComponentType<any> } = {
  Truck,
  Plane,
  Utensils,
  ShoppingBag,
  Stethoscope,
  Wrench,
  Home
};

export const Demo: React.FC = () => {
  const [selectedVideo, setSelectedVideo] = useState<DemoVideo | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedVideo(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <section id="demo" className="relative py-24 bg-[#09090B] border-t border-[#25D366]/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-[#00FF88]/5 blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-xs font-semibold text-[#00FF88] mb-4">
            <Sparkles size={14} className="text-[#25D366]" />
            <span>عروض توضيحية</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            شاهد الوكيل الذكي أثناء العمل
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            استكشف عروضًا حقيقية توضح كيف يتفاعل وكيل الذكاء الاصطناعي مع العملاء في مختلف الأنشطة التجارية.
          </p>
        </div>

        {/* Responsive Grid with Staggered Entrance Animation */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-100px" }}
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {DEMO_VIDEOS.map((demo) => {
            const IconComponent = iconsMap[demo.iconName] || Sparkles;
            return (
              <motion.div
                key={demo.id}
                onClick={() => setSelectedVideo(demo)}
                variants={{
                  hidden: { opacity: 0, y: 30 },
                  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 100, damping: 15 } }
                }}
                className="group relative rounded-3xl overflow-hidden glass-card cursor-pointer transition-all duration-300 hover:scale-[1.02] border border-[#25D366]/15 hover:border-[#00FF88]/40 shadow-lg hover:shadow-[0_15px_30px_rgba(37,211,102,0.15)] flex flex-col h-full bg-zinc-950/45 backdrop-blur-md"
              >
                {/* Premium Mock WhatsApp Chat Interface instead of realistic stock photo */}
                <div className="relative aspect-video overflow-hidden bg-gradient-to-b from-zinc-950 via-[#0a1c10] to-zinc-950 border-b border-[#25D366]/10 flex flex-col justify-between p-4 selection:bg-transparent">
                  {/* Abstract grid overlay */}
                  <div className="absolute inset-0 bg-[radial-gradient(#1e3a1e_1px,transparent_1px)] [background-size:16px_16px] opacity-20 pointer-events-none" />
                  
                  {/* WhatsApp style header */}
                  <div className="relative flex items-center justify-between border-b border-white/5 pb-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-[#128C7E]/20 border border-[#25D366]/30 flex items-center justify-center text-[#25D366]">
                        <IconComponent size={14} />
                      </div>
                      <div className="text-right">
                        <div className="text-xs font-bold text-white leading-tight flex items-center gap-1">
                          <span>{demo.title}</span>
                          <span className="w-1.5 h-1.5 rounded-full bg-[#25D366] animate-pulse" />
                        </div>
                        <span className="text-[9px] text-[#25D366] font-medium block">متصل الآن</span>
                      </div>
                    </div>
                    
                    {/* Category Label inside the mock screen */}
                    <div className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-zinc-900/80 border border-white/10 text-[10px] font-medium text-[#A1A1AA]">
                      <MessageSquare size={10} className="text-[#25D366]" />
                      <span>{demo.category}</span>
                    </div>
                  </div>

                  {/* Chat messages screen area */}
                  <div className="relative flex-1 flex flex-col justify-center gap-2.5 my-2.5 overflow-hidden">
                    {/* User message (RTL right-aligned style in standard layout, let's put it on top/right) */}
                    <div className="flex justify-start max-w-[85%] self-start animate-fade-in">
                      <div className="bg-zinc-900/95 border border-zinc-800 text-zinc-100 text-[11px] sm:text-xs py-2 px-3 rounded-2xl rounded-bl-none shadow-md">
                        <p className="font-medium text-[#A1A1AA] text-[9px] mb-0.5 text-right">العميل</p>
                        <p className="text-right">{demo.chatUser}</p>
                      </div>
                    </div>

                    {/* Agent message */}
                    <div className="flex justify-end max-w-[85%] self-end">
                      <div className="bg-[#128C7E]/15 border border-[#25D366]/25 text-white text-[11px] sm:text-xs py-2 px-3 rounded-2xl rounded-br-none shadow-md">
                        <p className="font-medium text-[#00FF88] text-[9px] mb-0.5 text-right flex items-center justify-end gap-1">
                          <span>الوكيل الذكي AI</span>
                          <Sparkles size={8} className="text-[#00FF88]" />
                        </p>
                        <p className="text-right text-[#E4E4E7] leading-relaxed">{demo.chatAgent}</p>
                      </div>
                    </div>
                  </div>

                  {/* Play Overlay with hover pulse */}
                  <div className="absolute inset-0 bg-black/35 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center z-20">
                    <div className="w-14 h-14 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center justify-center text-[#25D366] transition-all duration-300 group-hover:scale-110 group-hover:bg-[#25D366] group-hover:text-black group-hover:shadow-[0_0_25px_rgba(37,211,102,0.6)]">
                      <Play size={24} className="fill-current ml-1" />
                    </div>
                  </div>
                </div>

                {/* Text info footer of card */}
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2.5">
                      <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20 text-[#00FF88]">
                        <IconComponent size={16} />
                      </div>
                      <h3 className="text-lg font-bold text-white group-hover:text-[#00FF88] transition-colors">
                        {demo.title}
                      </h3>
                    </div>
                    <p className="text-sm text-[#A1A1AA] leading-relaxed pr-1">
                      {demo.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>

      {/* Center Video Modal (lazy-loads Vimeo embed iframe) */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6"
            onClick={() => setSelectedVideo(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="relative w-full max-w-4xl rounded-3xl bg-[#0F0F12] border border-[#25D366]/20 overflow-hidden shadow-2xl flex flex-col"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header inside modal */}
              <div className="px-6 py-4 border-b border-white/5 bg-zinc-950/80 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-[#25D366]/10 flex items-center justify-center border border-[#25D366]/20 text-[#00FF88]">
                    {React.createElement(iconsMap[selectedVideo.iconName] || Sparkles, { size: 16 })}
                  </div>
                  <div className="text-right">
                    <h4 className="font-bold text-white text-base">
                      {selectedVideo.title}
                    </h4>
                    <p className="text-[11px] text-[#A1A1AA]">{selectedVideo.category}</p>
                  </div>
                </div>

                {/* Close Button */}
                <button
                  onClick={() => setSelectedVideo(null)}
                  className="w-10 h-10 rounded-full bg-white/5 hover:bg-white/10 text-white hover:text-[#00FF88] flex items-center justify-center border border-white/10 transition-colors cursor-pointer"
                  aria-label="إغلاق"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Vimeo Lazy Loading Player */}
              <div className="bg-black w-full aspect-video relative flex items-center justify-center">
                <iframe
                  src={`https://player.vimeo.com/video/${selectedVideo.vimeoId}?autoplay=1&badge=0&autopause=0&player_id=0&app_id=58479&color=25D366`}
                  className="absolute top-0 left-0 w-full h-full border-0"
                  allow="autoplay; fullscreen; picture-in-picture"
                  allowFullScreen
                  title={selectedVideo.title}
                />
              </div>

              {/* Footer bar */}
              <div className="px-6 py-4 bg-zinc-950/80 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs">
                <p className="text-[#A1A1AA] text-center sm:text-right">
                  {selectedVideo.description}
                </p>
                <div className="flex items-center gap-2 text-[#00FF88] font-medium">
                  <Sparkles size={14} className="animate-pulse" />
                  <span>محادثة تفاعلية فورية مجهزة بالكامل</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
