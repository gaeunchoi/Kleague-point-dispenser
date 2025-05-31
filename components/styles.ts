import { type ClassValue } from "clsx";
import { cn } from "@/utils/cn";

// Table
export const thClass = (...args: ClassValue[]) =>
  cn("font-medium", "px-4", "py-2", "align-middle", "text-gray-600", ...args);

export const tdClass = (...args: ClassValue[]) =>
  cn(
    "font-medium",
    "px-4",
    "py-2",
    "align-middle",
    "py-3",
    "text-center",
    ...args
  );

// Label
export const smLabel = (...args: ClassValue[]) =>
  cn("text-sm", "text-gray-600", ...args);

export const xlLabel = (...args: ClassValue[]) =>
  cn("text-xl", "font-bold", ...args);

// Flex
export const flexRow = (...args: ClassValue[]) =>
  cn("flex", "flex-row", "gap-2", ...args);

export const flexCol = (...args: ClassValue[]) =>
  cn("flex", "flex-col", "gap-2", ...args);

export const flexRowCenter = (...args: ClassValue[]) =>
  cn("flex", "flex-row", "items-center", "gap-2", ...args);

export const flexColCenter = (...args: ClassValue[]) =>
  cn("flex", "flex-col", "items-center", "gap-2", ...args);

export const mainPageBtn = (...args: ClassValue[]) =>
  cn(
    "bg-gray-200",
    "hover:bg-gray-300",
    "rounded-full",
    "shadow",
    "text-sm",
    "font-medium",
    "transition",
    ...args
  );
