import { Card, CardContent } from "@/components/ui/card";
import { AlertTriangle, Clock, DollarSign } from "lucide-react";
import { motion } from "framer-motion";

export default function ProblemStatement() {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Fragmented Solutions",
      description: "Developers waste time building crowdfunding infrastructure from scratch instead of focusing on their core business.",
      color: "text-red-600",
      bgColor: "bg-red-100",
    },
    {
      icon: Clock,
      title: "Slow Time-to-Market",
      description: "Complex integrations and compliance requirements delay product launches and limit innovation.",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    {
      icon: DollarSign,
      title: "Capital Access Barriers",
      description: "Traditional funding channels exclude innovative projects and emerging creator economies.",
      color: "text-blue-600",
      bgColor: "bg-blue-100",
    },
  ];

  return (
    <section className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            The Essence of Work is Changing
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Traditional funding models can't keep up with the pace of innovation. Creators, builders, and entrepreneurs need modern tools to access capital and build sustainable businesses.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="h-full">
                <CardContent className="p-8">
                  <div className={`w-12 h-12 ${problem.bgColor} rounded-lg flex items-center justify-center mb-6`}>
                    <problem.icon className={`${problem.color} h-6 w-6`} />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{problem.title}</h3>
                  <p className="text-gray-600">{problem.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
