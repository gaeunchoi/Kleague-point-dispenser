import { Rank } from "@/type/rank";
import { cn } from "@/utils/cn";
import { rankTdClass } from "../styles";
import { LeagueId } from "@/data/teamLogo";
import TeamLogoWithName from "../TeamLogoWithName";

type RankTableRowProps = {
  leagueId: LeagueId;
  teamInfo: Rank;
};

function RankTableRow({ leagueId, teamInfo }: RankTableRowProps) {
  return (
    <tr
      key={teamInfo.rank}
      className={cn("hover:bg-gray-100", "border-b", "border-gray-100")}
    >
      <td className={rankTdClass("relative")}>
        <span
          className={cn(
            "absolute",
            "left-0",
            "top-1/2",
            "-translate-y-1/2",
            "w-1",
            "h-[95%]",
            leagueId === "k1" && {
              "bg-blue-500": teamInfo.rank === 1,
              "bg-orange-400": teamInfo.rank === 10 || teamInfo.rank === 11,
              "bg-red-600": teamInfo.rank === 12,
            },
            leagueId === "k2" && {
              "bg-blue-500": teamInfo.rank === 1,
              "bg-green-400": teamInfo.rank === 2 || teamInfo.rank === 3,
              "bg-orange-400": teamInfo.rank === 4 || teamInfo.rank == 5,
            }
          )}
        />
        <span className={cn("relative", "z-10", "text-gray-500", "font-bold")}>
          {teamInfo.rank}
        </span>
      </td>
      <td className={rankTdClass("cursor-pointer", "min-w-[80px]")}>
        <TeamLogoWithName
          leagueId={teamInfo.leagueId}
          teamName={teamInfo.teamName}
          isMyTeam={false}
          isReverse={true}
          isUsedTable={true}
        />
      </td>
      <td className={rankTdClass()}>{teamInfo.gameCnt}</td>
      <td className={rankTdClass()}>{teamInfo.winCnt}</td>
      <td className={rankTdClass()}>{teamInfo.tieCnt}</td>
      <td className={rankTdClass()}>{teamInfo.lossCnt}</td>
      <td className={rankTdClass()}>{teamInfo.gainGoal}</td>
      <td className={rankTdClass()}>{teamInfo.lossGoal}</td>
      <td
        className={rankTdClass({
          "text-green-700": teamInfo.gapGoal >= 0,
          "text-red-500": teamInfo.gapGoal < 0,
        })}
      >
        {teamInfo.gapGoal > 0 ? `+${teamInfo.gapGoal}` : teamInfo.gapGoal}
      </td>
      <td className={rankTdClass()}>{teamInfo.gainPoint}</td>
    </tr>
  );
}
export default RankTableRow;
