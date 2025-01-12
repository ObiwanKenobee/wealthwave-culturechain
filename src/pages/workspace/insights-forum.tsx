import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { Header } from "@/components/Dashboard/Header";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MessageSquare, TrendingUp, Users, Calendar } from "lucide-react";

const InsightsForum = () => {
  const discussions = [
    {
      title: "Impact of AI on Investment Strategies",
      author: "Sarah Chen",
      replies: 24,
      views: 156,
      category: "Technology",
      lastActive: "2 hours ago",
    },
    {
      title: "Sustainable Investing Trends 2024",
      author: "Michael Roberts",
      replies: 18,
      views: 203,
      category: "ESG",
      lastActive: "5 hours ago",
    },
    {
      title: "Real Estate Market Analysis Q1",
      author: "David Kim",
      replies: 31,
      views: 289,
      category: "Real Estate",
      lastActive: "1 day ago",
    },
  ];

  const upcomingEvents = [
    {
      title: "Crypto Market Outlook",
      date: "March 15, 2024",
      time: "2:00 PM EST",
      speaker: "Alex Johnson",
      attendees: 89,
    },
    {
      title: "ESG Investment Workshop",
      date: "March 20, 2024",
      time: "11:00 AM EST",
      speaker: "Emma Williams",
      attendees: 124,
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
              <h1 className="text-3xl font-bold">Insights Forum</h1>
              <div className="space-x-2">
                <Button variant="outline">
                  <Calendar className="mr-2 h-4 w-4" />
                  Join Event
                </Button>
                <Button>
                  <MessageSquare className="mr-2 h-4 w-4" />
                  New Discussion
                </Button>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2 space-y-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Latest Discussions</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {discussions.map((discussion, index) => (
                        <div
                          key={index}
                          className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <div className="flex justify-between items-start">
                            <div>
                              <h3 className="font-medium text-lg">{discussion.title}</h3>
                              <p className="text-sm text-gray-500">
                                Posted by {discussion.author} • {discussion.lastActive}
                              </p>
                            </div>
                            <span className="text-sm font-medium px-2 py-1 bg-blue-100 text-blue-700 rounded">
                              {discussion.category}
                            </span>
                          </div>
                          <div className="mt-2 flex items-center space-x-4 text-sm text-gray-500">
                            <span className="flex items-center">
                              <MessageSquare className="mr-1 h-4 w-4" />
                              {discussion.replies} replies
                            </span>
                            <span className="flex items-center">
                              <Users className="mr-1 h-4 w-4" />
                              {discussion.views} views
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle>Upcoming Events</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {upcomingEvents.map((event, index) => (
                        <div
                          key={index}
                          className="p-4 border rounded-lg hover:bg-gray-50 transition-colors"
                        >
                          <h3 className="font-medium">{event.title}</h3>
                          <div className="mt-2 space-y-1 text-sm text-gray-500">
                            <p className="flex items-center">
                              <Calendar className="mr-2 h-4 w-4" />
                              {event.date} at {event.time}
                            </p>
                            <p className="flex items-center">
                              <Users className="mr-2 h-4 w-4" />
                              {event.speaker} • {event.attendees} attendees
                            </p>
                          </div>
                          <Button className="mt-2 w-full" variant="outline">
                            Register
                          </Button>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Trending Topics</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                        <span className="flex items-center">
                          <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                          Artificial Intelligence
                        </span>
                        <span className="text-sm text-gray-500">24 posts</span>
                      </div>
                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                        <span className="flex items-center">
                          <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                          Sustainable Energy
                        </span>
                        <span className="text-sm text-gray-500">18 posts</span>
                      </div>
                      <div className="flex items-center justify-between p-2 hover:bg-gray-50 rounded-lg">
                        <span className="flex items-center">
                          <TrendingUp className="mr-2 h-4 w-4 text-green-500" />
                          DeFi Innovation
                        </span>
                        <span className="text-sm text-gray-500">15 posts</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default InsightsForum;