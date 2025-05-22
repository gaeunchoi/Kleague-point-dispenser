export type ProgressBarProps = {
  color: string;
  value: number;
  max: number;
};

function ProgressBar({ color, value, max }: ProgressBarProps) {
  const percentage = (value / max) * 100;
  console.log(percentage);

  return (
    <div className="h-2 w-full rounded-full bg-gray-300 overflow-hidden">
      <div
        className="h-full"
        style={{ backgroundColor: `${color}`, width: `${percentage}%` }}
      ></div>
    </div>
  );
}

export default ProgressBar;
