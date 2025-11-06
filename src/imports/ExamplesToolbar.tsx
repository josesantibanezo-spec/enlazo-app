import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import svgPaths from "./svg-a9brtpu99n";
import swipeSvgPaths from "./svg-012hz1nil6";
import img from "figma:asset/eae313a48883a46e7a2a60ee806e73a8052191be.png";
import img1 from "figma:asset/85a8d4cb5dd8334894f69f8c4156fea900e1fc9a.png";
import commentImg from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";
import { DynamicCalendar } from "../components/DynamicCalendar";

// Map of symptom ID to symptom data
const allSymptoms: SymptomData[] = [
  { id: 1, title: "Dolor articular", detail: "Rodilla izq", time: "PM", color: "#ff9500", type: 'symptom' },
  { id: 2, title: "Inflamación visible", detail: "Rodilla izq", time: "PM", color: "#32ade6", type: 'symptom' },
  { id: 3, title: "Rigidez", detail: "Detalle", time: "AM", color: "#af52de", type: 'symptom' },
  { id: 4, title: "Ojos rojos", detail: "Detalle", time: "PM", color: "#ff2d55", type: 'symptom' },
  { id: 5, title: "Lesiones en la piel", detail: "Detalle", time: "PM", color: "#ffcc00", type: 'symptom' },
  { id: 6, title: "Fiebre", detail: "Detalle", time: "PM", color: "#a2845e", type: 'symptom' },
  { id: 7, title: "Fatiga", detail: "Detalle", time: "AM", color: "#5856d6", type: 'symptom' },
  { id: 8, title: "Comentario", detail: "Detalle", time: "", color: "#00b764", type: 'comment', images: [commentImg, commentImg, commentImg], imageCount: 3 },
];

// Symptom data - maps full date strings to symptom IDs that were registered on that date
// Format: "YYYY-MM-DD" -> symptom IDs
// Only past and current dates (up to November 6, 2025)
const initialSymptomsDataByDate: { [dateKey: string]: number[] } = {
  "2025-11-02": [7], // Fatiga (purple) - Nov 2, 2025
  "2025-11-04": [1], // Dolor articular (orange) - Nov 4, 2025
  "2025-11-06": [4, 8], // Ojos rojos (red/pink), Comentario (green) - Nov 6, 2025 (Today)
};

// Helper to create a date key from a Date object
const getDateKey = (date: Date): string => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
};

// Helper to filter out future dates
const filterPastAndCurrentDates = (dataByDate: { [dateKey: string]: number[] }) => {
  const today = new Date();
  today.setHours(0, 0, 0, 0); // Reset time to midnight for accurate comparison
  
  const filtered: { [dateKey: string]: number[] } = {};
  Object.entries(dataByDate).forEach(([dateKey, symptomIds]) => {
    const [year, month, day] = dateKey.split('-').map(Number);
    const itemDate = new Date(year, month - 1, day);
    itemDate.setHours(0, 0, 0, 0);
    
    // Only include if the date is today or in the past
    if (itemDate <= today) {
      filtered[dateKey] = symptomIds;
    }
  });
  return filtered;
};

// Convert to format needed for calendar dots (for the current month being viewed)
const getSymptomsDataForMonth = (year: number, month: number, symptomsDataByDate: { [dateKey: string]: number[] }) => {
  const filteredData = filterPastAndCurrentDates(symptomsDataByDate);
  return Object.entries(filteredData)
    .filter(([dateKey]) => {
      const [itemYear, itemMonth] = dateKey.split('-').map(Number);
      return itemYear === year && itemMonth === month + 1; // month is 0-indexed
    })
    .flatMap(([dateKey, symptomIds]) => {
      const day = parseInt(dateKey.split('-')[2]);
      return symptomIds.map(id => ({
        date: day,
        color: allSymptoms.find(s => s.id === id)?.color || "#000000"
      }));
    });
};

// Helper function to get symptoms for a specific date
const getSymptomsForDate = (date: Date, symptomsDataByDate: { [dateKey: string]: number[] }): SymptomData[] => {
  const dateKey = getDateKey(date);
  const filteredData = filterPastAndCurrentDates(symptomsDataByDate);
  const symptomIds = filteredData[dateKey] || [];
  return symptomIds.map(id => allSymptoms.find(s => s.id === id)).filter(Boolean) as SymptomData[];
};

// Initial symptom rows data (show all by default, or for today's date)
const today = new Date();
const initialSymptoms: SymptomData[] = getSymptomsForDate(today, initialSymptomsDataByDate);

const ItemType = {
  SYMPTOM_ROW: "symptom_row",
};

// Helper function to get unique colors for a date
const getColorsForDate = (date: number) => {
  const colors = symptomsData
    .filter(s => s.date === date)
    .map(s => s.color);
  return [...new Set(colors)];
};

function ContentArea() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0 w-full" data-name="Content Area">
      <div className="flex flex-col items-center size-full">
        <div className="size-full" />
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="bg-[#f2f2f7] content-stretch flex flex-col h-[874px] items-center overflow-clip relative rounded-[44px] shrink-0 w-[402px]" data-name="Contents">
      <ContentArea />
    </div>
  );
}

