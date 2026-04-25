import React from 'react';

export interface SubLesson {
  title: string;
}

export interface Lesson {
  title: string;
  duration?: string;
  items: SubLesson[];
}

export interface Module {
  title: string;
  icon: React.ReactNode;
  lessons: Lesson[];
}

export interface HighlightItem {
  icon: React.ReactNode;
  text: string;
  color: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ReviewItem {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  color: string;
  icon: React.ReactNode;
}