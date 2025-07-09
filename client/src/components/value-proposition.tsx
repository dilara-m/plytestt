import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Building2, 
  Users, 
  Target, 
  Globe, 
  Star, 
  Coins,
  Check,
  Code,
  Shield,
  Zap
} from "lucide-react";
import { motion } from "framer-motion";

export default function ValueProposition() {
  const stakeholders = [
    {
      icon: Building2,
      title: "For Platforms",
      subtitle: "Reduce dev costs, modernize tech stack",
      description: "Many crowdfunding platforms can't afford dedicated dev teams. We are your dev team - maintaining and improving the infrastructure so you can focus on your community.",
      features: [
        "Latest tech stack replaces legacy systems",
        "Significantly reduce development team needs",
        "Open-source core with paid advanced features",
        "Global reach without platform limitations"
      ],
      gradient: "from-blue-50 to-indigo-100",
      iconColor: "text-blue-600",
      iconBg: "bg-blue-100",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      icon: Users,
      title: "For Creators",
      subtitle: "Global audience, no platform barriers",
      description: "In our vision, creators aren't limited by platforms or borders. Access a global audience and backer pool with extended visibility across all platforms.",
      features: [
        "Embed campaigns in Discord servers and communities",
        "Launch crowdfunding directly in Telegram channels",
        "Integrate with existing Shopify stores seamlessly",
        "Reach streaming audiences with live funding bots"
      ],
      gradient: "from-purple-50 to-pink-100",
      iconColor: "text-purple-600",
      iconBg: "bg-purple-100",
      badgeColor: "bg-purple-100 text-purple-800",
    },
    {
      icon: Target,
      title: "For Backers",
      subtitle: "More projects, better trust signals",
      description: "Access more projects to choose from with better signals to identify trustworthy creators and projects worth supporting.",
      features: [
        "More projects to choose from",
        "Better chance to support projects you care about",
        "Creator reputation across all platforms",
        "Enhanced trust and rating systems"
      ],
      gradient: "from-green-50 to-emerald-100",
      iconColor: "text-green-600",
      iconBg: "bg-green-100",
      badgeColor: "bg-green-100 text-green-800",
    },
  ];

  const keyFeatures = [
    {
      icon: Code,
      title: "Open Source Core",
      description: "Core technology is free and open-source, pay only for advanced features"
    },
    {
      icon: Globe,
      title: "Global Reach",
      description: "Break down platform barriers and reach audiences worldwide"
    },
    {
      icon: Shield,
      title: "AI-Powered Security",
      description: "Advanced moderation and fraud detection with human verification"
    },
    {
      icon: Zap,
      title: "Modern Tech Stack",
      description: "Built on the latest technologies, ready for the future of work"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-muted/30 to-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Built for Everyone in the Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Ply creates value for platforms, creators, and backers by removing barriers and enabling global collaboration.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {stakeholders.map((stakeholder, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${stakeholder.gradient} p-8 rounded-xl`}
            >
              <div className="flex items-center mb-6">
                <div className={`w-12 h-12 ${stakeholder.iconBg} rounded-lg flex items-center justify-center mr-4`}>
                  <stakeholder.icon className={`${stakeholder.iconColor} w-6 h-6`} />
                </div>
                <div>
                  <h3 className="text-xl font-semibold">{stakeholder.title}</h3>
                  <Badge className={`text-xs ${stakeholder.badgeColor} mt-1`}>
                    {stakeholder.subtitle}
                  </Badge>
                </div>
              </div>
              
              <p className="text-muted-foreground mb-6">{stakeholder.description}</p>
              
              <ul className="text-sm text-muted-foreground space-y-3">
                {stakeholder.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-start">
                    <Check className="w-4 h-4 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {keyFeatures.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-primary" />
              </div>
              <h4 className="font-semibold mb-2">{feature.title}</h4>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Get Started Today
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Contact Sales
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}