function Contents1() {
  return (
    <div className="absolute bg-white content-stretch flex flex-col inset-0 items-center overflow-clip rounded-[44px]" data-name="Contents">
      <Contents />
      <div className="box-border content-stretch flex flex-col gap-[10px] items-start pb-[42px] pt-[13px] px-0 relative shrink-0 w-full" data-name="Toolbar - iPhone">
        <div className="absolute inset-0" data-name="Chrome Material">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.75)] inset-0 mix-blend-hard-light" data-name="Chrome" />
          </div>
          <div aria-hidden="true" className="absolute border-[0.333px_0px_0px] border-[rgba(0,0,0,0.3)] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-0.33px]" />
        </div>
      </div>
    </div>
  );
}

function Time() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
          </div>
          <Battery />
        </div>
      </div>
    </div>
  );
}

function Frame() {
  return (
    <div className="content-stretch flex items-center justify-between relative shrink-0 w-full" data-name="Frame">
      <Time />
      <DynamicIslandSpacer />
      <Levels />
    </div>
  );
}

function TitleAndControls() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Title and Controls">
      <div className="absolute overflow-clip right-[21px] size-[20px] top-[9px]" data-name="Trailing">
        <div className="absolute inset-[8.33%_9.47%]" data-name="Vector">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 183, 100, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 17 17">
              <path d={svgPaths.p1e071100} fill="var(--fill-0, #00B764)" id="Vector" />
            </svg>
          </div>
        </div>
      </div>
      <div className="absolute bg-white left-[18px] rounded-[64px] size-[32px] top-[6px]" data-name="Avatar">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-[32px]">
          <div className="absolute left-[-7px] overflow-clip size-[46px] top-[-2px]" data-name="person_outline" />
          <p className="font-['Satoshi:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[#1a1a1a] text-[16px] text-center text-nowrap whitespace-pre">JS</p>
        </div>
        <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[64px]" />
      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="h-[66px] relative shrink-0 w-full" data-name="Title">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] h-[66px] items-start pb-[8px] pt-[3px] px-[16px] relative w-full">
          <p className="font-['Satoshi:Medium',sans-serif] leading-[41px] not-italic relative shrink-0 text-[0px] text-[34px] text-black text-nowrap tracking-[0.4px] whitespace-pre">
            <span className="font-['Satoshi:Regular',sans-serif] font-[Satoshi]">Hola,</span>
            <span className="font-[Satoshi] font-bold">{` Nombre`}</span>
          </p>
        </div>
      </div>
    </div>
  );
}

function Contents2() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Contents">
      <TitleAndControls />
      <Title />
    </div>
  );
}

function NavigationBarIPhoneCompactSizeClass() {
  return (
    <div className="content-stretch flex flex-col items-start relative shrink-0 w-full" data-name="Navigation Bar - iPhone (Compact Size Class)">
      <div className="absolute inset-0" data-name="Materials">
        <div className="overflow-clip relative rounded-[inherit] size-full">
          <div className="absolute backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.75)] inset-0 mix-blend-hard-light" data-name="Chrome" />
        </div>
        <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(0,0,0,0.3)] border-solid inset-0 pointer-events-none" />
      </div>
      <div className="box-border content-stretch flex flex-col h-[54px] items-start pb-0 pt-[21px] px-0 relative shrink-0 w-[402px]" data-name="Status Bar - iPhone">
        <Frame />
      </div>
      <Contents2 />
    </div>
  );
}

interface ArrowsProps {
  onPrevMonth: () => void;
  onNextMonth: () => void;
}

function Arrows({ onPrevMonth, onNextMonth }: ArrowsProps) {
  return (
    <div className="absolute content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[28px] items-center leading-[normal] right-[16px] text-[#00b764] text-[20px] text-center top-[calc(50%-1px)] translate-y-[-50%]" data-name="Arrows">
      <motion.p 
        className="h-[24px] relative shrink-0 w-[15px] cursor-pointer" 
        style={{ fontVariationSettings: "'wdth' 100" }} 
        onClick={onPrevMonth}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.15 }}
      >
        􀆉
      </motion.p>
      <motion.p 
        className="h-[24px] relative shrink-0 w-[15px] cursor-pointer" 
        style={{ fontVariationSettings: "'wdth' 100" }} 
        onClick={onNextMonth}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
        transition={{ duration: 0.15 }}
      >
        􀆊
      </motion.p>
    </div>
  );
}

interface MonthAndYearProps {
  currentDate: Date;
}

function MonthAndYear({ currentDate }: MonthAndYearProps) {
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const monthYear = `${monthNames[currentDate.getMonth()]} ${currentDate.getFullYear()}`;
  
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center leading-[22px] left-[16px] text-[17px] text-nowrap top-[calc(50%-1px)] translate-y-[-50%] whitespace-pre" data-name="Month and Year">
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-black tracking-[-0.43px] font-[Inter]">{monthYear}</p>
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
        <div className="box-border content-stretch flex font-['Satoshi:Bold',sans-serif] h-[20px] items-center justify-between leading-[0] not-italic px-[16px] py-0 relative text-[13px] text-[rgba(60,60,67,0.3)] text-center uppercase w-full">
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]">
            <p className="leading-[18px]">dom</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]">
            <p className="leading-[18px]">lun</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]">
            <p className="leading-[18px]">mar</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]">
            <p className="leading-[18px]">mie</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]">
            <p className="leading-[18px]">jue</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]">
            <p className="leading-[18px]">vie</p>
          </div>
          <div className="flex flex-col h-[18px] justify-center relative shrink-0 w-[32px]">
            <p className="leading-[18px]">sab</p>
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

function Frame1() {
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
  monthDirection?: number;
  symptomsDataByDate: { [dateKey: string]: number[] };
}

