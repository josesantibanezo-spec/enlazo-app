import img from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function Badge() {
  return (
    <div className="bg-[#00b764] h-[60px] relative shrink-0 w-[4px]" data-name="Badge">
      <div className="flex flex-row items-center size-full">
        <div className="h-[60px] w-[4px]" />
      </div>
    </div>
  );
}

function TitleAndDetail() {
  return (
    <div className="basis-0 content-stretch flex flex-col font-['Inter:Regular',sans-serif] font-normal grow h-[60px] items-start justify-center leading-[0] min-h-px min-w-px not-italic relative shrink-0 text-nowrap" data-name="Title and Detail">
      <div className="flex flex-col h-[22px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[17px] text-black tracking-[-0.43px] w-full">
        <p className="[white-space-collapse:collapse] leading-[22px] overflow-ellipsis overflow-hidden text-nowrap">Comentario</p>
      </div>
      <div className="flex flex-col h-[20px] justify-center overflow-ellipsis overflow-hidden relative shrink-0 text-[15px] text-[rgba(60,60,67,0.6)] tracking-[-0.23px] w-full">
        <p className="[white-space-collapse:collapse] leading-[20px] overflow-ellipsis overflow-hidden text-nowrap">Detalle</p>
      </div>
    </div>
  );
}

function AccessoriesAndGrabber() {
  return (
    <div className="basis-0 content-stretch flex grow h-full items-center justify-end min-h-px min-w-px relative shrink-0" data-name="Accessories and Grabber">
      <div className="basis-0 box-border content-stretch flex grow items-center justify-end min-h-px min-w-px pl-0 pr-[12px] py-0 relative shrink-0" data-name="Contents - Trailing">
        <div className="mr-[-12px] pointer-events-none relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[64px] size-full" src={img} />
          <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 rounded-[64px]" />
        </div>
        <div className="mr-[-12px] pointer-events-none relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[64px] size-full" src={img} />
          <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 rounded-[64px]" />
        </div>
        <div className="mr-[-12px] pointer-events-none relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
          <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover rounded-[64px] size-full" src={img} />
          <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 rounded-[64px]" />
        </div>
        <div className="bg-white mr-[-12px] relative rounded-[64px] shrink-0 size-[32px]" data-name="Avatar">
          <div className="box-border content-stretch flex gap-[10px] items-center justify-center overflow-clip p-[10px] relative rounded-[inherit] size-[32px]">
            <div className="absolute left-[-7px] overflow-clip size-[46px] top-[-2px]" data-name="person_outline" />
            <p className="font-['Satoshi:Semi_Bold',sans-serif] leading-[20px] not-italic relative shrink-0 text-[16px] text-black text-center text-nowrap whitespace-pre">+3</p>
          </div>
          <div aria-hidden="true" className="absolute border border-[#e6e6e6] border-solid inset-0 pointer-events-none rounded-[64px]" />
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