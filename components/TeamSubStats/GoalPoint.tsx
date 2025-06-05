import { Rank } from "@/type/rank";
import { cn } from "@/utils/cn";
import CardSection from "../CardSection";
import { xlLabel } from "../styles";
import StatsInfo from "../StatsInfo";
import ProgressBar from "../ProgressBar";

function GoalPoint({ myTeam }: { myTeam: Rank | undefined }) {
  const gainGoalPerGame =
    Math.floor(((myTeam?.gainGoal ?? 0) / (myTeam?.gameCnt ?? 0)) * 100) / 100;
  const lossGoalPerGame =
    Math.floor(((myTeam?.lossGoal ?? 0) / (myTeam?.gameCnt ?? 0)) * 100) / 100;

  return (
    <div className={cn("grid", "sm: grid-cols-1", "md:grid-cols-2", "gap-4")}>
      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>득점 분석</h3>}
      >
        <StatsInfo title="총 득점" value={`${myTeam?.gainGoal ?? 0}골`} />
        <div>
          <StatsInfo title="경기당 득점" value={`${gainGoalPerGame}골`} />
          <ProgressBar
            color="bg-custom-blue"
            value={gainGoalPerGame}
            max={myTeam?.gameCnt ?? 0}
          />
        </div>
      </CardSection>
      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>실점 분석</h3>}
      >
        <StatsInfo title="총 실점" value={`${myTeam?.lossGoal ?? 0}골`} />
        <div>
          <StatsInfo title="경기당 실점" value={`${lossGoalPerGame}골`} />
          <ProgressBar
            color="bg-custom-red"
            value={lossGoalPerGame}
            max={myTeam?.gameCnt ?? 0}
          />
        </div>
      </CardSection>
    </div>
  );
}

export default GoalPoint;
