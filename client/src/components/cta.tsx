import { Button } from "@/components/ui/button";
import { Rocket, Calendar, Check } from "lucide-react";
import { motion } from "framer-motion";

export default function CallToAction() {
  const benefits = [
    "No credit card required",
    "Free tier available",
    "Deploy in minutes",
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-primary to-secondary">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build the Future of Work?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
            Join thousands of developers and businesses using Ply to create innovative crowdfunding experiences.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-primary hover:bg-gray-100 font-semibold">
              <Rocket className="w-5 h-5 mr-2" />
              Start Building Free
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary font-semibold">
              <Calendar className="w-5 h-5 mr-2" />
              Schedule Demo
            </Button>
          </div>
          
          <div className="mt-12 flex flex-wrap justify-center items-center gap-8 text-blue-100 text-sm">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center">
                <Check className="w-4 h-4 mr-2" />
                {benefit}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
