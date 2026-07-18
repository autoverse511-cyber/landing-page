export interface Feature {
  id: string;
  iconName: string;
  title: string;
  description: string;
}

export interface BusinessType {
  id: string;
  iconName: string;
  title: string;
}

export interface PricingPlan {
  name: string;
  messages: string;
  price: string;
  isPopular?: boolean;
  ctaText: string;
  billingPeriod: string;
}

export interface PricingCategory {
  id: string;
  label: string;
  plans: PricingPlan[];
}

export interface FAQItem {
  id: string;
  category: string;
  question: string;
  answer: string;
}
