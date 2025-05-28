import { cn } from "@/utils/cn";
import StatsInfo from "./StatsInfo";

export type ProgressBarProps = {
  color: string;
  title: string;
  value: number;
  max: number;
  showUnit?: "percent" | "score" | "goal";
};

function ProgressBar({ color, title, value, max, showUnit }: ProgressBarProps) {
  const percentage = ((value / max) * 100).toFixed(1);

  const displayValueWithUnit = () => {
    if (showUnit === "percent") return `${percentage}%`;
    if (showUnit === "score") return `${value}점`;
    if (showUnit === "goal") return `${value}골`;
    return `${value}`;
  };

  return (
    <>
      <StatsInfo title={title} displayValue={displayValueWithUnit()} />
      <div
        className={cn(
          "h-2",
          "w-full",
          "rounded-full",
          "bg-gray-300",
          "overflow-hidden"
        )}
      >
        <div
          className={cn("h-full", "rounded-full", color)}
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
    </>
  );
}

export default ProgressBar;
