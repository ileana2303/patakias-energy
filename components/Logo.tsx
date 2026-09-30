import Image from "next/image";

type LogoProps = {
  compact?: boolean;
  inverted?: boolean;
  className?: string;
};

export function Logo({
  compact = false,
  inverted = false,
  className = ""
}: LogoProps) {
  return (
    <span
      className={`inline-flex items-center gap-3 ${className}`}
      aria-label="PATAKIAS ENERGY"
    >
      <Image
        src="/patakias-energy-mark.svg"
        alt=""
        className="h-12 w-12 shrink-0"
        width={48}
        height={48}
        priority
      />
      {!compact && (
        <span className="leading-none">
          <span
            className={`block text-[1.02rem] font-extrabold tracking-[0.12em] ${
              inverted ? "text-white" : "text-[#071a24]"
            }`}
          >
            PATAKIAS
          </span>
          <span
            className={`mt-1 block text-[0.58rem] font-extrabold tracking-[0.34em] ${
              inverted ? "text-[#c7f45c]" : "text-[#3d7d4d]"
            }`}
          >
            ENERGY
          </span>
        </span>
      )}
    </span>
  );
}
