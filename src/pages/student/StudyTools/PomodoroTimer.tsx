
import React, { useState, useEffect } from "react";
import Sidebar from "@/components/layout/Sidebar";
import Header from "@/components/layout/Header";
import ThemeToggle from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Slider } from "@/components/ui/slider";
import { Play, Pause, RotateCcw } from "lucide-react";

const PomodoroTimer = () => {
  const [minutes, setMinutes] = useState(25);
  const [seconds, setSeconds] = useState(0);
  const [isActive, setIsActive] = useState(false);
  const [sessionType, setSessionType] = useState<'focus' | 'short' | 'long'>('focus');
  const [focusDuration, setFocusDuration] = useState(25);

  useEffect(() => {
    let interval: number | undefined;
    
    if (isActive) {
      interval = window.setInterval(() => {
        if (seconds === 0) {
          if (minutes === 0) {
            clearInterval(interval);
            // Handle timer completion
            setIsActive(false);
            handleSessionComplete();
          } else {
            setMinutes(minutes - 1);
            setSeconds(59);
          }
        } else {
          setSeconds(seconds - 1);
        }
      }, 1000);
    } else if (!isActive && seconds !== 0) {
      clearInterval(interval);
    }
    
    return () => clearInterval(interval);
  }, [isActive, minutes, seconds]);

  const handleSessionComplete = () => {
    // Logic for when a session completes
    if (sessionType === 'focus') {
      // After focus session, switch to short break
      setSessionType('short');
      setMinutes(5);
      setSeconds(0);
    } else if (sessionType === 'short') {
      // After short break, back to focus
      setSessionType('focus');
      setMinutes(focusDuration);
      setSeconds(0);
    }
  };

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    if (sessionType === 'focus') {
      setMinutes(focusDuration);
    } else if (sessionType === 'short') {
      setMinutes(5);
    } else {
      setMinutes(15);
    }
    setSeconds(0);
  };

  const switchToSession = (type: 'focus' | 'short' | 'long') => {
    setIsActive(false);
    setSessionType(type);
    if (type === 'focus') {
      setMinutes(focusDuration);
    } else if (type === 'short') {
      setMinutes(5);
    } else {
      setMinutes(15);
    }
    setSeconds(0);
  };

  const handleFocusDurationChange = (value: number[]) => {
    setFocusDuration(value[0]);
    if (sessionType === 'focus' && !isActive) {
      setMinutes(value[0]);
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
              <div className="max-w-xl mx-auto">
                <h1 className="text-2xl font-display font-semibold text-center text-vibe-text-primary dark:text-vibe-dark-text-primary mb-6 animate-fade-in">
                  Pomodoro Timer
                </h1>
                
                <div className="bg-white dark:bg-vibe-dark-background-secondary rounded-xl p-6 shadow-sm animate-fade-in">
                  <div className="flex justify-center space-x-2 mb-6">
                    <Button 
                      variant={sessionType === 'focus' ? 'default' : 'outline'}
                      onClick={() => switchToSession('focus')}
                      className={sessionType === 'focus' ? 'bg-vibe-accent-blue dark:bg-vibe-dark-accent' : ''}
                    >
                      Focus
                    </Button>
                    <Button 
                      variant={sessionType === 'short' ? 'default' : 'outline'}
                      onClick={() => switchToSession('short')}
                      className={sessionType === 'short' ? 'bg-vibe-accent-blue dark:bg-vibe-dark-accent' : ''}
                    >
                      Short Break
                    </Button>
                    <Button 
                      variant={sessionType === 'long' ? 'default' : 'outline'}
                      onClick={() => switchToSession('long')}
                      className={sessionType === 'long' ? 'bg-vibe-accent-blue dark:bg-vibe-dark-accent' : ''}
                    >
                      Long Break
                    </Button>
                  </div>
                  
                  <div className="text-center mb-8">
                    <div className="text-8xl font-display font-bold text-vibe-accent-blue dark:text-vibe-dark-accent">
                      {minutes.toString().padStart(2, '0')}:{seconds.toString().padStart(2, '0')}
                    </div>
                  </div>
                  
                  <div className="flex justify-center space-x-4 mb-8">
                    <Button 
                      size="lg" 
                      onClick={toggleTimer} 
                      className="bg-vibe-accent-blue hover:bg-vibe-accent-blue/90 dark:bg-vibe-dark-accent dark:hover:bg-vibe-dark-accent/90 h-16 w-16 rounded-full"
                    >
                      {isActive ? <Pause size={24} /> : <Play size={24} />}
                    </Button>
                    <Button 
                      size="lg" 
                      variant="outline" 
                      onClick={resetTimer}
                      className="h-16 w-16 rounded-full"
                    >
                      <RotateCcw size={24} />
                    </Button>
                  </div>
                  
                  {sessionType === 'focus' && !isActive && (
                    <div className="space-y-2 mt-8">
                      <div className="flex justify-between">
                        <span className="text-sm text-vibe-text-secondary dark:text-vibe-dark-text-secondary">Focus Duration: {focusDuration} min</span>
                      </div>
                      <Slider
                        defaultValue={[focusDuration]}
                        min={5}
                        max={60}
                        step={5}
                        onValueChange={handleFocusDurationChange}
                      />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </ThemeToggle>
  );
};

export default PomodoroTimer;
