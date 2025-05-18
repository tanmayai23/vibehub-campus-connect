
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, FileText, BookOpen } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const ExaminationPage = () => {
  const upcomingExams = [
    {
      course: "CS301: Data Structures and Algorithms",
      date: "May 25, 2025",
      time: "10:00 AM - 12:00 PM",
      location: "Computer Lab 2",
      type: "Mid-term Exam",
      status: "upcoming"
    },
    {
      course: "CS302: Database Systems",
      date: "May 28, 2025",
      time: "2:00 PM - 4:00 PM",
      location: "LT-5",
      type: "Mid-term Exam",
      status: "upcoming"
    },
    {
      course: "MA201: Discrete Mathematics",
      date: "May 30, 2025",
      time: "9:00 AM - 11:00 AM",
      location: "LT-3",
      type: "Mid-term Exam",
      status: "upcoming"
    }
  ];

  const completedExams = [
    {
      course: "ENG210: Technical Communication",
      date: "April 15, 2025",
      marks: "82/100",
      grade: "A",
      status: "completed"
    },
    {
      course: "PHY201: Modern Physics",
      date: "April 10, 2025",
      marks: "76/100",
      grade: "B+",
      status: "completed"
    }
  ];

  const courseProgress = [
    { course: "CS301: Data Structures and Algorithms", progress: 60 },
    { course: "CS302: Database Systems", progress: 55 },
    { course: "MA201: Discrete Mathematics", progress: 65 },
    { course: "ENG210: Technical Communication", progress: 80 },
    { course: "PHY201: Modern Physics", progress: 70 }
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
                <h1 className="text-2xl font-display font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary mb-6 animate-fade-in">
                  Examination Portal
                </h1>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="md:col-span-2">
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                      <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Mid-term Examination Schedule</h2>
                      
                      <div className="space-y-4">
                        {upcomingExams.map((exam, index) => (
                          <div 
                            key={index}
                            className="border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary rounded-lg p-4"
                          >
                            <div className="flex justify-between items-start">
                              <div>
                                <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">{exam.course}</h3>
                                <div className="mt-1 text-sm space-y-1">
                                  <div className="flex items-center">
                                    <Calendar className="h-4 w-4 mr-2 text-vibe-accent-blue dark:text-vibe-dark-accent" />
                                    <span className="text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{exam.date}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <Clock className="h-4 w-4 mr-2 text-vibe-accent-blue dark:text-vibe-dark-accent" />
                                    <span className="text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{exam.time}</span>
                                  </div>
                                  <div className="flex items-center">
                                    <FileText className="h-4 w-4 mr-2 text-vibe-accent-blue dark:text-vibe-dark-accent" />
                                    <span className="text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{exam.location}</span>
                                  </div>
                                </div>
                              </div>
                              <span className="px-3 py-1 bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300 rounded-full text-xs font-medium">
                                {exam.type}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm h-full animate-fade-in">
                      <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Course Progress</h2>
                      
                      <div className="space-y-4">
                        {courseProgress.map((course, index) => (
                          <div key={index} className="space-y-1">
                            <div className="flex justify-between text-sm">
                              <span className="text-vibe-text-primary dark:text-vibe-dark-text-primary">{course.course}</span>
                              <span className="text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{course.progress}%</span>
                            </div>
                            <Progress value={course.progress} className="h-2" />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                      <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Previous Results</h2>
                      
                      <div className="space-y-4">
                        {completedExams.map((exam, index) => (
                          <div 
                            key={index}
                            className="border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary rounded-lg p-4 flex justify-between items-center"
                          >
                            <div>
                              <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">{exam.course}</h3>
                              <p className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{exam.date}</p>
                            </div>
                            <div className="text-right">
                              <div className="text-lg font-medium text-vibe-accent-blue dark:text-vibe-dark-accent">{exam.marks}</div>
                              <div className="text-sm font-medium text-green-600 dark:text-green-400">Grade: {exam.grade}</div>
                            </div>
                          </div>
                        ))}
                      </div>
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-4"
                      >
                        <FileText className="h-4 w-4 mr-2" />
                        Download Grade Report
                      </Button>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6 bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                  <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Study Resources</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="p-4 border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary rounded-lg">
                      <div className="flex items-center">
                        <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-md mr-3">
                          <BookOpen className="h-5 w-5 text-blue-600 dark:text-blue-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Practice Questions</h3>
                          <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">500+ questions with solutions</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-3"
                      >
                        Access
                      </Button>
                    </div>
                    
                    <div className="p-4 border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary rounded-lg">
                      <div className="flex items-center">
                        <div className="p-2 bg-green-100 dark:bg-green-900/30 rounded-md mr-3">
                          <FileText className="h-5 w-5 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Previous Papers</h3>
                          <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Last 5 years exam papers</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-3"
                      >
                        Download
                      </Button>
                    </div>
                    
                    <div className="p-4 border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary rounded-lg">
                      <div className="flex items-center">
                        <div className="p-2 bg-amber-100 dark:bg-amber-900/30 rounded-md mr-3">
                          <Clock className="h-5 w-5 text-amber-600 dark:text-amber-400" />
                        </div>
                        <div>
                          <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Mock Tests</h3>
                          <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Timed practice exams</p>
                        </div>
                      </div>
                      <Button 
                        variant="outline" 
                        size="sm" 
                        className="w-full mt-3"
                      >
                        Start Test
                      </Button>
                    </div>
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

export default ExaminationPage;
