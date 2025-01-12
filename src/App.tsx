import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import WorkspaceDashboard from "./pages/workspace/dashboard";
import PortfolioOverview from "./pages/workspace/portfolio-overview";
import TokenizedAssets from "./pages/workspace/tokenized-assets";
import AIAdvisor from "./pages/workspace/ai-advisor";
import Crowdfunding from "./pages/workspace/crowdfunding";
import PerpetualFunds from "./pages/workspace/perpetual-funds";
import InsightsForum from "./pages/workspace/insights-forum";
import Wallet from "./pages/workspace/wallet";
import Markets from "./pages/workspace/markets";
import Explore from "./pages/workspace/explore";
import Watchlist from "./pages/workspace/watchlist";
import Settings from "./pages/workspace/settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/workspace">
            <Route path="dashboard" element={<WorkspaceDashboard />} />
            <Route path="portfolio" element={<PortfolioOverview />} />
            <Route path="assets" element={<TokenizedAssets />} />
            <Route path="advisor" element={<AIAdvisor />} />
            <Route path="crowdfunding" element={<Crowdfunding />} />
            <Route path="funds" element={<PerpetualFunds />} />
            <Route path="insights" element={<InsightsForum />} />
            <Route path="wallet" element={<Wallet />} />
            <Route path="markets" element={<Markets />} />
            <Route path="explore" element={<Explore />} />
            <Route path="watchlist" element={<Watchlist />} />
            <Route path="settings" element={<Settings />} />
            <Route index element={<Navigate to="dashboard" replace />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;