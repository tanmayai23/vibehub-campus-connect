import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "@/utils/authUtils";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Calendar from "@/components/dashboard/Calendar";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import ChatbotButton from "@/components/dashboard/ChatbotButton";
import ThemeToggle from "@/components/ThemeToggle";
import { BookOpen, FileText, UserRound, ArrowUpRight, Sparkles, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const StudentAdmin = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user || user.role !== "student") navigate("/login");
  }, [navigate, user]);

  const firstName = user?.name.split(" ")[0] ?? "Student";

  const courses = [
    { code: "CS301", name: "Data Structures and Algorithms", progress: 78 },
    { code: "CS302", name: "Database Systems", progress: 64 },
    { code: "MA201", name: "Discrete Mathematics", progress: 82 },
    { code: "ENG210", name: "Technical Communication", progress: 91 },
    { code: "PHY201", name: "Modern Physics", progress: 55 },
  ];

  const assignments = [
    { title: "Database Design Project", course: "CS302", due: "May 22", urgency: "high" as const },
    { title: "Algorithm Analysis", course: "CS301", due: "May 25", urgency: "med" as const },
    { title: "Research Report", course: "ENG210", due: "May 30", urgency: "low" as const },
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
                {/* Greeting */}
                <section className="flex items-end justify-between gap-4 flex-wrap animate-fade-in">
                  <div>
                    <div className="chip mb-3"><Sparkles className="w-3 h-3 text-brand-500" /> Welcome back</div>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                      Hi {firstName}, <span className="text-gradient-brand">let's make today count.</span>
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1.5">Here's what's happening with your studies.</p>
                  </div>
                  <div className="chip"><Clock className="w-3 h-3" /> Academic Year 2024–25</div>
                </section>

                {/* Stat row */}
                <section className="grid lg:grid-cols-3 gap-4">
                  <HeroStat
                    label="Overall Attendance"
                    value="92%"
                    sub="+2.4% vs last week"
                    icon={UserRound}
                  />
                  <SupportStat label="Courses Enrolled" value="5" icon={BookOpen} tint="brand" delta="Spring '25" />
                  <SupportStat label="Assignments Due" value="3" icon={FileText} tint="violet" delta="2 this week" />
                </section>

                {/* Calendar + Notices */}
                <section className="grid lg:grid-cols-2 gap-6">
                  <Calendar />
                  <NoticeBoard />
                </section>

                {/* Courses + Assignments */}
                <section className="grid lg:grid-cols-2 gap-6">
                  <div className="card-surface p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h3 className="text-base font-semibold leading-tight">Current Semester</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{courses.length} courses · Spring 2025</p>
                      </div>
                      <button className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
                        View all <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                    <ul className="space-y-2.5">
                      {courses.map((c) => (
                        <li key={c.code} className="group rounded-xl p-3 hover:bg-muted/60 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 shrink-0 rounded-lg bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center text-[11px] font-bold text-brand-700 dark:text-brand-300">
                              {c.code.slice(0, 2)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <div className="flex items-center justify-between gap-2 mb-1.5">
                                <p className="text-sm font-semibold truncate">
                                  <span className="text-muted-foreground font-medium">{c.code}:</span> {c.name}
                                </p>
                                <span className="text-xs font-bold text-foreground/70 shrink-0">{c.progress}%</span>
                              </div>
                              <div className="h-1.5 rounded-full bg-muted overflow-hidden">
                                <div
                                  className="h-full bg-brand-gradient rounded-full transition-all duration-500"
                                  style={{ width: `${c.progress}%` }}
                                />
                              </div>
                            </div>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="card-surface p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h3 className="text-base font-semibold leading-tight">Assignments Due</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{assignments.length} pending</p>
                      </div>
                      <button className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
                        View all <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                    <ul className="space-y-2.5">
                      {assignments.map((a) => (
                        <li key={a.title} className="rounded-xl p-3.5 border border-border/60 hover:bg-muted/40 hover:border-border transition-all">
                          <div className="flex items-start justify-between gap-3">
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold truncate">{a.title}</p>
                              <p className="text-xs text-muted-foreground mt-0.5">{a.course}</p>
                            </div>
                            <UrgencyPill urgency={a.urgency} due={a.due} />
                          </div>
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

const HeroStat: React.FC<{
  label: string; value: string; sub: string; icon: React.ElementType;
}> = ({ label, value, sub, icon: Icon }) => (
  <div className="hero-stat p-6 lg:col-span-1 animate-fade-in">
    <div className="relative z-10 flex items-start justify-between mb-6">
      <div>
        <p className="text-[11px] uppercase tracking-wider font-bold text-white/70">{label}</p>
        <p className="text-4xl font-display font-bold mt-2 tracking-tight">{value}</p>
      </div>
      <div className="w-10 h-10 rounded-xl bg-white/15 backdrop-blur flex items-center justify-center ring-1 ring-white/20">
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <div className="relative z-10 flex items-center gap-1.5 text-xs font-medium text-white/85">
      <ArrowUpRight className="w-3.5 h-3.5" />
      {sub}
    </div>
  </div>
);

const SupportStat: React.FC<{
  label: string; value: string; icon: React.ElementType;
  tint: "brand" | "violet"; delta: string;
}> = ({ label, value, icon: Icon, tint, delta }) => (
  <div className="card-surface card-hover p-6 animate-fade-in">
    <div className="flex items-start justify-between mb-4">
      <div>
        <p className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground">{label}</p>
        <p className="text-3xl font-display font-bold mt-2 tracking-tight">{value}</p>
      </div>
      <div className={cn(
        "w-10 h-10 rounded-xl flex items-center justify-center",
        tint === "brand" ? "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400"
                         : "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400"
      )}>
        <Icon className="w-5 h-5" />
      </div>
    </div>
    <p className="text-xs text-muted-foreground">{delta}</p>
  </div>
);

const UrgencyPill: React.FC<{ urgency: "high" | "med" | "low"; due: string }> = ({ urgency, due }) => {
  const styles = {
    high: "bg-rose-50 text-rose-700 ring-rose-200/70 dark:bg-rose-500/10 dark:text-rose-300 dark:ring-rose-500/20",
    med:  "bg-amber-50 text-amber-700 ring-amber-200/70 dark:bg-amber-500/10 dark:text-amber-300 dark:ring-amber-500/20",
    low:  "bg-emerald-50 text-emerald-700 ring-emerald-200/70 dark:bg-emerald-500/10 dark:text-emerald-300 dark:ring-emerald-500/20",
  };
  return (
    <span className={cn("text-[11px] font-bold px-2.5 py-1 rounded-full ring-1 ring-inset shrink-0", styles[urgency])}>
      Due {due}
    </span>
  );
};

export default StudentAdmin;
