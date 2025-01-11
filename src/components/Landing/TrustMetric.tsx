import { ReactNode } from "react";
import { Card, CardContent } from "@/components/ui/card";

interface TrustMetricProps {
  icon: ReactNode;
  value: string;
  label: string;
}

export const TrustMetric = ({ icon, value, label }: TrustMetricProps) => {
  return (
    <Card className="text-center hover:shadow-lg transition-all duration-300">
      <CardContent className="pt-6">
        <div className="flex flex-col items-center">
          <div className="mb-4 text-primary">{icon}</div>
          <div className="text-3xl font-bold mb-2">{value}</div>
          <div className="text-gray-600">{label}</div>
        </div>
      </CardContent>
    </Card>
  );
};