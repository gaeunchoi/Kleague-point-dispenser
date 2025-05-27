import { ClassValue } from "clsx";
import { cn } from "./cn";

export const smLabel = (...args: ClassValue[]) =>
  cn("text-sm", "text-gray-600", ...args);
