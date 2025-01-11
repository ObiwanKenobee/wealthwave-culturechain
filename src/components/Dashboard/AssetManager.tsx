import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus, Edit2, Trash2 } from "lucide-react";

interface Asset {
  id: string;
  name: string;
  value: number;
  type: string;
  change: number;
}

export const AssetManager = () => {
  const [assets, setAssets] = useState<Asset[]>([]);
  const [editingAsset, setEditingAsset] = useState<Asset | null>(null);
  const [newAsset, setNewAsset] = useState({
    name: "",
    value: 0,
    type: "",
    change: 0,
  });

  const handleAddAsset = () => {
    const asset = {
      id: Date.now().toString(),
      ...newAsset,
    };
    setAssets([...assets, asset]);
    setNewAsset({ name: "", value: 0, type: "", change: 0 });
  };

  const handleUpdateAsset = (id: string) => {
    if (!editingAsset) return;
    setAssets(assets.map((asset) => 
      asset.id === id ? editingAsset : asset
    ));
    setEditingAsset(null);
  };

  const handleDeleteAsset = (id: string) => {
    setAssets(assets.filter((asset) => asset.id !== id));
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Asset Manager</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {/* Add New Asset Form */}
          <div className="grid grid-cols-4 gap-4">
            <Input
              placeholder="Asset Name"
              value={newAsset.name}
              onChange={(e) => setNewAsset({ ...newAsset, name: e.target.value })}
            />
            <Input
              type="number"
              placeholder="Value"
              value={newAsset.value}
              onChange={(e) => setNewAsset({ ...newAsset, value: Number(e.target.value) })}
            />
            <Input
              placeholder="Type"
              value={newAsset.type}
              onChange={(e) => setNewAsset({ ...newAsset, type: e.target.value })}
            />
            <Button onClick={handleAddAsset}>
              <Plus className="mr-2 h-4 w-4" />
              Add Asset
            </Button>
          </div>

          {/* Asset List */}
          <div className="space-y-2">
            {assets.map((asset) => (
              <div key={asset.id} className="flex items-center justify-between p-4 border rounded-lg">
                {editingAsset?.id === asset.id ? (
                  <>
                    <div className="flex-1 grid grid-cols-3 gap-4">
                      <Input
                        value={editingAsset.name}
                        onChange={(e) => setEditingAsset({ ...editingAsset, name: e.target.value })}
                      />
                      <Input
                        type="number"
                        value={editingAsset.value}
                        onChange={(e) => setEditingAsset({ ...editingAsset, value: Number(e.target.value) })}
                      />
                      <Input
                        value={editingAsset.type}
                        onChange={(e) => setEditingAsset({ ...editingAsset, type: e.target.value })}
                      />
                    </div>
                    <Button onClick={() => handleUpdateAsset(asset.id)} className="ml-4">
                      Save
                    </Button>
                  </>
                ) : (
                  <>
                    <div className="flex-1">
                      <h3 className="font-medium">{asset.name}</h3>
                      <p className="text-sm text-gray-500">
                        ${asset.value.toLocaleString()} - {asset.type}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => setEditingAsset(asset)}
                      >
                        <Edit2 className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleDeleteAsset(asset.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};