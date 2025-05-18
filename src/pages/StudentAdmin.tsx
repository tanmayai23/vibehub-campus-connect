
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "@/utils/authUtils";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Calendar from "@/components/dashboard/Calendar";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import ChatbotButton from "@/components/dashboard/ChatbotButton";
import ThemeToggle from "@/components/ThemeToggle";
import { BookOpen, FileText, UserRound } from "lucide-react";

const StudentAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user || user.role !== "student") {
      navigate("/login");
    }
  }, [navigate]);

  const studentData = [
    { label: "Courses Enrolled", value: "5", icon: BookOpen },
    { label: "Assignments Due", value: "3", icon: FileText },
    { label: "Attendance", value: "92%", icon: UserRound },
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
                    Student Dashboard
                  </h1>
                  <div className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary bg-vibe-background-secondary dark:bg-vibe-dark-background-secondary px-3 py-1 rounded-lg">
                    Academic Year 2024-25
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {studentData.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-4 shadow-sm flex items-center hover-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-3 bg-vibe-accent-blue/10 dark:bg-vibe-dark-accent/10 rounded-lg mr-4">
                        <item.icon className="h-6 w-6 text-vibe-accent-blue dark:text-vibe-dark-accent" />
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
                
                <div className="grid md:grid-cols-2 gap-6">
                  <Calendar className="animate-fade-in" />
                  <NoticeBoard className="animate-fade-in" />
                </div>
                
                <div className="mt-8">
                  <h2 className="text-xl font-semibold mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                    Your Courses
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm transition-all hover-scale">
                      <h3 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                        Current Semester
                      </h3>
                      <ul className="space-y-3">
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg text-vibe-text-primary dark:text-vibe-dark-text-primary">
                          CS301: Data Structures and Algorithms
                        </li>
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg text-vibe-text-primary dark:text-vibe-dark-text-primary">
                          CS302: Database Systems
                        </li>
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg text-vibe-text-primary dark:text-vibe-dark-text-primary">
                          MA201: Discrete Mathematics
                        </li>
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg text-vibe-text-primary dark:text-vibe-dark-text-primary">
                          ENG210: Technical Communication
                        </li>
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg text-vibe-text-primary dark:text-vibe-dark-text-primary">
                          PHY201: Modern Physics
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm transition-all hover-scale">
                      <h3 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                        Assignments Due
                      </h3>
                      <ul className="space-y-3">
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg flex justify-between items-center">
                          <div>
                            <p className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Database Design Project</p>
                            <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">CS302</p>
                          </div>
                          <div className="text-sm font-medium text-red-500">Due May 22</div>
                        </li>
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg flex justify-between items-center">
                          <div>
                            <p className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Algorithm Analysis</p>
                            <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">CS301</p>
                          </div>
                          <div className="text-sm font-medium text-orange-500">Due May 25</div>
                        </li>
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg flex justify-between items-center">
                          <div>
                            <p className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Research Report</p>
                            <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">ENG210</p>
                          </div>
                          <div className="text-sm font-medium text-yellow-500">Due May 30</div>
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

export default StudentAdmin;
