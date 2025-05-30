import { Rank } from "@/type/rank";
import { cn } from "@/utils/cn";
import CardSection from "../CardSection";
import { xlLabel } from "../styles";
import StatsInfo from "../StatsInfo";
import ProgressBar from "../ProgressBar";

function GoalPoint({ myTeam }: { myTeam: Rank | undefined }) {
  return (
    <div className={cn("grid", "sm: grid-cols-1", "md:grid-cols-2", "gap-4")}>
      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>득점 분석</h3>}
      >
        <StatsInfo
          title="총 득점"
          displayValue={`${myTeam?.gainGoal ?? 0}골`}
        />
        <ProgressBar
          title="경기당 득점"
          color="bg-[#0066b3]"
          value={
            Math.floor(
              ((myTeam?.gainGoal ?? 0) / (myTeam?.gameCnt ?? 0)) * 100
            ) / 100
          }
          max={myTeam?.gameCnt ?? 0}
          showUnit="goal"
        />
      </CardSection>
      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>실점 분석</h3>}
      >
        <StatsInfo
          title="총 실점"
          displayValue={`${myTeam?.lossGoal ?? 0}골`}
        />
        <ProgressBar
          title="경기당 실점"
          color="bg-[#e60012]"
          value={
            Math.floor(
              ((myTeam?.lossGoal ?? 0) / (myTeam?.gameCnt ?? 0)) * 100
            ) / 100
          }
          max={myTeam?.gameCnt ?? 0}
          showUnit="goal"
        />
      </CardSection>
    </div>
  );
}

export default GoalPoint;
