"use client";
import TeamLogos from "../data/teamLogo";
import { useEffect } from "react";
import { useLeagueStore } from "@/store/leagueStore";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cn } from "@/utils/cn";
import { thClass, tdClass, flexRowCenter } from "./styles";

function LeagueRanks() {
  const { data, isLoading, fetchData } = useLeagueStore();
  const myTeam = "수원";

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <table className={cn("w-full", "text-nowrap")}>
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
          : data.map((team) => (
              <tr
                key={team.rank}
                className={cn(
                  "hover:bg-gray-100",
                  "border-b",
                  "border-gray-100",
                  {
                    "bg-blue-100 font-bold": team.teamName === myTeam,
                  }
                )}
              >
                <td className={tdClass("relative")}>
                  {team.rank >= 1 && team.rank <= 5 && (
                    <span
                      className={cn(
                        "absolute",
                        "left-0",
                        "top-1/2",
                        "-translate-y-1/2",
                        "w-1",
                        "h-[95%]",
                        team.rank === 1
                          ? "bg-blue-500"
                          : team.rank === 2 || team.rank === 3
                          ? "bg-green-400"
                          : "bg-orange-400"
                      )}
                      aria-label={
                        team.rank === 1
                          ? "다이렉트 승격"
                          : team.rank === 2 || team.rank === 3
                          ? "플레이오프 진출"
                          : "준플레이오프 진출"
                      }
                    />
                  )}
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
                <td className={tdClass()}>
                  <div className={flexRowCenter("justify-start", "gap-3")}>
                    <img
                      src={TeamLogos[team.teamName]}
                      alt={team.teamName}
                      className={cn("w-[25px]")}
                    />
                    {team.teamName}
                  </div>
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
