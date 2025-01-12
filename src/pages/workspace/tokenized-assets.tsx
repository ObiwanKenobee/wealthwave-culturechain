import { DashboardNav } from "@/components/Dashboard/DashboardNav";
import { AssetCard } from "@/components/Dashboard/AssetCard";
import { Button } from "@/components/ui/button";
import { PlusCircle, Filter } from "lucide-react";

const TokenizedAssets = () => {
  const assets = [
    {
      name: "Manhattan Real Estate Fund",
      value: 50000,
      change: 12.5,
      type: "Real Estate",
    },
    {
      name: "Digital Art Collection",
      value: 25000,
      change: 8.3,
      type: "NFT",
    },
    {
      name: "Green Energy Infrastructure",
      value: 75000,
      change: 15.2,
      type: "Infrastructure",
    },
    {
      name: "Luxury Watch Portfolio",
      value: 30000,
      change: 5.7,
      type: "Luxury Assets",
    },
  ];

  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6 space-y-6">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Tokenized Assets</h1>
            <div className="space-x-2">
              <Button variant="outline" size="sm">
                <Filter className="mr-2 h-4 w-4" />
                Filter
              </Button>
              <Button size="sm">
                <PlusCircle className="mr-2 h-4 w-4" />
                Add Asset
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {assets.map((asset) => (
              <AssetCard
                key={asset.name}
                name={asset.name}
                value={asset.value}
                change={asset.change}
                type={asset.type}
                onEdit={() => console.log(`Edit ${asset.name}`)}
                onDelete={() => console.log(`Delete ${asset.name}`)}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default TokenizedAssets;