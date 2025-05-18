
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
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
