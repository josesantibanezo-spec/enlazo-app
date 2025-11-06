export default function Day() {
  return (
    <div className="relative size-full" data-name="_Day">
      <div className="absolute left-1/2 size-[44px] top-1/2 translate-x-[-50%] translate-y-[-50%]" data-name="Ellipse">
        <div className="absolute inset-0" style={{ "--fill-0": "rgba(0, 183, 100, 1)" } as React.CSSProperties}>
          <svg className="block size-full" fill="none" preserveAspectRatio="none" viewBox="0 0 44 44">
            <circle cx="22" cy="22" fill="var(--fill-0, #00B764)" id="Ellipse" opacity="0.12" r="22" />
          </svg>
        </div>
      </div>
      <div className="absolute flex flex-col font-['SF_Pro:Medium',sans-serif] font-[510] justify-center leading-[0] left-1/2 size-[44px] text-[#00b764] text-[24px] text-center top-1/2 translate-x-[-50%] translate-y-[-50%]" style={{ fontVariationSettings: "'wdth' 100" }}>
        <p className="leading-[25px]">1</p>
      </div>
    </div>
  );
}