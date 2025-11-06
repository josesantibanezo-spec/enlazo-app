import svgPaths from "./svg-8fakyo2tqm";
import img from "figma:asset/eae313a48883a46e7a2a60ee806e73a8052191be.png";

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
            <span className="font-['Satoshi:Regular',sans-serif]">Hola,</span>
            <span>{` Nombre`}</span>
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

function Arrows() {
  return (
    <div className="absolute content-stretch flex font-['SF_Pro:Medium',sans-serif] font-[510] gap-[28px] items-center leading-[normal] right-[16px] text-[#00b764] text-[20px] text-center top-[calc(50%-1px)] translate-y-[-50%]" data-name="Arrows">
      <p className="h-[24px] relative shrink-0 w-[15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀆉
      </p>
      <p className="h-[24px] relative shrink-0 w-[15px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀆊
      </p>
    </div>
  );
}

function MonthAndYear() {
  return (
    <div className="absolute content-stretch flex gap-[4px] items-center leading-[22px] left-[16px] text-[17px] text-nowrap top-[calc(50%-1px)] translate-y-[-50%] whitespace-pre" data-name="Month and Year">
      <p className="font-['Inter:Medium',sans-serif] font-medium not-italic relative shrink-0 text-black tracking-[-0.43px]">Junio 2025</p>
      <p className="font-['SF_Pro:Semibold',sans-serif] font-[590] relative shrink-0 text-[#00b764] tracking-[-0.5px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀆊
      </p>
    </div>
  );
}

function Header() {
  return (
    <div className="h-[44px] relative shrink-0 w-full" data-name="Header">
      <Arrows />
      <MonthAndYear />
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

function Calendar() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[7px] items-start pb-0 pt-[3px] px-0 relative shrink-0 w-full" data-name="Calendar">
      <div className="relative shrink-0 w-full" data-name="Week 1">
        <div className="size-full">
          <div className="box-border content-stretch flex items-start justify-between px-[16px] py-0 relative w-full">
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">2</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">3</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">4</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">5</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">6</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">7</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
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
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">9</p>
              </div>
            </div>
            <div className="bg-[#00b764] relative rounded-[100px] shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-1/2 size-[44px] text-[24px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
                <p className="leading-[25px]">10</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">11</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">12</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">13</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">14</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
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
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">16</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">17</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">18</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">19</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">20</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">21</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
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
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">23</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">24</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">25</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">26</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">27</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">28</p>
              </div>
            </div>
            <div className="relative shrink-0 size-[44px]" data-name="Day">
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
            <div className="relative shrink-0 size-[44px]" data-name="Day">
              <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] left-1/2 not-italic size-[44px] text-[20px] text-black text-center top-1/2 tracking-[-0.45px] translate-x-[-50%] translate-y-[-50%]">
                <p className="leading-[25px]">30</p>
              </div>
            </div>
            <div className="shrink-0 size-[44px]" data-name="Day" />
            <div className="shrink-0 size-[44px]" data-name="Day" />
            <div className="shrink-0 size-[44px]" data-name="Day" />
            <div className="shrink-0 size-[44px]" data-name="Day" />
            <div className="shrink-0 size-[44px]" data-name="Day" />
            <div className="shrink-0 size-[44px]" data-name="Day" />
          </div>
        </div>
      </div>
      <Frame1 />
    </div>
  );
}

