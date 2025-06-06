"use client";
import { smLabel, xlLabel, flexColCenter, flexRowCenter } from "../styles";
import SimpleStatsLoading from "./SimpleStatsLoading";

interface SimpleStatsProps {
  isLoading: boolean;
  gainPoint: number;
  remainingGames: number;
  rank: number | string;
}

function SimpleStats({
  isLoading,
  gainPoint,
  remainingGames,
  rank,
}: SimpleStatsProps) {
  if (isLoading) return <SimpleStatsLoading />;

  return (
    <div className={flexRowCenter("gap-1", "place-content-between")}>
      <div className={flexColCenter("min-w-[60px]", "gap-1")}>
        <span className={smLabel()}>순위</span>
        <span className={xlLabel()}>{rank}위</span>
      </div>
      <div className={flexColCenter("min-w-[60px]", "gap-1")}>
        <span className={smLabel()}>승점</span>
        <span className={xlLabel("text-gray-600")}>{gainPoint}</span>
      </div>
      <div className={flexColCenter("min-w-[60px]", "gap-1")}>
        <span className={smLabel()}>남은 경기</span>
        <span className={xlLabel("text-gray-600")}>{remainingGames}</span>
      </div>
    </div>
  );
}

export default SimpleStats;
