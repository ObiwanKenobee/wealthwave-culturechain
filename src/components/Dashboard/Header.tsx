import { Menu, Search, User, Settings, LogOut, Briefcase, Package, ChartLine, Compass, Eye } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  return (
    <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-14 items-center">
        <div className="mr-4 flex">
          <Button variant="ghost" size="icon" className="mr-2">
            <Menu className="h-5 w-5" />
          </Button>
          <Link to="/workspace/dashboard" className="flex items-center space-x-2">
            <span className="font-bold">QuantumVest</span>
          </Link>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Briefcase className="mr-2 h-4 w-4" />
                Portfolio
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/workspace/portfolio" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Overview</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">View your portfolio performance</div>
                    </Link>
                    <Link to="/workspace/assets" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Assets</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">Manage your investments</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <ChartLine className="mr-2 h-4 w-4" />
                Markets
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/workspace/markets" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Market Overview</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">Track global market trends</div>
                    </Link>
                    <Link to="/workspace/markets/analysis" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Analysis</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">In-depth market analysis</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Compass className="mr-2 h-4 w-4" />
                Explore
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/workspace/explore" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Discover</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">Find new investment opportunities</div>
                    </Link>
                    <Link to="/workspace/explore/trending" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Trending</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">Popular investment options</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>

            <NavigationMenuItem>
              <NavigationMenuTrigger>
                <Eye className="mr-2 h-4 w-4" />
                Watchlist
              </NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-3">
                    <Link to="/workspace/watchlist" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">My Watchlist</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">View tracked investments</div>
                    </Link>
                    <Link to="/workspace/watchlist/alerts" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Alerts</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">Manage price alerts</div>
                    </Link>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>

        <div className="flex flex-1 items-center justify-end space-x-2">
          <Button variant="ghost" size="icon">
            <Search className="h-5 w-5" />
          </Button>
          <Link to="/workspace/settings">
            <Button variant="ghost" size="icon">
              <Settings className="h-5 w-5" />
            </Button>
          </Link>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Link to="/">
            <Button variant="ghost" size="icon" className="text-red-500">
              <LogOut className="h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
};