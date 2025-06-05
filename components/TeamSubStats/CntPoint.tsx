import { cn } from "@/utils/cn";
import CardSection from "../CardSection";
import ProgressBar from "../ProgressBar";
import { Rank } from "@/type/rank";
import StatsInfo from "../StatsInfo";

function CntPoint({ myTeam }: { myTeam: Rank | undefined }) {
  return (
    <div className={cn("grid", "sm:grid-cols-2", "md:grid-cols-4", "gap-4")}>
      <CardSection>
        <StatsInfo title="승" value={String(myTeam?.winCnt ?? 0)} />
        <ProgressBar
          color="bg-custom-blue"
          value={myTeam?.winCnt ?? 0}
          max={myTeam?.gameCnt ?? 0}
        />
      </CardSection>
      <CardSection>
        <StatsInfo title="무" value={String(myTeam?.tieCnt ?? 0)} />
        <ProgressBar
          color="bg-custom-gray"
          value={myTeam?.tieCnt ?? 0}
          max={myTeam?.gameCnt ?? 0}
        />
      </CardSection>
      <CardSection>
        <StatsInfo title="패" value={String(myTeam?.lossCnt ?? 0)} />
        <ProgressBar
          color="bg-custom-red"
          value={myTeam?.lossCnt ?? 0}
          max={myTeam?.gameCnt ?? 0}
        />
      </CardSection>
      <CardSection>
        <StatsInfo title="승점" value={String(myTeam?.gainPoint ?? 0)} />
        <ProgressBar
          color="bg-custom-black"
          value={myTeam?.gainGoal ?? 0}
          max={(myTeam?.gameCnt ?? 0) * 3}
        />
      </CardSection>
    </div>
  );
}

export default CntPoint;
