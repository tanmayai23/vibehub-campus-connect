
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Calendar events data
const events = {
  "2025-05-01": { type: "academic", title: "Semester Start" },
  "2025-05-02": { type: "academic", title: "Faculty Meeting" },
  "2025-05-03": { type: "holiday", title: "Foundation Day" },
  "2025-05-08": { type: "academic", title: "Research Symposium" },
  "2025-05-12": { type: "exam", title: "Mid-term Exams Begin" },
  "2025-05-13": { type: "exam", title: "CS301 Exam" },
  "2025-05-28": { type: "academic", title: "Workshop" },
};

interface CalendarProps {
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ className }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 18)); // May 18, 2025
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { toast } = useToast();
  
  const getDaysInMonth = (year: number, month: number) => {
    return new Date(year, month + 1, 0).getDate();
  };
  
  const getFirstDayOfMonth = (year: number, month: number) => {
    return new Date(year, month, 1).getDay();
  };
  
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };

  const handleDateClick = (day: number) => {
    if (day === 0) return;

    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    setSelectedDate(dateStr);

    const event = events[dateStr];
    if (event) {
      toast({
        title: `Event on ${monthNames[currentDate.getMonth()]} ${day}`,
        description: event.title,
      });
    }
  };
  
  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);
  
  // Create array of days
  const days = [];
  // Add empty spaces for days before the first day of the month
  for (let i = 0; i < firstDayOfMonth; i++) {
    days.push({
      day: 0,
      isCurrentMonth: false,
    });
  }
  
  // Add days of the current month
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(i).padStart(2, '0')}`;
    const isSelected = dateStr === selectedDate;
    days.push({
      day: i,
      isCurrentMonth: true,
      isToday: today.getDate() === i && today.getMonth() === month && today.getFullYear() === year,
      isSelected,
      event: events[dateStr],
    });
  }
  
  return (
    <div className={cn("bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-4 shadow-sm transition-all hover-scale", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium text-vibe-text-primary dark:text-vibe-dark-text-primary">Calendar</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevMonth}
            className="p-1 rounded-full hover:bg-vibe-background-secondary dark:hover:bg-vibe-dark-background-tertiary text-vibe-text-primary dark:text-vibe-dark-text-primary"
            aria-label="Previous month"
          >
            <ChevronLeft size={20} />
          </button>
          <h3 className="text-sm font-medium min-w-24 text-center text-vibe-text-primary dark:text-vibe-dark-text-primary">
            {monthNames[month]} {year}
          </h3>
          <button
            onClick={handleNextMonth}
            className="p-1 rounded-full hover:bg-vibe-background-secondary dark:hover:bg-vibe-dark-background-tertiary text-vibe-text-primary dark:text-vibe-dark-text-primary"
            aria-label="Next month"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
      
      <div className="grid grid-cols-7 gap-1">
        {dayNames.map((day) => (
          <div key={day} className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary font-medium text-center py-1">
            {day}
          </div>
        ))}
        
        {days.map((day, index) => (
          <div key={index} className="text-center py-1">
            {day.isCurrentMonth ? (
              <div
                className={cn(
                  "calendar-day",
                  day.isToday && "today",
                  day.isSelected && "selected",
                  day.event && `event ${day.event.type}`
                )}
                onClick={() => handleDateClick(day.day)}
              >
                <span className="text-vibe-text-primary dark:text-vibe-dark-text-primary">
                  {day.day}
                </span>
              </div>
            ) : (
              <div className="calendar-day text-vibe-background-tertiary dark:text-vibe-dark-background-tertiary"></div>
            )}
          </div>
        ))}
      </div>
      
      <div className="mt-4 flex items-center justify-center gap-4 pt-2 border-t border-vibe-background-secondary dark:border-vibe-dark-background-tertiary">
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-red-500"></div>
          <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Holiday</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-blue-500"></div>
          <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Academic</span>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-2 w-2 rounded-full bg-amber-500"></div>
          <span className="text-xs text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Exam</span>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