function Date() {
  return (
    <div className="box-border content-stretch flex flex-col items-start pb-0 pt-[6px] px-0 relative shrink-0 w-full" data-name="Date">
      <Header />
      <DateHeader />
      <Calendar />
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
  return (
    <div className="content-stretch flex gap-[8px] h-[44px] items-center justify-end relative shrink-0" data-name="Contents - Trailing">
      <div className="bg-[rgba(120,120,128,0.12)] box-border content-stretch flex items-center justify-end px-[11px] py-[6px] relative rounded-[6px] shrink-0" data-name="Date and Time - Compact - Collapsed">
        <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[17px] text-black text-center text-nowrap tracking-[-0.43px] whitespace-pre">10 de Junio</p>
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

function GroupedTable() {
  return (
    <div className="bg-white content-stretch flex flex-col items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Grouped Table">
      <div className="bg-white content-stretch flex flex-col items-start relative shrink-0 w-[361px]" data-name="Date and Time - Inline - Expanded">
        <Date />
        <Frame2 />
      </div>
      <Time1 />
    </div>
  );
}

function Badge() {
  return (
    <div className="bg-[#ff9500] h-[60px] relative shrink-0 w-[4px]" data-name="Badge">
      <div className="flex flex-row items-center size-full">
        <div className="h-[60px] w-[4px]" />
      </div>
    </div>
  );
}

function EditButton() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[12px] py-0 relative shrink-0" data-name="Edit Button">
      <div className="h-[60px] relative shrink-0 w-[24px]" data-name="Edit Button">
        <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Circle">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 122, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <circle cx="11" cy="11" fill="var(--fill-0, #007AFF)" id="Circle" r="11" />
            </svg>
          </div>
        </div>
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-1/2 size-[22px] text-[14.5px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀆅</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndDetail() {
  return (
    <div className="content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal h-[60px] items-start justify-center leading-[0] not-italic relative shrink-0 text-nowrap w-[175.5px]" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Dolor articular</p>
      </div>
      <div className="flex flex-col h-[20px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap">Detalle</p>
      </div>
    </div>
  );
}

function Detail() {
  return <div className="h-[32px] shrink-0 w-[45px]" data-name="Detail" />;
}

function DrillIn() {
  return (
    <div className="h-[32px] relative shrink-0 w-[8px]" data-name="Drill-in">
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[calc(50%-0.5px)] text-[17px] text-[rgba(60,60,67,0.3)] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">􀆊</p>
      </div>
    </div>
  );
}

function AccessoriesAndGrabber() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Accessories and Grabber">
      <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0" data-name="Contents - Trailing">
        <Detail />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`PM `}</p>
        </div>
        <DrillIn />
      </div>
      <div className="h-full relative shrink-0 w-[49px]" data-name="Grabber">
        <div aria-hidden="true" className="absolute border-[#c6c6c8] border-[0px_0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[24.5px] size-[22px] text-[17px] text-[rgba(60,60,67,0.3)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀌇</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      <TitleAndDetail />
      <AccessoriesAndGrabber />
    </div>
  );
}

function Contents3() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Contents">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <EditButton />
          <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="Image">
            <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Image">
              <div className="relative shrink-0 size-[58px]" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
              </div>
            </div>
          </div>
          <TitleAndTrailingAccessories />
        </div>
      </div>
    </div>
  );
}

function Badge1() {
  return (
    <div className="bg-[#32ade6] h-[60px] relative shrink-0 w-[4px]" data-name="Badge">
      <div className="flex flex-row items-center size-full">
        <div className="h-[60px] w-[4px]" />
      </div>
    </div>
  );
}

function EditButton1() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[12px] py-0 relative shrink-0" data-name="Edit Button">
      <div className="h-[60px] relative shrink-0 w-[24px]" data-name="Edit Button">
        <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Circle">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 122, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <circle cx="11" cy="11" fill="var(--fill-0, #007AFF)" id="Circle" r="11" />
            </svg>
          </div>
        </div>
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-1/2 size-[22px] text-[14.5px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀆅</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndDetail1() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal grow h-[60px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Inflamación visible</p>
      </div>
      <div className="flex flex-col h-[20px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap">Detalle</p>
      </div>
    </div>
  );
}

function DrillIn1() {
  return (
    <div className="h-[32px] relative shrink-0 w-[8px]" data-name="Drill-in">
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[calc(50%-0.5px)] text-[17px] text-[rgba(60,60,67,0.3)] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">􀆊</p>
      </div>
    </div>
  );
}

function AccessoriesAndGrabber1() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Accessories and Grabber">
      <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0 w-[175.5px]" data-name="Contents - Trailing">
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`PM `}</p>
        </div>
        <DrillIn1 />
      </div>
      <div className="h-full relative shrink-0 w-[49px]" data-name="Grabber">
        <div aria-hidden="true" className="absolute border-[#c6c6c8] border-[0px_0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[24.5px] size-[22px] text-[17px] text-[rgba(60,60,67,0.3)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀌇</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories1() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      <TitleAndDetail1 />
      <AccessoriesAndGrabber1 />
    </div>
  );
}

