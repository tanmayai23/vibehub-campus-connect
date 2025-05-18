
import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Moon, Sun, LogIn } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface HeaderProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Header: React.FC<HeaderProps> = ({ toggleTheme, isDarkMode }) => {
  const { toast } = useToast();
  
  const handleLoginClick = () => {
    toast({
      title: "Login Feature",
      description: "The login functionality would be implemented here.",
    });
  };

  return (
    <header className="sticky top-0 z-30 w-full bg-white/80 dark:bg-vibe-dark-background-primary/80 backdrop-blur-md border-b border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary">
      <div className="flex h-16 items-center justify-between px-6">
        <div className="lg:hidden">
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-vibe-accent-blue rounded-lg flex items-center justify-center">
              <span className="text-white font-bold">V</span>
            </div>
          </Link>
        </div>
        
        <div className="hidden md:flex flex-1 items-center justify-center">
          <nav className="flex items-center space-x-1">
            <Link to="/" className="px-4 py-2 text-vibe-text-primary dark:text-vibe-dark-text-primary hover:bg-vibe-background-secondary dark:hover:bg-vibe-dark-background-secondary rounded-md transition-colors">
              Home
            </Link>
            <Link to="/community" className="px-4 py-2 text-vibe-text-primary dark:text-vibe-dark-text-primary hover:bg-vibe-background-secondary dark:hover:bg-vibe-dark-background-secondary rounded-md transition-colors">
              Community
            </Link>
            <Link to="/complaint" className="px-4 py-2 text-vibe-text-primary dark:text-vibe-dark-text-primary hover:bg-vibe-background-secondary dark:hover:bg-vibe-dark-background-secondary rounded-md transition-colors">
              Complaint
            </Link>
          </nav>
        </div>
        
        <div className="flex items-center space-x-4">
          <Button 
            variant="ghost" 
            size="icon"
            onClick={toggleTheme}
            className="rounded-full"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          <Button 
            variant="default"
            className="bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90"
            onClick={handleLoginClick}
          >
            <LogIn className="mr-2 h-4 w-4" />
            Login
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
