import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";

interface SymptomDot {
  date: number;
  color: string;
}

interface DynamicCalendarProps {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  monthDirection?: number;
  symptomsData?: SymptomDot[];
}

export function DynamicCalendar({ currentDate, selectedDate, onSelectDate, monthDirection = 0, symptomsData = [] }: DynamicCalendarProps) {
  // Helper function to get unique colors for a date
  const getColorsForDate = (date: number) => {
    const colors = symptomsData
      .filter(s => s.date === date)
      .map(s => s.color);
    return [...new Set(colors)];
  };
  
  // Get today's date
  const today = new Date();
  
  // Get the first day of the month
  const firstDay = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  const lastDay = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  
  // Get the day of week for the first day (0 = Sunday)
  const startingDayOfWeek = firstDay.getDay();
  
  // Get total days in month
  const daysInMonth = lastDay.getDate();
  
  // Create array of weeks
  const weeks: (number | null)[][] = [];
  let currentWeek: (number | null)[] = [];
  
  // Fill in empty slots before the first day
  for (let i = 0; i < startingDayOfWeek; i++) {
    currentWeek.push(null);
  }
  
  // Fill in the days
  for (let day = 1; day <= daysInMonth; day++) {
    currentWeek.push(day);
    if (currentWeek.length === 7) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
  }
  
  // Fill in empty slots after the last day
  if (currentWeek.length > 0) {
    while (currentWeek.length < 7) {
      currentWeek.push(null);
    }
    weeks.push(currentWeek);
  }
  
  const isSelected = (day: number) => {
    if (!selectedDate) return false;
    return selectedDate.getDate() === day &&
           selectedDate.getMonth() === currentDate.getMonth() &&
           selectedDate.getFullYear() === currentDate.getFullYear();
  };
  
  const isToday = (day: number) => {
    return today.getDate() === day &&
           today.getMonth() === currentDate.getMonth() &&
           today.getFullYear() === currentDate.getFullYear();
  };
  
  const handleDateClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onSelectDate(newDate);
  };

  // Create a unique key for the calendar based on month and year
  const calendarKey = `${currentDate.getFullYear()}-${currentDate.getMonth()}`;

  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-start pb-0 pt-[3px] px-0 relative shrink-0 w-full" data-name="Calendar">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={calendarKey}
          initial={{ opacity: 0, x: monthDirection * 30 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: monthDirection * -30 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="w-full"
        >
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="h-[44px] relative shrink-0 w-full" data-name={`Week ${weekIndex + 1}`}>
              <div className="size-full">
                <div className="box-border content-stretch flex h-[44px] items-start justify-between px-[16px] py-0 relative w-full">
                  {week.map((day, dayIndex) => {
                    const isTodayDate = day ? isToday(day) : false;
                    const isSelectedDate = day ? isSelected(day) : false;
                    const isTodayAndSelected = isTodayDate && isSelectedDate;
                    const isSelectedNotToday = isSelectedDate && !isTodayDate;
                    
                    return (
                      <motion.div 
                        key={dayIndex} 
                        className={`relative shrink-0 size-[44px] ${day ? 'cursor-pointer' : ''}`}
                        data-name="Day"
                        onClick={() => day && handleDateClick(day)}
                        whileTap={day ? { scale: 0.92 } : {}}
                        transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      >
                        {day && (
                          <>
                            {/* Background circle for selected (not today) */}
                            <AnimatePresence mode="wait">
                              {isSelectedNotToday && (
                                <motion.div 
                                  className="absolute left-1/2 size-[44px] top-1/2 translate-x-[-50%] translate-y-[-50%]" 
                                  data-name="Ellipse"
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0.8, opacity: 0 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                >
                                  <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 183, 100, 1)" } as React.CSSProperties}>
                                    <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                                      <circle cx="22" cy="22" fill="var(--fill-0, #00B764)" id="Ellipse" opacity="0.12" r="22" />
                                    </svg>
                                  </div>
                                </motion.div>
                              )}
                            </AnimatePresence>
                            
                            {/* Background for today and selected */}
                            <AnimatePresence mode="wait">
                              {isTodayAndSelected && (
                                <motion.div 
                                  className="absolute inset-0 bg-[#00b764] rounded-[100px]"
                                  initial={{ scale: 0.8, opacity: 0 }}
                                  animate={{ scale: 1, opacity: 1 }}
                                  exit={{ scale: 0.8, opacity: 0 }}
                                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                />
                              )}
                            </AnimatePresence>
                            
                            {/* Symptom dots */}
                            {getColorsForDate(day).length > 0 && (
                              <div className="absolute top-[6px] left-1/2 translate-x-[-50%] flex gap-[2px] z-10 pointer-events-none">
                                <AnimatePresence mode="popLayout">
                                  {getColorsForDate(day).map((color, idx) => (
                                    <motion.div 
                                      key={color} 
                                      className="w-[4px] h-[4px] rounded-full" 
                                      style={{ backgroundColor: color }}
                                      initial={{ scale: 0, opacity: 0 }}
                                      animate={{ scale: 1, opacity: 1 }}
                                      exit={{ scale: 0, opacity: 0 }}
                                      transition={{ 
                                        type: "spring", 
                                        stiffness: 500, 
                                        damping: 30,
                                        duration: 0.2
                                      }}
                                    />
                                  ))}
                                </AnimatePresence>
                              </div>
                            )}
                            
                            {/* Date number */}
                            <motion.div 
                              className={`absolute flex flex-col justify-center leading-[0] left-1/2 size-[44px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] z-10`}
                              style={(isTodayAndSelected || isSelectedNotToday || isTodayDate) ? { fontVariationSettings: "'wdth' 100" } : undefined}
                              animate={{
                                color: isTodayAndSelected
                                  ? "#ffffff"
                                  : (isSelectedNotToday || isTodayDate)
                                  ? "#00b764"
                                  : "#000000",
                                fontSize: (isTodayAndSelected || isSelectedNotToday || isTodayDate) ? "24px" : "20px",
                              }}
                              transition={{ type: "spring", stiffness: 300, damping: 25 }}
                            >
                              <p 
                                className={`leading-[25px] ${
                                  isTodayAndSelected || isSelectedNotToday || isTodayDate
                                    ? "font-['SF_Pro:Medium',sans-serif] font-[510]"
                                    : "font-['Inter:Regular',sans-serif] font-normal not-italic tracking-[-0.45px]"
                                }`}
                              >
                                {day}
                              </p>
                            </motion.div>
                          </>
                        )}
                      </motion.div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
      <div className="relative shrink-0 w-full" data-name="Frame">
        <div className="size-full">
          <div className="box-border content-stretch flex flex-col items-start pl-[16px] pr-0 py-0 relative w-full">
            <div className="h-[11px] relative shrink-0 w-full" data-name="Separator">
              <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid inset-0 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