function Contents4() {
  return (
    <div className="basis-0 grow h-[60px] min-h-px min-w-px relative shrink-0" data-name="Contents">
      <div className="flex flex-row items-center size-full">
        <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center pl-[16px] pr-0 py-0 relative w-full">
          <EditButton1 />
          <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="Image">
            <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Image">
              <div className="relative shrink-0 size-[58px]" data-name="Image">
                <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
              </div>
            </div>
          </div>
          <TitleAndTrailingAccessories1 />
        </div>
      </div>
    </div>
  );
}

function Badge2() {
  return (
    <div className="bg-[#af52de] h-[60px] relative shrink-0 w-[4px]" data-name="Badge">
      <div className="flex flex-row items-center size-full">
        <div className="h-[60px] w-[4px]" />
      </div>
    </div>
  );
}

function EditButton2() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[12px] py-0 relative shrink-0" data-name="Edit Button">
      <div className="h-[60px] relative shrink-0 w-[24px]" data-name="Edit Button">
        <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Circle">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 122, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <circle cx="11" cy="11" fill="var(--fill-0, #007AFF)" id="Circle" r="11" />
            </svg>
          </div>
        </div>
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-1/2 size-[22px] text-[14.5px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀆅</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndDetail2() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal grow h-[60px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Rigidez</p>
      </div>
      <div className="flex flex-col h-[20px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap">Detalle</p>
      </div>
    </div>
  );
}

function DrillIn2() {
  return (
    <div className="h-[32px] relative shrink-0 w-[8px]" data-name="Drill-in">
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[calc(50%-0.5px)] text-[17px] text-[rgba(60,60,67,0.3)] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">􀆊</p>
      </div>
    </div>
  );
}

function AccessoriesAndGrabber2() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Accessories and Grabber">
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Contents - Trailing">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative w-full">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
              <p className="leading-[22px] whitespace-pre">{`AM `}</p>
            </div>
            <DrillIn2 />
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
  );
}

function TitleAndTrailingAccessories2() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      <TitleAndDetail2 />
      <AccessoriesAndGrabber2 />
    </div>
  );
}

function Contents5() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center pl-[16px] pr-0 py-0 relative shrink-0 w-[367px]" data-name="Contents">
      <EditButton2 />
      <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="Image">
        <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Image">
          <div className="relative shrink-0 size-[58px]" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
          </div>
        </div>
      </div>
      <TitleAndTrailingAccessories2 />
    </div>
  );
}

