import svgPaths from "./svg-012hz1nil6";

function TitleAndDetail() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal grow h-[60px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Title</p>
      </div>
      <div className="flex flex-col h-[20px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap">Subtitle</p>
      </div>
    </div>
  );
}

function Detail() {
  return (
    <div className="h-[32px] relative shrink-0 w-[45px]" data-name="Detail">
      <div className="absolute flex flex-col font-['Inter:Regular',sans-serif] font-normal inset-[15.63%_-4.44%_15.63%_6.67%] justify-center leading-[0] not-italic text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
        <p className="leading-[22px] whitespace-pre">Detail</p>
      </div>
    </div>
  );
}

function TitleAndTrailingAccessories() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.33px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      <TitleAndDetail />
      <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative shrink-0 w-[85px]" data-name="Contents - Trailing">
        <Detail />
        <div className="overflow-clip relative shrink-0 size-[20px]" data-name="electric_bolt">
          <div className="absolute inset-[8.33%_16.68%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 149, 0, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 16 20">
                <path d={svgPaths.p18aff200} fill="var(--fill-0, black)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
        <div className="h-[32px] relative shrink-0 w-[16px]" data-name="Symbol">
          <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-1/2 text-[#007aff] text-[17px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">􀋂</p>
          </div>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`AM `}</p>
        </div>
        <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
          <p className="leading-[22px] whitespace-pre">{`PM `}</p>
        </div>
        <div className="h-[32px] relative shrink-0 w-[16px]" data-name="Info">
          <div className="absolute flex flex-col font-['SF_Pro:Regular',sans-serif] font-normal h-[22px] justify-center leading-[0] left-1/2 text-[#007aff] text-[17px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">􀅴</p>
          </div>
        </div>
        <div className="h-[32px] relative shrink-0 w-[12px]" data-name="Checkmark">
          <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] h-[22px] justify-center leading-[0] left-[calc(50%+1px)] text-[#007aff] text-[17px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%] w-[18px]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px]">􀆅</p>
          </div>
        </div>
        <div className="h-[32px] relative shrink-0 w-[8px]" data-name="Drill-in">
          <div className="absolute flex flex-col font-['SF_Pro:Semibold',sans-serif] font-[590] justify-center leading-[0] left-[calc(50%-0.5px)] text-[17px] text-[rgba(60,60,67,0.3)] text-center text-nowrap top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
            <p className="leading-[22px] whitespace-pre">􀆊</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function Contents() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center pl-[12px] pr-0 py-0 relative shrink-0 w-[600px]" data-name="Contents">
      <TitleAndTrailingAccessories />
    </div>
  );
}

export default function TableRowAndActions() {
  return (
    <div className="content-stretch flex items-center justify-end relative size-full" data-name="Table Row and Actions">
      <Contents />
      <div className="bg-[#ff9500] h-full relative shrink-0 w-[74px]" data-name="Action 2">
        <div className="absolute left-[calc(50%-2px)] overflow-clip size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="edit">
          <div className="absolute inset-[12.5%_12.49%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 15 15">
                <path d={svgPaths.p25003780} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-[#ff3b30] h-full relative shrink-0 w-[74px]" data-name="Action 1">
        <div className="absolute left-[calc(50%-2px)] overflow-clip size-[20px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="delete">
          <div className="absolute inset-[12.5%_20.83%]" data-name="Vector">
            <div className="absolute inset-0" style={{ "--fill-0": "rgba(255, 255, 255, 1)" } as React.CSSProperties}>
              <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 12 15">
                <path d={svgPaths.p2dd60180} fill="var(--fill-0, white)" id="Vector" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}