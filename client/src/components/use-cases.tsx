import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Building, 
  Palette, 
  Store, 
  GraduationCap, 
  Heart, 
  Rocket,
  Check 
} from "lucide-react";
import { motion } from "framer-motion";

export default function UseCases() {
  const useCases = [
    {
      icon: Building,
      title: "SaaS Platforms",
      description: "Integrate crowdfunding directly into existing platforms without building from scratch.",
      features: ["White-label solutions", "Custom fee structures", "Enterprise security"],
      gradient: "from-blue-50 to-indigo-50",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
    },
    {
      icon: Palette,
      title: "Creator Economy",
      description: "Empower creators with tools to monetize their communities and fund projects.",
      features: ["Social media integration", "Community features", "Instant payouts"],
      gradient: "from-purple-50 to-pink-50",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
    },
    {
      icon: Store,
      title: "E-commerce",
      description: "Launch product pre-orders and inventory-based campaigns with existing stores.",
      features: ["Shopify integration", "Inventory management", "Automated fulfillment"],
      gradient: "from-green-50 to-teal-50",
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
    },
    {
      icon: GraduationCap,
      title: "Education",
      description: "Fund educational content, courses, and learning experiences with AI-generated materials.",
      features: ["AI content generation", "Progress tracking", "Reward systems"],
      gradient: "from-yellow-50 to-orange-50",
      iconColor: "text-yellow-600",
      iconBg: "bg-yellow-100",
    },
    {
      icon: Heart,
      title: "Non-Profit",
      description: "Modern donation platforms with transparent tracking and automated reporting.",
      features: ["Donation tracking", "Impact reporting", "Compliance tools"],
      gradient: "from-red-50 to-pink-50",
      iconColor: "text-red-600",
      iconBg: "bg-red-100",
    },
    {
      icon: Rocket,
      title: "Startups",
      description: "Launch crowdfunding campaigns with minimal technical overhead and maximum customization.",
      features: ["Quick deployment", "Investor tools", "Equity crowdfunding"],
      gradient: "from-gray-50 to-slate-50",
      iconColor: "text-gray-600",
      iconBg: "bg-gray-100",
    },
  ];

  return (
    <section id="use-cases" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Built for Every Industry
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From creators to enterprises, Ply Network powers crowdfunding across industries and use cases.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {useCases.map((useCase, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${useCase.gradient} p-8 rounded-xl`}
            >
              <div className={`w-12 h-12 ${useCase.iconBg} rounded-lg flex items-center justify-center mb-6`}>
                <useCase.icon className={`${useCase.iconColor} w-6 h-6`} />
              </div>
              <h3 className="text-xl font-semibold mb-4">{useCase.title}</h3>
              <p className="text-gray-600 mb-6">{useCase.description}</p>
              <ul className="text-sm text-gray-600 space-y-2">
                {useCase.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="w-4 h-4 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
