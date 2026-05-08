import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "@/utils/authUtils";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Calendar from "@/components/dashboard/Calendar";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import ChatbotButton from "@/components/dashboard/ChatbotButton";
import ThemeToggle from "@/components/ThemeToggle";
import { BookOpen, FileText, Users, ArrowUpRight, Sparkles, Clock } from "lucide-react";
import { cn } from "@/lib/utils";

const TeacherAdmin = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user || user.role !== "teacher") navigate("/login");
  }, [navigate, user]);

  const firstName = user?.name.split(" ")[0] ?? "Professor";

  const courses = [
    { code: "CS301", name: "Data Structures and Algorithms", students: 42 },
    { code: "CS302", name: "Database Systems", students: 38 },
    { code: "CS401", name: "Advanced Algorithms", students: 24 },
    { code: "CS501", name: "Machine Learning", students: 23 },
  ];

  const submissions = [
    { title: "Database Design Project", submitted: 26, total: 38, color: "from-emerald-500 to-emerald-400" },
    { title: "Algorithm Analysis", submitted: 33, total: 42, color: "from-brand-500 to-violet-500" },
    { title: "Machine Learning Project", submitted: 15, total: 23, color: "from-amber-500 to-amber-400" },
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
                    <div className="chip mb-3"><Sparkles className="w-3 h-3 text-brand-500" /> Faculty Portal</div>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                      Welcome, {firstName}.
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1.5">Manage your courses and review pending submissions.</p>
                  </div>
                  <div className="chip"><Clock className="w-3 h-3" /> Academic Year 2024–25</div>
                </section>

                <section className="grid lg:grid-cols-3 gap-4">
                  <HeroStat label="Total Students" value="127" sub="Across 4 active courses" icon={Users} />
                  <SupportStat label="Courses Teaching" value="4" icon={BookOpen} tint="brand" delta="Spring '25" />
                  <SupportStat label="To Grade" value="12" icon={FileText} tint="violet" delta="3 due this week" />
                </section>

                <section className="grid lg:grid-cols-2 gap-6">
                  <Calendar />
                  <NoticeBoard />
                </section>

                <section className="grid lg:grid-cols-2 gap-6">
                  <div className="card-surface p-6">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h3 className="text-base font-semibold leading-tight">Current Courses</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{courses.length} active classrooms</p>
                      </div>
                      <button className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
                        Manage <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                    <ul className="space-y-2.5">
                      {courses.map((c) => (
                        <li key={c.code} className="rounded-xl p-3 hover:bg-muted/60 transition-colors">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 shrink-0 rounded-lg bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center text-[11px] font-bold text-violet-700 dark:text-violet-300">
                              {c.code.slice(0, 2)}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-semibold truncate">
                                <span className="text-muted-foreground font-medium">{c.code}:</span> {c.name}
                              </p>
                              <div className="flex items-center gap-1.5 mt-0.5">
                                <Users className="w-3 h-3 text-muted-foreground" />
                                <p className="text-xs text-muted-foreground">{c.students} students</p>
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
                        <h3 className="text-base font-semibold leading-tight">Submission Status</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Live progress across assignments</p>
                      </div>
                    </div>
                    <div className="space-y-5">
                      {submissions.map((s) => {
                        const pct = Math.round((s.submitted / s.total) * 100);
                        return (
                          <div key={s.title}>
                            <div className="flex justify-between items-baseline mb-2">
                              <span className="text-sm font-semibold">{s.title}</span>
                              <span className="text-xs text-muted-foreground tabular-nums">
                                {s.submitted}<span className="text-muted-foreground/60"> / {s.total}</span>
                                <span className="ml-2 font-bold text-foreground">{pct}%</span>
                              </span>
                            </div>
                            <div className="h-2 rounded-full bg-muted overflow-hidden">
                              <div className={cn("h-full bg-gradient-to-r rounded-full transition-all duration-700", s.color)} style={{ width: `${pct}%` }} />
                            </div>
                          </div>
                        );
                      })}
                    </div>
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

const HeroStat: React.FC<{ label: string; value: string; sub: string; icon: React.ElementType }> = ({ label, value, sub, icon: Icon }) => (
  <div className="hero-stat p-6 animate-fade-in">
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

const SupportStat: React.FC<{ label: string; value: string; icon: React.ElementType; tint: "brand" | "violet"; delta: string }> = ({ label, value, icon: Icon, tint, delta }) => (
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

export default TeacherAdmin;
