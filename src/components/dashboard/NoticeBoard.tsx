
import React, { useState } from "react";
import { ChevronDown, Star } from "lucide-react";
import { cn } from "@/lib/utils";

interface Notice {
  id: string;
  title: string;
  date: string;
  category: "administrative" | "exam" | "placement" | "academic";
  important: boolean;
}

const notices: Notice[] = [
  {
    id: "1",
    title: "Semester Registration Deadline Extended",
    date: "April 13, 2025",
    category: "administrative",
    important: true,
  },
  {
    id: "2",
    title: "Mid-Semester Examination Schedule",
    date: "April 12, 2025",
    category: "exam",
    important: true,
  },
  {
    id: "3",
    title: "Internship Opportunities with Tech Giants",
    date: "April 10, 2025",
    category: "placement",
    important: false,
  },
  {
    id: "4",
    title: "Workshop on Research Methodology",
    date: "April 8, 2025",
    category: "academic",
    important: false,
  },
];

interface NoticeBoardProps {
  className?: string;
}

const NoticeBoard: React.FC<NoticeBoardProps> = ({ className }) => {
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const filteredNotices = activeFilter === "all" 
    ? notices 
    : notices.filter(notice => notice.category === activeFilter);

  return (
    <div className={cn("bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-4 shadow-sm", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Notice Board</h2>
        <div className="relative">
          <select
            value={activeFilter}
            onChange={(e) => setActiveFilter(e.target.value)}
            className="bg-transparent text-sm text-vibe-text-primary dark:text-vibe-dark-text-primary border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary rounded-lg py-1 pl-3 pr-8 appearance-none"
          >
            <option value="all">All Notices</option>
            <option value="administrative">Administrative</option>
            <option value="exam">Exam</option>
            <option value="placement">Placement</option>
            <option value="academic">Academic</option>
          </select>
          <ChevronDown className="absolute right-2 top-2 h-4 w-4 pointer-events-none text-vibe-text-secondary dark:text-vibe-dark-text-secondary" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredNotices.length > 0 ? (
          filteredNotices.map((notice) => (
            <div
              key={notice.id}
              className="border border-vibe-background-tertiary dark:border-vibe-dark-background-tertiary rounded-lg p-3 hover:bg-vibe-background-secondary dark:hover:bg-vibe-dark-background-tertiary transition-colors cursor-pointer"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    {notice.important && (
                      <Star className="h-4 w-4 text-yellow-500 fill-yellow-500" />
                    )}
                    <h3 className="font-medium">{notice.title}</h3>
                  </div>
                  <p className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">{notice.date}</p>
                </div>
                <span className={cn("category-badge", `${notice.category}`)}>
                  {notice.category.charAt(0).toUpperCase() + notice.category.slice(1)}
                </span>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center py-6 text-vibe-text-secondary dark:text-vibe-dark-text-secondary">
            No notices found
          </div>
        )}
      </div>
    </div>
  );
};

export default NoticeBoard;
