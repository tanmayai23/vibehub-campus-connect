import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "@/utils/authUtils";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import Calendar from "@/components/dashboard/Calendar";
import NoticeBoard from "@/components/dashboard/NoticeBoard";
import ChatbotButton from "@/components/dashboard/ChatbotButton";
import ThemeToggle from "@/components/ThemeToggle";
import {
  GraduationCap, Building, Users, ArrowUpRight, Sparkles, Clock,
  PlusCircle, UserCog, Calendar as CalendarIcon, FileWarning, ScrollText, ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";

const CollegeAdmin = () => {
  const navigate = useNavigate();
  const user = getCurrentUser();

  useEffect(() => {
    if (!user || user.role !== "college") navigate("/login");
  }, [navigate, user]);

  const departments = [
    { name: "Computer Science", students: 310, pct: 85, color: "from-brand-500 to-violet-500" },
    { name: "Electrical Engineering", students: 245, pct: 70, color: "from-emerald-500 to-emerald-400" },
    { name: "Business Administration", students: 280, pct: 75, color: "from-violet-500 to-fuchsia-500" },
    { name: "Mechanical Engineering", students: 200, pct: 60, color: "from-amber-500 to-amber-400" },
    { name: "Biology", students: 170, pct: 50, color: "from-rose-500 to-rose-400" },
  ];

  const actions = [
    { label: "Create New Notice", icon: PlusCircle, tint: "emerald" as const },
    { label: "Manage Faculty",    icon: UserCog,    tint: "brand"   as const },
    { label: "Schedule Events",   icon: CalendarIcon, tint: "violet" as const },
    { label: "Examination Settings", icon: ScrollText, tint: "amber" as const },
    { label: "View Complaints",   icon: FileWarning, tint: "rose"   as const },
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
                    <div className="chip mb-3"><Sparkles className="w-3 h-3 text-brand-500" /> Administration</div>
                    <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">
                      Campus <span className="text-gradient-brand">Overview</span>
                    </h1>
                    <p className="text-sm text-muted-foreground mt-1.5">Monitor and manage everything across your institution.</p>
                  </div>
                  <div className="chip"><Clock className="w-3 h-3" /> Academic Year 2024–25</div>
                </section>

                <section className="grid lg:grid-cols-3 gap-4">
                  <HeroStat label="Total Students" value="1,248" sub="+62 this semester" icon={GraduationCap} />
                  <SupportStat label="Faculty" value="86" icon={Users} tint="brand" delta="4 new this month" />
                  <SupportStat label="Departments" value="12" icon={Building} tint="violet" delta="All active" />
                </section>

                <section className="grid lg:grid-cols-2 gap-6">
                  <Calendar />
                  <NoticeBoard />
                </section>

                <section className="grid lg:grid-cols-5 gap-6">
                  {/* Departments */}
                  <div className="card-surface p-6 lg:col-span-3">
                    <div className="flex items-center justify-between mb-5">
                      <div>
                        <h3 className="text-base font-semibold leading-tight">Department Overview</h3>
                        <p className="text-xs text-muted-foreground mt-0.5">Enrollment by department</p>
                      </div>
                      <button className="text-xs font-semibold text-brand-600 dark:text-brand-400 hover:underline flex items-center gap-1">
                        Details <ArrowUpRight className="w-3 h-3" />
                      </button>
                    </div>
                    <div className="space-y-5">
                      {departments.map((d) => (
                        <div key={d.name}>
                          <div className="flex justify-between items-baseline mb-2">
                            <span className="text-sm font-semibold">{d.name}</span>
                            <span className="text-xs text-muted-foreground tabular-nums">
                              {d.students} <span className="text-muted-foreground/60">students</span>
                              <span className="ml-2 font-bold text-foreground">{d.pct}%</span>
                            </span>
                          </div>
                          <div className="h-2 rounded-full bg-muted overflow-hidden">
                            <div className={cn("h-full bg-gradient-to-r rounded-full transition-all duration-700", d.color)} style={{ width: `${d.pct}%` }} />
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Quick actions */}
                  <div className="card-surface p-6 lg:col-span-2">
                    <div className="mb-5">
                      <h3 className="text-base font-semibold leading-tight">Quick Actions</h3>
                      <p className="text-xs text-muted-foreground mt-0.5">Common administrative tasks</p>
                    </div>
                    <div className="space-y-2">
                      {actions.map((a) => (
                        <ActionRow key={a.label} {...a} />
                      ))}
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

const tints = {
  emerald: "bg-emerald-50 text-emerald-700 dark:bg-emerald-500/10 dark:text-emerald-300",
  brand:   "bg-brand-50 text-brand-700 dark:bg-brand-500/10 dark:text-brand-300",
  violet:  "bg-violet-50 text-violet-700 dark:bg-violet-500/10 dark:text-violet-300",
  amber:   "bg-amber-50 text-amber-700 dark:bg-amber-500/10 dark:text-amber-300",
  rose:    "bg-rose-50 text-rose-700 dark:bg-rose-500/10 dark:text-rose-300",
} as const;

const ActionRow: React.FC<{ label: string; icon: React.ElementType; tint: keyof typeof tints }> = ({ label, icon: Icon, tint }) => (
  <button className="w-full flex items-center gap-3 p-3 rounded-xl border border-border/60 hover:bg-muted/60 hover:border-border transition-all text-left group">
    <div className={cn("w-9 h-9 rounded-lg flex items-center justify-center shrink-0", tints[tint])}>
      <Icon className="w-4 h-4" />
    </div>
    <span className="flex-1 text-sm font-semibold">{label}</span>
    <ChevronRight className="w-4 h-4 text-muted-foreground transition-transform group-hover:translate-x-0.5" />
  </button>
);

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

export default CollegeAdmin;
