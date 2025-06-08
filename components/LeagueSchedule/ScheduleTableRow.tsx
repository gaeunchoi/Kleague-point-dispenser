import { Schedule } from "@/type/schedule";
import { cn } from "@/utils/cn";
import { flexColCenter, flexRowCenter, tdClass } from "../styles";
import { useSearchParams } from "next/navigation";
import ScoreBoard from "./ScoreBoard";
import TeamLogoWithName from "../TeamLogoWithName";
import EndLabel from "./EndLabel";
import ResultLabel from "./ResultLabel";

function ScheduleTableRow({ matchInfo }: { matchInfo: Schedule }) {
  const searchParams = useSearchParams();
  const myTeamName = searchParams.get("teamName");

  const isMyTeam = myTeamName !== null;
  const isMyTeamHome = isMyTeam && matchInfo.homeTeamName === myTeamName;
  const myTeamGapGoal = isMyTeam && matchInfo.homeGoal - matchInfo.awayGoal;

  return (
    <tr className={cn("hover:bg-gray-100", "border-b", "border-gray-100")}>
      <td className={tdClass("min-w-[60px]")}>R{matchInfo.roundId}</td>
      <td className={tdClass("min-w-[120px]")}>
        {matchInfo.gameDate}({matchInfo.weekdayShort})
      </td>
      <td className={tdClass("min-w-[76px]")}>{matchInfo.gameTime}</td>
      <td className={tdClass(flexColCenter("gap-2", "min-w-[270px]"))}>
        <div className={flexRowCenter("justify-center", "gap-3")}>
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
            isMyTeam={isMyTeam && !isMyTeamHome}
            isReverse={true}
          />
        </div>
        <div className={flexRowCenter()}>
          <EndLabel YN={matchInfo.endYn} />
          {myTeamGapGoal && (
            <ResultLabel
              endYN={matchInfo.endYn}
              myTeamGapGoal={isMyTeamHome ? myTeamGapGoal : -1 * myTeamGapGoal}
            />
          )}
        </div>
      </td>
      <td className={tdClass("min-w-[153px]")}>{matchInfo.fieldName}</td>
      <td className={tdClass("min-w-[73px]")}>
        {matchInfo.audienceQty !== 0
          ? matchInfo.audienceQty.toLocaleString()
          : "-"}
      </td>
    </tr>
  );
}

export default ScheduleTableRow;
