
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "@/utils/authUtils";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Calendar from "@/components/dashboard/Calendar";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import ChatbotButton from "@/components/dashboard/ChatbotButton";
import ThemeToggle from "@/components/ThemeToggle";
import { BookOpen, FileText, Users } from "lucide-react";

const TeacherAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const user = getCurrentUser();
    if (!user || user.role !== "teacher") {
      navigate("/login");
    }
  }, [navigate]);

  const teacherData = [
    { label: "Courses Teaching", value: "4", icon: BookOpen },
    { label: "Assignments to Grade", value: "12", icon: FileText },
    { label: "Total Students", value: "127", icon: Users },
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
                    Teacher Dashboard
                  </h1>
                  <div className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary bg-vibe-background-secondary dark:bg-vibe-dark-background-secondary px-3 py-1 rounded-lg">
                    Academic Year 2024-25
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-4 mb-6">
                  {teacherData.map((item, index) => (
                    <div 
                      key={index}
                      className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-4 shadow-sm flex items-center hover-scale"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="p-3 bg-vibe-accent-purple/10 dark:bg-purple-800/20 rounded-lg mr-4">
                        <item.icon className="h-6 w-6 text-vibe-accent-purple dark:text-purple-400" />
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
                    Teaching Resources
                  </h2>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm transition-all hover-scale">
                      <h3 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                        Current Courses
                      </h3>
                      <ul className="space-y-3">
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg flex justify-between items-center">
                          <div className="text-vibe-text-primary dark:text-vibe-dark-text-primary">CS301: Data Structures and Algorithms</div>
                          <div className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">42 students</div>
                        </li>
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg flex justify-between items-center">
                          <div className="text-vibe-text-primary dark:text-vibe-dark-text-primary">CS302: Database Systems</div>
                          <div className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">38 students</div>
                        </li>
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg flex justify-between items-center">
                          <div className="text-vibe-text-primary dark:text-vibe-dark-text-primary">CS401: Advanced Algorithms</div>
                          <div className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">24 students</div>
                        </li>
                        <li className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg flex justify-between items-center">
                          <div className="text-vibe-text-primary dark:text-vibe-dark-text-primary">CS501: Machine Learning</div>
                          <div className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">23 students</div>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm transition-all hover-scale">
                      <h3 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">
                        Assignment Status
                      </h3>
                      <div className="space-y-4">
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">
                              Database Design Project
                            </span>
                            <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                              26/38 submitted
                            </span>
                          </div>
                          <div className="w-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-full h-2.5">
                            <div className="bg-green-500 h-2.5 rounded-full" style={{ width: '68%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">
                              Algorithm Analysis
                            </span>
                            <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                              33/42 submitted
                            </span>
                          </div>
                          <div className="w-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-full h-2.5">
                            <div className="bg-blue-500 h-2.5 rounded-full" style={{ width: '78%' }}></div>
                          </div>
                        </div>
                        
                        <div>
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">
                              Machine Learning Project
                            </span>
                            <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                              15/23 submitted
                            </span>
                          </div>
                          <div className="w-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-full h-2.5">
                            <div className="bg-yellow-500 h-2.5 rounded-full" style={{ width: '65%' }}></div>
                          </div>
                        </div>
                      </div>
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

export default TeacherAdmin;
