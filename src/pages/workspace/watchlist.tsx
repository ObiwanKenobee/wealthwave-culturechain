import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { Header } from "@/components/Dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Bell, Eye, Trash2 } from "lucide-react";

const Watchlist = () => {
  const watchlistItems = [
    { name: "Bitcoin", price: "$45,230", change: "+5.2%", alert: "$50,000" },
    { name: "Ethereum", price: "$3,120", change: "+3.8%", alert: "$3,500" },
    { name: "Tech Fund", price: "$89.50", change: "-1.2%", alert: "$85.00" },
    { name: "Real Estate Trust", price: "$125.75", change: "+2.1%", alert: "$130.00" },
  ];

  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Watchlist</h1>
              <Button>
                <Eye className="mr-2 h-4 w-4" />
                Add to Watchlist
              </Button>
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Watched Assets</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {watchlistItems.map((item) => (
                    <div key={item.name} className="flex items-center justify-between p-4 bg-secondary rounded-lg">
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-muted-foreground">Alert: {item.alert}</p>
                      </div>
                      <div className="flex items-center space-x-4">
                        <div className="text-right">
                          <p className="font-bold">{item.price}</p>
                          <p className={`text-sm ${
                            item.change.startsWith('+') ? 'text-green-600' : 'text-red-600'
                          }`}>
                            {item.change}
                          </p>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="outline" size="icon">
                            <Bell className="h-4 w-4" />
                          </Button>
                          <Button variant="outline" size="icon">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Price Alerts</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="p-4 bg-secondary rounded-lg">
                    <h3 className="font-medium">Active Alerts</h3>
                    <div className="mt-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span>Bitcoin above $50,000</span>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex justify-between items-center">
                        <span>Ethereum above $3,500</span>
                        <Button variant="outline" size="sm">
                          <Bell className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Watchlist;