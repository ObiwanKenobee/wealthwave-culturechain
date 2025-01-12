import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import WorkspaceDashboard from "./pages/workspace/dashboard";
import PortfolioOverview from "./pages/workspace/portfolio-overview";
import TokenizedAssets from "./pages/workspace/tokenized-assets";
import AIAdvisor from "./pages/workspace/ai-advisor";
import Crowdfunding from "./pages/workspace/crowdfunding";
import PerpetualFunds from "./pages/workspace/perpetual-funds";
import InsightsForum from "./pages/workspace/insights-forum";
import Wallet from "./pages/workspace/wallet";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workspace/dashboard" element={<WorkspaceDashboard />} />
          <Route path="/workspace/dashboard/portfolio" element={<PortfolioOverview />} />
          <Route path="/workspace/dashboard/assets" element={<TokenizedAssets />} />
          <Route path="/workspace/dashboard/advisor" element={<AIAdvisor />} />
          <Route path="/workspace/dashboard/crowdfunding" element={<Crowdfunding />} />
          <Route path="/workspace/dashboard/funds" element={<PerpetualFunds />} />
          <Route path="/workspace/dashboard/insights" element={<InsightsForum />} />
          <Route path="/workspace/dashboard/wallet" element={<Wallet />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;