import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { Header } from "@/components/Dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Brain, MessageSquare, TrendingUp, AlertTriangle } from "lucide-react";

const AIAdvisor = () => {
  const insights = [
    {
      title: "Portfolio Risk Analysis",
      description: "Your portfolio shows moderate risk with potential for optimization in emerging markets.",
      type: "risk",
    },
    {
      title: "Market Opportunity",
      description: "Consider increasing exposure to renewable energy sector based on current trends.",
      type: "opportunity",
    },
    {
      title: "Rebalancing Suggestion",
      description: "Portfolio slightly overweight in technology. Consider diversifying into value stocks.",
      type: "suggestion",
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="flex-1 overflow-y-auto">
          <div className="container mx-auto p-6 space-y-6">
            <div className="flex justify-between items-center">
              <h1 className="text-3xl font-bold">AI Advisor</h1>
              <Button>
                <MessageSquare className="mr-2 h-4 w-4" />
                Chat with AI
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {insights.map((insight, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <CardTitle className="flex items-center text-lg">
                      {insight.type === "risk" && <AlertTriangle className="mr-2 h-5 w-5 text-yellow-500" />}
                      {insight.type === "opportunity" && <TrendingUp className="mr-2 h-5 w-5 text-green-500" />}
                      {insight.type === "suggestion" && <Brain className="mr-2 h-5 w-5 text-blue-500" />}
                      {insight.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{insight.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Card className="mt-6">
              <CardHeader>
                <CardTitle>AI Chat History</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p className="font-semibold">You</p>
                    <p className="text-gray-600">What are the current market trends in renewable energy?</p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg">
                    <p className="font-semibold text-blue-700">AI Advisor</p>
                    <p className="text-gray-600">Based on current data, renewable energy stocks are showing strong momentum, particularly in solar and wind sectors. Consider exploring ETFs focused on clean energy for diversified exposure.</p>
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

export default AIAdvisor;