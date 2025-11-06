import img from "figma:asset/a6ccbb03631f70151417ab81ba603bf963c8f5c8.png";

function Frame() {
  return (
    <div className="h-[177px] relative shrink-0 w-[257px]" data-name="Frame">
      <div className="absolute bg-[rgba(120,120,128,0.08)] h-[35px] left-[-20px] rounded-[7px] top-[72px] w-[297px]" data-name="Selection" />
      <div className="absolute bg-black h-[35px] left-[-20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20px_-72px] mask-size-[257px_178.5px] rounded-[7px] top-[72px] w-[297px]" data-name="Selection" style={{ maskImage: `url('${img}')` }} />
      <div className="absolute bg-gradient-to-b from-[#b2b2b2] inset-[107px_-20px_-2px_-20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20px_-107px] mask-size-[257px_178.5px] to-[rgba(178,178,178,0.3)]" data-name="Fade Out" style={{ maskImage: `url('${img}')` }} />
      <div className="absolute bg-gradient-to-b bottom-[105px] from-[rgba(178,178,178,0.3)] left-[-20px] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-position-[20px_0px] mask-size-[257px_178.5px] right-[-20px] to-[#b2b2b2] top-0" data-name="Fade Out" style={{ maskImage: `url('${img}')` }} />
    </div>
  );
}

export default function DateAndTimeWheels() {
  return (
    <div className="relative rounded-[13px] shadow-[0px_10px_60px_0px_rgba(0,0,0,0.1)] size-full" data-name="Date and Time - Wheels">
      <div className="size-full">
        <div className="box-border content-stretch flex flex-col gap-[10px] items-start overflow-clip px-[20px] py-[18px] relative size-full">
          <div className="absolute inset-0 overflow-clip" data-name="Material">
            <div aria-hidden="true" className="absolute inset-0 pointer-events-none">
              <div className="absolute bg-[rgba(179,179,179,0.82)] inset-0" />
              <div className="absolute backdrop-blur-[25px] backdrop-filter bg-[#383838] inset-0 mix-blend-color-dodge" />
            </div>
          </div>
          <Frame />
        </div>
      </div>
    </div>
  );
}