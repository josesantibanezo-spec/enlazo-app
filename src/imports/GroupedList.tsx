import imgImage from "figma:asset/7f12ea1300756f144a0fb5daaf68dbfc01103a46.png";

function Badge() {
  return <div className="absolute bg-[#ff2d55] h-[59.99px] left-0 top-0 w-[3.989px]" data-name="Badge" />;
}

function Container() {
  return (
    <div className="absolute h-[60.31px] left-0 top-0 w-[338.861px]" data-name="Container">
      <div aria-hidden="true" className="absolute border-[0px_0px_0.758px] border-[rgba(84,84,86,0.34)] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function Paragraph() {
  return (
    <div className="h-[21.993px] relative shrink-0 w-[175.497px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[21.993px] overflow-clip relative rounded-[inherit] w-[175.497px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-0 not-italic text-[17px] text-black text-nowrap top-[0.76px] tracking-[-0.43px] whitespace-pre">Ojos rojos</p>
      </div>
    </div>
  );
}

function Container1() {
  return (
    <div className="absolute content-stretch flex flex-col h-[21.993px] items-start justify-center left-0 overflow-clip top-[9px] w-[175.497px]" data-name="Container">
      <Paragraph />
    </div>
  );
}

function Paragraph1() {
  return (
    <div className="h-[19.993px] relative shrink-0 w-[175.497px]" data-name="Paragraph">
      <div className="bg-clip-padding border-0 border-[transparent] border-solid box-border h-[19.993px] overflow-clip relative rounded-[inherit] w-[175.497px]">
        <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[20px] left-0 not-italic text-[15px] text-[rgba(60,60,67,0.6)] text-nowrap top-[-0.24px] tracking-[-0.23px] whitespace-pre">Detalle</p>
      </div>
    </div>
  );
}

function Container2() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.993px] items-start justify-center left-0 overflow-clip top-[30.99px] w-[175.497px]" data-name="Container">
      <Paragraph1 />
    </div>
  );
}

function TitleAndDetail() {
  return (
    <div className="absolute h-[59.99px] left-0 top-0 w-[175.497px]" data-name="TitleAndDetail">
      <Container1 />
      <Container2 />
    </div>
  );
}

function Detail() {
  return <div className="absolute h-[31.996px] left-0 top-0 w-[44.993px]" data-name="Detail" />;
}

function Paragraph2() {
  return (
    <div className="absolute h-[22.005px] left-[60.98px] top-[5px] w-[29.403px]" data-name="Paragraph">
      <p className="absolute font-['Inter:Regular',sans-serif] font-normal leading-[22px] left-[30px] not-italic text-[17px] text-[rgba(60,60,67,0.6)] text-nowrap text-right top-[0.76px] tracking-[-0.43px] translate-x-[-100%] whitespace-pre">{`PM `}</p>
    </div>
  );
}

function DrillIn() {
  return <div className="absolute h-[31.996px] left-[106.38px] top-0 w-[7.99px]" data-name="DrillIn" />;
}

function Container3() {
  return (
    <div className="absolute h-[31.996px] left-0 top-[13.99px] w-[114.37px]" data-name="Container">
      <Detail />
      <Paragraph2 />
      <DrillIn />
    </div>
  );
}

