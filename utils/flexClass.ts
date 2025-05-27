import { type ClassValue } from "clsx";
import { cn } from "./cn";

export const flexRow = (...args: ClassValue[]) =>
  cn("flex", "flex-row", "items-center", "gap-2", ...args);

export const flexCol = (...args: ClassValue[]) =>
  cn("flex", "flex-col", "items-center", "gap-2", ...args);
