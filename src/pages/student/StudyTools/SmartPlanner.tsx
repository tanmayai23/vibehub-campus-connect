
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";

const SmartPlannerPage = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="flex min-h-screen bg-vibe-background-primary dark:bg-vibe-dark-background-primary">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-display font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary mb-6 animate-fade-in">
                  Smart Planner
                </h1>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                    <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Choose A Date</h2>
                    <Calendar
                      mode="single"
                      selected={date}
                      onSelect={setDate}
                      className="rounded-md border"
                    />
                  </div>
                  
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                    <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Today's Plan</h2>
                    
                    <div className="space-y-4">
                      <div className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">CS301: Complete Assignment</p>
                            <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">10:00 AM - 12:00 PM</p>
                          </div>
                          <Button variant="outline" size="sm">Mark Done</Button>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Study Group: Database Systems</p>
                            <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">2:00 PM - 4:00 PM</p>
                          </div>
                          <Button variant="outline" size="sm">Mark Done</Button>
                        </div>
                      </div>
                      
                      <div className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg">
                        <div className="flex justify-between items-center">
                          <div>
                            <p className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Prepare for Physics Quiz</p>
                            <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">6:00 PM - 8:00 PM</p>
                          </div>
                          <Button variant="outline" size="sm">Mark Done</Button>
                        </div>
                      </div>
                    </div>
                    
                    <Button className="w-full mt-4 bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90">Add Task</Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

export default SmartPlannerPage;
