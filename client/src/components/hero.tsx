import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Rocket, Code, Play, Shield, Globe, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-8"
          >
            <Badge variant="secondary" className="px-3 py-1 text-sm font-medium bg-primary/10 text-primary border-primary/20">
              <Rocket className="w-4 h-4 mr-2" />
              The Future of Work is Here
            </Badge>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-4xl md:text-6xl font-bold text-neutral-dark mb-6"
          >
            Crowdfunding Infrastructure for the{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              New Economy
            </span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto"
          >
            Ply Network provides the complete ecosystem for modern crowdfunding. From SDKs and APIs to AI-powered moderation and distribution channels, we're solving the capital challenge of tomorrow's work.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <Button size="lg" className="bg-primary text-white hover:bg-primary/90">
              <Code className="w-5 h-5 mr-2" />
              Start with SDK
            </Button>
            <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
              <Play className="w-5 h-5 mr-2" />
              View Demo
            </Button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="flex flex-wrap justify-center items-center gap-8 text-gray-500 text-sm"
          >
            <div className="flex items-center">
              <Shield className="w-4 h-4 mr-2" />
              Enterprise Security
            </div>
            <div className="flex items-center">
              <Globe className="w-4 h-4 mr-2" />
              Global Scale
            </div>
            <div className="flex items-center">
              <Clock className="w-4 h-4 mr-2" />
              24/7 Support
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
