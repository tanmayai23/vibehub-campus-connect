import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  CalendarDays,
  Bell,
  FileText,
  Settings,
  Brain,
  Timer,
  LineChart,
  BookOpen,
  Library,
  Users,
  Pencil,
  LayoutDashboard,
  Sparkles,
  GraduationCap,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { getCurrentUser } from "@/utils/authUtils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, to, active }) => (
  <Link to={to} className={cn("sidebar-item group", active && "active")}>
    <Icon size={18} className={cn("shrink-0 transition-colors", active ? "text-brand-600 dark:text-brand-400" : "text-foreground/50 group-hover:text-foreground/80")} />
    <span className="truncate">{label}</span>
  </Link>
);

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => (
  <div className="space-y-1">
    <h2 className="text-[10px] font-bold text-muted-foreground uppercase tracking-[0.12em] px-3 mb-2">
      {title}
    </h2>
    <div className="space-y-0.5">{children}</div>
  </div>
);

const roleHomeMap: Record<string, string> = {
  student: "/student",
  teacher: "/teacher",
  college: "/college",
};

const Sidebar: React.FC = () => {
  const location = useLocation();
  const pathname = location.pathname;
  const user = getCurrentUser();
  const homePath = user ? roleHomeMap[user.role] ?? "/" : "/";
  const isHome = pathname === homePath || pathname === "/";

  return (
    <aside className="w-64 h-screen sticky top-0 shrink-0 bg-sidebar border-r border-sidebar-border flex flex-col">
      {/* Brand */}
      <div className="px-5 pt-6 pb-5">
        <Link to={homePath} className="flex items-center gap-2.5 group">
          <div className="relative">
            <div className="w-9 h-9 rounded-xl bg-brand-gradient flex items-center justify-center shadow-glow-brand transition-transform duration-300 group-hover:scale-105">
              <Sparkles className="w-4 h-4 text-white" strokeWidth={2.5} />
            </div>
          </div>
          <div>
            <h1 className="text-lg font-display font-bold tracking-tight leading-none">VibeHub</h1>
            <p className="text-[10px] text-muted-foreground font-medium mt-0.5 tracking-wide">CAMPUS PLATFORM</p>
          </div>
        </Link>
      </div>

      {/* Nav */}
      <nav className="flex-1 overflow-y-auto px-3 pb-4 space-y-6">
        <div className="space-y-0.5">
          <SidebarItem icon={LayoutDashboard} label="Dashboard" to={homePath} active={isHome} />
        </div>

        <SidebarSection title="Main Menu">
          <SidebarItem icon={CalendarDays} label="Calendar" to="/calendar" active={pathname === "/calendar"} />
          <SidebarItem icon={Bell} label="Events" to="/events" active={pathname === "/events"} />
          <SidebarItem icon={FileText} label="Notice Board" to="/notices" active={pathname === "/notices"} />
          <SidebarItem icon={Settings} label="Settings" to="/settings" active={pathname === "/settings"} />
        </SidebarSection>

        <SidebarSection title="Study Tools">
          <SidebarItem icon={Brain} label="Smart Planner" to="/planner" active={pathname === "/planner"} />
          <SidebarItem icon={Timer} label="Pomodoro Timer" to="/pomodoro" active={pathname === "/pomodoro"} />
          <SidebarItem icon={LineChart} label="Mood Tracking" to="/mood" active={pathname === "/mood"} />
        </SidebarSection>

        <SidebarSection title="Academic Resources">
          <SidebarItem icon={BookOpen} label="Curriculum" to="/curriculum" active={pathname === "/curriculum"} />
          <SidebarItem icon={Library} label="Library" to="/library" active={pathname === "/library"} />
          <SidebarItem icon={Users} label="Tutoring Center" to="/tutoring" active={pathname === "/tutoring"} />
          <SidebarItem icon={Pencil} label="Examination" to="/examination" active={pathname === "/examination"} />
        </SidebarSection>
      </nav>

      {/* Footer profile */}
      {user && (
        <div className="p-3 border-t border-sidebar-border">
          <div className="flex items-center gap-3 px-2 py-2.5 rounded-xl hover:bg-muted transition-colors cursor-pointer">
            <div className="w-9 h-9 rounded-full bg-brand-gradient flex items-center justify-center text-white text-sm font-semibold shrink-0 ring-2 ring-white dark:ring-card">
              {user.name.split(" ").map((n) => n[0]).join("").slice(0, 2)}
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold truncate leading-tight">{user.name}</p>
              <div className="flex items-center gap-1 mt-0.5">
                <GraduationCap className="w-3 h-3 text-muted-foreground" />
                <p className="text-[11px] text-muted-foreground capitalize">{user.role}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </aside>
  );
};

export default Sidebar;
