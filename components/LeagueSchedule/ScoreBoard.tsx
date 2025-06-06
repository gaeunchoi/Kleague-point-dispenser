import { cn } from "@/utils/cn";
import { smLabel, xlLabel } from "../styles";

type ScoreBoardProps = {
  isEnd: string;
  homeGoal: number;
  awayGoal: number;
};

function ScoreBoard({ isEnd, homeGoal, awayGoal }: ScoreBoardProps) {
  if (isEnd === "N") return <div className={xlLabel("text-gray-600")}>vs</div>;
  return (
    <div className={cn("font-semibold")}>
      {homeGoal} <span className={smLabel()}>:</span> {awayGoal}
    </div>
  );
}

export default ScoreBoard;
