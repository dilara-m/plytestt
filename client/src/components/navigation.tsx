import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Layers3 } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "#products", label: "Products" },
    { href: "#pricing", label: "Pricing" },
    { href: "#docs", label: "Docs" },
    { href: "#use-cases", label: "Use Cases" },
    { href: "#support", label: "Support" },
  ];

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <nav className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <div className="flex-shrink-0 flex items-center">
              <Layers3 className="text-primary text-2xl mr-3" />
              <span className="text-xl font-bold text-neutral-dark">Ply</span>
            </div>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.href}
                  onClick={() => handleNavClick(item.href)}
                  className="text-gray-600 hover:text-primary transition-colors"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-600 hover:text-primary">
              Sign In
            </Button>
            <Button className="bg-primary text-white hover:bg-primary/90">
              Start Building
            </Button>
          </div>
          
          <div className="md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent>
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    <button
                      key={item.href}
                      onClick={() => handleNavClick(item.href)}
                      className="text-left text-gray-600 hover:text-primary transition-colors py-2"
                    >
                      {item.label}
                    </button>
                  ))}
                  <div className="flex flex-col space-y-2 mt-8">
                    <Button variant="ghost" className="justify-start">
                      Sign In
                    </Button>
                    <Button className="bg-primary text-white hover:bg-primary/90">
                      Start Building
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
