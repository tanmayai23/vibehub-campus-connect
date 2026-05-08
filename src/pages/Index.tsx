import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Calendar from "@/components/dashboard/Calendar";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import ChatbotButton from "@/components/dashboard/ChatbotButton";
import ThemeToggle from "@/components/ThemeToggle";
import { Building2, Clock, Sparkles, ArrowUpRight } from "lucide-react";

const Index = () => {
  const resources = [
    "Digital Library",
    "Academic Calendar",
    "Research Databases",
    "Student Support Services",
  ];

  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
              <div className="max-w-7xl mx-auto space-y-8">
                <section className="flex items-end justify-between gap-4 flex-wrap animate-fade-in">
                  <div>
                    <div className="chip mb-3"><Sparkles className="w-3 h-3 text-brand-500" /> Dashboard</div>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                      Chill Campus <span className="text-gradient-brand">Overview</span>
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1.5">A snapshot of campus activity and resources.</p>
                  </div>
                  <div className="chip"><Clock className="w-3 h-3" /> Academic Year 2024–25</div>
                </section>

                <section className="grid lg:grid-cols-2 gap-6">
                  <Calendar />
                  <NoticeBoard />
                </section>

                <section className="grid lg:grid-cols-2 gap-6">
                  <div className="card-surface p-6">
                    <div className="flex items-center gap-2.5 mb-4">
                      <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
                        <Building2 className="w-4 h-4 text-brand-600 dark:text-brand-400" />
                      </div>
                      <div>
                        <h3 className="text-base font-semibold leading-tight">About Chill Campus</h3>
                        <p className="text-xs text-muted-foreground">Established for academic excellence</p>
                      </div>
                    </div>
                    <p className="text-sm leading-relaxed text-muted-foreground">
                      Chill Campus University is one of India's leading institutions known for academic excellence and innovative research.
                      Established with a vision to provide world-class education, we offer a wide range of undergraduate and graduate programs
                      across diverse disciplines.
                    </p>
                  </div>

                  <div className="card-surface p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2.5">
                        <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
                          <Sparkles className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                        </div>
                        <div>
                          <h3 className="text-base font-semibold leading-tight">Resources</h3>
                          <p className="text-xs text-muted-foreground">Quick access</p>
                        </div>
                      </div>
                    </div>
                    <ul className="space-y-1.5">
                      {resources.map((r) => (
                        <li key={r} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-muted/60 transition-colors group cursor-pointer">
                          <span className="h-1.5 w-1.5 rounded-full bg-brand-gradient" />
                          <span className="text-sm font-medium flex-1">{r}</span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </li>
                      ))}
                    </ul>
                  </div>
                </section>
              </div>
            </main>
          </div>
          <ChatbotButton />
        </div>
      )}
    </ThemeToggle>
  );
};

export default Index;
