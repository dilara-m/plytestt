import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Check, X } from "lucide-react";
import { motion } from "framer-motion";
import { SiBitcoin } from "react-icons/si";
import { CreditCard, Shield } from "lucide-react";

export default function Pricing() {
  const plans = [
    {
      name: "Starter",
      price: "Free",
      description: "Perfect for getting started",
      features: [
        { text: "Basic SDK access", included: true },
        { text: "Up to 100 campaigns", included: true },
        { text: "Community support", included: true },
        { text: "Basic analytics", included: true },
        { text: "AI moderation", included: false },
      ],
      buttonText: "Get Started Free",
      buttonVariant: "outline" as const,
      popular: false,
    },
    {
      name: "Professional",
      price: "$99",
      period: "/month",
      description: "For growing businesses",
      features: [
        { text: "Full SDK access", included: true },
        { text: "Unlimited campaigns", included: true },
        { text: "Priority support", included: true },
        { text: "Advanced analytics", included: true },
        { text: "AI moderation", included: true },
      ],
      buttonText: "Start Professional",
      buttonVariant: "default" as const,
      popular: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For large organizations",
      features: [
        { text: "Custom integrations", included: true },
        { text: "Dedicated support", included: true },
        { text: "SLA guarantees", included: true },
        { text: "Custom AI models", included: true },
        { text: "On-premise deployment", included: true },
      ],
      buttonText: "Contact Sales",
      buttonVariant: "secondary" as const,
      popular: false,
    },
  ];

  const trustIndicators = [
    { icon: SiBitcoin, text: "Cryptocurrency", color: "text-orange-500" },
    { icon: CreditCard, text: "Traditional Payments", color: "text-blue-500" },
    { icon: Shield, text: "PCI Compliant", color: "text-green-500" },
  ];

  return (
    <section id="pricing" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Start building for free, then scale with our flexible pricing tiers designed for every stage of growth.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="relative"
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <Badge className="bg-primary text-white">Most Popular</Badge>
                </div>
              )}
              <Card className={`h-full ${plan.popular ? 'border-primary border-2 shadow-lg' : ''}`}>
                <CardHeader className="text-center pb-8">
                  <CardTitle className="text-xl font-semibold mb-2">{plan.name}</CardTitle>
                  <div className="text-3xl font-bold mb-2">
                    {plan.price}
                    {plan.period && (
                      <span className="text-lg font-normal text-gray-600">{plan.period}</span>
                    )}
                  </div>
                  <p className="text-gray-600">{plan.description}</p>
                </CardHeader>
                <CardContent className="pt-0">
                  <ul className="space-y-4 mb-8">
                    {plan.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center">
                        {feature.included ? (
                          <Check className="w-5 h-5 text-green-500 mr-3" />
                        ) : (
                          <X className="w-5 h-5 text-gray-400 mr-3" />
                        )}
                        <span className={`text-sm ${feature.included ? '' : 'text-gray-400'}`}>
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    className={`w-full ${plan.buttonVariant === 'default' ? 'bg-primary text-white hover:bg-primary/90' : ''}`}
                    variant={plan.buttonVariant}
                  >
                    {plan.buttonText}
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">All plans include crypto and fiat payment support</p>
          <div className="flex justify-center space-x-6 text-sm text-gray-500">
            {trustIndicators.map((indicator, index) => (
              <div key={index} className="flex items-center">
                <indicator.icon className={`w-4 h-4 ${indicator.color} mr-2`} />
                {indicator.text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
