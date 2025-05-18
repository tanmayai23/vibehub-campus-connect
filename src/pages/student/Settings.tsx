
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

const SettingsPage = () => {
  const { toast } = useToast();
  
  const handleSave = () => {
    toast({
      title: "Settings saved",
      description: "Your preferences have been updated successfully."
    });
  };

  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="flex min-h-screen bg-vibe-background-primary dark:bg-vibe-dark-background-primary">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-3xl mx-auto">
                <h1 className="text-2xl font-display font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary mb-6 animate-fade-in">
                  Settings
                </h1>
                
                <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                  <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Appearance</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="dark-mode">Dark Mode</Label>
                      <Switch 
                        id="dark-mode" 
                        checked={isDarkMode} 
                        onCheckedChange={toggleTheme}
                      />
                    </div>
                  </div>
                  
                  <h2 className="text-lg font-medium mt-8 mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Notifications</h2>
                  
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-notifications">Email Notifications</Label>
                      <Switch id="email-notifications" defaultChecked />
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="push-notifications">Push Notifications</Label>
                      <Switch id="push-notifications" defaultChecked />
                    </div>
                  </div>
                  
                  <Button 
                    className="mt-8 bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90"
                    onClick={handleSave}
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

export default SettingsPage;
