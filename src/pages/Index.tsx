import { Button } from "@/components/ui/button";
import { Globe, TrendingUp, Users, DollarSign, Brain, ChartBar } from "lucide-react";
import { FeatureCard } from "@/components/Landing/FeatureCard";
import { TrustMetric } from "@/components/Landing/TrustMetric";
import { useToast } from "@/hooks/use-toast";

const Index = () => {
  const { toast } = useToast();

  const handleGetStarted = () => {
    toast({
      title: "Welcome to QuantumVest!",
      description: "Sign up feature coming soon.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Hero Section */}
      <section className="container px-4 pt-20 pb-16 text-center">
        <h1 className="text-5xl font-bold text-primary mb-4 animate-fade-in">
          Democratizing Global Wealth
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto animate-fade-in">
          Invest in tokenized assets, perpetual funds, and culturally-aligned opportunities
        </p>
        <div className="flex gap-4 justify-center mb-16 animate-fade-in">
          <Button size="lg" onClick={handleGetStarted}>
            Get Started
          </Button>
          <Button size="lg" variant="outline">
            Learn More
          </Button>
        </div>
      </section>

      {/* Feature Highlights */}
      <section className="container px-4 py-16 bg-white">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Transforming Global Investment
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Globe className="w-8 h-8 text-primary" />}
            title="Tokenized Assets"
            description="Access fractional ownership of premium global assets through blockchain technology"
          />
          <FeatureCard
            icon={<Brain className="w-8 h-8 text-primary" />}
            title="AI-Powered Insights"
            description="Get personalized investment recommendations powered by advanced AI"
          />
          <FeatureCard
            icon={<ChartBar className="w-8 h-8 text-primary" />}
            title="Perpetual Funds"
            description="Invest in long-term wealth generation through innovative fund structures"
          />
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="container px-4 py-16 bg-gray-50">
        <h2 className="text-3xl font-semibold text-center mb-12">
          Trusted by Global Investors
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <TrustMetric
            icon={<DollarSign className="w-8 h-8" />}
            value="$1B+"
            label="Assets Under Management"
          />
          <TrustMetric
            icon={<Users className="w-8 h-8" />}
            value="100K+"
            label="Active Investors"
          />
          <TrustMetric
            icon={<TrendingUp className="w-8 h-8" />}
            value="15%"
            label="Average Annual Return"
          />
        </div>
      </section>
    </div>
  );
};

export default Index;