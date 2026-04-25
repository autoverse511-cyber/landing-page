import React from 'react';
import { BookOpen, Cog, Lock, Rocket, Zap, Users, Briefcase, Gift, Globe, Linkedin, Facebook, Mail } from 'lucide-react';
import { Module, HighlightItem, FAQItem, ReviewItem, SocialLink } from './types';

// Social Links Data
export const SOCIAL_LINKS: SocialLink[] = [
  {
    platform: "Facebook",
    url: "https://www.facebook.com/share/1BpVopXKf1/",
    color: "hover:text-[#1877f2] hover:border-[#1877f2] hover:bg-[#1877f2]/10",
    icon: <Facebook className="w-6 h-6" />
  },
  {
    platform: "LinkedIn",
    url: "https://www.linkedin.com/in/auto-verse-6576583aa",
    color: "hover:text-[#0a66c2] hover:border-[#0a66c2] hover:bg-[#0a66c2]/10",
    icon: <Linkedin className="w-6 h-6" />
  },
  {
    platform: "TikTok",
    url: "https://www.tiktok.com/@autoverse06",
    color: "hover:text-[#00f2ea] hover:border-[#00f2ea] hover:bg-[#00f2ea]/10",
    icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6"><path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5"/></svg>
  },
  {
    platform: "Email",
    url: "mailto:autoverse511@gmail.com",
    color: "hover:text-[#EA4335] hover:border-[#EA4335] hover:bg-[#EA4335]/10",
    icon: <Mail className="w-6 h-6" />
  }
];

export const HIGHLIGHTS: HighlightItem[] = [
  {
    icon: <Zap className="w-6 h-6" />,
    text: "٨+ ساعات محتوى عملي",
    color: "text-primary"
  },
  {
    icon: <Rocket className="w-6 h-6" />,
    text: "بناء AI Agents كاملة",
    color: "text-primary"
  },
  {
    icon: <Briefcase className="w-6 h-6" />,
    text: "مشاريع للعملاء الحقيقيين",
    color: "text-primary"
  },
  {
    icon: <Globe className="w-6 h-6" />,
    text: "تحديثات مستمرة",
    color: "text-accent"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "هل أحتاج خبرة مسبقة في البرمجة؟",
    answer: "لا! هذا الكورس مصمم للمبتدئين تماماً. n8n هي أداة Low-code/No-code، وسنشرح كل المفاهيم البرمجية البسيطة التي قد تحتاجها (مثل JSON) من الصفر."
  },
  {
    question: "كيف أصل للكورس بعد الشراء؟",
    answer: "بمجرد إتمام الدفع، ستصلك رسالة بريد إلكتروني تحتوي على بيانات الدخول لمنصة الكورس. الوصول للمحتوى فوري ومدى الحياة."
  },
  {
    question: "كم مدة الوصول للمحتوى؟",
    answer: "الوصول مدى الحياة! يمكنك مشاهدة الدروس في أي وقت والرجوع إليها كلما احتجت، بما في ذلك أي تحديثات مستقبلية للكورس."
  },
  {
    question: "هل يوجد دعم بعد الكورس؟",
    answer: "بالتأكيد. ستحصل على دعوة للانضمام لمجتمعنا الخاص حيث يمكنك طرح الأسئلة ومشاركة مشاريعك والحصول على مساعدة مباشرة من المدرب وزملائك."
  }
];

export const REVIEWS: ReviewItem[] = [
  {
    name: "محمد علي",
    role: "مسوق إلكتروني",
    content: "كنت أضيع ساعات يومياً في نقل البيانات بين Excel وFacebook Leads. بعد الكورس، بنيت نظاماً أتمت لي كل هذا في يوم واحد! الكورس استثمار حقيقي.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=1"
  },
  {
    name: "سارة حسن",
    role: "Freelancer",
    content: "شرح واضح جداً وعملي. طبقت المشاريع الموجودة في الكورس وبعت أول AI Agent لعميل سعودي بـ 300 دولار بعد أسبوعين فقط من الانتهاء!",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=2"
  },
  {
    name: "أحمد كمال",
    role: "صاحب شركة ناشئة",
    content: "أقوى كورس عربي في n8n. التفاصيل في قسم الـ HTTP requests والـ Webhooks جعلتني أفهم كيف تعمل الأنظمة حقاً. شكراً AutoVerse.",
    rating: 5,
    avatar: "https://i.pravatar.cc/150?u=3"
  }
];