function Calendar({ currentDate, selectedDate, onSelectDate, monthDirection, symptomsDataByDate }: CalendarProps) {
  const symptomsData = getSymptomsDataForMonth(currentDate.getFullYear(), currentDate.getMonth(), symptomsDataByDate);
  return (<DynamicCalendar currentDate={currentDate} selectedDate={selectedDate} onSelectDate={onSelectDate} monthDirection={monthDirection} symptomsData={symptomsData} />);
}

function OldCalendar() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-start pb-0 pt-[3px] px-0 relative shrink-0 w-full" data-name="Calendar">
      <div className="relative shrink-0 w-full" data-name="Week 1">
        <div className="size-full">
          <div className="box-border content-stretch flex items-start justify-between px-[16px] py-0 relative w-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(2)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">2</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(3)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">3</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(4)}>
              {getColorsForDate(4).length > 0 && (
                <div className="absolute top-[6px] left-1/2 translate-x-[-50%] flex gap-[2px] z-10 pointer-events-none">
                  {getColorsForDate(4).map((color, idx) => (
                    <div key={idx} className="w-[4px] h-[4px] rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
              )}
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">4</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(5)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">5</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(6)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">6</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(7)}>
              {getColorsForDate(7).length > 0 && (
                <div className="absolute top-[6px] left-1/2 translate-x-[-50%] flex gap-[2px] z-10 pointer-events-none">
                  {getColorsForDate(7).map((color, idx) => (
                    <div key={idx} className="w-[4px] h-[4px] rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
              )}
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">7</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(8)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">8</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44px] relative shrink-0 w-full" data-name="Week 2">
        <div className="size-full">
          <div className="box-border content-stretch flex h-[44px] items-start justify-between px-[16px] py-0 relative w-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(9)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">9</p>
              </div>
            </div>
            <div className="bg-[#00b764] relative rounded-[100px] shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(10)}>
              {getColorsForDate(10).length > 0 && (
                <div className="absolute top-[6px] left-1/2 translate-x-[-50%] flex gap-[2px] z-10 pointer-events-none">
                  {getColorsForDate(10).map((color, idx) => (
                    <div key={idx} className="w-[4px] h-[4px] rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
              )}
              <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-1/2 size-[44px] text-[24px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[25px]">10</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(11)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">11</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(12)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">12</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(13)}>
              {getColorsForDate(13).length > 0 && (
                <div className="absolute top-[6px] left-1/2 translate-x-[-50%] flex gap-[2px] z-10 pointer-events-none">
                  {getColorsForDate(13).map((color, idx) => (
                    <div key={idx} className="w-[4px] h-[4px] rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
              )}
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">13</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(14)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">14</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(15)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">15</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44px] relative shrink-0 w-full" data-name="Week 3">
        <div className="size-full">
          <div className="box-border content-stretch flex h-[44px] items-start justify-between px-[16px] py-0 relative w-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(16)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">16</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(17)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">17</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(18)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">18</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(19)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">19</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(20)}>
              {getColorsForDate(20).length > 0 && (
                <div className="absolute top-[6px] left-1/2 translate-x-[-50%] flex gap-[2px] z-10 pointer-events-none">
                  {getColorsForDate(20).map((color, idx) => (
                    <div key={idx} className="w-[4px] h-[4px] rounded-full" style={{ backgroundColor: color }} />
                  ))}
                </div>
              )}
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">20</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(21)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">21</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(22)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">22</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44px] relative shrink-0 w-full" data-name="Week 4">
        <div className="size-full">
          <div className="box-border content-stretch flex h-[44px] items-start justify-between px-[16px] py-0 relative w-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(23)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">23</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(24)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">24</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(25)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">25</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(26)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">26</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(27)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">27</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(28)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">28</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(29)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">29</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="h-[44px] relative shrink-0 w-full" data-name="Week 5">
        <div className="size-full">
          <div className="box-border content-stretch flex h-[44px] items-start justify-between px-[16px] py-0 relative w-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day" onClick={() => handleDateClick(30)}>
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">30</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-[rgba(60,60,67,0.3)] text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">1</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-[rgba(60,60,67,0.3)] text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">2</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-[rgba(60,60,67,0.3)] text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">3</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-[rgba(60,60,67,0.3)] text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">4</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-[rgba(60,60,67,0.3)] text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">5</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-[rgba(60,60,67,0.3)] text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">6</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

interface DateComponentProps {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  monthDirection?: number;
  symptomsDataByDate: { [dateKey: string]: number[] };
}

function DateComponent({ currentDate, selectedDate, onSelectDate, onPrevMonth, onNextMonth, monthDirection, symptomsDataByDate }: DateComponentProps) {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Date">
      <Header currentDate={currentDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} />
      <DateHeader />
      <Calendar currentDate={currentDate} selectedDate={selectedDate} onSelectDate={onSelectDate} monthDirection={monthDirection} symptomsDataByDate={symptomsDataByDate} />
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

function Frame2() {
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

function ContentsTrailing() {
  const today = new Date();
  const day = today.getDate();
  const monthNames = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  const month = monthNames[today.getMonth()];
  const formattedDate = `${day} de ${month}`;
  
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-end relative shrink-0" data-name="Contents - Trailing">
      <div className="bg-[rgba(120,120,128,0.12)] box-border content-stretch flex items-center justify-end px-[11px] py-[6px] relative rounded-[6px] shrink-0" data-name="Date and Time - Compact - Collapsed">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre">{formattedDate}</p>
      </div>
    </div>
  );
}

function Time1() {
  return (
    <div className="relative shrink-0 w-full" data-name="Time">
      <div className="flex flex-row items-center overflow-clip rounded-[inherit] size-full">
        <div className="box-border content-stretch flex items-center justify-between px-[16px] py-[4px] relative w-full">
          <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-black text-nowrap tracking-[-0.43px]">
            <p className="leading-[22px] whitespace-pre">Hoy</p>
          </div>
          <ContentsTrailing />
        </div>
      </div>
    </div>
  );
}

interface GroupedTableProps {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  monthDirection?: number;
  symptomsDataByDate: { [dateKey: string]: number[] };
}

function GroupedTable({ currentDate, selectedDate, onSelectDate, onPrevMonth, onNextMonth, monthDirection, symptomsDataByDate }: GroupedTableProps) {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Grouped Table">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[361px]" data-name="Date and Time - Inline - Expanded">
        <DateComponent currentDate={currentDate} selectedDate={selectedDate} onSelectDate={onSelectDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} monthDirection={monthDirection} symptomsDataByDate={symptomsDataByDate} />
        <Frame2 />
      </div>
      <Time1 />
    </div>
  );
}

interface SymptomData {
  id: number;
  title: string;
  detail: string;
  time: string;
  color: string;
  type?: 'symptom' | 'comment';
  images?: string[];
  imageCount?: number;
}

interface BadgeProps {
  color: string;
}

function Badge({ color }: BadgeProps) {
  return (
    <div className="h-[60px] relative shrink-0 w-[4px]" data-name="Badge" style={{ backgroundColor: color }}>
      <div className="flex flex-row items-center size-full">
        <div className="h-[60px] w-[4px]" />
      </div>
    </div>
  );
}

function EditButton() {
  return null;
}

interface TitleAndDetailProps {
  title: string;
  detail: string;
}

function TitleAndDetail({ title, detail }: TitleAndDetailProps) {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[60px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-[175.5px]" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">{title}</p>
      </div>
      <div className="flex flex-col h-[20px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap">{detail}</p>
      </div>
    </div>
  );
}

function Detail() {
  return <div className="h-[32px] shrink-0 w-0" data-name="Detail" />;
}



interface AccessoriesAndGrabberProps {
  time: string;
  dragHandleProps?: any;
}

function AccessoriesAndGrabber({ time, dragHandleProps }: AccessoriesAndGrabberProps) {
  const grabberRef = useRef<HTMLDivElement>(null);
  
  // Connect the drag ref if provided
  if (dragHandleProps?.ref && grabberRef.current) {
    dragHandleProps.ref(grabberRef.current);
  }
  
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Accessories and Grabber">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Contents - Trailing">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative w-full">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
              <p className="leading-[22px] whitespace-pre">{`${time} `}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

interface TitleAndTrailingAccessoriesProps {
  title: string;
  detail: string;
  time: string;
  dragHandleProps?: any;
  isLast?: boolean;
}

function TitleAndTrailingAccessories({ title, detail, time, dragHandleProps, isLast = false }: TitleAndTrailingAccessoriesProps) {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <TitleAndDetail title={title} detail={detail} />
      <AccessoriesAndGrabber time={time} dragHandleProps={dragHandleProps} />
    </div>
  );
}

interface CommentAccessoriesProps {
  images: string[];
  imageCount: number;
  dragHandleProps?: any;
}

function CommentAccessories({ images, imageCount, dragHandleProps }: CommentAccessoriesProps) {
  const grabberRef = useRef<HTMLDivElement>(null);
  
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Accessories and Grabber">
      <div className="basis-0 box-border content-stretch flex grow items-center justify-end min-h-px min-w-px pl-0 pr-[16px] py-0 relative shrink-0" data-name="Contents - Trailing">
        {images.map((imgSrc, idx) => (
          <div key={idx} className="mr-[-12px] pointer-events-none relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[64px] size-full" src={imgSrc} />
            <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 rounded-[64px]" />
          </div>
        ))}
        <div className="bg-white relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-[32px]">
            <div className="absolute left-[-7px] overflow-clip size-[46px] top-[-2px]" data-name="person_outline" />
            <p className="font-['Satoshi:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">+{imageCount}</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[64px]" />
        </div>
      </div>
    </div>
  );
}

interface CommentTitleAndAccessoriesProps {
  title: string;
  detail: string;
  images: string[];
  imageCount: number;
  dragHandleProps?: any;
  isLast?: boolean;
}

function CommentTitleAndAccessories({ title, detail, images, imageCount, dragHandleProps, isLast = false }: CommentTitleAndAccessoriesProps) {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <TitleAndDetail title={title} detail={detail} />
      <CommentAccessories images={images} imageCount={imageCount} dragHandleProps={dragHandleProps} />
    </div>
  );
}

interface DraggableRowProps {
  symptom: SymptomData;
  index: number;
  moveRow: (dragIndex: number, hoverIndex: number) => void;
  isLast?: boolean;
  onDelete: () => void;
  onEdit: () => void;
  isSwipeOpen: boolean;
  onSwipeChange: (isOpen: boolean) => void;
}

function DraggableRow({ symptom, index, moveRow, isLast = false, onDelete, onEdit, isSwipeOpen, onSwipeChange }: DraggableRowProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [swipeOffset, setSwipeOffset] = useState(0);
  const [isDraggingSwipe, setIsDraggingSwipe] = useState(false);
  const startXRef = useRef(0);
  const currentXRef = useRef(0);
  const finalOffsetRef = useRef(0);
  
  const [{ isDragging }, drag] = useDrag({
    type: ItemType.SYMPTOM_ROW,
    item: { index },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => !isDraggingSwipe && swipeOffset === 0,
  });

  const [, drop] = useDrop({
    accept: ItemType.SYMPTOM_ROW,
    hover: (item: { index: number }) => {
      if (item.index !== index) {
        moveRow(item.index, index);
        item.index = index;
      }
    },
  });

  // Combine refs
  drop(ref);

  const isComment = symptom.type === 'comment';
  
  // Swipe handlers
  const handleTouchStart = (e: React.TouchEvent) => {
    if (isDragging) return;
    startXRef.current = e.touches[0].clientX;
    currentXRef.current = swipeOffset;
    setIsDraggingSwipe(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDraggingSwipe || isDragging) return;
    const deltaX = e.touches[0].clientX - startXRef.current;
    const newOffset = currentXRef.current + deltaX;
    
    // Allow swipe in both directions, limit to -148px (left) and 0px (right)
    const clampedOffset = Math.max(-148, Math.min(0, newOffset));
    finalOffsetRef.current = clampedOffset;
    setSwipeOffset(clampedOffset);
  };

  const handleTouchEnd = () => {
    if (!isDraggingSwipe) return;
    
    // Determine final position based on the last tracked offset
    // Use a threshold of -40px to decide between open/closed
    const finalOffset = finalOffsetRef.current;
    
    if (finalOffset < -40) {
      // Snap to open
      setSwipeOffset(-148);
      onSwipeChange(true);
    } else {
      // Snap to closed
      setSwipeOffset(0);
      onSwipeChange(false);
    }
    
    setIsDraggingSwipe(false);
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (isDragging) return;
    startXRef.current = e.clientX;
    currentXRef.current = swipeOffset;
    setIsDraggingSwipe(true);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDraggingSwipe || isDragging) return;
    const deltaX = e.clientX - startXRef.current;
    const newOffset = currentXRef.current + deltaX;
    
    // Allow swipe in both directions, limit to -148px (left) and 0px (right)
    const clampedOffset = Math.max(-148, Math.min(0, newOffset));
    finalOffsetRef.current = clampedOffset;
    setSwipeOffset(clampedOffset);
  };

  const handleMouseUp = () => {
    if (!isDraggingSwipe) return;
    
    // Determine final position based on the last tracked offset
    // Use a threshold of -40px to decide between open/closed
    const finalOffset = finalOffsetRef.current;
    
    if (finalOffset < -40) {
      // Snap to open
      setSwipeOffset(-148);
      onSwipeChange(true);
    } else {
      // Snap to closed
      setSwipeOffset(0);
      onSwipeChange(false);
    }
    
    setIsDraggingSwipe(false);
  };

  // Mouse event listeners
  useEffect(() => {
    if (isDraggingSwipe) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
      return () => {
        document.removeEventListener('mousemove', handleMouseMove);
        document.removeEventListener('mouseup', handleMouseUp);
      };
    }
  }, [isDraggingSwipe]);

  // Close swipe when another row opens
  useEffect(() => {
    if (!isSwipeOpen && swipeOffset !== 0) {
      setSwipeOffset(0);
    }
  }, [isSwipeOpen]);

  return (
    <motion.div 
      ref={ref}
      className="relative shrink-0 w-full overflow-hidden" 
      data-name="Row"
      layout
      initial={{ opacity: 0, y: -10 }}
      animate={{ 
        opacity: isDragging ? 0.3 : 1,
        scale: isDragging ? 1.02 : 1,
        y: 0,
        boxShadow: isDragging ? "0 10px 30px rgba(0, 0, 0, 0.15)" : "0 0 0 rgba(0, 0, 0, 0)"
      }}
      exit={{ opacity: 0, y: -10 }}
      transition={{
        layout: { type: "spring", stiffness: 300, damping: 25, mass: 0.5 },
        opacity: { duration: 0.25, ease: "easeInOut" },
        scale: { duration: 0.25, ease: "easeOut" },
        boxShadow: { duration: 0.3, ease: "easeOut" }
      }}
    >
      <div className="relative w-full h-[60px] overflow-hidden">
        {/* Action buttons - positioned behind the content */}
        <div className="absolute right-0 top-0 h-full flex items-center" style={{ width: '148px' }}>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
              setSwipeOffset(0);
              onSwipeChange(false);
            }}
            className="bg-[#ff9500] h-full shrink-0 w-[74px] flex items-center justify-center relative"
            data-name="Action 2"
          >
            <div className="overflow-clip relative size-[20px]" data-name="edit">
              <svg className="absolute inset-[12.5%_12.49%] block" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={swipeSvgPaths.p25003780} fill="white" id="Vector" />
              </svg>
            </div>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
              setSwipeOffset(0);
              onSwipeChange(false);
            }}
            className="bg-[#ff3b30] h-full shrink-0 w-[74px] flex items-center justify-center relative"
            data-name="Action 1"
          >
            <div className="overflow-clip relative size-[20px]" data-name="delete">
              <svg className="absolute inset-[12.5%_20.83%] block" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
                <path d={swipeSvgPaths.p2dd60180} fill="white" id="Vector" />
              </svg>
            </div>
          </button>
        </div>
        
        {/* Content - slides left to reveal buttons */}
        <div 
          className="absolute inset-0 w-full bg-white transition-transform"
          style={{ 
            transform: `translateX(${swipeOffset}px)`,
            transition: isDraggingSwipe ? 'none' : 'transform 0.3s ease-out'
          }}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
        >
          <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full h-full">
            <Badge color={symptom.color} />
            <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Contents">
              <div className="flex flex-row items-center size-full">
                <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center pl-[16px] pr-0 py-0 relative w-full">
                  <EditButton />
                  {isComment && symptom.images && symptom.imageCount ? (
                    <CommentTitleAndAccessories 
                      title={symptom.title} 
                      detail={symptom.detail} 
                      images={symptom.images}
                      imageCount={symptom.imageCount}
                      dragHandleProps={{ ref: drag }}
                      isLast={isLast}
                    />
                  ) : (
                    <TitleAndTrailingAccessories 
                      title={symptom.title} 
                      detail={symptom.detail} 
                      time={symptom.time}
                      dragHandleProps={{ ref: drag }}
                      isLast={isLast}
                    />
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {!isLast && <div aria-hidden="true" className="absolute border-[0px_0px_0.33px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />}
    </motion.div>
  );
}



function Row3() {
  return (
    <div className="relative shrink-0 w-full" data-name="Row">
      <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
        <div className="h-[60px] relative shrink-0 w-[4px]" data-name="Badge">
          <div className="flex flex-row items-center size-full">
            <div className="h-[60px] w-[4px]" />
          </div>
        </div>
        <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Contents">
          <div className="flex flex-row items-center size-full">
            <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center pl-[16px] pr-0 py-0 relative w-full">
              <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[12px] py-0 relative shrink-0" data-name="Edit Button">
                <div className="h-[60px] relative shrink-0 w-[24px]" data-name="Edit Button" />
              </div>
              <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="Image">
                <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Image">
                  <div className="relative shrink-0 size-[58px]" data-name="Image" />
                </div>
              </div>
              <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
                <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
                <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[60px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-[175.5px]" data-name="Title and Detail">
                  <div className="flex flex-col h-[22px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full">
                    <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap" />
                  </div>
                  <div className="flex flex-col h-[20px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full">
                    <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap" />
                  </div>
                </div>
                <div className="basis-0 content-stretch flex grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Accessories and Grabber">
                  <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Contents - Trailing">
                    <div className="h-[32px] shrink-0 w-[45px]" data-name="Detail" />
                    <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
                      <p className="leading-[22px] whitespace-pre" />
                    </div>
                    <div className="h-[32px] relative shrink-0 w-[8px]" data-name="Drill-in">
                      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[calc(50%-0.5px)] text-[17px] text-[rgba(60,60,67,0.3)] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                        <p className="leading-[22px] whitespace-pre">􀆊</p>
                      </div>
                    </div>
                  </div>
                  <div className="h-full relative shrink-0 w-[49px]" data-name="Grabber">
                    <div aria-hidden="true" className="absolute border-[#c6c6c8] border-[0px_0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
                    <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[24.5px] size-[22px] text-[17px] text-[rgba(60,60,67,0.3)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                      <p className="leading-[22px]">􀌇</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.33px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}

interface GroupedListProps {
  symptoms: SymptomData[];
  onReorder: (symptoms: SymptomData[]) => void;
  onDeleteSymptom: (id: number) => void;
  onEditSymptom: (id: number) => void;
}

function GroupedList({ symptoms, onReorder, onDeleteSymptom, onEditSymptom }: GroupedListProps) {
  const [openSwipeId, setOpenSwipeId] = useState<number | null>(null);
  
  const moveRow = (dragIndex: number, hoverIndex: number) => {
    const newSymptoms = [...symptoms];
    const [draggedItem] = newSymptoms.splice(dragIndex, 1);
    newSymptoms.splice(hoverIndex, 0, draggedItem);
    onReorder(newSymptoms);
  };

  return (
    <div className="bg-white content-stretch flex flex-col items-stretch overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Grouped List">
      <AnimatePresence mode="popLayout">
        {symptoms.map((symptom, index) => (
          <motion.div
            key={symptom.id}
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: { 
                duration: 0.5,
                delay: index * 0.08,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: { 
                duration: 0.4,
                ease: [0.25, 0.1, 0.25, 1]
              }
            }}
            layout
            transition={{ layout: { duration: 0.45, ease: [0.25, 0.1, 0.25, 1] } }}
          >
            <DraggableRow 
              symptom={symptom} 
              index={index} 
              moveRow={moveRow}
              isLast={index === symptoms.length - 1}
              onDelete={() => onDeleteSymptom(symptom.id)}
              onEdit={() => onEditSymptom(symptom.id)}
              isSwipeOpen={openSwipeId === symptom.id}
              onSwipeChange={(isOpen) => {
                setOpenSwipeId(isOpen ? symptom.id : null);
              }}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}

interface Frame52Props {
  symptoms: SymptomData[];
  onReorder: (symptoms: SymptomData[]) => void;
  onDeleteSymptom: (id: number) => void;
  onEditSymptom: (id: number) => void;
}

function Frame52({ symptoms, onReorder, onDeleteSymptom, onEditSymptom }: Frame52Props) {
  return (
    <div className="content-stretch flex flex-col items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-col items-end size-full">
          <div className="box-border content-stretch flex flex-col gap-[8px] items-end pb-[8px] pt-[0px] px-[16px] relative w-full pr-[16px] pl-[16px]">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[13px] text-[rgba(60,60,67,0.6)] uppercase w-full">REGISTRO DE NOMBRE PACIENTE</p>
          </div>
        </div>
      </div>
      {symptoms.length > 0 ? (
        <GroupedList 
          symptoms={symptoms} 
          onReorder={onReorder} 
          onDeleteSymptom={onDeleteSymptom}
          onEditSymptom={onEditSymptom}
        />
      ) : (
        <div className="flex items-center justify-center w-full py-[40px]">
          <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic text-[17px] text-[rgba(60,60,67,0.6)] text-center tracking-[-0.43px] whitespace-pre">
            No hay registros que mostrar 
          </p>
        </div>
      )}
    </div>
  );
}

interface Frame53Props {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  monthDirection?: number;
  symptoms: SymptomData[];
  onReorder: (symptoms: SymptomData[]) => void;
  onDeleteSymptom: (id: number) => void;
  onEditSymptom: (id: number) => void;
  symptomsDataByDate: { [dateKey: string]: number[] };
}

function Frame53({ currentDate, selectedDate, onSelectDate, onPrevMonth, onNextMonth, monthDirection, symptoms, onReorder, onDeleteSymptom, onEditSymptom, symptomsDataByDate }: Frame53Props) {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[627px] items-start overflow-x-clip overflow-y-scroll px-0 py-[16px] relative shrink-0 w-[371px]" style={{ WebkitOverflowScrolling: 'touch', scrollbarWidth: 'none', msOverflowStyle: 'none' }}>
      <GroupedTable currentDate={currentDate} selectedDate={selectedDate} onSelectDate={onSelectDate} onPrevMonth={onPrevMonth} onNextMonth={onNextMonth} monthDirection={monthDirection} symptomsDataByDate={symptomsDataByDate} />
      <Frame52 
        symptoms={symptoms} 
        onReorder={onReorder} 
        onDeleteSymptom={onDeleteSymptom}
        onEditSymptom={onEditSymptom}
      />
    </div>
  );
}

interface Frame54Props {
  currentDate: Date;
  selectedDate: Date | null;
  onSelectDate: (date: Date) => void;
  onPrevMonth: () => void;
  onNextMonth: () => void;
  monthDirection?: number;
  symptoms: SymptomData[];
  onReorder: (symptoms: SymptomData[]) => void;
  onDeleteSymptom: (id: number) => void;
  onEditSymptom: (id: number) => void;
  symptomsDataByDate: { [dateKey: string]: number[] };
}

function Frame54({ currentDate, selectedDate, onSelectDate, onPrevMonth, onNextMonth, monthDirection, symptoms, onReorder, onDeleteSymptom, onEditSymptom, symptomsDataByDate }: Frame54Props) {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0">
      <NavigationBarIPhoneCompactSizeClass />
      <Frame53 
        currentDate={currentDate} 
        selectedDate={selectedDate} 
        onSelectDate={onSelectDate} 
        onPrevMonth={onPrevMonth} 
        onNextMonth={onNextMonth} 
        monthDirection={monthDirection} 
        symptoms={symptoms} 
        onReorder={onReorder} 
        onDeleteSymptom={onDeleteSymptom}
        onEditSymptom={onEditSymptom}
        symptomsDataByDate={symptomsDataByDate}
      />
    </div>
  );
}

function Buttons() {
  return (
    <div className="relative shrink-0 w-full" data-name="Buttons">
      <div className="size-full">
        <div className="box-border content-stretch flex items-start justify-between px-[16px] py-0 relative w-full">
          <div className="content-stretch flex gap-[10px] items-center justify-center relative shrink-0" data-name="Iconos">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="home">
              <div className="absolute inset-[14.58%_8.33%]" data-name="Vector">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 183, 100, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 17">
                    <path d={svgPaths.p36ed3400} fill="var(--fill-0, #00B764)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="overflow-clip relative shrink-0 size-[24px]" data-name="calendar_month">
            <div className="absolute inset-[8.33%_12.5%]" data-name="Vector">
              <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 20">
                  <path d={svgPaths.p8324480} fill="var(--fill-0, black)" id="Vector" />
                </svg>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Iconos">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="add_box">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p289eff80} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Iconos">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="analytics">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <g id="Vector">
                      <path d={svgPaths.p1742ec00} fill="var(--fill-0, black)" />
                      <path d="M6 9H4V14H6V9Z" fill="var(--fill-0, black)" />
                      <path d="M14 4H12V14H14V4Z" fill="var(--fill-0, black)" />
                      <path d="M10 11H8V14H10V11Z" fill="var(--fill-0, black)" />
                      <path d="M10 7H8V9H10V7Z" fill="var(--fill-0, black)" />
                    </g>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          <div className="content-stretch flex gap-[10px] items-center relative shrink-0" data-name="Iconos">
            <div className="overflow-clip relative shrink-0 size-[24px]" data-name="inbox">
              <div className="absolute inset-[12.5%]" data-name="Vector">
                <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
                  <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 18">
                    <path d={svgPaths.p13f12a80} fill="var(--fill-0, black)" id="Vector" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Time2() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Time">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[10px] items-center justify-center pl-[16px] pr-[6px] py-0 relative w-full">
          <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] relative shrink-0 text-[17px] text-black text-center text-nowrap whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
            9:41
          </p>
        </div>
      </div>
    </div>
  );
}

function DynamicIslandSpacer1() {
  return <div className="h-[10px] shrink-0 w-[124px]" data-name="Dynamic Island spacer" />;
}

function Battery1() {
  return (
    <div className="h-[13px] relative shrink-0 w-[27.328px]" data-name="Battery">
      <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 28 13">
        <g id="Battery">
          <rect height="12" id="Border" opacity="0.35" rx="3.8" stroke="var(--stroke-0, black)" width="24" x="0.5" y="0.5" />
          <path d={svgPaths.p3bbd9700} fill="var(--fill-0, black)" id="Cap" opacity="0.4" />
          <rect fill="var(--fill-0, black)" height="9" id="Capacity" rx="2.5" width="21" x="2" y="2" />
        </g>
      </svg>
    </div>
  );
}

function Levels1() {
  return (
    <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Levels">
      <div className="flex flex-row items-center justify-center size-full">
        <div className="box-border content-stretch flex gap-[7px] items-center justify-center pl-[6px] pr-[16px] py-0 relative w-full">
          <div className="h-[12.226px] relative shrink-0 w-[19.2px]" data-name="Cellular Connection">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 20 13">
                <path clipRule="evenodd" d={svgPaths.p1e09e400} fill="var(--fill-0, black)" fillRule="evenodd" id="Cellular Connection" />
              </svg>
            </div>
          </div>
          <div className="h-[12.328px] relative shrink-0 w-[17.142px]" data-name="Wifi">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 0, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 18 13">
                <path clipRule="evenodd" d={svgPaths.p18b35300} fill="var(--fill-0, black)" fillRule="evenodd" id="Wifi" />
              </svg>
            </div>
          </div>
          <Battery1 />
        </div>
      </div>
    </div>
  );
}

function Frame3() {
  return (
    <div className="content-stretch flex items-center justify-between relative rounded-[20px] shrink-0 w-[402px]" data-name="Frame">
      <Time2 />
      <DynamicIslandSpacer1 />
      <Levels1 />
    </div>
  );
}

export default function ExamplesToolbar() {
  const todayDate = new Date();
  const [currentDate, setCurrentDate] = useState(todayDate);
  const [selectedDate, setSelectedDate] = useState<Date | null>(todayDate);
  const [monthDirection, setMonthDirection] = useState(0);
  const [symptoms, setSymptoms] = useState<SymptomData[]>(initialSymptoms);
  const [symptomsDataByDate, setSymptomsDataByDate] = useState<{ [dateKey: string]: number[] }>(initialSymptomsDataByDate);
  
  const handlePrevMonth = () => {
    setMonthDirection(-1);
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
  };
  
  const handleNextMonth = () => {
    setMonthDirection(1);
    setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));
  };
  
  const handleSelectDate = (date: Date) => {
    setSelectedDate(date);
    // Update symptoms to show only those registered for the selected date
    const symptomsForDate = getSymptomsForDate(date, symptomsDataByDate);
    setSymptoms(symptomsForDate);
  };

  const handleReorder = (newSymptoms: SymptomData[]) => {
    setSymptoms(newSymptoms);
  };

  const handleDeleteSymptom = (id: number) => {
    // Remove from displayed symptoms
    setSymptoms(symptoms.filter(s => s.id !== id));
    
    // Remove from the data structure for the selected date
    if (selectedDate) {
      const dateKey = getDateKey(selectedDate);
      setSymptomsDataByDate(prev => {
        const newData = { ...prev };
        if (newData[dateKey]) {
          newData[dateKey] = newData[dateKey].filter(symptomId => symptomId !== id);
          // If no symptoms left for this date, remove the date entry
          if (newData[dateKey].length === 0) {
            delete newData[dateKey];
          }
        }
        return newData;
      });
    }
  };

  const handleEditSymptom = (id: number) => {
    // For now, just log that edit was clicked
    console.log('Edit symptom:', id);
    // You can implement edit functionality here
  };
  
  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex items-center justify-center min-h-screen w-full overflow-x-hidden bg-gray-100">
        <div className="relative w-[402px] h-[874px] shrink-0" data-name="Examples/Toolbar">
          <Contents1 />
          <Frame54 
            currentDate={currentDate} 
            selectedDate={selectedDate} 
            onSelectDate={handleSelectDate}
            onPrevMonth={handlePrevMonth}
            onNextMonth={handleNextMonth}
            monthDirection={monthDirection}
            symptoms={symptoms}
            onReorder={handleReorder}
            onDeleteSymptom={handleDeleteSymptom}
            onEditSymptom={handleEditSymptom}
            symptomsDataByDate={symptomsDataByDate}
          />
          <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[83px] items-start left-0 pb-[42px] pt-[13px] px-0 rounded-[20px] top-[791px] w-[402px]" data-name="Toolbar - iPhone">
            <div className="absolute inset-0" data-name="Chrome Material">
              <div className="overflow-clip relative rounded-[inherit] size-full">
                <div className="absolute backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.75)] inset-0 mix-blend-hard-light" data-name="Chrome" />
              </div>
              <div aria-hidden="true" className="absolute border-[0.333px_0px_0px] border-[rgba(0,0,0,0.3)] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-0.33px]" />
            </div>
            <Buttons />
          </div>
          <div className="absolute bottom-0 h-[83px] left-0 right-0" data-name="Home Indicator">
          </div>
          <div className="absolute box-border content-stretch flex flex-col items-start left-1/2 overflow-clip pb-0 pt-[21px] px-0 rounded-[20px] top-0 translate-x-[-50%]" data-name="Status Bar">
            <Frame3 />
          </div>
        </div>
      </div>
    </DndProvider>
  );
}
