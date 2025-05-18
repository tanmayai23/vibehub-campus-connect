
import React, { useState } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell
} from "recharts";
import { useToast } from "@/hooks/use-toast";

// Mood data for the week
const moodData = [
  { day: "Mon", mood: 3, color: "#FFD166" },
  { day: "Tue", mood: 4, color: "#06D6A0" },
  { day: "Wed", mood: 2, color: "#EF476F" },
  { day: "Thu", mood: 5, color: "#06D6A0" },
  { day: "Fri", mood: 4, color: "#06D6A0" },
  { day: "Sat", mood: 3, color: "#FFD166" },
  { day: "Sun", mood: 4, color: "#06D6A0" },
];

// Emoji mapping for mood levels
const moodEmojis = ["😢", "😟", "😐", "🙂", "😄"];
const moodColors = ["#EF476F", "#F78C6B", "#FFD166", "#83D483", "#06D6A0"];

const MoodTracking = () => {
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(new Date());
  const [selectedMood, setSelectedMood] = useState<number | null>(null);
  const { toast } = useToast();

  const handleSubmitMood = () => {
    if (selectedMood !== null) {
      toast({
        title: "Mood Logged",
        description: `Your mood has been recorded for ${selectedDate?.toLocaleDateString()}.`,
      });
      setSelectedMood(null);
    }
  };

  return (
    <ThemeToggle>
      {({ toggleTheme, isDarkMode }) => (
        <div className="flex min-h-screen bg-vibe-background-primary dark:bg-vibe-dark-background-primary">
          <Sidebar />
          <div className="flex-1 flex flex-col">
            <Header toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
            <div className="flex-1 p-6 overflow-y-auto">
              <div className="max-w-7xl mx-auto">
                <h1 className="text-2xl font-display font-semibold text-vibe-text-primary dark:text-vibe-dark-text-primary mb-6 animate-fade-in">
                  Mood Tracking
                </h1>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                    <h2 className="text-lg font-medium mb-4 text-vibe-text-primary dark:text-vibe-dark-text-primary">Log Your Mood</h2>
                    
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      className="rounded-md border mb-4"
                    />
                    
                    <div className="mt-6">
                      <h3 className="text-sm font-medium mb-2 text-vibe-text-primary dark:text-vibe-dark-text-primary">How are you feeling today?</h3>
                      <div className="flex justify-between mb-4">
                        {moodEmojis.map((emoji, index) => (
                          <button
                            key={index}
                            className={`text-3xl p-2 rounded-full transition-transform ${
                              selectedMood === index ? 'scale-125 bg-vibe-background-secondary dark:bg-vibe-dark-background-tertiary' : ''
                            }`}
                            onClick={() => setSelectedMood(index)}
                          >
                            {emoji}
                          </button>
                        ))}
                      </div>
                      <Button 
                        className="w-full mt-4 bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90"
                        onClick={handleSubmitMood}
                        disabled={selectedMood === null}
                      >
                        Log Mood
                      </Button>
                    </div>
                  </div>
                  
                  <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                    <h2 className="text-lg font-medium mb-6 text-vibe-text-primary dark:text-vibe-dark-text-primary">Weekly Mood Overview</h2>
                    
                    <div className="h-64">
                      <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                          data={moodData}
                          margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                        >
                          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                          <XAxis dataKey="day" />
                          <YAxis domain={[0, 5]} />
                          <Tooltip 
                            formatter={(value) => [`Mood Level: ${value}`, 'Mood']}
                            contentStyle={{ backgroundColor: isDarkMode ? '#40534C' : '#fff', border: 'none', borderRadius: '0.5rem' }}
                          />
                          <Bar dataKey="mood" radius={[4, 4, 0, 0]}>
                            {moodData.map((entry, index) => (
                              <Cell key={`cell-${index}`} fill={entry.color} />
                            ))}
                          </Bar>
                        </BarChart>
                      </ResponsiveContainer>
                    </div>
                    
                    <div className="mt-6 space-y-2">
                      <p className="text-sm text-vibe-text-primary dark:text-vibe-dark-text-primary">
                        Average Mood: <span className="font-medium">3.6/5</span>
                      </p>
                      <p className="text-sm text-vibe-text-primary dark:text-vibe-dark-text-primary">
                        Mood Trend: <span className="font-medium text-green-500">Improving</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

export default MoodTracking;
