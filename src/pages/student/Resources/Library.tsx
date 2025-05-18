
import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { BookOpen, Search, BookMarked, Clock, Library as LibraryIcon } from "lucide-react";

const LibraryPage = () => {
  const [searchQuery, setSearchQuery] = useState("");
  
  const books = [
    {
      title: "Introduction to Algorithms",
      author: "Thomas H. Cormen",
      category: "Computer Science",
      status: "Available",
      coverColor: "bg-blue-100 dark:bg-blue-900/30"
    },
    {
      title: "Database System Concepts",
      author: "Abraham Silberschatz",
      category: "Computer Science",
      status: "Available",
      coverColor: "bg-green-100 dark:bg-green-900/30"
    },
    {
      title: "Discrete Mathematics and Its Applications",
      author: "Kenneth H. Rosen",
      category: "Mathematics",
      status: "Checked Out",
      coverColor: "bg-red-100 dark:bg-red-900/30"
    },
    {
      title: "Physics for Scientists and Engineers",
      author: "Serway & Jewett",
      category: "Physics",
      status: "Available",
      coverColor: "bg-amber-100 dark:bg-amber-900/30"
    },
    {
      title: "Technical Communication",
      author: "Mike Markel",
      category: "Communication",
      status: "Available",
      coverColor: "bg-purple-100 dark:bg-purple-900/30"
    }
  ];
  
  const filteredBooks = searchQuery
    ? books.filter(book => 
        book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.author.toLowerCase().includes(searchQuery.toLowerCase()) ||
        book.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : books;

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
                  Library Services
                </h1>
                
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in flex items-center">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900/30 rounded-lg mr-4">
                      <BookMarked className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Books Borrowed</p>
                      <p className="text-2xl font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary">3</p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in flex items-center">
                    <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-lg mr-4">
                      <Clock className="h-6 w-6 text-amber-600 dark:text-amber-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Due Date (Nearest)</p>
                      <p className="text-2xl font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary">May 28</p>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in flex items-center">
                    <div className="p-3 bg-green-100 dark:bg-green-900/30 rounded-lg mr-4">
                      <LibraryIcon className="h-6 w-6 text-green-600 dark:text-green-400" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Library Hours</p>
                      <p className="text-lg font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary">8AM - 10PM</p>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in mb-8">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <h2 className="text-lg font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Book Catalog</h2>
                    
                    <div className="relative max-w-xs">
                      <Input
                        type="text"
                        placeholder="Search books..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="pr-8"
                      />
                      <Search className="absolute right-2 top-2 h-4 w-4 text-vibe-text-secondary dark:text-vibe-dark-text-secondary" />
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    {filteredBooks.map((book, index) => (
                      <div 
                        key={index}
                        className="flex items-start border-b border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary pb-4 last:border-0"
                      >
                        <div className={`${book.coverColor} h-16 w-12 rounded flex items-center justify-center mr-4 flex-shrink-0`}>
                          <BookOpen className="h-6 w-6" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">{book.title}</h3>
                          <p className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{book.author}</p>
                          <div className="flex items-center mt-1">
                            <span className="text-xs px-2 py-0.5 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary rounded-full mr-2">
                              {book.category}
                            </span>
                            <span className={`text-xs px-2 py-0.5 rounded-full ${
                              book.status === "Available" 
                                ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300" 
                                : "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-300"
                            }`}>
                              {book.status}
                            </span>
                          </div>
                        </div>
                        <Button 
                          variant="outline" 
                          size="sm"
                          disabled={book.status !== "Available"}
                        >
                          {book.status === "Available" ? "Borrow" : "Reserved"}
                        </Button>
                      </div>
                    ))}
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

export default LibraryPage;
