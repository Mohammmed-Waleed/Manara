export function LighthouseMark() {
  return (
    <svg className="brand-mark" viewBox="0 0 32 42" fill="none" aria-hidden="true">
      <path d="M10 37h12L19 17h-6l-3 20ZM9 37h14M11 17h10M11 8h10v8H11zM9 8l7-5 7 5M16 0v3M16 10v4M4 10H0M28 10h4M5 4l3 2M24 6l3-2M14 25h4M13 31h6" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export function ManaraBrand() {
  return <a href="#home" className="brand" aria-label="Manara home"><LighthouseMark /><span className="brand-name">manara</span></a>;
}