function EditButton3() {
  return (
    <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[12px] py-0 relative shrink-0" data-name="Edit Button">
      <div className="h-[60px] relative shrink-0 w-[24px]" data-name="Edit Button">
        <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Circle">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 122, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <circle cx="11" cy="11" fill="var(--fill-0, #007AFF)" id="Circle" r="11" />
            </svg>
          </div>
        </div>
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-1/2 size-[22px] text-[14.5px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀆅</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndDetail3() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal grow h-[60px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Title</p>
      </div>
      <div className="flex flex-col h-[20px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap">Detalle</p>
      </div>
    </div>
  );
}

function Symbol() {
  return (
    <div className="h-[32px] relative shrink-0 w-[16px]" data-name="Symbol">
      <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-1/2 text-[#00b764] text-[17px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">􀋂</p>
      </div>
    </div>
  );
}

function AccessoriesAndGrabber3() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Accessories and Grabber">
      <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0 w-[85px]" data-name="Contents - Trailing">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="electric_bolt">
          <div className="absolute inset-[8.33%_16.68%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 149, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
                <path d={svgPaths.p3d1c5e80} fill="var(--fill-0, #FF9500)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <Symbol />
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`AM `}</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`PM `}</p>
        </div>
      </div>
      <div className="h-full relative shrink-0 w-[49px]" data-name="Grabber">
        <div aria-hidden="true" className="absolute border-[#c6c6c8] border-[0px_0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[24.5px] size-[22px] text-[17px] text-[rgba(60,60,67,0.3)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀌇</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories3() {
  return (
    <div className="basis-0 content-stretch flex grow items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      <TitleAndDetail3 />
      <div className="flex flex-row items-center self-stretch">
        <AccessoriesAndGrabber3 />
      </div>
    </div>
  );
}

function Contents6() {
  return (
    <div className="box-border content-stretch flex gap-[4px] items-center pl-[16px] pr-0 py-0 relative shrink-0 w-[398px]" data-name="Contents">
      <EditButton3 />
      <div className="box-border content-stretch flex h-[60px] items-center pl-0 pr-[8px] py-0 relative shrink-0" data-name="Image">
        <div className="content-stretch flex flex-col h-full items-center justify-center relative shrink-0" data-name="Image">
          <div className="relative shrink-0 size-[58px]" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
          </div>
        </div>
      </div>
      <TitleAndTrailingAccessories3 />
    </div>
  );
}

function EditButton4() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center pl-0 pr-[12px] py-0 relative shrink-0" data-name="Edit Button">
      <div className="h-full relative shrink-0 w-[24px]" data-name="Edit Button">
        <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Circle">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 122, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <circle cx="11" cy="11" fill="var(--fill-0, #007AFF)" id="Circle" r="11" />
            </svg>
          </div>
        </div>
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-1/2 size-[22px] text-[14.5px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀆅</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndDetail4() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal grow h-[44px] items-start justify-center leading-[0] min-h-px min-w-px not-italic pb-[4px] pt-0 px-0 relative shrink-0 text-black text-nowrap" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center mb-[-4px] overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Title</p>
      </div>
      <div className="flex flex-col h-[18px] justify-center mb-[-4px] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] tracking-[-0.08px] w-full">
        <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden text-nowrap">Rodilla izq</p>
      </div>
    </div>
  );
}

function Checkmark() {
  return (
    <div className="h-[32px] relative shrink-0 w-[12px]" data-name="Checkmark">
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[22px] justify-center leading-[0] left-[calc(50%+1px)] text-[#00b764] text-[17px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px]">􀆅</p>
      </div>
    </div>
  );
}

function AccessoriesAndGrabber4() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Accessories and Grabber">
      <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0 w-[85px]" data-name="Contents - Trailing">
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="electric_bolt">
          <div className="absolute inset-[8.33%_16.68%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 149, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
                <path d={svgPaths.p3d1c5e80} fill="var(--fill-0, #FF9500)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`AM `}</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`PM `}</p>
        </div>
        <Checkmark />
      </div>
      <div className="h-[44px] relative shrink-0 w-[49px]" data-name="Grabber">
        <div aria-hidden="true" className="absolute border-[#c6c6c8] border-[0px_0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[24.5px] size-[22px] text-[17px] text-[rgba(60,60,67,0.3)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀌇</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories4() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      <TitleAndDetail4 />
      <AccessoriesAndGrabber4 />
    </div>
  );
}

function Contents7() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[44px] items-center pl-[16px] pr-0 py-0 relative shrink-0 w-[398px]" data-name="Contents">
      <EditButton4 />
      <div className="box-border content-stretch flex h-[44px] items-center justify-center overflow-clip pl-0 pr-[8px] py-0 relative shrink-0" data-name="Image">
        <div className="content-stretch flex flex-col h-[43.5px] items-center justify-center relative shrink-0" data-name="Image">
          <div className="relative shrink-0 size-[42px]" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
          </div>
        </div>
      </div>
      <TitleAndTrailingAccessories4 />
    </div>
  );
}

