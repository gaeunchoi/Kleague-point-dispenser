import { cn } from "@/utils/cn";
import CardSection from "../CardSection";
import ProgressBar from "../ProgressBar";
import { Rank } from "@/type/rank";

function CntPoint({ myTeam }: { myTeam: Rank | undefined }) {
  return (
    <div className={cn("grid", "sm:grid-cols-2", "md:grid-cols-4", "gap-4")}>
      <CardSection>
        <ProgressBar
          title="승"
          color="bg-[#0066b3]"
          value={myTeam?.winCnt ?? 0}
          max={myTeam?.gameCnt ?? 0}
        />
      </CardSection>
      <CardSection>
        <ProgressBar
          title="무"
          color="bg-gray-500"
          value={myTeam?.tieCnt ?? 0}
          max={myTeam?.gameCnt ?? 0}
        />
      </CardSection>
      <CardSection>
        <ProgressBar
          title="패"
          color="bg-[#e60012]"
          value={myTeam?.lossCnt ?? 0}
          max={myTeam?.gameCnt ?? 0}
        />
      </CardSection>
      <CardSection>
        <ProgressBar
          title="승점"
          color="bg-black"
          value={myTeam?.gainGoal ?? 0}
          max={(myTeam?.gameCnt ?? 0) * 3}
        />
      </CardSection>
    </div>
  );
}

export default CntPoint;
