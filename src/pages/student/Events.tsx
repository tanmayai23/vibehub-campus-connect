
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import ThemeToggle from "@/components/ThemeToggle";

const EventsPage = () => {
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
                  Events & Notifications
                </h1>
                <NoticeBoard className="w-full animate-fade-in" />
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

export default EventsPage;
