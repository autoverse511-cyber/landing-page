import React, { useState } from "react";
import { 
  Sparkles, 
  Check, 
  Flame, 
  ShieldCheck, 
  Zap, 
  Bot, 
  Headphones, 
  Users, 
  Code, 
  TrendingUp,
  MessageSquare
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PRICING_DATA } from "../data";

const TABS = [
  { id: "small", label: "باقات صغيرة (Small)" },
  { id: "medium", label: "باقات متوسطة (Medium)" },
  { id: "large", label: "باقات كبيرة (Large)" },
  { id: "enterprise", label: "باقات الشركات (Enterprise)" }
];

const ENTERPRISE_PRESETS = [
  "25,000",
  "30,000",
  "50,000",
  "75,000",
  "100,000",
  "200,000"
];

const ENTERPRISE_FEATURES = [
  { icon: ShieldCheck, title: "Custom Message Limit", desc: "تحديد سعة رسائل مخصصة بالكامل تتماشى مع نمو شركتك." },
  { icon: Bot, title: "Custom AI Configuration", desc: "تدريب مخصص للذكاء الاصطناعي على سيناريوهات عمل معقدة." },
  { icon: Users, title: "Multiple AI Agents", desc: "إمكانية إطلاق وكلاء متعددين على أرقام مختلفة وإدارتهم بسلاسة." },
  { icon: Headphones, title: "Priority Support", desc: "دعم فني فوري ذو أولوية فائقة لحل أي استفسار على مدار الساعة." },
  { icon: Users, title: "Dedicated Account Manager", desc: "مدير حساب مخصص لمساعدتك في تدريب وضبط أداء الوكيل." },
  { icon: Code, title: "API & Custom Integrations", desc: "ربط متكامل مع أنظمة المبيعات، الـ CRM، وقواعد بياناتك الداخلية." },
  { icon: ShieldCheck, title: "SLA & Enterprise Support", desc: "اتفاقية مستوى الخدمة تضمن استقرار الخدمة وسرعة الاستجابة." },
  { icon: TrendingUp, title: "إمكانية التوسع بدون حدود", desc: "ترقية فورية لسعة الرسائل والموارد في أي وقت بدون أي تعقيد." }
];

