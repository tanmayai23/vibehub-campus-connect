
import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Users, BookOpen, MessageSquare, Calendar, Star } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const TutoringPage = () => {
  const { toast } = useToast();
  
  const handleBookSession = (tutorName: string) => {
    toast({
      title: "Session Requested",
      description: `Your tutoring session with ${tutorName} has been requested.`,
    });
  };

  const tutors = [
    {
      name: "Alex Johnson",
      subject: "Data Structures & Algorithms",
      rating: 4.9,
      availability: "Mon, Wed, Fri",
      image: "https://i.pravatar.cc/150?img=11",
      background: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      name: "Sarah Williams",
      subject: "Database Systems",
      rating: 4.8,
      availability: "Tue, Thu, Sat",
      image: "https://i.pravatar.cc/150?img=20",
      background: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      name: "Michael Chen",
      subject: "Discrete Mathematics",
      rating: 4.7,
      availability: "Mon, Tue, Thu",
      image: "https://i.pravatar.cc/150?img=13",
      background: "bg-green-100 dark:bg-green-900/30"
    },
    {
      name: "Emily Rodriguez",
      subject: "Technical Communication",
      rating: 4.9,
      availability: "Wed, Fri, Sat",
      image: "https://i.pravatar.cc/150?img=22",
      background: "bg-amber-100 dark:bg-amber-900/30"
    }
  ];

  const upcomingSessions = [
    {
      tutor: "Alex Johnson",
      subject: "Data Structures & Algorithms",
      date: "May 22, 2025",
      time: "3:00 PM - 4:00 PM",
      location: "Online (Zoom)"
    },
    {
      tutor: "Sarah Williams",
      subject: "Database Systems",
      date: "May 24, 2025",
      time: "2:00 PM - 3:00 PM",
      location: "Library, Room 203"
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
                  Tutoring Center
                </h1>
                
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-4 shadow-sm flex items-center animate-fade-in">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                      <Users className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Available Tutors</p>
                      <p className="text-2xl font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary">12</p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-4 shadow-sm flex items-center animate-fade-in">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                      <BookOpen className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Subjects Covered</p>
                      <p className="text-2xl font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary">20+</p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-4 shadow-sm flex items-center animate-fade-in">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4">
                      <MessageSquare className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Sessions Completed</p>
                      <p className="text-2xl font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary">45</p>
                    </div>
                  </div>
                </div>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2">
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                      <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Available Tutors</h2>
                      
                      <div className="space-y-4">
                        {tutors.map((tutor, index) => (
                          <div
                            key={index}
                            className="flex items-center border-b border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary pb-4 last:border-0"
                            style={{ animationDelay: `${index * 0.1}s` }}
                          >
                            <div className="mr-4 relative">
                              <div className={`h-14 w-14 rounded-full ${tutor.background} flex items-center justify-center text-lg font-medium`}>
                                {tutor.name.split(' ').map(n => n[0]).join('')}
                              </div>
                            </div>
                            <div className="flex-1">
                              <div className="flex items-center">
                                <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">{tutor.name}</h3>
                                <div className="flex items-center ml-2">
                                  <Star className="h-3 w-3 text-yellow-500 fill-yellow-500" />
                                  <span className="text-xs ml-1 text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                                    {tutor.rating}
                                  </span>
                                </div>
                              </div>
                              <p className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{tutor.subject}</p>
                              <div className="flex items-center mt-1">
                                <Calendar className="h-3 w-3 mr-1 text-vibe-text-secondary dark:text-vibe-dark-text-secondary" />
                                <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                                  Available: {tutor.availability}
                                </span>
                              </div>
                            </div>
                            <Button 
                              className="bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90"
                              onClick={() => handleBookSession(tutor.name)}
                            >
                              Book Session
                            </Button>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                      <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Your Sessions</h2>
                      
                      {upcomingSessions.length > 0 ? (
                        <div className="space-y-4">
                          {upcomingSessions.map((session, index) => (
                            <div 
                              key={index}
                              className="p-3 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-lg"
                            >
                              <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">{session.subject}</h3>
                              <p className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Tutor: {session.tutor}</p>
                              <div className="mt-2 text-sm">
                                <div className="flex items-center">
                                  <Calendar className="h-3 w-3 mr-2 text-vibe-accent-blue dark:text-vibe-dark-accent" />
                                  <span>{session.date}, {session.time}</span>
                                </div>
                                <p className="text-xs mt-1 text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                                  Location: {session.location}
                                </p>
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div className="text-center py-8 text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
                          <p>No upcoming sessions</p>
                          <p className="text-sm mt-1">Book a session with a tutor to get help with your courses</p>
                        </div>
                      )}
                      
                      <Button 
                        variant="outline" 
                        className="w-full mt-4"
                      >
                        View All Sessions
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

export default TutoringPage;
