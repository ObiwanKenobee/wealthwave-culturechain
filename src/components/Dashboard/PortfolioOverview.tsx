import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { date: "Jan", value: 1000 },
  { date: "Feb", value: 1200 },
  { date: "Mar", value: 1100 },
  { date: "Apr", value: 1400 },
  { date: "May", value: 1300 },
  { date: "Jun", value: 1600 },
];

export const PortfolioOverview = () => {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Portfolio Value</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={data}>
              <XAxis dataKey="date" />
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
  );
};