import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowUpRight, TrendingUp, Edit2, Trash2 } from "lucide-react";

interface AssetCardProps {
  name: string;
  value: number;
  change: number;
  type: string;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const AssetCard = ({ 
  name, 
  value, 
  change, 
  type,
  onEdit,
  onDelete 
}: AssetCardProps) => {
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
        {(onEdit || onDelete) && (
          <div className="flex justify-end space-x-2 mt-4">
            {onEdit && (
              <Button variant="outline" size="icon" onClick={onEdit}>
                <Edit2 className="h-4 w-4" />
              </Button>
            )}
            {onDelete && (
              <Button variant="outline" size="icon" onClick={onDelete}>
                <Trash2 className="h-4 w-4" />
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};