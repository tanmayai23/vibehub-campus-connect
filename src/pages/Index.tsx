
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Calendar from "@/components/dashboard/Calendar";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import ChatbotButton from "@/components/dashboard/ChatbotButton";
import ThemeToggle from "@/components/ThemeToggle";

const Index = () => {
  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="flex min-h-screen bg-vibe-background-primary dark:bg-vibe-dark-background-primary">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                <div className="flex justify-between items-center mb-6">
                  <h1 className="text-2xl font-display font-semibold">Dashboard</h1>
                  <div className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary bg-vibe-background-secondary dark:bg-vibe-dark-background-secondary px-3 py-1 rounded-lg">
                    Academic Year 2024-25
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Calendar className="animate-fade-in" />
                  <NoticeBoard className="animate-fade-in" />
                </div>
                
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4">Chill Campus University</h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-medium mb-4">About</h3>
                      <p className="text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                        Chill Campus University is one of India's leading institutions known for academic excellence and innovative research.
                        Established with a vision to provide world-class education, Chill Campus University offers a wide range of
                        undergraduate and graduate programs across diverse disciplines.
                      </p>
                    </div>
                    
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm">
                      <h3 className="text-lg font-medium mb-4">Resources</h3>
                      <ul className="space-y-3 text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-vibe-accent-blue dark:bg-vibe-dark-accent"></span>
                          Digital Library
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-vibe-accent-blue dark:bg-vibe-dark-accent"></span>
                          Academic Calendar
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-vibe-accent-blue dark:bg-vibe-dark-accent"></span>
                          Research Databases
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="h-1.5 w-1.5 rounded-full bg-vibe-accent-blue dark:bg-vibe-dark-accent"></span>
                          Student Support Services
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <ChatbotButton />
        </div>
      )}
    </ThemeToggle>
  );
};

export default Index;
