import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { PortfolioOverview as PortfolioChart } from "@/components/Dashboard/PortfolioOverview";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { PlusCircle, ArrowUpDown, Wallet } from "lucide-react";

const PortfolioOverview = () => {
  const portfolioStats = {
    totalValue: 125000,
    returns: 15.5,
    risk: "Moderate",
  };

  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Portfolio Overview</h1>
            <div className="space-x-2">
              <Button variant="outline" size="sm">
                <ArrowUpDown className="mr-2 h-4 w-4" />
                Adjust Allocations
              </Button>
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Funds
              </Button>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <Card>
              <CardHeader>
                <CardTitle>Total Value</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${portfolioStats.totalValue.toLocaleString()}</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Returns</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-green-600">+{portfolioStats.returns}%</div>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>Risk Level</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{portfolioStats.risk}</div>
              </CardContent>
            </Card>
          </div>

          <PortfolioChart />
        </div>
      </main>
    </div>
  );
};

export default PortfolioOverview;