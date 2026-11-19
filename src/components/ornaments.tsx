import type { ReactNode } from 'react';

export function Motif({ kind = 'peacock', className = '' }: { kind?: string; className?: string }) {
  const feather = <>
    <path d="M32 54C12 46 10 29 21 16c5-6 9-10 11-14 2 4 6 8 11 14 11 13 9 30-11 38Z"/>
    <path d="M32 47c-14-6-15-18-7-28l7-10 7 10c8 10 7 22-7 28Z" opacity=".55"/>
    <path d="M32 36c-9-5-10-13 0-22 10 9 9 17 0 22Z"/>
    <path d="M32 29c-4-3-4-7 0-11 4 4 4 8 0 11Z" fill="currentColor" fillOpacity=".2"/>
    <path d="M32 61V41m-3 7-10-9m16 9 10-9M26 38l-9-8m21 8 9-8M24 29l-7-6m23 6 7-6M24 57h16"/>
    <path d="m32 55 3 3-3 3-3-3Z" fill="currentColor"/>
  </>;
  const shapes: Record<string, ReactNode> = {
    peacock: feather,
    lotus: feather,
    jaali: <>
      <path d="m32 5 8 8 11 2 2 11 6 6-6 6-2 11-11 2-8 8-8-8-11-2-2-11-6-6 6-6 2-11 11-2Z"/>
      <path d="m32 13 19 19-19 19-19-19Zm0 8 11 11-11 11-11-11Z"/>
      <path d="M32 5v8m27 19h-8M32 59v-8M5 32h8m3-16 5 5m27-5-5 5m5 27-5-5m-27 5 5-5" opacity=".65"/>
      <circle cx="32" cy="32" r="3" fill="currentColor" fillOpacity=".3"/>
    </>,
    kalash: <>
      <path d="M23 28h18v6c9 5 12 12 7 19-3 4-9 6-16 6s-13-2-16-6c-5-7-2-14 7-19Zm-2 5h22M18 44h28M20 51h24M25 56h14"/>
      <path d="M32 25c-10-3-11-13 0-22 11 9 10 19 0 22Zm0-3V9M25 29C14 28 8 21 7 12c11 0 18 7 20 15m12 2c11-1 17-8 18-17-11 0-18 7-20 15"/>
      <path d="M26 27c-8-7-8-14-5-20 7 4 10 10 9 18m8 2c8-7 8-14 5-20-7 4-10 10-9 18M12 17l11 9m29-9-11 9" opacity=".65"/>
      <path d="m32 40 4 5-4 5-4-5Z"/>
    </>,
    mandap: <>
      <path d="M5 58h54M9 54h46M13 51V26h7v25m24 0V26h7v25M10 22h44l-5-8H15Zm7-8 6-6h18l6 6M27 8l5-5 5 5"/>
      <path d="M20 27c0 10 8 13 12 13s12-3 12-13M20 27c4 3 8 5 12 5s8-2 12-5m-12 5v8m-9-9 3 7m15-7-3 7"/>
      <path d="M15 30h3m-3 15h3m28-15h3m-3 15h3M28 50c-3-3-2-6 1-9 0 4 5 5 4 8m-9 2h16M26 54h12"/>
      <path d="M18 18h28M8 26h16m16 0h16" opacity=".6"/>
      <circle cx="32" cy="18" r="1.3" fill="currentColor" stroke="none"/>
    </>,
    diya: <>
      <path d="M8 34c8 3 40 3 48 0-1 12-10 20-24 20S9 46 8 34Zm0 0c0-4 11-7 24-7s24 3 24 7M13 40c9 4 29 4 38 0M27 54v5m10-5v5M22 60h20"/>
      <path d="M32 31c-12-5-10-15 2-27-2 10 10 15 4 23-2 3-4 4-6 4Zm0-3c-4-4-3-8 1-13"/>
      <path d="M6 23 3 20m55 3 3-3M14 13l-3-4m39 4 3-4M32 1V0" opacity=".7"/>
      <path d="m32 43 3 4-3 4-3-4ZM15 45l4 3m30-3-4 3"/>
    </>,
  };
  return <svg className={className} viewBox="0 0 64 64" aria-hidden="true" focusable="false" fill="none" stroke="currentColor" strokeWidth="1.35" strokeLinecap="round" strokeLinejoin="round">{shapes[kind] || shapes.peacock}</svg>;
}

export function Flourish() {
  return <div className="flourish" aria-hidden="true">
    <span/>
    <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" focusable="false">
      <path d="M4 32h18m20 0h18M9 32c0-8 5-13 12-14 0 7-5 12-12 14Zm7 0c0 8 5 13 12 14 0-7-5-12-12-14Zm39 0c0-8-5-13-12-14 0 7 5 12 12 14Zm-7 0c0 8-5 13-12 14 0-7 5-12 12-14Z"/>
      <path d="m32 22 7 10-7 10-7-10Z" fill="currentColor" fillOpacity=".12"/>
      <path d="m32 28 3 4-3 4-3-4Z" fill="currentColor" stroke="none"/>
      <circle cx="32" cy="16" r="1.1" fill="currentColor" stroke="none"/>
      <circle cx="32" cy="48" r="1.1" fill="currentColor" stroke="none"/>
    </svg>
    <span/>
  </div>;
}

export function SectionTitle({ label, title, description }: { label: string; title: string; description?: string }) {
  return <div className="section-title" data-enter>
    <p className="kicker">{label}</p>
    <h2>{title}</h2>
    <Flourish />
    {description && <p className="section-description">{description}</p>}
  </div>;
}
