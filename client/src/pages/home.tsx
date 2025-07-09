import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ProblemStatement from "@/components/problem-statement";
import ValueProposition from "@/components/value-proposition";
import ProductShowcase from "@/components/product-showcase";
import Pricing from "@/components/pricing";
import UseCases from "@/components/use-cases";
import DocsPreview from "@/components/docs-preview";
import CallToAction from "@/components/cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <ProblemStatement />
      <ValueProposition />
      <ProductShowcase />
      <Pricing />
      <UseCases />
      <DocsPreview />
      <CallToAction />
      <Footer />
    </div>
  );
}
