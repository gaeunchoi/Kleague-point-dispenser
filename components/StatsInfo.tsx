import { flexRow, smLabel, xlLabel } from "./styles";

type StatsInfoProps = {
  title: string;
  value: string;
};

function StatsInfo({ title, value }: StatsInfoProps) {
  return (
    <div className={flexRow("place-content-between", "mb-3")}>
      <span className={smLabel()}>{title}</span>
      <span className={xlLabel()}>{value}</span>
    </div>
  );
}

export default StatsInfo;
