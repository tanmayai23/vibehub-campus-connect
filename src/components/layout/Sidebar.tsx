
import React from "react";
import { Link } from "react-router-dom";
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
  Home
} from "lucide-react";
import { cn } from "@/lib/utils";

interface SidebarItemProps {
  icon: React.ElementType;
  label: string;
  to: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon: Icon, label, to, active }) => {
  return (
    <Link to={to} className={cn("sidebar-item", active && "active")}>
      <Icon size={20} />
      <span>{label}</span>
    </Link>
  );
};

interface SidebarSectionProps {
  title: string;
  children: React.ReactNode;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, children }) => {
  return (
    <div className="mb-6">
      <h2 className="text-xs font-semibold text-vibe-text-secondary dark:text-vibe-dark-text-secondary uppercase tracking-wider px-3 mb-2">
        {title}
      </h2>
      <div className="space-y-1">
        {children}
      </div>
    </div>
  );
};

const Sidebar: React.FC = () => {
  const pathname = window.location.pathname;

  return (
    <div className="w-64 h-screen sticky top-0 border-r border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary bg-white dark:bg-vibe-dark-background-primary overflow-y-auto py-5">
      <div className="px-4 mb-6">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-vibe-accent-blue rounded-lg flex items-center justify-center">
            <span className="text-white font-bold">V</span>
          </div>
          <h1 className="text-xl font-display font-semibold">VibeHub</h1>
        </Link>
      </div>

      <div className="px-3 space-y-6">
        <SidebarItem icon={Home} label="Dashboard" to="/" active={pathname === "/"} />

        <SidebarSection title="Main Menu">
          <SidebarItem 
            icon={CalendarDays} 
            label="Calendar" 
            to="/calendar" 
            active={pathname === "/calendar"} 
          />
          <SidebarItem 
            icon={Bell} 
            label="Events" 
            to="/events" 
            active={pathname === "/events"} 
          />
          <SidebarItem 
            icon={FileText} 
            label="Notice Board" 
            to="/notices" 
            active={pathname === "/notices"} 
          />
          <SidebarItem 
            icon={Settings} 
            label="Settings" 
            to="/settings" 
            active={pathname === "/settings"} 
          />
        </SidebarSection>

        <SidebarSection title="Study Tools">
          <SidebarItem 
            icon={Brain} 
            label="Smart Planner" 
            to="/planner" 
            active={pathname === "/planner"} 
          />
          <SidebarItem 
            icon={Timer} 
            label="Pomodoro Timer" 
            to="/pomodoro" 
            active={pathname === "/pomodoro"} 
          />
          <SidebarItem 
            icon={LineChart} 
            label="Mood Tracking" 
            to="/mood" 
            active={pathname === "/mood"} 
          />
        </SidebarSection>

        <SidebarSection title="Academic Resources">
          <SidebarItem 
            icon={BookOpen} 
            label="Curriculum" 
            to="/curriculum" 
            active={pathname === "/curriculum"} 
          />
          <SidebarItem 
            icon={Library} 
            label="Library Services" 
            to="/library" 
            active={pathname === "/library"} 
          />
          <SidebarItem 
            icon={Users} 
            label="Tutoring Center" 
            to="/tutoring" 
            active={pathname === "/tutoring"} 
          />
          <SidebarItem 
            icon={Pencil} 
            label="Examination" 
            to="/examination" 
            active={pathname === "/examination"} 
          />
        </SidebarSection>
      </div>
    </div>
  );
};

export default Sidebar;
