"use client";
import { useLeagueStore } from "@/store/leagueStore";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cn } from "@/utils/cn";
import { thClass, tdClass } from "../styles";
import { useRouter } from "next/navigation";
import TeamLogoWithName from "../TeamLogoWithName";

function LeagueRanks() {
  const router = useRouter();
  const { curLeagueData, isLoading, leagueId } = useLeagueStore();

  return (
    <table className={cn("w-full", "min-w-full", "text-nowrap", "table-fixed")}>
      <thead className={cn("bg-gray-200")}>
        <tr>
          {[
            "순위",
            "구단",
            "경기",
            "승",
            "무",
            "패",
            "득점",
            "실점",
            "득실차",
            "승점",
          ].map((label) => (
            <th key={label} className={thClass()}>
              {label}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {isLoading
          ? Array.from({ length: 10 }).map((_, i) => (
              <tr key={i} className={cn("border-b", "border-gray-100")}>
                {Array.from({ length: 10 }).map((_, j) => (
                  <td key={j} className={cn("px-4", "py-2")}>
                    <Skeleton />
                  </td>
                ))}
              </tr>
            ))
          : curLeagueData.map((team) => (
              <tr
                key={team.rank}
                className={cn(
                  "hover:bg-gray-100",
                  "border-b",
                  "border-gray-100"
                )}
              >
                <td className={tdClass("relative")}>
                  <span
                    className={cn(
                      "absolute",
                      "left-0",
                      "top-1/2",
                      "-translate-y-1/2",
                      "w-1",
                      "h-[95%]",
                      leagueId === "k1" && {
                        "bg-blue-500": team.rank === 1,
                        "bg-orange-400": team.rank === 10 || team.rank === 11,
                        "bg-red-600": team.rank === 12,
                      },
                      leagueId === "k2" && {
                        "bg-blue-500": team.rank === 1,
                        "bg-green-400": team.rank === 2 || team.rank === 3,
                        "bg-orange-400": team.rank === 4 || team.rank == 5,
                      }
                    )}
                  />
                  <span
                    className={cn(
                      "relative",
                      "z-10",
                      "text-gray-500",
                      "font-bold"
                    )}
                  >
                    {team.rank}
                  </span>
                </td>
                <td
                  className={tdClass("cursor-pointer")}
                  onClick={() => {
                    router.push(
                      `/TeamView?leagueId=k${
                        team.leagueId
                      }&teamName=${encodeURIComponent(team.teamName)}`
                    );
                  }}
                >
                  <TeamLogoWithName
                    leagueId={team.leagueId}
                    teamName={team.teamName}
                    isMyTeam={false}
                    isReverse={true}
                    isUsedTable={true}
                  />
                </td>
                <td className={tdClass()}>{team.gameCnt}</td>
                <td className={tdClass()}>{team.winCnt}</td>
                <td className={tdClass()}>{team.tieCnt}</td>
                <td className={tdClass()}>{team.lossCnt}</td>
                <td className={tdClass()}>{team.gainGoal}</td>
                <td className={tdClass()}>{team.lossGoal}</td>
                <td
                  className={tdClass({
                    "text-green-700": team.gapGoal >= 0,
                    "text-red-500": team.gapGoal < 0,
                  })}
                >
                  {team.gapGoal > 0 ? `+${team.gapGoal}` : team.gapGoal}
                </td>
                <td className={tdClass()}>{team.gainPoint}</td>
              </tr>
            ))}
      </tbody>
    </table>
  );
}

export default LeagueRanks;