function AccessoriesAndGrabber() {
  return (
    <div className="absolute h-[59.99px] left-[0.15px] top-0 w-[48.994px]" data-name="AccessoriesAndGrabber">
      <div aria-hidden="true" className="absolute border-[#c6c6c8] border-[0px_0px_0px_0.758px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function AccessoriesAndGrabber1() {
  return (
    <div className="absolute h-[22.005px] left-[13.49px] top-[19px] w-[21.993px]" data-name="AccessoriesAndGrabber">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[11.28px] text-[17px] text-[rgba(60,60,67,0.3)] text-center text-nowrap top-[-0.24px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀌇
      </p>
    </div>
  );
}

function Container4() {
  return (
    <div className="absolute h-[59.99px] left-[114.37px] top-0 w-[48.994px]" data-name="Container">
      <AccessoriesAndGrabber />
      <AccessoriesAndGrabber1 />
    </div>
  );
}

function AccessoriesAndGrabber2() {
  return (
    <div className="absolute h-[59.99px] left-[175.5px] top-0 w-[163.364px]" data-name="AccessoriesAndGrabber">
      <Container3 />
      <Container4 />
    </div>
  );
}

function TitleAndTrailingAccessories() {
  return (
    <div className="absolute h-[59.99px] left-[19.98px] top-0 w-[338.861px]" data-name="TitleAndTrailingAccessories">
      <Container />
      <TitleAndDetail />
      <AccessoriesAndGrabber2 />
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

function Container5() {
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

function Container6() {
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

function Container7() {
  return (
    <div className="absolute content-stretch flex flex-col h-[19.993px] items-start justify-center left-0 overflow-clip top-[30.99px] w-[175.497px]" data-name="Container">
      <Paragraph4 />
    </div>
  );
}

function TitleAndDetail1() {
  return (
    <div className="absolute h-[59.99px] left-0 top-0 w-[175.497px]" data-name="TitleAndDetail">
      <Container6 />
      <Container7 />
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

function Container8() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.758px] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}

function Container9() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Image />
      <Container8 />
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

function Container10() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.758px] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}

function Container11() {
  return (
    <div className="absolute left-[20px] rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Image1 />
      <Container10 />
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

function Container12() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.758px] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}

function Container13() {
  return (
    <div className="absolute left-[40.01px] rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Image2 />
      <Container12 />
    </div>
  );
}

function Container14() {
  return <div className="absolute left-[-7px] size-[45.999px] top-[-1.99px]" data-name="Container" />;
}

function Paragraph5() {
  return (
    <div className="absolute h-[20.005px] left-[6.88px] top-[6px] w-[18.253px]" data-name="Paragraph">
      <p className="absolute font-['Arial:Regular',sans-serif] leading-[20px] left-[9.5px] not-italic text-[16px] text-black text-center top-[-0.24px] translate-x-[-50%] w-[19px]">+3</p>
    </div>
  );
}

function Container15() {
  return (
    <div className="absolute left-0 overflow-clip rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Container14 />
      <Paragraph5 />
    </div>
  );
}

function Container16() {
  return (
    <div className="absolute left-0 rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <div aria-hidden="true" className="absolute border-[#e6e6e6] border-[0.758px] border-solid inset-0 pointer-events-none rounded-[64px]" />
    </div>
  );
}

function Container17() {
  return (
    <div className="absolute bg-white left-[60.01px] rounded-[64px] size-[31.996px] top-0" data-name="Container">
      <Container15 />
      <Container16 />
    </div>
  );
}

function Container18() {
  return (
    <div className="absolute h-[31.996px] left-[7.99px] top-[13.99px] w-[96.011px]" data-name="Container">
      <Container9 />
      <Container11 />
      <Container13 />
      <Container17 />
    </div>
  );
}

function CommentAccessories() {
  return (
    <div className="absolute h-[66px] left-0 top-[-4px] w-[49px]" data-name="CommentAccessories">
      <div aria-hidden="true" className="absolute border-[#c6c6c8] border-[0px_0px_0px_0.758px] border-solid inset-0 pointer-events-none" />
    </div>
  );
}

function CommentAccessories1() {
  return (
    <div className="absolute h-[22.005px] left-[13.49px] top-[19px] w-[21.993px]" data-name="CommentAccessories">
      <p className="absolute font-['SF_Pro:Semibold',sans-serif] font-[590] leading-[22px] left-[11.28px] text-[17px] text-[rgba(60,60,67,0.3)] text-center text-nowrap top-[-0.24px] translate-x-[-50%] whitespace-pre" style={{ fontVariationSettings: "'wdth' 100" }}>
        􀌇
      </p>
    </div>
  );
}

function Container19() {
  return (
    <div className="absolute h-[64px] left-[111.89px] top-[-0.36px] w-[49px]" data-name="Container">
      <CommentAccessories />
      <CommentAccessories1 />
    </div>
  );
}

function CommentAccessories2() {
  return (
    <div className="absolute h-[60px] right-[-8.54px] top-[-1px] w-[167px]" data-name="CommentAccessories">
      <Container18 />
      <Container19 />
    </div>
  );
}

function CommentTitleAndAccessories() {
  return (
    <div className="absolute h-[59.99px] left-[19.98px] top-0 w-[336.482px]" data-name="CommentTitleAndAccessories">
      <TitleAndDetail1 />
      <CommentAccessories2 />
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
      <Container5 />
      <DraggableRow1 />
    </div>
  );
}