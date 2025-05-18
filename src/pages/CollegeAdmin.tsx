
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "@/utils/authUtils";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Calendar from "@/components/dashboard/Calendar";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import ChatbotButton from "@/components/dashboard/ChatbotButton";
import ThemeToggle from "@/components/ThemeToggle";
import { GraduationCap, Building, Users } from "lucide-react";

const CollegeAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user || user.role !== "college") {
      navigate("/login");
    }
  }, [navigate]);

  const collegeData = [
    { label: "Total Students", value: "1,248", icon: GraduationCap },
    { label: "Total Faculty", value: "86", icon: Users },
    { label: "Departments", value: "12", icon: Building },
  ];

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
                  <h1 className="text-2xl font-display font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary animate-fade-in">
                    College Administration Dashboard
                  </h1>
                  <div className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary bg-vibe-background-secondary dark:bg-vibe-dark-background-secondary px-3 py-1 rounded-lg">
                    Academic Year 2024-25
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {collegeData.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-4 shadow-sm flex items-center hover-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-3 bg-vibe-accent-green/10 dark:bg-green-800/20 rounded-lg mr-4">
                        <item.icon className="h-6 w-6 text-vibe-accent-green dark:text-green-400" />
                      </div>
                      <div>
                        <h3 className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                          {item.label}
                        </h3>
                        <p className="text-2xl font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary">
                          {item.value}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mb-6">
                  <Calendar className="animate-fade-in" />
                  <NoticeBoard className="animate-fade-in" />
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm transition-all hover-scale">
                    <h3 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                      Department Overview
                    </h3>
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">
                            Computer Science
                          </span>
                          <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                            310 students
                          </span>
                        </div>
                        <div className="w-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-full h-2.5">
                          <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '85%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">
                            Electrical Engineering
                          </span>
                          <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                            245 students
                          </span>
                        </div>
                        <div className="w-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-full h-2.5">
                          <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '70%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">
                            Business Administration
                          </span>
                          <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                            280 students
                          </span>
                        </div>
                        <div className="w-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-full h-2.5">
                          <div className="bg-purple-500 h-2.5 rounded-full" style={{ width: '75%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">
                            Mechanical Engineering
                          </span>
                          <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                            200 students
                          </span>
                        </div>
                        <div className="w-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-full h-2.5">
                          <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '60%' }}></div>
                        </div>
                      </div>
                      
                      <div>
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">
                            Biology
                          </span>
                          <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                            170 students
                          </span>
                        </div>
                        <div className="w-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-full h-2.5">
                          <div className="bg-red-500 h-2.5 rounded-full" style={{ width: '50%' }}></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm transition-all hover-scale">
                    <h3 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                      Administrative Actions
                    </h3>
                    <div className="space-y-3">
                      <button className="w-full p-3 bg-vibe-accent-green/10 dark:bg-green-800/20 text-vibe-accent-green dark:text-green-400 rounded-lg text-left flex items-center hover:bg-vibe-accent-green/20 dark:hover:bg-green-800/30 transition-colors">
                        <span className="flex-1">Create New Notice</span>
                        <span>→</span>
                      </button>
                      <button className="w-full p-3 bg-vibe-accent-blue/10 dark:bg-blue-800/20 text-vibe-accent-blue dark:text-blue-400 rounded-lg text-left flex items-center hover:bg-vibe-accent-blue/20 dark:hover:bg-blue-800/30 transition-colors">
                        <span className="flex-1">Manage Faculty</span>
                        <span>→</span>
                      </button>
                      <button className="w-full p-3 bg-vibe-accent-purple/10 dark:bg-purple-800/20 text-vibe-accent-purple dark:text-purple-400 rounded-lg text-left flex items-center hover:bg-vibe-accent-purple/20 dark:hover:bg-purple-800/30 transition-colors">
                        <span className="flex-1">Schedule Events</span>
                        <span>→</span>
                      </button>
                      <button className="w-full p-3 bg-amber-500/10 dark:bg-amber-800/20 text-amber-500 dark:text-amber-400 rounded-lg text-left flex items-center hover:bg-amber-500/20 dark:hover:bg-amber-800/30 transition-colors">
                        <span className="flex-1">Examination Settings</span>
                        <span>→</span>
                      </button>
                      <button className="w-full p-3 bg-red-500/10 dark:bg-red-800/20 text-red-500 dark:text-red-400 rounded-lg text-left flex items-center hover:bg-red-500/20 dark:hover:bg-red-800/30 transition-colors">
                        <span className="flex-1">View Complaints</span>
                        <span>→</span>
                      </button>
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

export default CollegeAdmin;
