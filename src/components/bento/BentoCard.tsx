import { cn } from "@/lib/utils";

export type BentoCardVariant =
  | "white"
  | "surface"
  | "navy-tint"
  | "gold-tint"
  | "cream"
  | "navy"
  | "navy-deep"
  | "navy-mid"
  | "gold"
  | "grad-navy"
  | "grad-surface";

type BentoCardProps = React.HTMLAttributes<HTMLDivElement> & {
  variant?: BentoCardVariant;
  col?: 3 | 4 | 5 | 6 | 7 | 8 | 9 | 12;
  row2?: boolean;
  row?: boolean;
  minHeight?: number;
};

const variantClass: Record<BentoCardVariant, string> = {
  white: "bc-white",
  surface: "bc-surface",
  "navy-tint": "bc-navy-tint",
  "gold-tint": "bc-gold-tint",
  cream: "bc-cream",
  navy: "bc-navy",
  "navy-deep": "bc-navy-deep",
  "navy-mid": "bc-navy-mid",
  gold: "bc-gold",
  "grad-navy": "bc-grad-navy",
  "grad-surface": "bc-grad-surface",
};

const colClass: Record<number, string> = {
  3: "col-3",
  4: "col-4",
  5: "col-5",
  6: "col-6",
  7: "col-7",
  8: "col-8",
  9: "col-9",
  12: "col-12",
};

export const BentoCard = ({
  className,
  variant = "white",
  col,
  row2,
  row,
  minHeight,
  style,
  children,
  ...props
}: BentoCardProps) => (
  <div
    className={cn(
      "bc",
      variantClass[variant],
      col != null && colClass[col],
      row2 && "row-2",
      row && "bc-row",
      className
    )}
    style={minHeight != null ? { ...style, minHeight } : style}
    {...props}
  >
    {children}
  </div>
);
