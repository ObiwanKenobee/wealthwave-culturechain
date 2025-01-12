import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { Header } from "@/components/Dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import { Infinity, TrendingUp, DollarSign, Percent } from "lucide-react";

const PerpetualFunds = () => {
  const funds = [
    {
      name: "Global Growth Fund",
      value: 1250000,
      returns: 12.5,
      yield: 8.2,
      risk: "Moderate",
    },
    {
      name: "Technology Innovation",
      value: 750000,
      returns: 15.8,
      yield: 6.5,
      risk: "High",
    },
    {
      name: "Sustainable Future",
      value: 500000,
      returns: 9.3,
      yield: 7.8,
      risk: "Low",
    },
  ];

  const performanceData = [
    { month: "Jan", value: 100 },
    { month: "Feb", value: 120 },
    { month: "Mar", value: 115 },
    { month: "Apr", value: 130 },
    { month: "May", value: 145 },
    { month: "Jun", value: 160 },
  ];

  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">Perpetual Funds</h1>
              <Button>
                <Infinity className="mr-2 h-4 w-4" />
                Create New Fund
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {funds.map((fund, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="text-lg">{fund.name}</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Fund Value</p>
                        <p className="text-xl font-bold">${fund.value.toLocaleString()}</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Annual Returns</p>
                        <p className="text-xl font-bold text-green-600">+{fund.returns}%</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-sm text-gray-500">Yield</p>
                        <p className="font-semibold">{fund.yield}%</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500">Risk Level</p>
                        <p className="font-semibold">{fund.risk}</p>
                      </div>
                    </div>
                    <Button className="w-full">Manage Fund</Button>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card>
              <CardHeader>
                <CardTitle>Performance Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="h-[300px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={performanceData}>
                      <XAxis dataKey="month" />
                      <YAxis />
                      <Tooltip />
                      <Line
                        type="monotone"
                        dataKey="value"
                        stroke="#1E40AF"
                        strokeWidth={2}
                      />
                    </LineChart>
                  </ResponsiveContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </main>
      </div>
    </div>
  );
};

export default PerpetualFunds;