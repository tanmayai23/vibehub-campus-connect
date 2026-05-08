import React from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Bell, Mail, Palette, Lock, Sparkles } from "lucide-react";
import { cn } from "@/lib/utils";

const SettingsPage = () => {
  const { toast } = useToast();

  const handleSave = () => {
    toast({ title: "Settings saved", description: "Your preferences have been updated." });
  };

  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="flex min-h-screen bg-background">
          <Sidebar />
          <div className="flex-1 flex flex-col min-w-0">
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <main className="flex-1 p-6 lg:p-8 overflow-y-auto">
              <div className="max-w-3xl mx-auto space-y-8">
                <section className="animate-fade-in">
                  <div className="chip mb-3"><Sparkles className="w-3 h-3 text-brand-500" /> Preferences</div>
                  <h1 className="text-3xl lg:text-4xl font-display font-bold tracking-tight">Settings</h1>
                  <p className="text-sm text-muted-foreground mt-1.5">Customize how VibeHub looks and behaves.</p>
                </section>

                <SettingCard
                  icon={Palette}
                  title="Appearance"
                  description="Personalize your visual experience"
                  tint="brand"
                >
                  <SettingRow
                    label="Dark Mode"
                    hint="Easier on the eyes in low light"
                  >
                    <Switch checked={isDarkMode} onCheckedChange={toggleTheme} />
                  </SettingRow>
                </SettingCard>

                <SettingCard
                  icon={Bell}
                  title="Notifications"
                  description="Choose what you want to be notified about"
                  tint="violet"
                >
                  <SettingRow
                    label="Email Notifications"
                    hint="Receive updates and digests by email"
                    icon={Mail}
                  >
                    <Switch defaultChecked />
                  </SettingRow>
                  <SettingRow
                    label="Push Notifications"
                    hint="Real-time alerts on this device"
                    icon={Bell}
                    last
                  >
                    <Switch defaultChecked />
                  </SettingRow>
                </SettingCard>

                <SettingCard
                  icon={Lock}
                  title="Account"
                  description="Manage your account and security"
                  tint="emerald"
                >
                  <SettingRow
                    label="Change Password"
                    hint="Last changed 3 months ago"
                    last
                  >
                    <Button variant="outline" size="sm" className="rounded-lg">Update</Button>
                  </SettingRow>
                </SettingCard>

                <div className="flex justify-end">
                  <Button
                    className="rounded-xl bg-brand-gradient text-white hover:opacity-90 shadow-glow-brand h-10 px-6"
                    onClick={handleSave}
                  >
                    Save Changes
                  </Button>
                </div>
              </div>
            </main>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

const tintMap = {
  brand:   "bg-brand-50 text-brand-600 dark:bg-brand-500/10 dark:text-brand-400",
  violet:  "bg-violet-50 text-violet-600 dark:bg-violet-500/10 dark:text-violet-400",
  emerald: "bg-emerald-50 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400",
} as const;

const SettingCard: React.FC<{
  icon: React.ElementType; title: string; description: string;
  tint: keyof typeof tintMap; children: React.ReactNode;
}> = ({ icon: Icon, title, description, tint, children }) => (
  <section className="card-surface overflow-hidden animate-fade-in">
    <div className="p-6 border-b border-border/60 flex items-center gap-3">
      <div className={cn("w-10 h-10 rounded-xl flex items-center justify-center shrink-0", tintMap[tint])}>
        <Icon className="w-4.5 h-4.5" />
      </div>
      <div>
        <h2 className="text-base font-semibold">{title}</h2>
        <p className="text-xs text-muted-foreground mt-0.5">{description}</p>
      </div>
    </div>
    <div className="divide-y divide-border/60">{children}</div>
  </section>
);

const SettingRow: React.FC<{
  label: string; hint?: string; icon?: React.ElementType; children: React.ReactNode; last?: boolean;
}> = ({ label, hint, icon: Icon, children }) => (
  <div className="flex items-center justify-between gap-4 px-6 py-4">
    <div className="flex items-center gap-3 min-w-0">
      {Icon && <Icon className="w-4 h-4 text-muted-foreground shrink-0" />}
      <div className="min-w-0">
        <Label className="text-sm font-semibold cursor-pointer">{label}</Label>
        {hint && <p className="text-xs text-muted-foreground mt-0.5">{hint}</p>}
      </div>
    </div>
    <div className="shrink-0">{children}</div>
  </div>
);

export default SettingsPage;