export const Pricing: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>("small");
  
  // Enterprise states
  const [selectedPreset, setSelectedPreset] = useState<string>("50,000");
  const [customMessages, setCustomMessages] = useState<string>("");

  const currentCategory = PRICING_DATA.find((cat) => cat.id === activeTab);
  
  const currentMessagesCount = activeTab === "enterprise" 
    ? (customMessages.trim() !== "" ? customMessages : selectedPreset)
    : "";

  const getWhatsAppLink = (count: string) => {
    const text = `مرحباً autoverse، أود الاستفسار والاشتراك في باقة الشركات المخصصة (Enterprise) بمعدل استهلاك شهري يقدر بـ: ${count} رسالة شهرياً.`;
    return `https://wa.me/201285060097?text=${encodeURIComponent(text)}`;
  };

  const getStandardWhatsAppLink = (planName: string, messages: string, price: string) => {
    const text = `مرحباً autoverse، أود الاشتراك في باقة "${planName}" بمعدل رسائل ${messages} بسعر ${price}.`;
    return `https://wa.me/201285060097?text=${encodeURIComponent(text)}`;
  };

  return (
    <section id="pricing" className="relative py-24 bg-[#09090B] border-t border-[#25D366]/10 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full bg-[#00FF88]/5 blur-[130px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Header Title Block */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-xs font-semibold text-[#00FF88] mb-4">
            <Sparkles size={14} className="text-[#25D366]" />
            <span>باقات أسعار مرنة ومنظمة</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
            خطط ميسرة تناسب حجم أعمالك
          </h2>
          <p className="text-base text-[#A1A1AA] leading-relaxed">
            اختر الفئة والباقة المثالية المتوافقة مع معدل استهلاكك الشهري للرسائل. خطط شفافة، ترقية سهلة، وإمكانية تخصيص بلا حدود للشركات الكبرى.
          </p>
        </div>

        {/* Categories Tabs Navigation */}
        <div className="flex justify-center mb-16">
          <div className="relative flex flex-wrap gap-1 p-1.5 bg-zinc-900/90 backdrop-blur-md rounded-2xl border border-white/5 shadow-inner max-w-full justify-center">
            {TABS.map((tab) => {
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-3 rounded-xl text-xs sm:text-sm font-bold transition-all duration-300 cursor-pointer ${
                    isActive ? "text-black" : "text-[#A1A1AA] hover:text-white"
                  }`}
                >
                  {/* Sliding active background indicator */}
                  {isActive && (
                    <motion.div
                      layoutId="activePricingCategory"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      className="absolute inset-0 rounded-xl bg-gradient-to-r from-[#25D366] to-[#00FF88] z-0"
                    />
                  )}
                  <span className="relative z-10">{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Dynamic Display of Cards */}
        <AnimatePresence mode="wait">
          {activeTab !== "enterprise" ? (
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch max-w-5xl mx-auto"
            >
              {currentCategory?.plans.map((plan, idx) => (
                <div
                  key={idx}
                  className={`relative flex flex-col justify-between p-8 rounded-3xl transition-all duration-300 overflow-hidden ${
                    plan.isPopular
                      ? "bg-zinc-900/90 border-2 border-[#00FF88] shadow-[0_20px_40px_-10px_rgba(37,211,102,0.15)] -translate-y-2"
                      : "glass-card border border-[#25D366]/15 hover:border-[#00FF88]/40 bg-zinc-950/45 backdrop-blur-md"
                  }`}
                >
                  {/* Most Popular Badge */}
                  {plan.isPopular && (
                    <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-[#00FF88]/10 text-[#00FF88] text-[10px] font-extrabold tracking-wide uppercase border border-[#00FF88]/30">
                      <Flame size={12} className="fill-[#00FF88]" />
                      <span>الأكثر شعبية</span>
                    </div>
                  )}

                  {/* Card Content */}
                  <div className="text-right">
                    <h3 className={`text-xl font-extrabold ${plan.isPopular ? "text-[#00FF88]" : "text-white"} mb-1`}>
                      {plan.name}
                    </h3>
                    
                    {/* Highly Prominent Messages Limit Box (خلى عدد الرسايل فى كل باقة مكتوب بشكل واضح وملحوظ) */}
                    <div className="my-5 p-4 rounded-2xl bg-[#25D366]/5 border-2 border-[#25D366]/30 text-center shadow-lg relative group overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-[#25D366]/5 to-[#00FF88]/5 pointer-events-none" />
                      <span className="text-[10px] text-[#00FF88] uppercase tracking-wider font-extrabold block mb-1">
                        سعة الرسائل المشمولة
                      </span>
                      <span className="text-2xl sm:text-3xl font-black text-white tracking-tight drop-shadow-[0_0_10px_rgba(37,211,102,0.2)]">
                        {plan.messages}
                      </span>
                    </div>

                    {/* Price Info */}
                    <div className="flex items-baseline justify-center gap-1 mt-2 mb-6">
                      <span className="text-3xl sm:text-4xl font-black text-white">{plan.price}</span>
                      <span className="text-xs font-medium text-[#A1A1AA]">/ {plan.billingPeriod}</span>
                    </div>
                  </div>

                  {/* Standard Bullet features */}
                  <ul className="space-y-3 mb-8 text-right text-xs text-[#A1A1AA]">
                    <li className="flex items-center gap-2 justify-start">
                      <Check size={14} className="text-[#25D366]" />
                      <span>وكيل ذكاء اصطناعي تفاعلي متكامل</span>
                    </li>
                    <li className="flex items-center gap-2 justify-start">
                      <Check size={14} className="text-[#25D366]" />
                      <span>الرد الفوري على مدار 24 ساعة دون انقطاع</span>
                    </li>
                    <li className="flex items-center gap-2 justify-start">
                      <Check size={14} className="text-[#25D366]" />
                      <span>قاعدة معرفة مخصصة بالكامل لمنتجاتك</span>
                    </li>
                    <li className="flex items-center gap-2 justify-start">
                      <Check size={14} className="text-[#25D366]" />
                      <span>دعم كامل للغات واللهجات المتنوعة</span>
                    </li>
                  </ul>

                  {/* CTA Subscription Button via WhatsApp to convert instantly */}
                  <div className="mt-auto">
                    <a
                      href={getStandardWhatsAppLink(plan.name, plan.messages, plan.price)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`block w-full py-3.5 px-4 rounded-xl text-center text-sm font-bold transition-all duration-300 ${
                        plan.isPopular
                          ? "bg-gradient-to-r from-[#25D366] to-[#00FF88] text-black shadow-lg hover:scale-105 hover:shadow-[0_0_20px_rgba(0,255,136,0.3)]"
                          : "bg-white/5 hover:bg-[#25D366] text-white hover:text-black hover:scale-105 border border-white/10 hover:border-[#25D366]/30"
                      }`}
                    >
                      {plan.ctaText}
                    </a>
                  </div>

                  {plan.isPopular && (
                    <div className="absolute bottom-0 right-0 left-0 h-[4px] bg-gradient-to-r from-[#25D366] to-[#00FF88]" />
                  )}
                </div>
              ))}
            </motion.div>
          ) : (
            /* Premium Interactive Enterprise Custom Section */
            <motion.div
              key="enterprise"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto"
            >
              <div className="relative rounded-3xl p-8 sm:p-12 border-2 border-[#00FF88]/30 shadow-[0_25px_50px_-15px_rgba(37,211,102,0.25)] bg-gradient-to-br from-zinc-950 via-[#0a1b10]/40 to-zinc-950 overflow-hidden backdrop-blur-md">
                
                {/* Visual side glow highlights */}
                <div className="absolute -right-32 -top-32 w-64 h-64 rounded-full bg-[#00FF88]/10 blur-[90px] pointer-events-none" />
                <div className="absolute -left-32 -bottom-32 w-64 h-64 rounded-full bg-[#25D366]/10 blur-[90px] pointer-events-none" />

                {/* Popularity badge banner */}
                <div className="absolute top-6 left-6 inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-gradient-to-r from-[#25D366]/20 to-[#00FF88]/20 text-[#00FF88] text-[11px] font-extrabold border border-[#00FF88]/30 uppercase tracking-wide">
                  <Sparkles size={13} className="text-[#00FF88] animate-pulse" />
                  <span>مخصصة بالكامل للمؤسسات والشركات</span>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start relative z-10">
                  
                  {/* Left Column: Interactive Selector & Sales CTA */}
                  <div className="lg:col-span-5 text-right space-y-6 lg:border-l lg:border-white/5 lg:pl-8">
                    <div>
                      <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
                        باقة الشركات والطلب الخاص
                      </h3>
                      <div className="inline-block px-3 py-1 rounded-lg bg-[#25D366]/10 text-[#00FF88] text-xs font-bold border border-[#25D366]/20 mb-3">
                        يبدأ من 25,000 رسالة / شهرياً
                      </div>
                      <p className="text-xs sm:text-sm text-[#A1A1AA] leading-relaxed">
                        نوفر تسعيراً مخصصاً <span className="text-[#00FF88] font-bold">(Custom Pricing)</span> بالكامل يتوافق مع عدد الرسائل الشهري والخصائص الفريدة التي يحتاجها نشاطك التجاري.
                      </p>
                    </div>

                    {/* Presets Selection Pill Grid */}
                    <div className="space-y-3">
                      <label className="text-xs font-bold text-[#E4E4E7] block">
                        اختر عدد الرسائل المخصص:
                      </label>
                      <div className="grid grid-cols-3 gap-2">
                        {ENTERPRISE_PRESETS.map((preset) => {
                          const isSelected = selectedPreset === preset && customMessages === "";
                          return (
                            <button
                              key={preset}
                              type="button"
                              onClick={() => {
                                setSelectedPreset(preset);
                                setCustomMessages("");
                              }}
                              className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all duration-300 cursor-pointer text-center ${
                                isSelected 
                                  ? "bg-gradient-to-r from-[#25D366] to-[#00FF88] text-black border-transparent shadow-md"
                                  : "bg-white/5 border-white/5 text-[#A1A1AA] hover:border-white/15 hover:text-white"
                              }`}
                            >
                              {preset}
                            </button>
                          );
                        })}
                      </div>
                    </div>

                    {/* Custom Input Field */}
                    <div className="space-y-2">
                      <label className="text-xs font-bold text-[#E4E4E7] block">
                        أو اكتب رقماً مخصصاً يدوياً:
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          placeholder="مثال: 150,000"
                          value={customMessages}
                          onChange={(e) => setCustomMessages(e.target.value)}
                          className="w-full bg-zinc-900 border border-white/10 hover:border-white/20 focus:border-[#00FF88] text-white rounded-xl py-3 px-4 text-xs font-bold text-right outline-none transition-all"
                        />
                        <div className="absolute left-3.5 top-1/2 -translate-y-1/2 text-[10px] text-[#A1A1AA] font-semibold">
                          رسالة / شهر
                        </div>
                      </div>
                    </div>

                    {/* Real-time Summary Feedback Box */}
                    <div className="p-5 rounded-2xl bg-black/40 border border-white/5 text-right space-y-2">
                      <span className="text-[10px] text-[#A1A1AA] font-bold block">الاستهلاك والطلب المطلوب:</span>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-[#00FF88] font-black bg-[#25D366]/10 px-2 py-0.5 rounded border border-[#25D366]/20">Custom Pricing</span>
                        <span className="text-lg font-black text-white">
                          {currentMessagesCount} رسالة / شهرياً
                        </span>
                      </div>
                    </div>

                    {/* Contact Sales Button */}
                    <div className="pt-2">
                      <a
                        href={getWhatsAppLink(currentMessagesCount)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block w-full py-4 px-6 rounded-xl text-center text-sm font-black bg-gradient-to-r from-[#25D366] to-[#00FF88] text-black shadow-[0_4px_20px_rgba(37,211,102,0.3)] hover:scale-[1.03] hover:shadow-[0_6px_25px_rgba(37,211,102,0.45)] transition-all duration-300"
                      >
                        تواصل مع المبيعات (Contact Sales)
                      </a>
                      <span className="text-[10px] text-[#52525B] text-center block mt-2 font-medium">
                        احصل على عرض سعر مخصص مجاني وبدء تصميم وكيلك خلال ساعات.
                      </span>
                    </div>
                  </div>

                  {/* Right Column: Premium Enterprise Feature Grid */}
                  <div className="lg:col-span-7 text-right space-y-6">
                    <div className="flex items-center gap-2 justify-end mb-4">
                      <span className="text-xs font-extrabold text-[#00FF88] bg-[#00FF88]/10 border border-[#00FF88]/20 px-2.5 py-1 rounded-md">مزايا وحلول النخبة</span>
                      <h4 className="text-lg font-bold text-white">ما ستحصل عليه في باقة الشركات:</h4>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {ENTERPRISE_FEATURES.map((feat, idx) => (
                        <div key={idx} className="flex gap-3 justify-start text-right">
                          <div className="w-10 h-10 rounded-xl bg-[#25D366]/10 border border-[#25D366]/20 flex items-center justify-center text-[#00FF88] shrink-0 mt-0.5">
                            <feat.icon size={18} />
                          </div>
                          <div>
                            <h5 className="text-sm font-extrabold text-white mb-1 font-mono">
                              {feat.title}
                            </h5>
                            <p className="text-[11px] text-[#A1A1AA] leading-relaxed">
                              {feat.desc}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4 border-t border-white/5 flex items-center justify-end gap-2 text-xs text-[#25D366]">
                      <span>بنية تحتية سحابية متكاملة لضمان أقصى درجات الأمان والسرعة</span>
                      <ShieldCheck size={14} className="shrink-0" />
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
};
