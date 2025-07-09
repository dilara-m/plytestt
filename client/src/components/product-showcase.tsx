import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Code, 
  Download, 
  MessageSquare, 
  ShoppingCart, 
  Video, 
  Box, 
  Shield, 
  Wand2, 
  GraduationCap, 
  Bot, 
  Users,
  Check,
  DollarSign,
  Globe,
  Clock
} from "lucide-react";
import { SiGo, SiPython, SiRuby, SiNodedotjs, SiTelegram, SiDiscord, SiShopify } from "react-icons/si";
import { motion } from "framer-motion";

export default function ProductShowcase() {
  const [activeTab, setActiveTab] = useState("sdk");

  const sdkLanguages = [
    { icon: SiGo, name: "Go SDK", color: "text-cyan-600" },
    { icon: SiPython, name: "Python SDK", color: "text-blue-600" },
    { icon: SiRuby, name: "Ruby on Rails SDK", color: "text-red-600" },
    { icon: SiNodedotjs, name: "Node.js SDK", color: "text-green-600" },
  ];

  const distributionChannels = [
    {
      icon: SiTelegram,
      name: "Telegram Bot",
      description: "Deploy crowdfunding directly in Telegram channels with automated campaign management.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
    {
      icon: SiDiscord,
      name: "Discord Integration",
      description: "Engage communities with embedded crowdfunding experiences in Discord servers.",
      color: "text-indigo-600",
      bgColor: "bg-indigo-100",
    },
    {
      icon: ShoppingCart,
      name: "Shopping Cart",
      description: "SamCart-like experience for seamless checkout and campaign management.",
      color: "text-green-600",
      bgColor: "bg-green-100",
    },
    {
      icon: SiShopify,
      name: "Shopify Widget",
      description: "Native Shopify integration for product pre-orders and inventory-based campaigns.",
      color: "text-orange-600",
      bgColor: "bg-orange-100",
    },
    {
      icon: Video,
      name: "Streaming Bot",
      description: "Real-time crowdfunding for content creators during live streams.",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
    },
    {
      icon: Box,
      name: "Embeddable Widget",
      description: "Lightweight widget for any website with customizable fee splitting and curator payments.",
      color: "text-cyan-600",
      bgColor: "bg-cyan-100",
    },
  ];

  const ecosystemApps = [
    {
      icon: GraduationCap,
      name: "Learning Quiz App",
      description: "Parents subscribe monthly, AI generates quizzes, children complete them and get paid. Built on Ply protocol.",
      category: "Education",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
      badgeColor: "bg-blue-100 text-blue-800",
    },
    {
      icon: Bot,
      name: "AI Agent Funding",
      description: "Crowdfund AI agents for specific tasks and projects. Connect with investment DAOs for automated execution.",
      category: "AI/ML",
      color: "text-purple-600",
      bgColor: "bg-purple-100",
      badgeColor: "bg-purple-100 text-purple-800",
    },
    {
      icon: Users,
      name: "Investment DAOs",
      description: "Decentralized funding decisions with automated distribution. DAOs decide which projects to fund.",
      category: "DeFi",
      color: "text-green-600",
      bgColor: "bg-green-100",
      badgeColor: "bg-green-100 text-green-800",
    },
  ];

  const aiFeatures = [
    {
      icon: Shield,
      title: "AI Campaign Moderation",
      description: "Automatically detect fraud, spam, and policy violations with advanced machine learning models.",
      features: ["Real-time fraud detection", "Content policy enforcement", "Human verification integration"],
      gradient: "from-secondary/10 to-accent/10",
    },
    {
      icon: Wand2,
      title: "AI Campaign Creator",
      description: "Generate campaigns from inventory using Gamma API integration. Human verification with Self prevents spam and bot attacks.",
      features: ["Inventory-based campaigns", "Monthly recommendations with try-on", "3D model generation", "One campaign per human limit"],
      gradient: "from-primary/10 to-secondary/10",
    },
  ];

  const codeExample = `// Initialize Ply Network SDK
import { PlyNetwork } from '@ply/sdk'

const ply = new PlyNetwork({
  apiKey: 'your-api-key',
  environment: 'production'
});

// Create a campaign
const campaign = await ply.campaigns.create({
  title: 'Revolutionary Product',
  goal: 50000,
  currency: 'USD'
});`;

  return (
    <section id="products" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Complete Crowdfunding Ecosystem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Everything you need to build, launch, and scale crowdfunding experiences across any platform or use case.
          </p>
        </motion.div>
        
        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 mb-12">
            <TabsTrigger value="sdk">SDK & APIs</TabsTrigger>
            <TabsTrigger value="channels">Distribution Channels</TabsTrigger>
            <TabsTrigger value="ai">AI-Powered Tools</TabsTrigger>
            <TabsTrigger value="ecosystem">Ecosystem Apps</TabsTrigger>
          </TabsList>
          
          <TabsContent value="sdk">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-2xl font-bold mb-6">Language-Agnostic SDK</h3>
                <p className="text-muted-foreground mb-8">
                  Build on Ply Network with your preferred programming language. Our comprehensive SDKs provide everything you need to create crowdfunding experiences.
                </p>
                
                <div className="space-y-4 mb-8">
                  {sdkLanguages.map((lang, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="flex items-center"
                    >
                      <lang.icon className={`${lang.color} w-5 h-5 mr-3`} />
                      <span className="font-medium">{lang.name}</span>
                    </motion.div>
                  ))}
                </div>
                
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Download className="w-4 h-4 mr-2" />
                  Download SDK
                </Button>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="bg-neutral-dark rounded-xl p-6 text-green-400 font-mono text-sm"
              >
                <pre className="whitespace-pre-wrap">
                  <code>{codeExample}</code>
                </pre>
              </motion.div>
            </div>
          </TabsContent>
          
          <TabsContent value="channels">
            <div className="mb-12">
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-8 rounded-xl mb-8">
                <h3 className="text-2xl font-bold text-center mb-6">How Creators Benefit from Our Plugins</h3>
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Users className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Meet Your Audience Where They Are</h4>
                        <p className="text-sm text-muted-foreground">Instead of driving traffic to separate platforms, launch campaigns directly in Discord servers, Telegram channels, and live streams where your community already exists.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <DollarSign className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Instant Monetization</h4>
                        <p className="text-sm text-muted-foreground">Turn any social interaction into a funding opportunity. Streaming? Accept donations live. Discord community? Embed funding widgets directly in channels.</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Globe className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Global Reach, Local Feel</h4>
                        <p className="text-sm text-muted-foreground">Each plugin maintains the native experience of the platform while connecting to a global backer pool. Your Discord campaign feels like Discord, not a foreign tool.</p>
                      </div>
                    </div>
                    <div className="flex items-start">
                      <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mr-3 mt-1">
                        <Clock className="w-4 h-4 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">No Platform Switching</h4>
                        <p className="text-sm text-muted-foreground">Your backers never leave their favorite platforms. They can support you on Telegram, Discord, or your website without creating new accounts or learning new interfaces.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {distributionChannels.map((channel, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${channel.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                        <channel.icon className={`${channel.color} w-6 h-6`} />
                      </div>
                      <h4 className="font-semibold mb-2">{channel.name}</h4>
                      <p className="text-muted-foreground text-sm">{channel.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ai">
            <div className="grid md:grid-cols-2 gap-8">
              {aiFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className={`bg-gradient-to-br ${feature.gradient} p-8 rounded-xl`}
                >
                  <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-6">
                    <feature.icon className="text-primary w-6 h-6" />
                  </div>
                  <h4 className="text-xl font-semibold mb-4">{feature.title}</h4>
                  <p className="text-muted-foreground mb-6">{feature.description}</p>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    {feature.features.map((item, idx) => (
                      <li key={idx} className="flex items-center">
                        <Check className="w-4 h-4 text-green-500 mr-2" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </TabsContent>
          
          <TabsContent value="ecosystem">
            <div className="grid md:grid-cols-3 gap-8">
              {ecosystemApps.map((app, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <div className={`w-12 h-12 ${app.bgColor} rounded-lg flex items-center justify-center mb-4`}>
                        <app.icon className={`${app.color} w-6 h-6`} />
                      </div>
                      <h4 className="font-semibold mb-2">{app.name}</h4>
                      <p className="text-muted-foreground text-sm mb-4">{app.description}</p>
                      <Badge className={`text-xs ${app.badgeColor}`}>{app.category}</Badge>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </TabsContent>
        </Tabs>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              Start Building
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              View Documentation
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
