import { Menu, Search, User, Settings, LogOut } from "lucide-react";
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
          <a href="/workspace/dashboard" className="flex items-center space-x-2">
            <span className="font-bold">QuantumVest</span>
          </a>
        </div>

        <NavigationMenu className="hidden md:flex">
          <NavigationMenuList>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Portfolio</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-3">
                    <a href="#" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Overview</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">View your portfolio performance</div>
                    </a>
                    <a href="#" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Assets</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">Manage your investments</div>
                    </a>
                  </div>
                </div>
              </NavigationMenuContent>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuTrigger>Markets</NavigationMenuTrigger>
              <NavigationMenuContent>
                <div className="grid gap-3 p-4 w-[400px]">
                  <div className="grid grid-cols-2 gap-3">
                    <a href="#" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Explore</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">Discover new investment opportunities</div>
                    </a>
                    <a href="#" className="group grid h-auto w-full items-center justify-start gap-1 rounded-md bg-transparent p-4 hover:bg-accent">
                      <div className="font-medium group-hover:text-accent-foreground">Watchlist</div>
                      <div className="text-sm text-muted-foreground group-hover:text-accent-foreground">Track your favorite assets</div>
                    </a>
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
          <Button variant="ghost" size="icon">
            <Settings className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon">
            <User className="h-5 w-5" />
          </Button>
          <Button variant="ghost" size="icon" className="text-red-500">
            <LogOut className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </header>
  );
};