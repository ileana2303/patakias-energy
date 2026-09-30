import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement>;

const baseProps = {
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.8,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true
};

export function ArrowUpRight(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M7 17 17 7" />
      <path d="M7 7h10v10" />
    </svg>
  );
}

export function BoltIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m13.2 2-8 12h6L10.8 22l8-12h-6z" />
    </svg>
  );
}

export function SolarIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>
  );
}

export function FactoryIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M3 21V10l6 3V9l6 4V5h4v16Z" />
      <path d="M7 17h2M12 17h2M17 17h2" />
    </svg>
  );
}

export function HomeIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m3 11 9-8 9 8" />
      <path d="M5 10v11h14V10M9 21v-6h6v6" />
    </svg>
  );
}

export function PanelIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 4h16l2 12H2Z" />
      <path d="m7 4-1 12M17 4l1 12M3 10h18M9 20h6M12 16v4" />
    </svg>
  );
}

export function BlueprintIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 3h13l3 3v15H4Z" />
      <path d="M14 3v5h6M8 12h8M8 16h5" />
    </svg>
  );
}

export function GridIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <rect x="3" y="3" width="7" height="7" rx="1" />
      <rect x="14" y="3" width="7" height="7" rx="1" />
      <rect x="3" y="14" width="7" height="7" rx="1" />
      <rect x="14" y="14" width="7" height="7" rx="1" />
    </svg>
  );
}

export function CheckIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="m5 12 4 4L19 6" />
    </svg>
  );
}

export function BuildingIcon(props: IconProps) {
  return (
    <svg {...baseProps} {...props}>
      <path d="M4 22V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v18" />
      <path d="M2 22h20M8 6h5M8 10h5M8 14h5M8 18h5" />
      <path d="M17 9h3a1 1 0 0 1 1 1v12" />
    </svg>
  );
}
