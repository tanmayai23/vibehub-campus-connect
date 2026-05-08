import React, { useState } from "react";
import { ChevronDown, Megaphone, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

interface Notice {
  id: string;
  title: string;
  date: string;
  category: "administrative" | "exam" | "placement" | "academic";
  important: boolean;
}

const notices: Notice[] = [
  { id: "1", title: "Semester Registration Deadline Extended", date: "April 13, 2025", category: "administrative", important: true },
  { id: "2", title: "Mid-Semester Examination Schedule",      date: "April 12, 2025", category: "exam",           important: true },
  { id: "3", title: "Internship Opportunities with Tech Giants", date: "April 10, 2025", category: "placement",  important: false },
  { id: "4", title: "Workshop on Research Methodology",       date: "April 8, 2025",  category: "academic",       important: false },
];

interface NoticeBoardProps {
  className?: string;
}

const NoticeBoard: React.FC<NoticeBoardProps> = ({ className }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const { toast } = useToast();

  const filteredNotices = activeFilter === "all" ? notices : notices.filter((n) => n.category === activeFilter);

  const handleNoticeClick = (notice: Notice) => {
    toast({ title: notice.title, description: `Category: ${notice.category}` });
  };

  return (
    <div className={cn("card-surface p-5 card-hover", className)}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-violet-50 dark:bg-violet-500/10 flex items-center justify-center">
            <Megaphone className="w-4 h-4 text-violet-600 dark:text-violet-400" />
          </div>
          <div>
            <h2 className="text-base font-semibold leading-tight">Notice Board</h2>
            <p className="text-xs text-muted-foreground">{filteredNotices.length} active notices</p>
          </div>
        </div>
        <div className="relative">
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="bg-muted/60 text-xs font-medium text-foreground/80 border-0 rounded-lg py-1.5 pl-3 pr-8 appearance-none focus:outline-none focus:ring-2 focus:ring-brand-500/30 cursor-pointer"
          >
            <option value="all">All</option>
            <option value="administrative">Administrative</option>
            <option value="exam">Exam</option>
            <option value="placement">Placement</option>
            <option value="academic">Academic</option>
          </select>
          <ChevronDown className="absolute right-2 top-1/2 -translate-y-1/2 h-3.5 w-3.5 pointer-events-none text-muted-foreground" />
        </div>
      </div>

      <div className="space-y-2.5">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <button
              key={notice.id}
              onClick={() => handleNoticeClick(notice)}
              className="w-full text-left relative group rounded-xl border border-border/60 bg-background/40 hover:bg-muted/60 hover:border-border transition-all p-3.5 animate-fade-in"
            >
              {notice.important && (
                <span className="absolute left-0 top-3.5 bottom-3.5 w-0.5 rounded-full bg-amber-400" aria-hidden />
              )}
              <div className="flex items-start justify-between gap-3">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    {notice.important && <Star className="h-3.5 w-3.5 text-amber-500 fill-amber-500 shrink-0" />}
                    <h3 className="font-semibold text-sm text-foreground truncate">{notice.title}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground">{notice.date}</p>
                </div>
                <span className={cn("category-badge shrink-0", notice.category)}>
                  {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                </span>
              </div>
            </button>
          ))
        ) : (
          <div className="text-center py-8 text-sm text-muted-foreground">No notices found</div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
