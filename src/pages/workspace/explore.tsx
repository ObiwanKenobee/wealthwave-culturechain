import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { Header } from "@/components/Dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Compass, TrendingUp, Star } from "lucide-react";

const Explore = () => {
  const trendingAssets = [
    { name: "Green Energy Fund", type: "ESG", return: "+15.2%", popularity: "High" },
    { name: "Tech Growth ETF", type: "ETF", return: "+8.7%", popularity: "Medium" },
    { name: "Real Estate Trust", type: "REIT", return: "+12.3%", popularity: "High" },
    { name: "AI Innovation Fund", type: "Technology", return: "+21.5%", popularity: "Very High" },
  ];

  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Explore Investments</h1>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <TrendingUp className="mr-2 h-5 w-5" />
                    Trending Assets
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {trendingAssets.map((asset) => (
                      <div key={asset.name} className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                        <div>
                          <h3 className="font-medium">{asset.name}</h3>
                          <p className="text-sm text-muted-foreground">{asset.type}</p>
                        </div>
                        <div className="text-right">
                          <p className="text-green-600 font-bold">{asset.return}</p>
                          <p className="text-sm text-muted-foreground">{asset.popularity}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Star className="mr-2 h-5 w-5" />
                    Featured Opportunities
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="p-4 bg-secondary rounded-lg">
                      <h3 className="font-medium">Sustainable Infrastructure Fund</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Investment in renewable energy infrastructure projects
                      </p>
                      <Button className="w-full mt-4">Learn More</Button>
                    </div>
                    <div className="p-4 bg-secondary rounded-lg">
                      <h3 className="font-medium">Digital Art Collection</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        Curated NFT art portfolio with established artists
                      </p>
                      <Button className="w-full mt-4">Learn More</Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Compass className="mr-2 h-5 w-5" />
                    Discover
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <Button variant="outline" className="w-full justify-start">
                      🌱 ESG Investments
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      💎 Premium Assets
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🏢 Real Estate
                    </Button>
                    <Button variant="outline" className="w-full justify-start">
                      🤖 Technology
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Explore;