import logoSrc from "@/assets/funciozap-logo.png";

type LogoProps = { className?: string; size?: number };

export function Logo({ className = "", size = 32 }: LogoProps) {
  return (
    <div className={`inline-flex items-center gap-2 ${className}`}>
      <img
        src={logoSrc}
        alt="FuncioZap"
        width={size}
        height={size}
        className="rounded-lg object-contain"
        style={{ width: size, height: size }}
      />
      <span className="text-[17px] font-semibold tracking-tight text-foreground">
        Funcio<span className="text-primary">Zap</span>
      </span>
    </div>
  );
}