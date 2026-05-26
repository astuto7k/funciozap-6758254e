type LogoProps = { className?: string; size?: number };

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="fz-grad" x1="0" y1="0" x2="40" y2="40">
            <stop offset="0%" stopColor="#0A84FF" />
            <stop offset="100%" stopColor="#38BDF8" />
          </linearGradient>
        </defs>
        <rect x="0" y="0" width="40" height="40" rx="10" fill="url(#fz-grad)" />
        <path
          d="M14 11h14v4.5h-9.5v4.5H26v4.5h-7.5V29H14z"
          fill="white"
        />
      </svg>
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        Funcio<span className="text-primary">Zap</span>
      </span>
    </div>
  );
}