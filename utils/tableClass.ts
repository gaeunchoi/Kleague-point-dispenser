import { type ClassValue } from "clsx";
import { cn } from "./cn";

const baseCell = cn("font-medium", "px-4", "py-2", "align-middle");

export const thClass = (...args: ClassValue[]) =>
  cn(baseCell, "text-gray-600", ...args);

export const tdClass = (...args: ClassValue[]) =>
  cn(baseCell, "py-3", "text-center", ...args);
