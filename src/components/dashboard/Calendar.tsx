
import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

// Calendar events data
const events = {
  "2025-05-01": { type: "academic" },
  "2025-05-02": { type: "academic" },
  "2025-05-03": { type: "holiday" },
  "2025-05-08": { type: "academic" },
  "2025-05-12": { type: "exam" },
  "2025-05-13": { type: "exam" },
  "2025-05-28": { type: "academic" },
};

interface CalendarProps {
  className?: string;
}

const Calendar: React.FC<CalendarProps> = ({ className }) => {
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 18)); // May 18, 2025
  
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
    days.push({
      day: i,
      isCurrentMonth: true,
      isToday: today.getDate() === i && today.getMonth() === month && today.getFullYear() === year,
      event: events[dateStr],
    });
  }
  
  return (
    <div className={cn("bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-4 shadow-sm", className)}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-lg font-medium">Calendar</h2>
        <div className="flex items-center space-x-2">
          <button
            onClick={handlePrevMonth}
            className="p-1 rounded-full hover:bg-vibe-background-secondary dark:hover:bg-vibe-dark-background-tertiary"
          >
            <ChevronLeft size={20} />
          </button>
          <h3 className="text-sm font-medium min-w-24 text-center">
            {monthNames[month]} {year}
          </h3>
          <button
            onClick={handleNextMonth}
            className="p-1 rounded-full hover:bg-vibe-background-secondary dark:hover:bg-vibe-dark-background-tertiary"
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
                  day.event && `event ${day.event.type}`
                )}
              >
                {day.day}
              </div>
            ) : (
              <div className="calendar-day text-gray-300 dark:text-gray-600"></div>
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
