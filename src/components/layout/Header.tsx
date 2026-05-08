import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, Search, Bell, LogOut, User as UserIcon, Settings as SettingsIcon } from "lucide-react";
import { getCurrentUser, logoutCurrentUser } from "@/utils/authUtils";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  const handleLogout = () => {
    logoutCurrentUser();
    navigate("/login");
  };

  const initials = user
    ? user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)
    : "G";

  return (
    <header className="sticky top-0 z-30 w-full border-b border-border/60 bg-background/75 backdrop-blur-xl">
      <div className="flex h-16 items-center gap-4 px-6">
        {/* Search */}
        <div className="hidden md:flex flex-1 max-w-md">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search courses, notices, events…"
              className="w-full h-10 pl-10 pr-12 rounded-xl bg-muted/60 border border-transparent text-sm text-foreground placeholder:text-muted-foreground/70
                         focus:outline-none focus:bg-card focus:border-border focus:ring-2 focus:ring-brand-500/20 transition-all"
            />
            <kbd className="hidden lg:flex absolute right-3 top-1/2 -translate-y-1/2 items-center gap-0.5 h-5 px-1.5 rounded-md bg-card border border-border text-[10px] font-mono text-muted-foreground">
              ⌘K
            </kbd>
          </div>
        </div>

        <div className="flex-1 md:hidden" />

        <div className="flex items-center gap-1.5">
          {/* Notifications */}
          <Button
            variant="ghost"
            size="icon"
            className="relative h-10 w-10 rounded-xl hover:bg-muted text-foreground/70 hover:text-foreground"
            aria-label="Notifications"
          >
            <Bell size={18} />
            <span className="absolute top-2 right-2 flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
            </span>
          </Button>

          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-10 w-10 rounded-xl hover:bg-muted text-foreground/70 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          <div className="h-6 w-px bg-border mx-1.5 hidden sm:block" />

          {/* User menu */}
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <button className="flex items-center gap-2.5 h-10 pl-1 pr-3 rounded-xl hover:bg-muted transition-colors group">
                  <div className="w-8 h-8 rounded-full bg-brand-gradient flex items-center justify-center text-white text-xs font-bold shadow-sm">
                    {initials}
                  </div>
                  <div className="hidden sm:block text-left leading-tight">
                    <p className="text-sm font-semibold">{user.name.split(" ")[0]}</p>
                    <p className="text-[11px] text-muted-foreground capitalize">{user.role}</p>
                  </div>
                </button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="w-56 rounded-xl">
                <DropdownMenuLabel className="font-normal">
                  <p className="text-sm font-semibold">{user.name}</p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem className="cursor-pointer">
                  <UserIcon className="mr-2 h-4 w-4" />
                  Profile
                </DropdownMenuItem>
                <DropdownMenuItem asChild className="cursor-pointer">
                  <Link to="/settings">
                    <SettingsIcon className="mr-2 h-4 w-4" />
                    Settings
                  </Link>
                </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem onClick={handleLogout} className="cursor-pointer text-destructive focus:text-destructive">
                  <LogOut className="mr-2 h-4 w-4" />
                  Log out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <Button onClick={() => navigate("/login")} className="bg-brand-gradient hover:opacity-90 text-white shadow-glow-brand rounded-xl h-10">
              Sign in
            </Button>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
