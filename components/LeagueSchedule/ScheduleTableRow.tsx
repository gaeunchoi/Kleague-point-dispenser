import { Schedule } from "@/type/schedule";
import { cn } from "@/utils/cn";
import { flexColCenter, flexRowCenter, tdClass, xlLabel } from "../styles";
import ScoreBoard from "./ScoreBoard";
import TeamLogoWithName from "../TeamLogoWithName";
import { useSearchParams } from "next/navigation";
import EndLabel from "./EndLabel";
import ResultLabel from "./ResultLabel";
import { match } from "assert";

function ScheduleTableRow({ matchInfo }: { matchInfo: Schedule }) {
  const searchParams = useSearchParams();
  const myTeamName = searchParams.get("teamName");

  const isMyTeamHome = matchInfo.homeTeamName === myTeamName;
  const myTeamGapGoal = matchInfo.homeGoal - matchInfo.awayGoal;

  return (
    <tr className={cn("hover:bg-gray-100", "border-b", "border-gray-100")}>
      <td className={tdClass()}>R{matchInfo.roundId}</td>
      <td className={tdClass()}>
        {matchInfo.gameDate}({matchInfo.weekdayShort})
      </td>
      <td className={tdClass()}>{matchInfo.gameTime}</td>
      <td className={tdClass(flexColCenter("gap-2"))}>
        <div className={flexRowCenter("justify-center", "gap-4")}>
          <TeamLogoWithName
            leagueId={matchInfo.leagueId}
            teamName={matchInfo.homeTeamName}
            isMyTeam={isMyTeamHome}
          />
          <ScoreBoard
            isEnd={matchInfo.endYn}
            homeGoal={matchInfo.homeGoal}
            awayGoal={matchInfo.awayGoal}
          />
          <TeamLogoWithName
            leagueId={matchInfo.leagueId}
            teamName={matchInfo.awayTeamName}
            isMyTeam={!isMyTeamHome}
            isReverse={true}
          />
        </div>
        <div className={flexRowCenter()}>
          <EndLabel YN={matchInfo.endYn} />
          <ResultLabel
            endYN={matchInfo.endYn}
            myTeamGapGoal={isMyTeamHome ? myTeamGapGoal : -1 * myTeamGapGoal}
          />
        </div>
      </td>
      <td className={tdClass()}>{matchInfo.fieldName}</td>
      <td className={tdClass()}>
        {matchInfo.audienceQty !== 0
          ? matchInfo.audienceQty.toLocaleString()
          : "-"}
      </td>
    </tr>
  );
}

export default ScheduleTableRow;
