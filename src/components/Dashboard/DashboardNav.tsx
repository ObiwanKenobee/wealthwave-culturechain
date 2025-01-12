import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  LayoutDashboard,
  Wallet,
  LineChart,
  Users,
  Settings,
  LogOut,
  Brain,
  HandCoins,
  Infinity,
  MessageSquare,
} from "lucide-react";

export const DashboardNav = () => {
  return (
    <nav className="flex flex-col space-y-2 p-4 bg-background border-r h-screen">
      <div className="mb-4">
        <h2 className="text-xl font-bold">QuantumVest</h2>
      </div>
      <Link to="/workspace/dashboard">
        <Button variant="ghost" className="w-full justify-start">
          <LayoutDashboard className="mr-2 h-4 w-4" />
          Overview
        </Button>
      </Link>
      <Link to="/workspace/portfolio">
        <Button variant="ghost" className="w-full justify-start">
          <LineChart className="mr-2 h-4 w-4" />
          Portfolio
        </Button>
      </Link>
      <Link to="/workspace/assets">
        <Button variant="ghost" className="w-full justify-start">
          <Wallet className="mr-2 h-4 w-4" />
          Assets
        </Button>
      </Link>
      <Link to="/workspace/advisor">
        <Button variant="ghost" className="w-full justify-start">
          <Brain className="mr-2 h-4 w-4" />
          AI Advisor
        </Button>
      </Link>
      <Link to="/workspace/crowdfunding">
        <Button variant="ghost" className="w-full justify-start">
          <HandCoins className="mr-2 h-4 w-4" />
          Crowdfunding
        </Button>
      </Link>
      <Link to="/workspace/funds">
        <Button variant="ghost" className="w-full justify-start">
          <Infinity className="mr-2 h-4 w-4" />
          Perpetual Funds
        </Button>
      </Link>
      <Link to="/workspace/insights">
        <Button variant="ghost" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4" />
          Insights
        </Button>
      </Link>
      <Link to="/workspace/wallet">
        <Button variant="ghost" className="w-full justify-start">
          <Wallet className="mr-2 h-4 w-4" />
          Wallet
        </Button>
      </Link>
      <div className="mt-auto">
        <Link to="/workspace/settings">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
        <Link to="/">
          <Button variant="ghost" className="w-full justify-start text-red-500">
            <LogOut className="mr-2 h-4 w-4" />
            Logout
          </Button>
        </Link>
      </div>
    </nav>
  );
};