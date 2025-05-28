import { flexRow, smLabel, xlLabel } from "./styles";

type StatsInfoProps = {
  title: string;
  displayValue: string;
};

function StatsInfo({ title, displayValue }: StatsInfoProps) {
  return (
    <div className={flexRow("place-content-between", "mb-3")}>
      <span className={smLabel()}>{title}</span>
      <span className={xlLabel()}>{displayValue}</span>
    </div>
  );
}

export default StatsInfo;
