import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface RecommendationCardProps {
  title: string;
  description: string;
  expectedReturn: string;
  risk: string;
}

export const RecommendationCard = ({
  title,
  description,
  expectedReturn,
  risk,
}: RecommendationCardProps) => {
  return (
    <Card className="hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-lg">{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-sm text-gray-600 mb-4">{description}</p>
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <p className="text-sm text-gray-500">Expected Return</p>
            <p className="font-semibold">{expectedReturn}</p>
          </div>
          <div>
            <p className="text-sm text-gray-500">Risk Level</p>
            <p className="font-semibold">{risk}</p>
          </div>
        </div>
        <Button className="w-full">
          Learn More
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardContent>
    </Card>
  );
};