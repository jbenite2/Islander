function Frond({ d, fill }: { d: string; fill: string }) {
  return <path d={d} fill={fill} />;
}

function PalmTree({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 220 480"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M108 480 C104 480 100 478 98 472 L94 280 C94 275 97 272 102 272 L118 272 C123 272 126 275 126 280 L122 472 C120 478 116 480 112 480 Z"
        fill="#8B5E34"
      />
      <path d="M96 320 H124" stroke="#6B4423" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M97 360 H123" stroke="#6B4423" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M98 400 H122" stroke="#6B4423" strokeWidth="2" strokeLinecap="round" opacity="0.5" />
      <path d="M99 440 H121" stroke="#6B4423" strokeWidth="2" strokeLinecap="round" opacity="0.5" />

      <ellipse cx="110" cy="268" rx="22" ry="10" fill="#6B4423" />

      <circle cx="102" cy="258" r="7" fill="#5C4033" />
      <circle cx="118" cy="256" r="6" fill="#5C4033" />
      <circle cx="110" cy="248" r="5" fill="#5C4033" />

      <Frond
        d="M110 255 C70 230 20 170 8 90 C35 130 75 200 110 255 Z"
        fill="#1B4332"
      />
      <Frond
        d="M110 255 C50 240 5 190 0 110 C30 160 80 220 110 255 Z"
        fill="#2D6A4F"
      />
      <Frond
        d="M110 255 C30 210 0 140 5 50 C25 100 70 180 110 255 Z"
        fill="#40916C"
      />
      <Frond
        d="M110 255 C80 200 70 120 85 30 C95 80 100 170 110 255 Z"
        fill="#1B4332"
      />
      <Frond
        d="M110 255 C140 200 150 110 135 20 C125 70 120 170 110 255 Z"
        fill="#2D6A4F"
      />
      <Frond
        d="M110 255 C170 220 210 150 215 60 C190 110 145 190 110 255 Z"
        fill="#40916C"
      />
      <Frond
        d="M110 255 C180 240 220 180 218 95 C195 140 145 210 110 255 Z"
        fill="#1B4332"
      />
      <Frond
        d="M110 255 C150 230 200 170 212 85 C180 130 130 200 110 255 Z"
        fill="#2D6A4F"
      />

      <path d="M110 255 C95 240 88 220 90 200" stroke="#52B788" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M110 255 C125 240 132 220 130 200" stroke="#52B788" strokeWidth="1.5" strokeLinecap="round" opacity="0.6" />
      <path d="M110 255 C80 250 55 235 40 210" stroke="#52B788" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
      <path d="M110 255 C140 250 165 235 180 210" stroke="#52B788" strokeWidth="1" strokeLinecap="round" opacity="0.4" />
    </svg>
  );
}

export default function PalmDecor() {
  return (
    <div className="palm-scene" aria-hidden>
      <PalmTree className="palm palm-far palm-left-far" />
      <PalmTree className="palm palm-near palm-left-near" />
      <PalmTree className="palm palm-far palm-right-far" />
      <PalmTree className="palm palm-near palm-right-near" />
    </div>
  );
}

export function PalmIcon() {
  return (
    <svg viewBox="0 0 32 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path d="M15 40 C14 40 13 39 13 37 L12 22 C12 21 13 20 14 20 L16 20 C17 20 18 21 18 22 L17 37 C17 39 16 40 15 40 Z" fill="#8B5E34" />
      <path d="M15 20 C10 18 4 12 2 5 C6 9 11 15 15 20 Z" fill="#2D6A4F" />
      <path d="M15 20 C8 17 3 10 2 3 C5 8 10 14 15 20 Z" fill="#40916C" />
      <path d="M15 20 C20 17 25 10 26 3 C23 8 18 14 15 20 Z" fill="#2D6A4F" />
      <path d="M15 20 C22 18 28 12 30 5 C26 9 21 15 15 20 Z" fill="#1B4332" />
      <path d="M15 20 C18 14 19 8 18 2 C17 7 16 13 15 20 Z" fill="#40916C" />
      <path d="M15 20 C12 14 11 8 12 2 C13 7 14 13 15 20 Z" fill="#1B4332" />
      <circle cx="14" cy="18" r="2" fill="#5C4033" />
      <circle cx="16" cy="17" r="1.5" fill="#5C4033" />
    </svg>
  );
}
