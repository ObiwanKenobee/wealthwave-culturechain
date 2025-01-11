import { PortfolioOverview } from "@/components/Dashboard/PortfolioOverview";
import { AssetCard } from "@/components/Dashboard/AssetCard";
import { RecommendationCard } from "@/components/Dashboard/RecommendationCard";
import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { Button } from "@/components/ui/button";

const WorkspaceDashboard = () => {
  const assets = [
    {
      name: "Real Estate Fund",
      value: 50000,
      change: 2.5,
      type: "Property",
    },
    {
      name: "Tech Growth",
      value: 25000,
      change: 1.8,
      type: "Equity",
    },
    {
      name: "Green Energy",
      value: 15000,
      change: 3.2,
      type: "ESG",
    },
  ];

  const recommendations = [
    {
      title: "Diversification Opportunity",
      description: "Add exposure to emerging markets through our Global Growth Fund",
      expectedReturn: "12-15% APY",
      risk: "Moderate",
    },
    {
      title: "New Green Initiative",
      description: "Sustainable energy project with strong growth potential",
      expectedReturn: "8-10% APY",
      risk: "Low",
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Dashboard</h1>
            <div className="space-x-2">
              <Button variant="outline">Export</Button>
              <Button>Add Investment</Button>
            </div>
          </div>
          
          <div className="grid gap-6">
            <PortfolioOverview />
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {assets.map((asset) => (
                <AssetCard
                  key={asset.name}
                  name={asset.name}
                  value={asset.value}
                  change={asset.change}
                  type={asset.type}
                />
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {recommendations.map((recommendation) => (
                <RecommendationCard
                  key={recommendation.title}
                  title={recommendation.title}
                  description={recommendation.description}
                  expectedReturn={recommendation.expectedReturn}
                  risk={recommendation.risk}
                />
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WorkspaceDashboard;