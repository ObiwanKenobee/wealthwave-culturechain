import { DashboardNav } from "@/components/Dashboard/DashboardNav";

const Crowdfunding = () => {
  return (
    <div className="flex h-screen bg-background">
      <DashboardNav />
      <main className="flex-1 overflow-y-auto">
        <div className="container mx-auto p-6">
          <h1 className="text-3xl font-bold">Crowdfunding Projects</h1>
          {/* Content will be implemented in future iterations */}
        </div>
      </main>
    </div>
  );
};

export default Crowdfunding;