export const CURRICULUM_DATA: Module[] = [
  {
    title: "الأساسيات والإعداد",
    icon: <BookOpen className="w-6 h-6" />,
    lessons: [
      {
        title: "1️⃣ مقدمة الكورس – Introduction to n8n",
        items: [
          { title: "تعريف n8n واستخداماته العملية" },
          { title: "الفرق بين n8n وأدوات الأتمتة الأخرى" },
          { title: "أنواع الحلول القابلة للتنفيذ" },
          { title: "نظرة على المشاريع العملية" }
        ]
      },
      {
        title: "2️⃣ التسجيل والإعداد الأولي",
        items: [
          { title: "إنشاء حساب n8n" },
          { title: "التعرف على الواجهة" },
          { title: "Canvas، Nodes، Connections" },
          { title: "طريقة التفكير في بناء Workflow" }
        ]
      },
      {
        title: "3️⃣ Triggers في n8n (الأساس)",
        items: [
          { title: "شرح مفهوم Trigger" },
          { title: "متى نستخدم Trigger" },
          { title: "الفرق بين Manual وTriggers الأخرى" }
        ]
      }
    ]
  },
  {
    title: "التكامل والاتصالات",
    icon: <Globe className="w-6 h-6" />,
    lessons: [
      {
        title: "4️⃣ Telegram Trigger Nodes",
        items: [
          { title: "إعداد Telegram Bot وربطه بـ n8n" },
          { title: "استقبال Text, Voice, Images" },
          { title: "فهم Payload القادم" },
          { title: "التحكم في تدفق البيانات" }
        ]
      },
      {
        title: "5️⃣ Webhooks in n8n",
        items: [
          { title: "مفهوم Webhooks" },
          { title: "GET vs POST" },
          { title: "استخدام Webhook كمدخل" },
          { title: "أمثلة عملية متعددة" }
        ]
      },
      {
        title: "6️⃣ HTTP Request Node",
        items: [
          { title: "التعامل مع APIs" },
          { title: "Headers, Params, Body" },
          { title: "Authentication" },
          { title: "خدمات خارجية" }
        ]
      }
    ]
  },
  {
    title: "إدارة الاعتمادات",
    icon: <Lock className="w-6 h-6" />,
    lessons: [
      {
        title: "7️⃣ Credentials Management",
        items: [
          { title: "Google Credentials: ربط Google Account, Sheets, التحكم في الصلاحيات" },
          { title: "AI Model Credentials: ربط Chat Models, API Keys, دور الموديل" }
        ]
      }
    ]
  },
  {
    title: "مشاريع عملية تطبيقية",
    icon: <Briefcase className="w-6 h-6" />,
    lessons: [
      {
        title: "8️⃣ Workflows تطبيقية (1500+ قالب جاهز)",
        items: [
          { title: "مكتبة ضخمة من القوالب والمشاريع الجاهزة" },
          { title: "طريقة استخدام القوالب وتعديلها لتناسب أي بزنس" },
          { title: "📌 كل مجموعة قوالب تعالج سيناريوهات حقيقية مختلفة" }
        ]
      }
    ]
  },
  {
    title: "بناء AI Agents المتقدمة",
    icon: <Rocket className="w-6 h-6" />,
    lessons: [
      {
        title: "9️⃣ Telegram AI Agent",
        items: [
          { title: "استقبال نص، صوت، صور" },
          { title: "تحليل المدخلات" },
          { title: "الرد الذكي بـ AI" },
          { title: "إدارة المحادثة" }
        ]
      },
      {
        title: "🔟 Messenger AI Agent",
        items: [
          { title: "ربط فيسبوك ماسنجر بـ n8n" },
          { title: "التعامل مع رسائل العملاء تلقائياً" },
          { title: "الردود الذكية وتوجيه المحادثة" }
        ]
      },
      {
        title: "1️⃣1️⃣ WhatsApp AI Agent",
        items: [
          { title: "بناء نظام مبيعات متكامل على واتساب باستخدام AI" },
          { title: "استخدام وسيط مصري للحصول على API" },
          { title: "أتمتة الردود والمبيعات على واتساب" }
        ]
      },
      {
        title: "1️⃣2️⃣ Website Voice Agent",
        items: [
          { title: "بناء مساعد صوتي للمواقع" },
          { title: "التكامل مع واجهة الموقع" },
          { title: "تحويل النص إلى كلام (TTS) والعكس (STT)" },
          { title: "سيناريوهات عملية لخدمة العملاء" }
        ]
      }
    ]
  }
];