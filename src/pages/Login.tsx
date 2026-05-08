import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { authenticateUser, saveCurrentUser } from "@/utils/authUtils";
import ThemeToggle from "@/components/ThemeToggle";
import { ArrowRight, GraduationCap, Moon, Sparkles, Sun, BookOpen, Users, CheckCircle2 } from "lucide-react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      const user = authenticateUser(email, password);
      if (user) {
        saveCurrentUser(user);
        toast({ title: "Welcome back", description: `Signed in as ${user.name}` });
        switch (user.role) {
          case "student": navigate("/student"); break;
          case "teacher": navigate("/teacher"); break;
          case "college": navigate("/college"); break;
          default: navigate("/");
        }
      } else {
        toast({
          title: "Sign in failed",
          description: "Invalid email or password. Please try again.",
          variant: "destructive",
        });
      }
    } catch {
      toast({ title: "Error", description: "Something went wrong.", variant: "destructive" });
    } finally {
      setIsLoading(false);
    }
  };

  const fillDemo = (role: "student" | "teacher" | "college") => {
    const map = {
      student: "student@vibehub.edu",
      teacher: "teacher@vibehub.edu",
      college: "admin@vibehub.edu",
    };
    setEmail(map[role]);
    setPassword("demo");
  };

  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="min-h-screen flex bg-background">
          {/* Theme toggle */}
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="absolute top-5 right-5 z-50 rounded-xl h-10 w-10 bg-card/80 backdrop-blur border border-border hover:bg-card"
            aria-label="Toggle theme"
          >
            {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
          </Button>

          {/* Brand hero panel */}
          <div className="hidden lg:flex relative w-1/2 bg-brand-mesh text-white overflow-hidden">
            <div className="absolute inset-0 bg-grid-slate" style={{ backgroundSize: "32px 32px", maskImage: "radial-gradient(ellipse at center, black 40%, transparent 80%)" }} />

            {/* Floating decorative blobs */}
            <div className="absolute -top-32 -left-20 w-80 h-80 bg-violet-400/30 rounded-full blur-3xl animate-float" />
            <div className="absolute -bottom-40 -right-10 w-96 h-96 bg-brand-300/30 rounded-full blur-3xl animate-float" style={{ animationDelay: "1.5s" }} />

            <div className="relative z-10 flex flex-col justify-between p-12 w-full">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-2xl bg-white/15 backdrop-blur flex items-center justify-center ring-1 ring-white/20">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <h1 className="text-xl font-display font-bold tracking-tight">VibeHub</h1>
                  <p className="text-xs text-white/70 tracking-wide">CAMPUS PLATFORM</p>
                </div>
              </div>

              <div className="space-y-6 max-w-md">
                <h2 className="text-4xl xl:text-5xl font-display font-bold tracking-tight leading-[1.1]">
                  Your campus,<br />
                  <span className="text-white/80">all in one place.</span>
                </h2>
                <p className="text-base text-white/75 leading-relaxed">
                  Manage classes, track deadlines, connect with peers, and stay on top of campus life — designed for students, teachers, and administrators.
                </p>

                <div className="space-y-3 pt-2">
                  <Feature icon={CheckCircle2} text="Smart calendar with academic events" />
                  <Feature icon={CheckCircle2} text="Real-time notice board & alerts" />
                  <Feature icon={CheckCircle2} text="Built-in AI assistant for quick answers" />
                </div>
              </div>

              <div className="flex items-center gap-6 text-xs text-white/60">
                <div className="flex items-center gap-1.5"><GraduationCap className="w-3.5 h-3.5" /> 1,248 students</div>
                <div className="flex items-center gap-1.5"><Users className="w-3.5 h-3.5" /> 86 faculty</div>
                <div className="flex items-center gap-1.5"><BookOpen className="w-3.5 h-3.5" /> 12 departments</div>
              </div>
            </div>
          </div>

          {/* Form panel */}
          <div className="flex-1 flex items-center justify-center p-6 sm:p-12">
            <div className="w-full max-w-sm animate-fade-in">
              <div className="lg:hidden flex items-center gap-2.5 mb-10">
                <div className="w-10 h-10 rounded-xl bg-brand-gradient flex items-center justify-center shadow-glow-brand">
                  <Sparkles className="w-4 h-4 text-white" />
                </div>
                <h1 className="text-xl font-display font-bold">VibeHub</h1>
              </div>

              <div className="mb-8">
                <h2 className="text-3xl font-display font-bold tracking-tight">Welcome back</h2>
                <p className="text-sm text-muted-foreground mt-1.5">Sign in to continue to your dashboard.</p>
              </div>

              <form onSubmit={handleLogin} className="space-y-4">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-sm font-medium text-foreground/80">Email</label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@university.edu"
                    className="h-11 rounded-xl bg-muted/40 border-border focus-visible:bg-card focus-visible:ring-brand-500/30"
                    required
                  />
                </div>

                <div className="space-y-1.5">
                  <div className="flex items-center justify-between">
                    <label htmlFor="password" className="text-sm font-medium text-foreground/80">Password</label>
                    <button type="button" className="text-xs font-medium text-brand-600 dark:text-brand-400 hover:underline">Forgot?</button>
                  </div>
                  <Input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="h-11 rounded-xl bg-muted/40 border-border focus-visible:bg-card focus-visible:ring-brand-500/30"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full h-11 rounded-xl bg-brand-gradient hover:opacity-90 text-white font-semibold shadow-glow-brand group"
                  disabled={isLoading}
                >
                  {isLoading ? "Signing in…" : (
                    <>Sign in <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover:translate-x-0.5" /></>
                  )}
                </Button>
              </form>

              {/* Demo accounts */}
              <div className="mt-8 pt-6 border-t border-border">
                <p className="text-[11px] uppercase tracking-wider font-bold text-muted-foreground mb-3">Try a demo account</p>
                <div className="grid grid-cols-3 gap-2">
                  <DemoButton label="Student" onClick={() => fillDemo("student")} />
                  <DemoButton label="Teacher" onClick={() => fillDemo("teacher")} />
                  <DemoButton label="Admin" onClick={() => fillDemo("college")} />
                </div>
                <p className="text-[11px] text-muted-foreground mt-3">Any password will work for demo accounts.</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

const Feature: React.FC<{ icon: React.ElementType; text: string }> = ({ icon: Icon, text }) => (
  <div className="flex items-center gap-2.5 text-sm text-white/85">
    <Icon className="w-4 h-4 text-violet-200 shrink-0" />
    <span>{text}</span>
  </div>
);

const DemoButton: React.FC<{ label: string; onClick: () => void }> = ({ label, onClick }) => (
  <button
    type="button"
    onClick={onClick}
    className="h-9 rounded-lg border border-border bg-card hover:bg-muted text-xs font-semibold text-foreground/70 hover:text-foreground transition-colors"
  >
    {label}
  </button>
);

export default Login;
