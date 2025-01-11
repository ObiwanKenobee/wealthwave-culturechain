import { PortfolioOverview } from "@/components/Dashboard/PortfolioOverview";
import { AssetCard } from "@/components/Dashboard/AssetCard";
import { RecommendationCard } from "@/components/Dashboard/RecommendationCard";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container py-8">
        <h1 className="text-4xl font-bold mb-8">Welcome to QuantumVest</h1>
        
        <div className="grid gap-6 mb-8">
          <PortfolioOverview />
        </div>

        <h2 className="text-2xl font-semibold mb-4">Your Assets</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <AssetCard
            name="US Tech Fund"
            value={25000}
            change={2.5}
            type="Fund"
          />
          <AssetCard
            name="Real Estate Token"
            value={15000}
            change={1.8}
            type="Property"
          />
          <AssetCard
            name="Global ETF"
            value={10000}
            change={3.2}
            type="ETF"
          />
        </div>

        <h2 className="text-2xl font-semibold mb-4">AI Recommendations</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <RecommendationCard
            title="Emerging Markets Fund"
            description="Diversify your portfolio with high-growth potential markets in Asia and Latin America."
            expectedReturn="12-15% p.a."
            risk="Moderate"
          />
          <RecommendationCard
            title="Green Energy Portfolio"
            description="Sustainable investments in renewable energy companies with strong growth prospects."
            expectedReturn="8-10% p.a."
            risk="Low"
          />
        </div>
      </div>
    </div>
  );
};

export default Index;