export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
}

export interface PricingPlan {
  id: string;
  name: string;
  price: number;
  description: string;
  features: string[];
  isPopular?: boolean;
  type: 'monthly' | 'one-off' | 'custom';
}

export interface MenuItem {
  label: string;
  href: string;
  children?: MenuItem[];
}

export interface Stat {
  value: string;
  label: string;
  icon: string;
}