function EditButton5() {
  return (
    <div className="box-border content-stretch flex h-[44px] items-center pl-0 pr-[12px] py-0 relative shrink-0" data-name="Edit Button">
      <div className="h-full relative shrink-0 w-[24px]" data-name="Edit Button">
        <div className="absolute left-1/2 size-[22px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Circle">
          <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 122, 255, 1)" } as React.CSSProperties}>
            <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 22 22">
              <circle cx="11" cy="11" fill="var(--fill-0, #007AFF)" id="Circle" r="11" />
            </svg>
          </div>
        </div>
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-1/2 size-[22px] text-[14.5px] text-center text-white top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀆅</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndDetail5() {
  return (
    <div className="basis-0 box-border content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal grow h-[44px] items-start justify-center leading-[0] min-h-px min-w-px not-italic pb-[4px] pt-0 px-0 relative shrink-0 text-black text-nowrap" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center mb-[-4px] overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Title</p>
      </div>
      <div className="flex flex-col h-[18px] justify-center mb-[-4px] overflow-ellipsis overflow-hidden relative shrink-0 text-[13px] tracking-[-0.08px] w-full">
        <p className="[white-space-collapse:collapse] leading-[18px] overflow-ellipsis overflow-hidden text-nowrap">Rodilla izq</p>
      </div>
    </div>
  );
}

function Detail5() {
  return (
    <div className="h-[32px] relative shrink-0 w-[45px]" data-name="Detail">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[15.63%_-4.44%_15.63%_6.67%] justify-center leading-[0] not-italic text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
        <p className="leading-[22px] whitespace-pre">Detail</p>
      </div>
    </div>
  );
}

function DrillIn3() {
  return (
    <div className="h-[32px] relative shrink-0 w-[8px]" data-name="Drill-in">
      <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[calc(50%-0.5px)] text-[17px] text-[rgba(60,60,67,0.3)] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[22px] whitespace-pre">􀆊</p>
      </div>
    </div>
  );
}

function AccessoriesAndGrabber5() {
  return (
    <div className="content-stretch flex h-full items-center justify-end relative shrink-0" data-name="Accessories and Grabber">
      <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0 w-[85px]" data-name="Contents - Trailing">
        <Detail5 />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="electric_bolt">
          <div className="absolute inset-[8.33%_16.68%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 149, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 14 17">
                <path d={svgPaths.p3d1c5e80} fill="var(--fill-0, #FF9500)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`AM `}</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`PM `}</p>
        </div>
        <DrillIn3 />
      </div>
      <div className="h-[44px] relative shrink-0 w-[49px]" data-name="Grabber">
        <div aria-hidden="true" className="absolute border-[#c6c6c8] border-[0px_0px_0px_0.5px] border-solid inset-0 pointer-events-none" />
        <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[24.5px] size-[22px] text-[17px] text-[rgba(60,60,67,0.3)] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
          <p className="leading-[22px]">􀌇</p>
        </div>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories5() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      <TitleAndDetail5 />
      <AccessoriesAndGrabber5 />
    </div>
  );
}

function Contents8() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[44px] items-center pl-[16px] pr-0 py-0 relative shrink-0 w-[398px]" data-name="Contents">
      <EditButton5 />
      <div className="box-border content-stretch flex h-[44px] items-center justify-center overflow-clip pl-0 pr-[8px] py-0 relative shrink-0" data-name="Image">
        <div className="content-stretch flex flex-col h-[43.5px] items-center justify-center relative shrink-0" data-name="Image">
          <div className="relative shrink-0 size-[42px]" data-name="Image">
            <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none size-full" src={img} />
          </div>
        </div>
      </div>
      <TitleAndTrailingAccessories5 />
    </div>
  );
}

