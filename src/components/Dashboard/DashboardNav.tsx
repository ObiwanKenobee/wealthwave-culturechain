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
      <Link to="/workspace/dashboard/portfolio">
        <Button variant="ghost" className="w-full justify-start">
          <LineChart className="mr-2 h-4 w-4" />
          Portfolio
        </Button>
      </Link>
      <Link to="/workspace/dashboard/assets">
        <Button variant="ghost" className="w-full justify-start">
          <Wallet className="mr-2 h-4 w-4" />
          Assets
        </Button>
      </Link>
      <Link to="/workspace/dashboard/advisor">
        <Button variant="ghost" className="w-full justify-start">
          <Brain className="mr-2 h-4 w-4" />
          AI Advisor
        </Button>
      </Link>
      <Link to="/workspace/dashboard/crowdfunding">
        <Button variant="ghost" className="w-full justify-start">
          <HandCoins className="mr-2 h-4 w-4" />
          Crowdfunding
        </Button>
      </Link>
      <Link to="/workspace/dashboard/funds">
        <Button variant="ghost" className="w-full justify-start">
          <Infinity className="mr-2 h-4 w-4" />
          Perpetual Funds
        </Button>
      </Link>
      <Link to="/workspace/dashboard/insights">
        <Button variant="ghost" className="w-full justify-start">
          <MessageSquare className="mr-2 h-4 w-4" />
          Insights
        </Button>
      </Link>
      <Link to="/workspace/dashboard/wallet">
        <Button variant="ghost" className="w-full justify-start">
          <Wallet className="mr-2 h-4 w-4" />
          Wallet
        </Button>
      </Link>
      <div className="mt-auto">
        <Link to="/workspace/dashboard/settings">
          <Button variant="ghost" className="w-full justify-start">
            <Settings className="mr-2 h-4 w-4" />
            Settings
          </Button>
        </Link>
        <Button variant="ghost" className="w-full justify-start text-red-500">
          <LogOut className="mr-2 h-4 w-4" />
          Logout
        </Button>
      </div>
    </nav>
  );
};