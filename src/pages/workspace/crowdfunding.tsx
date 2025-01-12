import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { Header } from "@/components/Dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { HandCoins, Users, Clock, Target } from "lucide-react";

const Crowdfunding = () => {
  const projects = [
    {
      title: "Green Energy Initiative",
      description: "Solar power plant development in emerging markets",
      raised: 750000,
      goal: 1000000,
      investors: 156,
      daysLeft: 15,
      category: "Renewable Energy",
    },
    {
      title: "Urban Real Estate Fund",
      description: "Premium commercial properties in metropolitan areas",
      raised: 2500000,
      goal: 5000000,
      investors: 89,
      daysLeft: 30,
      category: "Real Estate",
    },
    {
      title: "Tech Startup Accelerator",
      description: "Supporting innovative AI and blockchain startups",
      raised: 450000,
      goal: 1500000,
      investors: 67,
      daysLeft: 45,
      category: "Technology",
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
              <h1 className="text-3xl font-bold">Crowdfunding Projects</h1>
              <Button>
                <HandCoins className="mr-2 h-4 w-4" />
                Launch Project
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
                        {project.category}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <p className="text-gray-600">{project.description}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span>Progress</span>
                        <span className="font-medium">
                          ${project.raised.toLocaleString()} / ${project.goal.toLocaleString()}
                        </span>
                      </div>
                      <Progress value={(project.raised / project.goal) * 100} />
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div className="flex items-center">
                        <Users className="mr-2 h-4 w-4 text-gray-500" />
                        <span>{project.investors}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-gray-500" />
                        <span>{project.daysLeft} days</span>
                      </div>
                      <div className="flex items-center">
                        <Target className="mr-2 h-4 w-4 text-gray-500" />
                        <span>{Math.round((project.raised / project.goal) * 100)}%</span>
                      </div>
                    </div>

                    <Button className="w-full">Invest Now</Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Crowdfunding;