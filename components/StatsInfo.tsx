type StatsInfoProps = {
  title: string;
  displayValue: string;
};

function StatsInfo({ title, displayValue }: StatsInfoProps) {
  return (
    <div className="flex flex-row place-content-between mb-3">
      <span className="text-sm text-gray-600">{title}</span>
      <span className="text-xl font-bold">{displayValue}</span>
    </div>
  );
}

export default StatsInfo;
