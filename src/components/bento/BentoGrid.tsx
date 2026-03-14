import { cn } from "@/lib/utils";

type BentoGridProps = React.HTMLAttributes<HTMLDivElement>;

export const BentoGrid = ({ className, children, ...props }: BentoGridProps) => (
  <div className={cn("bento", className)} {...props}>
    {children}
  </div>
);