function GroupedList() {
  return (
    <div className="bg-white content-stretch flex flex-col h-[240px] items-start overflow-clip relative rounded-[10px] shrink-0 w-full" data-name="Grouped List">
      <div className="relative shrink-0 w-full" data-name="Row">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
          <Badge />
          <Contents3 />
        </div>
        <div aria-hidden="true" className="absolute border-[0px_0px_0.33px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      </div>
      <div className="relative shrink-0 w-full" data-name="Row">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit] w-full">
          <Badge1 />
          <Contents4 />
        </div>
        <div aria-hidden="true" className="absolute border-[0px_0px_0.33px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      </div>
      <div className="relative shrink-0" data-name="Row">
        <div className="content-stretch flex items-center overflow-clip relative rounded-[inherit]">
          <Badge2 />
          <Contents5 />
        </div>
        <div aria-hidden="true" className="absolute border-[0px_0px_0.33px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      </div>
      <div className="content-stretch flex items-center relative shrink-0 w-full" data-name="Row">
        <Contents6 />
      </div>
      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Row">
        <Contents7 />
      </div>
      <div className="content-stretch flex items-center overflow-clip relative shrink-0" data-name="Row">
        <Contents8 />
      </div>
    </div>
  );
}

function Frame52() {
  return (
    <div className="content-stretch flex flex-col h-[268px] items-center justify-center relative shrink-0 w-full">
      <div className="relative shrink-0 w-full" data-name="Header">
        <div className="flex flex-col items-end size-full">
          <div className="box-border content-stretch flex flex-col gap-[8px] items-end pb-[7px] pt-0 px-[16px] relative w-full">
            <p className="font-['Inter:Regular',sans-serif] font-normal leading-[16px] not-italic relative shrink-0 text-[13px] text-[rgba(60,60,67,0.6)] uppercase w-full">REGISTRO DE NOMBRE PACIENTE</p>
          </div>
        </div>
      </div>
      <GroupedList />
    </div>
  );
}

function Frame53() {
  return (
    <div className="box-border content-stretch flex flex-col gap-[16px] h-[627px] items-start overflow-x-clip overflow-y-auto px-0 py-[16px] relative shrink-0 w-[371px]">
      <GroupedTable />
      <Frame52 />
    </div>
  );
}

function Frame54() {
  return (
    <div className="absolute content-stretch flex flex-col items-center left-0 top-0">
      <NavigationBarIPhoneCompactSizeClass />
      <Frame53 />
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
  return (
    <div className="relative rounded-[20px] size-full" data-name="Examples/Toolbar">
      <Contents1 />
      <Frame54 />
      <div className="absolute box-border content-stretch flex flex-col gap-[10px] h-[83px] items-start left-0 pb-[42px] pt-[13px] px-0 rounded-[20px] top-[791px] w-[402px]" data-name="Toolbar - iPhone">
        <div className="absolute inset-0" data-name="Chrome Material">
          <div className="overflow-clip relative rounded-[inherit] size-full">
            <div className="absolute backdrop-blur-[25px] backdrop-filter bg-[rgba(255,255,255,0.75)] inset-0 mix-blend-hard-light" data-name="Chrome" />
          </div>
          <div aria-hidden="true" className="absolute border-[0.333px_0px_0px] border-[rgba(0,0,0,0.3)] border-solid bottom-0 left-0 pointer-events-none right-0 top-[-0.33px]" />
        </div>
        <Buttons />
      </div>
      <div className="absolute bottom-0 h-[34px] left-0 right-0 rounded-[20px]" data-name="Home Indicator">
        <div className="absolute bottom-[8px] flex h-[5px] items-center justify-center left-1/2 translate-x-[-50%] w-[144px]">
          <div className="flex-none rotate-[180deg] scale-y-[-100%]">
            <div className="bg-black h-[5px] rounded-[100px] w-[144px]" data-name="Home Indicator" />
          </div>
        </div>
      </div>
      <div className="absolute box-border content-stretch flex flex-col items-start left-1/2 overflow-clip pb-0 pt-[21px] px-0 rounded-[20px] top-0 translate-x-[-50%]" data-name="Status Bar">
        <Frame3 />
      </div>
    </div>
  );
}