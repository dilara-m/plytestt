import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Book, Github } from "lucide-react";
import { motion } from "framer-motion";

export default function DocsPreview() {
  const steps = [
    {
      number: 1,
      title: "Install the SDK",
      description: "Choose your preferred language and install via package manager.",
    },
    {
      number: 2,
      title: "Configure API Keys",
      description: "Set up your credentials and environment settings.",
    },
    {
      number: 3,
      title: "Create Your First Campaign",
      description: "Launch a crowdfunding campaign with just a few lines of code.",
    },
  ];

  const terminalCommands = [
    "$ npm install @ply/sdk",
    "✓ Installing Ply Network SDK...",
    "",
    "$ ply init",
    "✓ Project initialized successfully",
    "",
    "$ ply campaign create",
    "✓ Campaign created: camp_123abc",
  ];

  return (
    <section id="docs" className="py-20 bg-neutral-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-dark mb-6">
            Developer-First Experience
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive documentation, examples, and tools to get you building in minutes, not months.
          </p>
        </motion.div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-6">Get Started in Minutes</h3>
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start"
                >
                  <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white text-sm font-semibold mr-4 mt-1">
                    {step.number}
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">{step.title}</h4>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <div className="mt-8 flex space-x-4">
              <Button className="bg-primary text-white hover:bg-primary/90">
                <Book className="w-4 h-4 mr-2" />
                View Documentation
              </Button>
              <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
                <Github className="w-4 h-4 mr-2" />
                GitHub Examples
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card>
              <CardContent className="p-6">
                <div className="bg-neutral-dark rounded-lg p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                    </div>
                    <span className="text-gray-400 ml-4 text-sm">terminal</span>
                  </div>
                  
                  <div className="font-mono text-sm">
                    {terminalCommands.map((command, index) => (
                      <div
                        key={index}
                        className={`mb-2 ${
                          command.startsWith("$") 
                            ? "text-yellow-400" 
                            : command.startsWith("✓") 
                            ? "text-gray-400" 
                            : "text-green-400"
                        }`}
                      >
                        {command}
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
