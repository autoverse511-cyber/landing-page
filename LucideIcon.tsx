import React from 'react';
import {
  Clock,
  Zap,
  Globe,
  MessageCircle,
  BookOpen,
  UserCheck,
  Database,
  Sliders,
  Utensils,
  Stethoscope,
  Home,
  ShoppingBag,
  Plane,
  Briefcase,
  Dumbbell,
  GraduationCap,
  Wrench,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Play,
  X,
  Menu,
  Check,
  Truck
} from 'lucide-react';

const iconsMap: { [key: string]: React.ComponentType<any> } = {
  Clock,
  Zap,
  Globe,
  MessageCircle,
  BookOpen,
  UserCheck,
  Database,
  Sliders,
  Utensils,
  Stethoscope,
  Home,
  ShoppingBag,
  Plane,
  Briefcase,
  Dumbbell,
  GraduationCap,
  Wrench,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  ChevronDown,
  Play,
  X,
  Menu,
  Check,
  Truck
};

interface LucideIconProps {
  name: string;
  className?: string;
  size?: number;
}

export const LucideIcon: React.FC<LucideIconProps> = ({ name, className, size = 24 }) => {
  const IconComponent = iconsMap[name];
  if (!IconComponent) {
    // Fallback icon
    return <Sparkles className={className} size={size} />;
  }
  return <IconComponent className={className} size={size} />;
};
