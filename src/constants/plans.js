import { Globe, Star, Award } from "lucide-react";

export const plans = [
  {
    id: "starter",
    name: "Starter",
    price: "$39",
    period: "/month",
    color: "bg-[#E8D9F0]",
    highlight: false,
    icon: Globe,
    features: [
      "2 live classes per week",
      "Access to basic materials",
      "Email support",
      "Beginner & Intermediate levels",
    ],
  },
  {
    id: "professional",
    name: "Professional",
    price: "$69",
    period: "/month",
    color: "bg-[#A938BC]",
    highlight: true,
    icon: Star,
    features: [
      "5 live classes per week",
      "Personalized study plan",
      "TOEFL prep resources",
      "Priority chat support",
      "Progress tracking dashboard",
    ],
  },
  {
    id: "premium",
    name: "Premium",
    price: "$99",
    period: "/month",
    color: "bg-[#FFF3D8]",
    highlight: false,
    icon: Award,
    features: [
      "Unlimited live classes",
      "1-on-1 tutoring sessions",
      "Exclusive TOEFL mock exams",
      "Certificate of achievement",
      "Flexible scheduling",
    ],
  },
];