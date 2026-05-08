import React, { useState } from "react";
import { ChevronLeft, ChevronRight, CalendarRange } from "lucide-react";
import { cn } from "@/lib/utils";
import { useToast } from "@/hooks/use-toast";

const dayNames = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const monthNames = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const events: Record<string, { type: string; title: string }> = {
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
  const [currentDate, setCurrentDate] = useState(new Date(2025, 4, 18));
  const [selectedDate, setSelectedDate] = useState<string | null>(null);
  const { toast } = useToast();

  const getDaysInMonth = (year: number, month: number) =>
    new Date(year, month + 1, 0).getDate();
  const getFirstDayOfMonth = (year: number, month: number) =>
    new Date(year, month, 1).getDay();

  const handlePrevMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  const handleNextMonth = () =>
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));

  const handleDateClick = (day: number) => {
    if (day === 0) return;
    const dateStr = `${currentDate.getFullYear()}-${String(currentDate.getMonth() + 1).padStart(2, "0")}-${String(day).padStart(2, "0")}`;
    setSelectedDate(dateStr);
    const event = events[dateStr];
    if (event) {
      toast({
        title: `${monthNames[currentDate.getMonth()]} ${day}`,
        description: event.title,
      });
    }
  };

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const today = new Date();
  const daysInMonth = getDaysInMonth(year, month);
  const firstDayOfMonth = getFirstDayOfMonth(year, month);

  const days: Array<{
    day: number;
    isCurrentMonth: boolean;
    isToday?: boolean;
    isSelected?: boolean;
    event?: { type: string; title: string };
  }> = [];
  for (let i = 0; i < firstDayOfMonth; i++) days.push({ day: 0, isCurrentMonth: false });
  for (let i = 1; i <= daysInMonth; i++) {
    const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(i).padStart(2, "0")}`;
    days.push({
      day: i,
      isCurrentMonth: true,
      isToday: today.getDate() === i && today.getMonth() === month && today.getFullYear() === year,
      isSelected: dateStr === selectedDate,
      event: events[dateStr],
    });
  }

  return (
    <div className={cn("card-surface p-5 card-hover", className)}>
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-xl bg-brand-50 dark:bg-brand-500/10 flex items-center justify-center">
            <CalendarRange className="w-4 h-4 text-brand-600 dark:text-brand-400" />
          </div>
          <div>
            <h2 className="text-base font-semibold leading-tight">Calendar</h2>
            <p className="text-xs text-muted-foreground">Upcoming events</p>
          </div>
        </div>
        <div className="flex items-center gap-1 bg-muted/60 rounded-xl p-1">
          <button
            onClick={handlePrevMonth}
            className="p-1.5 rounded-lg hover:bg-card text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Previous month"
          >
            <ChevronLeft size={16} />
          </button>
          <span className="text-xs font-semibold min-w-[88px] text-center px-2">
            {monthNames[month].slice(0, 3)} {year}
          </span>
          <button
            onClick={handleNextMonth}
            className="p-1.5 rounded-lg hover:bg-card text-foreground/70 hover:text-foreground transition-colors"
            aria-label="Next month"
          >
            <ChevronRight size={16} />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1 mb-1">
        {dayNames.map((day) => (
          <div key={day} className="text-[10px] text-muted-foreground font-bold uppercase tracking-wider text-center py-1">
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1">
        {days.map((day, index) =>
          day.isCurrentMonth ? (
            <div key={index} className="text-center">
              <div
                className={cn(
                  "calendar-day",
                  day.isToday && "today",
                  day.isSelected && "selected",
                  day.event && `event ${day.event.type}`
                )}
                onClick={() => handleDateClick(day.day)}
              >
                {day.day}
              </div>
            </div>
          ) : (
            <div key={index} className="h-9" />
          )
        )}
      </div>

      <div className="mt-5 flex items-center justify-center gap-4 pt-4 border-t border-border/60">
        <Legend color="bg-rose-500" label="Holiday" />
        <Legend color="bg-brand-500" label="Academic" />
        <Legend color="bg-amber-500" label="Exam" />
      </div>
    </div>
  );
};

const Legend: React.FC<{ color: string; label: string }> = ({ color, label }) => (
  <div className="flex items-center gap-1.5">
    <div className={cn("h-1.5 w-1.5 rounded-full", color)} />
    <span className="text-[11px] text-muted-foreground font-medium">{label}</span>
  </div>
);

export default Calendar;
