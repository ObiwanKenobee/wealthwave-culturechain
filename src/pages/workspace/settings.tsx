import { Header } from "@/components/Dashboard/Header";
import { Card } from "@/components/ui/card";

const Settings = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container mx-auto p-4 md:p-8 space-y-6">
        <h1 className="text-3xl font-bold">Settings</h1>
        <div className="grid gap-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Account Settings</h2>
            <p className="text-muted-foreground">
              Manage your account preferences and settings
            </p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Notification Preferences</h2>
            <p className="text-muted-foreground">
              Configure how you receive updates and alerts
            </p>
          </Card>
          
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Security</h2>
            <p className="text-muted-foreground">
              Update your security settings and preferences
            </p>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Settings;