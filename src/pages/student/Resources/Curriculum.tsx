
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { FileText, Download } from "lucide-react";

const CurriculumPage = () => {
  const courses = [
    {
      code: "CS301",
      name: "Data Structures and Algorithms",
      instructor: "Dr. Alan Turing",
      materials: [
        { name: "Course Syllabus", type: "PDF" },
        { name: "Lecture Notes - Week 1", type: "PDF" },
        { name: "Assignment 1", type: "DOC" }
      ]
    },
    {
      code: "CS302",
      name: "Database Systems",
      instructor: "Dr. Grace Hopper",
      materials: [
        { name: "Course Syllabus", type: "PDF" },
        { name: "Lecture Notes - Week 1", type: "PDF" },
        { name: "Assignment 1", type: "DOC" }
      ]
    },
    {
      code: "MA201",
      name: "Discrete Mathematics",
      instructor: "Dr. John Nash",
      materials: [
        { name: "Course Syllabus", type: "PDF" },
        { name: "Lecture Notes - Week 1", type: "PDF" },
        { name: "Assignment 1", type: "DOC" }
      ]
    },
    {
      code: "ENG210",
      name: "Technical Communication",
      instructor: "Prof. Jane Smith",
      materials: [
        { name: "Course Syllabus", type: "PDF" },
        { name: "Writing Guidelines", type: "PDF" },
        { name: "Assignment 1", type: "DOC" }
      ]
    },
    {
      code: "PHY201",
      name: "Modern Physics",
      instructor: "Dr. Richard Feynman",
      materials: [
        { name: "Course Syllabus", type: "PDF" },
        { name: "Lecture Notes - Week 1", type: "PDF" },
        { name: "Assignment 1", type: "DOC" }
      ]
    }
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
                  Curriculum
                </h1>
                
                <div className="space-y-6">
                  {courses.map((course, index) => (
                    <div 
                      key={course.code} 
                      className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      <div className="mb-4">
                        <h2 className="text-xl font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary">{course.code}: {course.name}</h2>
                        <p className="text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Instructor: {course.instructor}</p>
                      </div>
                      
                      <h3 className="text-sm font-medium mb-2 text-vibe-text-secondary dark:text-vibe-dark-text-secondary uppercase">Course Materials</h3>
                      
                      <div className="space-y-2">
                        {course.materials.map((material, idx) => (
                          <div 
                            key={idx}
                            className="flex justify-between items-center p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg"
                          >
                            <div className="flex items-center">
                              <FileText className="h-4 w-4 mr-2 text-vibe-accent-blue dark:text-vibe-dark-accent" />
                              <span className="text-vibe-text-primary dark:text-vibe-dark-text-primary">{material.name}</span>
                              <span className="ml-2 text-xs px-2 py-0.5 bg-vibe-accent-blue/10 dark:bg-vibe-dark-accent/10 text-vibe-accent-blue dark:text-vibe-dark-accent rounded-full">
                                {material.type}
                              </span>
                            </div>
                            <Button variant="ghost" size="sm">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

export default CurriculumPage;
