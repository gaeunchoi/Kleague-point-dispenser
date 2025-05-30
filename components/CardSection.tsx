import { cn } from "@/utils/cn";
import { ReactNode } from "react";

function CardSection({
  title,
  children,
}: {
  title?: ReactNode;
  children: ReactNode;
}) {
  return (
    <div className={cn("bg-white", "rounded-2xl", "p-5", "space-y-6")}>
      {title}
      {children}
    </div>
  );
}

export default CardSection;
