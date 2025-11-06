import img from "figma:asset/eae313a48883a46e7a2a60ee806e73a8052191be.png";

function Badge() {
  return (
    <div className="bg-[#a2845e] h-[60px] relative shrink-0 w-[4px]" data-name="Badge">
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
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal grow h-[60px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Fiebre</p>
      </div>
      <div className="flex flex-col h-[20px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap">Detalle</p>
      </div>
    </div>
  );
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
      <div className="basis-0 grow min-h-px min-w-px relative shrink-0" data-name="Contents - Trailing">
        <div className="flex flex-row items-center justify-end size-full">
          <div className="box-border content-stretch flex gap-[16px] items-center justify-end pl-0 pr-[16px] py-0 relative w-full">
            <div className="flex flex-col font-['Inter:Regular',sans-serif] font-normal justify-center leading-[0] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px]">
              <p className="leading-[22px] whitespace-pre">{`PM `}</p>
            </div>
            <DrillIn />
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

function TitleAndTrailingAccessories() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center min-h-px min-w-px relative shrink-0" data-name="Title and Trailing Accessories">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.333px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
      <TitleAndDetail />
      <AccessoriesAndGrabber />
    </div>
  );
}

function Contents() {
  return (
    <div className="box-border content-stretch flex gap-[4px] h-[60px] items-center pl-[16px] pr-0 py-0 relative shrink-0 w-[367px]" data-name="Contents">
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
  );
}

export default function Row() {
  return (
    <div className="relative size-full" data-name="Row">
      <div className="content-stretch flex items-center relative size-full">
        <Badge />
        <Contents />
      </div>
      <div aria-hidden="true" className="absolute border-[0px_0px_0.33px] border-[rgba(84,84,86,0.34)] border-solid bottom-[-0.33px] left-0 pointer-events-none right-0 top-0" />
    </div>
  );
}