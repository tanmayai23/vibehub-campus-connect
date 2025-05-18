
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { getCurrentUser } from "@/utils/authUtils";

import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import StudentAdmin from "./pages/StudentAdmin";
import TeacherAdmin from "./pages/TeacherAdmin";
import CollegeAdmin from "./pages/CollegeAdmin";

// Student pages
import CalendarPage from "./pages/student/Calendar";
import EventsPage from "./pages/student/Events";
import NoticesPage from "./pages/student/Notices";
import SettingsPage from "./pages/student/Settings";
import SmartPlannerPage from "./pages/student/StudyTools/SmartPlanner";
import PomodoroTimer from "./pages/student/StudyTools/PomodoroTimer";
import MoodTracking from "./pages/student/StudyTools/MoodTracking";
import CurriculumPage from "./pages/student/Resources/Curriculum";
import LibraryPage from "./pages/student/Resources/Library";
import TutoringPage from "./pages/student/Resources/Tutoring";
import ExaminationPage from "./pages/student/Resources/Examination";
import CommunityPage from "./pages/student/Community";
import ComplaintPage from "./pages/student/Complaint";

const queryClient = new QueryClient();

const App = () => {
  // Function to determine where to redirect based on user role
  const getUserHomePage = () => {
    const user = getCurrentUser();
    if (!user) return "/login";
    
    switch (user.role) {
      case "student": return "/student";
      case "teacher": return "/teacher";
      case "college": return "/college";
      default: return "/login";
    }
  };

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to={getUserHomePage()} replace />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Index />} />
            <Route path="/student" element={<StudentAdmin />} />
            <Route path="/teacher" element={<TeacherAdmin />} />
            <Route path="/college" element={<CollegeAdmin />} />
            
            {/* Student Routes */}
            <Route path="/calendar" element={<CalendarPage />} />
            <Route path="/events" element={<EventsPage />} />
            <Route path="/notices" element={<NoticesPage />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/planner" element={<SmartPlannerPage />} />
            <Route path="/pomodoro" element={<PomodoroTimer />} />
            <Route path="/mood" element={<MoodTracking />} />
            <Route path="/curriculum" element={<CurriculumPage />} />
            <Route path="/library" element={<LibraryPage />} />
            <Route path="/tutoring" element={<TutoringPage />} />
            <Route path="/examination" element={<ExaminationPage />} />
            <Route path="/community" element={<CommunityPage />} />
            <Route path="/complaint" element={<ComplaintPage />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
