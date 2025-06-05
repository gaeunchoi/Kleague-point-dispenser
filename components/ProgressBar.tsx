import { cn } from "@/utils/cn";

export type ProgressBarProps = {
  color: string;
  value: number;
  max: number;
};

function ProgressBar({ color, value, max }: ProgressBarProps) {
  const percentage = ((value / max) * 100).toFixed(1);
  return (
    <>
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
