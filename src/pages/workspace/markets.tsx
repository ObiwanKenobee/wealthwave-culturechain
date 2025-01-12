import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { Header } from "@/components/Dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const marketData = [
  { date: "Jan", btc: 45000, eth: 3000, sol: 140 },
  { date: "Feb", btc: 48000, eth: 3200, sol: 150 },
  { date: "Mar", btc: 42000, eth: 2800, sol: 130 },
  { date: "Apr", btc: 46000, eth: 3100, sol: 145 },
  { date: "May", btc: 50000, eth: 3400, sol: 160 },
];

const Markets = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Market Overview</h1>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Cryptocurrency Markets</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-[300px]">
                    <ResponsiveContainer width="100%" height="100%">
                      <LineChart data={marketData}>
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Line type="monotone" dataKey="btc" stroke="#1E40AF" name="Bitcoin" />
                        <Line type="monotone" dataKey="eth" stroke="#047857" name="Ethereum" />
                        <Line type="monotone" dataKey="sol" stroke="#7C3AED" name="Solana" />
                      </LineChart>
                    </ResponsiveContainer>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Market Statistics</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                      <span className="font-medium">Total Market Cap</span>
                      <span className="text-lg font-bold">$2.1T</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                      <span className="font-medium">24h Volume</span>
                      <span className="text-lg font-bold">$84.5B</span>
                    </div>
                    <div className="flex justify-between items-center p-4 bg-secondary rounded-lg">
                      <span className="font-medium">BTC Dominance</span>
                      <span className="text-lg font-bold">42.3%</span>
                    </div>
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

export default Markets;