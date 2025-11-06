import { useState } from "react";

interface ArrowsProps {
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

function Arrows({ onPrevMonth, onNextMonth }: ArrowsProps) {
  return (
    <div className="absolute content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[28px] items-center leading-[normal] right-[16px] text-[#00b764] text-[20px] text-center top-[calc(50%-1px)] translate-y-[-50%]" data-name="Arrows">
      <p 
        className="h-[24px] relative shrink-0 w-[15px] cursor-pointer" 
        style={{ fontVariationSettings: "'wdth' 100" }}
        onClick={onPrevMonth}
      >
        􀆉
      </p>
      <p 
        className="h-[24px] relative shrink-0 w-[15px] cursor-pointer" 
        style={{ fontVariationSettings: "'wdth' 100" }}
        onClick={onNextMonth}
      >
        􀆊
      </p>
    </div>
  );
}

interface MonthAndYearProps {
  currentDate: Date;
}

function MonthAndYear({ currentDate }: MonthAndYearProps) {
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const monthYear = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center leading-[22px] left-[16px] text-[17px] text-nowrap top-[calc(50%-1px)] translate-y-[-50%] whitespace-pre" data-name="Month and Year">
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-black tracking-[-0.43px]">{monthYear}</p>
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#00b764] tracking-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀆊
      </p>
    </div>
  );
}

interface HeaderProps {
  currentDate: Date;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

function Header({ currentDate, onPrevMonth, onNextMonth }: HeaderProps) {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Header">
      <Arrows onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} />
      <MonthAndYear currentDate={currentDate} />
    </div>
  );
}

function DateHeader() {
  return (
    <div className="h-[20px] relative shrink-0 w-full" data-name="Date Header">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex font-['SF_Pro:Semibold',sans-serif] font-[590] h-[20px] items-center justify-between leading-[0] px-[16px] py-0 relative text-[13px] text-[rgba(60,60,67,0.3)] text-center uppercase w-full">
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px]">sun</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px]">mon</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px]">tue</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px]">wed</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px]">thu</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px]">fri</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[18px]">sat</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Separator() {
  return (
    <div className="h-[11px] relative shrink-0 w-full" data-name="Separator">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[16px] pr-0 py-0 relative w-full">
          <Separator />
        </div>
      </div>
    </div>
  );
}

interface CalendarProps {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
}

function Calendar({ currentDate, selectedDate, onSelectDate }: CalendarProps) {
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
    const today = new Date();
    return today.getDate() === day &&
           today.getMonth() === currentDate.getMonth() &&
           today.getFullYear() === currentDate.getFullYear();
  };
  
  const handleDayClick = (day: number) => {
    const newDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
    onSelectDate(newDate);
  };
  
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-start pb-0 pt-[3px] px-0 relative shrink-0 w-full" data-name="Calendar">
      {weeks.map((week, weekIndex) => (
        <div key={weekIndex} className="h-[44px] relative shrink-0 w-full" data-name={`Week ${weekIndex + 1}`}>
          <div className="size-full">
            <div className="box-border content-stretch flex h-[44px] items-start justify-between px-[16px] py-0 relative w-full">
              {week.map((day, dayIndex) => (
                <div 
                  key={dayIndex} 
                  className={`relative shrink-0 size-[44px] ${day ? 'cursor-pointer' : ''}`} 
                  data-name="Day"
                  onClick={() => day && handleDayClick(day)}
                >
                  {day && (
                    <>
                      {isSelected(day) && (
                        <div className="absolute left-1/2 size-[44px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Ellipse">
                          <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 183, 100, 1)" } as React.CSSProperties}>
                            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
                              <circle cx="22" cy="22" fill="var(--fill-0, #00B764)" id="Ellipse" opacity="0.12" r="22" />
                            </svg>
                          </div>
                        </div>
                      )}
                      <div 
                        className={`absolute flex flex-col justify-center leading-[0] left-1/2 size-[44px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] ${
                          isSelected(day) 
                            ? "font-['SF_Pro:Medium',sans-serif] font-[510] text-[#00b764] text-[24px]" 
                            : isToday(day)
                            ? "font-['Inter:Regular',sans-serif] font-normal not-italic text-[#00b764] text-[20px] tracking-[-0.45px]"
                            : "font-['Inter:Regular',sans-serif] font-normal not-italic text-[20px] text-black tracking-[-0.45px]"
                        }`}
                        style={isSelected(day) ? { fontVariationSettings: "'wdth' 100" } : undefined}
                      >
                        <p className="leading-[25px]">{day}</p>
                      </div>
                    </>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
      <Frame />
    </div>
  );
}

interface DateComponentProps {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

function Date({ currentDate, selectedDate, onSelectDate, onPrevMonth, onNextMonth }: DateComponentProps) {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Date">
      <Header currentDate={currentDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} />
      <DateHeader />
      <Calendar currentDate={currentDate} selectedDate={selectedDate} onSelectDate={onSelectDate} />
    </div>
  );
}

function ContentsTrailing() {
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-end relative shrink-0" data-name="Contents - Trailing">
      <div className="bg-[rgba(120,120,128,0.12)] box-border content-stretch flex items-center justify-end px-[11px] py-[6px] relative rounded-[6px] shrink-0" data-name="Date and Time - Compact - Collapsed">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre">8:00 AM</p>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="relative shrink-0 w-full" data-name="Time">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-0 relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px]">
            <p className="leading-[22px] whitespace-pre">Ends</p>
          </div>
          <ContentsTrailing />
        </div>
      </div>
    </div>
  );
}

function Separator1() {
  return (
    <div className="h-[0.333px] relative shrink-0 w-full" data-name="Separator">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Frame1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Frame">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col items-start pl-[16px] pr-0 py-0 relative w-full">
          <Separator1 />
        </div>
      </div>
    </div>
  );
}

export default function DateAndTimeInlineExpanded() {
  const [currentDate, setCurrentDate] = useState(new Date(2024, 5, 26)); // June 26, 2024
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date(2024, 5, 26));
  
  const handlePrevMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
  };
  
  return (
    <div className="bg-white content-stretch flex flex-col items-start relative size-full" data-name="Date and Time - Inline - Expanded">
      <Date 
        currentDate={currentDate} 
        selectedDate={selectedDate} 
        onSelectDate={handleSelectDate}
        onPrevMonth={handlePrevMonth}
        onNextMonth={handleNextMonth}
      />
      <Time />
      <Frame1 />
    </div>
  );
}
