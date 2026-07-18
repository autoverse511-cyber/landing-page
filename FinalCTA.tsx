import React, { useState } from "react";
import { Sparkles, Send, CheckCircle2, Phone, Mail, Loader2 } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export const FinalCTA: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    business: "",
    details: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.business) {
      return;
    }
    
    setIsSubmitting(true);
    try {
      // Send the registered data directly to the auto.autoversse.cloud webhook
      const response = await fetch("https://auto.autoversse.cloud/webhook/landing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name: formData.name,
          phone: formData.phone,
          business: formData.business,
          details: formData.details,
          submittedAt: new Date().toISOString()
        })
      });

      if (!response.ok) {
        console.warn("Webhook responded with an error status:", response.status);
      }
    } catch (error) {
      console.error("Error submitting data to the webhook:", error);
    } finally {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: "",
        phone: "",
        business: "",
        details: ""
      });
    }
  };

  return (
    <section id="contact" className="relative py-24 bg-[#09090B] border-t border-[#25D366]/10 overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-tr from-[#25D366]/10 to-[#00FF88]/5 blur-[120px] pointer-events-none" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Main CTA Card */}
        <div className="relative rounded-3xl p-1 bg-gradient-to-b from-[#25D366]/30 to-[#00FF88]/10 shadow-[0_20px_50px_rgba(37,211,102,0.1)] overflow-hidden">
          
          {/* Internal content container */}
          <div className="relative bg-zinc-950/90 backdrop-blur-md rounded-[22px] px-8 py-12 md:p-12 text-center border border-white/5">
            
            {/* Tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#25D366]/10 border border-[#25D366]/20 text-xs font-semibold text-[#00FF88] mb-6">
              <Sparkles size={14} className="text-[#25D366]" />
              <span>ابدأ رحلة النمو اليوم</span>
            </div>

            {/* Header Title */}
            <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4">
              جاهز لمضاعفة مبيعاتك عبر واتساب؟
            </h2>

            {/* Subtitle */}
            <p className="text-base text-[#A1A1AA] max-w-2xl mx-auto mb-10 leading-relaxed">
              سجل معلوماتك الأساسية الآن، وسيتواصل معك مستشار الحسابات العقارية والمطاعم والعيادات لتجهيز وكيل واتساب الذكي الخاص بك مجاناً بالكامل.
            </p>

            {/* Success screen or Contact Form */}
            <AnimatePresence mode="wait">
              {isSuccess ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 rounded-2xl bg-[#25D366]/5 border border-[#25D366]/30 max-w-xl mx-auto flex flex-col items-center"
                >
                  <div className="w-14 h-14 rounded-full bg-[#25D366]/10 border border-[#25D366]/40 flex items-center justify-center text-[#00FF88] mb-4">
                    <CheckCircle2 size={32} className="text-[#00FF88]" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">تم استلام طلبك بنجاح! 🎉</h3>
                  <p className="text-sm text-[#A1A1AA] leading-relaxed text-center">
                    شكراً لاهتمامك. سيقوم خبير إعداد الوكلاء بمراجعة بيانات نشاطك التجاري والتواصل معك عبر واتساب خلال أقل من ساعة لتفعيل حسابك التجريبي.
                  </p>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="mt-6 px-6 py-2.5 rounded-xl text-xs font-bold bg-white/5 border border-white/10 text-white hover:bg-white/10 transition-colors cursor-pointer"
                  >
                    تقديم طلب آخر
                  </button>
                </motion.div>
              ) : (
                <motion.form
                  onSubmit={handleSubmit}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="max-w-xl mx-auto text-right space-y-4"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-xs font-bold text-[#A1A1AA] px-1">الاسم الكامل *</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="أحمد الحربي"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-[#25D366]/20 text-white placeholder-zinc-600 focus:outline-none focus:border-[#00FF88] transition-colors text-sm text-right"
                      />
                    </div>

                    {/* Phone field */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-xs font-bold text-[#A1A1AA] px-1">رقم الجوال (واتساب) *</label>
                      <input
                        type="tel"
                        id="phone"
                        required
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="+966 50 123 4567"
                        className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-[#25D366]/20 text-white placeholder-zinc-600 focus:outline-none focus:border-[#00FF88] transition-colors text-sm text-left font-mono"
                        dir="ltr"
                      />
                    </div>
                  </div>

                  {/* Business Category field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="business" className="text-xs font-bold text-[#A1A1AA] px-1">نوع النشاط التجاري *</label>
                    <select
                      id="business"
                      required
                      value={formData.business}
                      onChange={(e) => setFormData({ ...formData, business: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-[#25D366]/20 text-[#A1A1AA] focus:text-white focus:outline-none focus:border-[#00FF88] transition-colors text-sm text-right cursor-pointer"
                    >
                      <option value="">-- اختر نوع النشاط --</option>
                      <option value="restaurant">مطعم / كافيه</option>
                      <option value="clinic">عيادة طبية</option>
                      <option value="realestate">شركة عقارات</option>
                      <option value="ecommerce">متجر إلكتروني</option>
                      <option value="travel">وكالة سفر وسياحة</option>
                      <option value="law">مكتب محاماة</option>
                      <option value="gym">صالة رياضية (جيم)</option>
                      <option value="education">مركز تعليمي</option>
                      <option value="maintenance">خدمات صيانة</option>
                      <option value="other">نشاط تجاري آخر</option>
                    </select>
                  </div>

                  {/* Details field */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="details" className="text-xs font-bold text-[#A1A1AA] px-1">تفاصيل إضافية (اختياري)</label>
                    <textarea
                      id="details"
                      value={formData.details}
                      onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                      placeholder="اكتب هنا أي تفاصيل عن أسئلتك أو أهداف الأتمتة التي تسعى لتحقيقها..."
                      rows={3}
                      className="w-full px-4 py-3 rounded-xl bg-zinc-900 border border-[#25D366]/20 text-white placeholder-zinc-600 focus:outline-none focus:border-[#00FF88] transition-colors text-sm text-right"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 rounded-xl font-bold text-black bg-gradient-to-r from-[#25D366] to-[#00FF88] hover:scale-[1.01] hover:shadow-[0_0_20px_rgba(0,255,136,0.3)] transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-75 disabled:cursor-wait"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 size={18} className="animate-spin text-black" />
                          <span>جاري تقديم الطلب...</span>
                        </>
                      ) : (
                        <>
                          <Send size={18} className="text-black shrink-0" />
                          <span>احجز وكيلك التجريبي مجاناً الآن</span>
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              )}
            </AnimatePresence>

          </div>
        </div>

      </div>
    </section>
  );
};
