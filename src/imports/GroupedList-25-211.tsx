import imgImage from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function Badge() {
  return <div className="absolute bg-[#ff2d55] h-[59.99px] left-0 top-0 w-[3.989px]" data-name="Badge" />;
}

function Paragraph() {
  return (
    <div className="absolute box-border content-stretch flex gap-[10px] items-center left-[60.98px] px-[8px] py-0 top-[5px]" data-name="Paragraph">
      <p className="font-['Inter:Regular',sans-serif] font-normal leading-[22px] not-italic relative shrink-0 text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right tracking-[-0.43px] whitespace-pre">{`PM `}</p>
    </div>
  );
}

function Container() {
  return (
    <div className="absolute h-[32px] left-[20px] top-[14px] w-[91px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function AccessoriesAndGrabber() {
  return (
    <div className="absolute h-[60px] left-[224.02px] top-0 w-[111px]" data-name="AccessoriesAndGrabber">
      <Container />
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute h-[60.31px] left-0 top-0 w-[338.861px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.758px] border-[rgba(84,84,86,0.34)] border-solid inset-0 pointer-events-none" />
      <AccessoriesAndGrabber />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[21.993px] relative shrink-0 w-[175.497px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21.993px] overflow-clip relative rounded-[inherit] w-[175.497px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[17px] text-black text-nowrap top-[0.76px] tracking-[-0.43px] whitespace-pre">Ojos rojos</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[21.993px] items-start justify-center left-0 overflow-clip top-[9px] w-[175.497px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function Paragraph2() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[175.497px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] overflow-clip relative rounded-[inherit] w-[175.497px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[15px] text-[rgba(60,60,67,0.6)] text-nowrap top-[-0.24px] tracking-[-0.23px] whitespace-pre">Detalle</p>
      </div>
    </div>
  );
}

function Container3() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.993px] items-start justify-center left-0 overflow-clip top-[30.99px] w-[175.497px]" data-name="Container">
      <Paragraph2 />
    </div>
  );
}

function TitleAndDetail() {
  return (
    <div className="absolute h-[59.99px] left-0 top-0 w-[175.497px]" data-name="TitleAndDetail">
      <Container2 />
      <Container3 />
    </div>
  );
}

function TitleAndTrailingAccessories() {
  return (
    <div className="absolute h-[59.99px] left-[19.98px] top-0 w-[338.861px]" data-name="TitleAndTrailingAccessories">
      <Container1 />
      <TitleAndDetail />
    </div>
  );
}

function DraggableRow() {
  return (
    <div className="absolute h-[60px] left-[-0.11px] overflow-clip top-[-0.36px] w-[372px]" data-name="DraggableRow">
      <Badge />
      <TitleAndTrailingAccessories />
    </div>
  );
}

function Badge1() {
  return <div className="absolute bg-[#00b764] h-[59.99px] left-[-0.11px] top-[59.64px] w-[3.989px]" data-name="Badge" />;
}

function Container4() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[59.99px] left-[0.11px] top-[0.11px] w-[358.842px]" data-name="Container">
      <DraggableRow />
      <Badge1 />
    </div>
  );
}

function Paragraph3() {
  return (
    <div className="h-[21.993px] relative shrink-0 w-[175.497px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21.993px] overflow-clip relative rounded-[inherit] w-[175.497px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[17px] text-black text-nowrap top-[0.76px] tracking-[-0.43px] whitespace-pre">Comentario</p>
      </div>
    </div>
  );
}

function Container5() {
  return (
    <div className="absolute content-stretch flex flex-col h-[21.993px] items-start justify-center left-0 overflow-clip top-[9px] w-[175.497px]" data-name="Container">
      <Paragraph3 />
    </div>
  );
}

function Paragraph4() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[175.497px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] overflow-clip relative rounded-[inherit] w-[175.497px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[15px] text-[rgba(60,60,67,0.6)] text-nowrap top-[-0.24px] tracking-[-0.23px] whitespace-pre">Detalle</p>
      </div>
    </div>
  );
}

function Container6() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.993px] items-start justify-center left-0 overflow-clip top-[30.99px] w-[175.497px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function TitleAndDetail1() {
  return (
    <div className="absolute h-[59.99px] left-0 top-0 w-[175.497px]" data-name="TitleAndDetail">
      <Container5 />
      <Container6 />
    </div>
  );
}

function Image() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[64px] size-full" src={imgImage} />
    </div>
  );
}

function Container7() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.758px] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}

function Container8() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Image />
      <Container7 />
    </div>
  );
}

function Image1() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[64px] size-full" src={imgImage} />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.758px] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}

function Container10() {
  return (
    <div className="absolute left-[20px] rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Image1 />
      <Container9 />
    </div>
  );
}

function Image2() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Image">
      <img alt="" className="absolute inset-0 max-w-none object-50%-50% object-cover pointer-events-none rounded-[64px] size-full" src={imgImage} />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.758px] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}

function Container12() {
  return (
    <div className="absolute left-[40.01px] rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Image2 />
      <Container11 />
    </div>
  );
}

function Container13() {
  return <div className="absolute left-[-7px] size-[45.999px] top-[-1.99px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="absolute h-[20.005px] left-[6.88px] top-[6px] w-[18.253px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[9.5px] not-italic text-[16px] text-black text-center top-[-0.24px] translate-x-[-50%] w-[19px]">+3</p>
    </div>
  );
}

function Container14() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Container13 />
      <Paragraph5 />
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.758px] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute bg-white left-[60.01px] rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Container14 />
      <Container15 />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute h-[31.996px] left-[7.99px] top-[13.99px] w-[96.011px]" data-name="Container">
      <Container8 />
      <Container10 />
      <Container12 />
      <Container16 />
    </div>
  );
}

function CommentAccessories() {
  return (
    <div className="absolute h-[60px] right-[-8.43px] top-[-1.36px] w-[106px]" data-name="CommentAccessories">
      <Container17 />
    </div>
  );
}

function CommentTitleAndAccessories() {
  return (
    <div className="absolute h-[59.99px] left-[19.98px] top-0 w-[336.482px]" data-name="CommentTitleAndAccessories">
      <TitleAndDetail1 />
      <CommentAccessories />
    </div>
  );
}

function DraggableRow1() {
  return (
    <div className="absolute bg-[rgba(255,255,255,0)] h-[60px] left-[0.11px] overflow-clip top-[60.11px] w-[371px]" data-name="DraggableRow">
      <CommentTitleAndAccessories />
    </div>
  );
}

export default function GroupedList() {
  return (
    <div className="bg-white overflow-clip relative rounded-[10px] size-full" data-name="GroupedList">
      <Container4 />
      <DraggableRow1 />
    </div>
  );
}