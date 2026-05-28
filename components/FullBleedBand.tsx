import { ReactNode } from "react";

type FullBleedBandProps = {
  children: ReactNode;
  accent?: "default" | "field" | "midnight";
};

const accentClasses: Record<NonNullable<FullBleedBandProps["accent"]>, string> = {
  default: "bg-transparent",
  field:
    "border-y border-white/8 bg-[linear-gradient(180deg,rgba(108,113,0,0.28),rgba(76,82,0,0.56))]",
  midnight:
    "border-y border-white/8 bg-[linear-gradient(180deg,rgba(8,17,29,0.24),rgba(8,17,29,0.58))]"
};

export function FullBleedBand({
  children,
  accent = "default"
}: FullBleedBandProps) {
  return <div className={accentClasses[accent]}>{children}</div>;
}
