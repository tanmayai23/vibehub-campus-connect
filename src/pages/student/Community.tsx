
import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Users, 
  MessageSquare, 
  CalendarDays, 
  Heart, 
  Share2, 
  MoreHorizontal,
  Send,
  Image as ImageIcon,
  Smile,
  Search
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const CommunityPage = () => {
  const [postContent, setPostContent] = useState("");
  const { toast } = useToast();
  
  const handlePost = () => {
    if (postContent.trim()) {
      toast({
        title: "Post Created",
        description: "Your post has been published to the community feed.",
      });
      setPostContent("");
    }
  };

  const posts = [
    {
      id: 1,
      author: "Jane Student",
      avatar: "J",
      timeAgo: "2 hours ago",
      content: "Just completed the Database project! Anyone else struggling with the normalization part?",
      likes: 24,
      comments: 8,
      liked: false
    },
    {
      id: 2,
      author: "Alex Kumar",
      avatar: "A",
      timeAgo: "Yesterday",
      content: "The Physics lab was amazing today! We got to work with holographic displays 🔬✨",
      likes: 37,
      comments: 5,
      liked: true
    },
    {
      id: 3,
      author: "Sarah Williams",
      avatar: "S",
      timeAgo: "2 days ago",
      content: "Looking for study partners for the upcoming Discrete Mathematics exam. We're planning to meet at the library from 6-8pm every day this week.",
      likes: 18,
      comments: 12,
      liked: false
    }
  ];

  const clubs = [
    {
      name: "Coding Club",
      members: 120,
      image: "C",
      background: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      name: "Robotics Society",
      members: 85,
      image: "R",
      background: "bg-purple-100 dark:bg-purple-900/30"
    },
    {
      name: "Debate Club",
      members: 64,
      image: "D",
      background: "bg-amber-100 dark:bg-amber-900/30"
    },
    {
      name: "Music Band",
      members: 42,
      image: "M",
      background: "bg-green-100 dark:bg-green-900/30"
    }
  ];

  const events = [
    {
      name: "Tech Hackathon 2025",
      date: "June 5-7, 2025",
      location: "Main Auditorium",
      attending: 145
    },
    {
      name: "Annual Cultural Fest",
      date: "June 12-15, 2025",
      location: "College Campus",
      attending: 324
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
              <div className="max-w-5xl mx-auto">
                <h1 className="text-2xl font-display font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary mb-6 animate-fade-in">
                  Community
                </h1>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-6">
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                      <div className="flex items-start space-x-3 mb-4">
                        <div className="h-10 w-10 rounded-full bg-vibe-accent-blue dark:bg-vibe-dark-accent flex items-center justify-center text-white">
                          Y
                        </div>
                        <div className="flex-1">
                          <Input
                            placeholder="What's on your mind?"
                            value={postContent}
                            onChange={(e) => setPostContent(e.target.value)}
                            className="mb-2"
                          />
                          <div className="flex items-center justify-between">
                            <div className="flex space-x-2">
                              <Button variant="outline" size="sm">
                                <ImageIcon className="h-4 w-4 mr-1" />
                                Photo
                              </Button>
                              <Button variant="outline" size="sm">
                                <Smile className="h-4 w-4 mr-1" />
                                Feeling
                              </Button>
                            </div>
                            <Button 
                              size="sm"
                              className="bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90"
                              onClick={handlePost}
                              disabled={!postContent.trim()}
                            >
                              Post
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    <Tabs defaultValue="feed" className="animate-fade-in">
                      <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl shadow-sm">
                        <div className="px-6 pt-4">
                          <TabsList className="grid grid-cols-2 w-full">
                            <TabsTrigger value="feed">Feed</TabsTrigger>
                            <TabsTrigger value="discover">Discover</TabsTrigger>
                          </TabsList>
                        </div>
                        
                        <TabsContent value="feed" className="p-0">
                          {posts.map((post, index) => (
                            <div 
                              key={post.id}
                              className="border-b last:border-0 border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary p-6"
                            >
                              <div className="flex items-start space-x-3">
                                <div className="h-10 w-10 rounded-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary flex items-center justify-center text-vibe-text-primary dark:text-vibe-dark-text-primary font-medium">
                                  {post.avatar}
                                </div>
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <div>
                                      <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">{post.author}</h3>
                                      <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{post.timeAgo}</p>
                                    </div>
                                    <Button variant="ghost" size="icon" className="h-8 w-8">
                                      <MoreHorizontal className="h-4 w-4" />
                                    </Button>
                                  </div>
                                  <p className="mt-2 text-vibe-text-primary dark:text-vibe-dark-text-primary">{post.content}</p>
                                  <div className="flex items-center mt-4 pt-2 border-t border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary">
                                    <Button variant="ghost" size="sm" className={post.liked ? "text-red-500" : ""}>
                                      <Heart className={`h-4 w-4 mr-1 ${post.liked ? "fill-current" : ""}`} />
                                      {post.likes}
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                      <MessageSquare className="h-4 w-4 mr-1" />
                                      {post.comments}
                                    </Button>
                                    <Button variant="ghost" size="sm" className="ml-auto">
                                      <Share2 className="h-4 w-4" />
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </div>
                          ))}
                        </TabsContent>
                        
                        <TabsContent value="discover" className="p-0">
                          <div className="p-6">
                            <div className="relative mb-4">
                              <Input placeholder="Search for posts, people, or topics" />
                              <Search className="absolute right-3 top-2.5 h-4 w-4 text-vibe-text-secondary dark:text-vibe-dark-text-secondary" />
                            </div>
                            
                            <div className="space-y-4">
                              <h3 className="font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Trending Topics</h3>
                              <div className="flex flex-wrap gap-2">
                                <Button variant="outline" size="sm">#TechFest2025</Button>
                                <Button variant="outline" size="sm">#ExamPrep</Button>
                                <Button variant="outline" size="sm">#CampusLife</Button>
                                <Button variant="outline" size="sm">#CareerAdvice</Button>
                                <Button variant="outline" size="sm">#StudyAbroad</Button>
                                <Button variant="outline" size="sm">#InternshipTips</Button>
                              </div>
                              
                              <h3 className="font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary mt-4">People You May Know</h3>
                              <div className="space-y-3">
                                {["Michael Chen", "Emily Rodriguez", "David Kim"].map((name, idx) => (
                                  <div key={idx} className="flex items-center justify-between">
                                    <div className="flex items-center">
                                      <div className="h-8 w-8 rounded-full bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary flex items-center justify-center text-vibe-text-primary dark:text-vibe-dark-text-primary font-medium mr-2">
                                        {name.charAt(0)}
                                      </div>
                                      <span>{name}</span>
                                    </div>
                                    <Button variant="outline" size="sm">Connect</Button>
                                  </div>
                                ))}
                              </div>
                            </div>
                          </div>
                        </TabsContent>
                      </div>
                    </Tabs>
                  </div>
                  
                  <div className="space-y-6">
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Clubs & Societies</h2>
                        <Button variant="ghost" size="sm" className="text-vibe-accent-blue dark:text-vibe-dark-accent">View All</Button>
                      </div>
                      
                      <div className="space-y-3">
                        {clubs.map((club, index) => (
                          <div key={index} className="flex items-center justify-between">
                            <div className="flex items-center">
                              <div className={`h-8 w-8 rounded-full ${club.background} flex items-center justify-center font-medium mr-2`}>
                                {club.image}
                              </div>
                              <div>
                                <h3 className="text-sm font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">{club.name}</h3>
                                <p className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{club.members} members</p>
                              </div>
                            </div>
                            <Button variant="outline" size="sm">Join</Button>
                          </div>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                      <div className="flex items-center justify-between mb-4">
                        <h2 className="text-lg font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Upcoming Events</h2>
                        <Button variant="ghost" size="sm" className="text-vibe-accent-blue dark:text-vibe-dark-accent">View All</Button>
                      </div>
                      
                      <div className="space-y-4">
                        {events.map((event, index) => (
                          <div key={index} className="border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary rounded-lg p-3">
                            <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">{event.name}</h3>
                            <div className="space-y-1 mt-1">
                              <div className="flex items-center">
                                <CalendarDays className="h-3 w-3 mr-2 text-vibe-accent-blue dark:text-vibe-dark-accent" />
                                <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{event.date}</span>
                              </div>
                              <div className="flex items-center">
                                <MessageSquare className="h-3 w-3 mr-2 text-vibe-accent-blue dark:text-vibe-dark-accent" />
                                <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{event.location}</span>
                              </div>
                              <div className="flex items-center">
                                <Users className="h-3 w-3 mr-2 text-vibe-accent-blue dark:text-vibe-dark-accent" />
                                <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{event.attending} attending</span>
                              </div>
                            </div>
                            <Button className="w-full mt-2 bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90" size="sm">
                              Attend
                            </Button>
                          </div>
                        ))}
                      </div>
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

export default CommunityPage;
