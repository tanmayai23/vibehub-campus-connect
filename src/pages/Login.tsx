
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authenticateUser, saveCurrentUser } from "@/utils/authUtils";
import ThemeToggle from "@/components/ThemeToggle";
import { Moon, Sun } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const user = authenticateUser(email, password);
      
      if (user) {
        saveCurrentUser(user);
        
        toast({
          title: "Login successful",
          description: `Welcome back, ${user.name}`,
        });

        // Redirect based on user role
        switch (user.role) {
          case "student":
            navigate("/student");
            break;
          case "teacher":
            navigate("/teacher");
            break;
          case "college":
            navigate("/college");
            break;
          default:
            navigate("/");
        }
      } else {
        toast({
          title: "Login failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      toast({
        title: "Login error",
        description: "An unexpected error occurred. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="min-h-screen flex flex-col items-center justify-center bg-vibe-background-primary dark:bg-vibe-dark-background-primary p-4">
          <Button 
            variant="ghost" 
            size="icon" 
            onClick={toggleTheme} 
            className="absolute top-4 right-4 rounded-full"
          >
            {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
          </Button>
          
          <div className="w-full max-w-md animate-fade-in">
            <div className="flex items-center justify-center mb-8">
              <div className="w-12 h-12 bg-vibe-accent-blue dark:bg-vibe-dark-accent rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">V</span>
              </div>
              <h1 className="text-3xl font-display font-semibold ml-3 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                VibeHub
              </h1>
            </div>
            
            <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm">
              <h2 className="text-xl font-medium mb-6 text-center text-vibe-text-primary dark:text-vibe-dark-text-primary">
                Sign in to your account
              </h2>
              
              <form onSubmit={handleLogin} className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email"
                    className="bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary text-vibe-text-primary dark:text-vibe-dark-text-primary"
                    required
                  />
                  <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary mt-1">
                    Try: student@vibehub.edu, teacher@vibehub.edu, or admin@vibehub.edu
                  </p>
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                    Password
                  </label>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your password"
                    className="bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary text-vibe-text-primary dark:text-vibe-dark-text-primary"
                    required
                  />
                  <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary mt-1">
                    Any password will work for this demo
                  </p>
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in..." : "Sign in"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

export default Login;
