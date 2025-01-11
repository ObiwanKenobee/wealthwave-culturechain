import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight, TrendingUp } from "lucide-react";

interface AssetCardProps {
  name: string;
  value: number;
  change: number;
  type: string;
}

export const AssetCard = ({ name, value, change, type }: AssetCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{name}</CardTitle>
        <Badge variant="secondary">{type}</Badge>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">${value.toLocaleString()}</div>
        <div className="flex items-center pt-1 text-green-600">
          <TrendingUp className="mr-1 h-4 w-4" />
          <span className="text-sm">+{change}%</span>
        </div>
      </CardContent>
    </Card>
  );
};