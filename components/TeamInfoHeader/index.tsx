"use client";
import teamLogos, { LeagueId } from "@/data/teamLogo";
import { cn } from "@/utils/cn";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  flexCol,
  flexColCenter,
  flexRow,
  flexRowCenter,
  smLabel,
  xlLabel,
} from "../styles";
import { useSearchParams } from "next/navigation";
import useLeagueData from "@/hooks/useLeagueData";
import { LEAGUE_LABELS } from "@/constants";
import SimpleStats from "./SimpleStats";
import { useEffect, useState } from "react";
import SimpleStatsLoading from "./SimpleStatsLoading";

function TeamInfoHeader() {
  const searchParams = useSearchParams();
  const curLeagueId = searchParams.get("leagueId") as LeagueId;
  const curTeamName = searchParams.get("teamName");

  const [loading, setLoading] = useState<boolean>(true);
  const { myTeam } = useLeagueData(curLeagueId, curTeamName);

  const remainingGames =
    curLeagueId === "k1"
      ? 33 - (myTeam?.gameCnt ?? 0)
      : 39 - (myTeam?.gameCnt ?? 0);

  useEffect(() => {
    if (myTeam) setLoading(false);
  }, [myTeam]);

  return (
    <div className={cn("w-full", "bg-white", "py-4")}>
      <div
        className={flexRowCenter("w-full", "max-w-[1000px]", "mx-auto", "px-4")}
      >
        {loading || !myTeam ? (
          <div className={flexRowCenter("w-full")}>
            <div
              className={flexColCenter(
                "justify-center",
                "w-[50px]",
                "h-[50px]"
              )}
            >
              <Skeleton circle width={50} height={50} className="mr-2" />
            </div>

            <div className={flexRowCenter("justify-between", "w-full")}>
              <div className={flexCol("gap-2", "w-[200px]")}>
                <Skeleton height={24} borderRadius={12} />
                <Skeleton height={20} width={62} borderRadius={12} />
              </div>
              <SimpleStatsLoading />
            </div>
          </div>
        ) : (
          <div className={flexRow("justify-between", "w-full")}>
            <div className={flexRow()}>
              <div
                className={flexRowCenter(
                  "justify-center",
                  "w-[50px]",
                  "h-50px"
                )}
              >
                {curLeagueId && curTeamName && (
                  <img
                    src={teamLogos[curLeagueId][curTeamName]}
                    alt="logo"
                    className="h-[50px] w-auto object-contain"
                  />
                )}
              </div>
              <div className={flexCol("gap-1")}>
                <span className={xlLabel()}>{curTeamName}</span>
                <span
                  className={smLabel(
                    "bg-gray-200",
                    "rounded-xl",
                    "px-2",
                    "py-1",
                    "text-black"
                  )}
                >
                  {LEAGUE_LABELS[curLeagueId]}
                </span>
              </div>
            </div>
            <SimpleStats
              isLoading={loading}
              gainPoint={myTeam.gainPoint}
              remainingGames={remainingGames}
              rank={myTeam.rank}
            />
          </div>
        )}
      </div>
    </div>
  );
}

export default TeamInfoHeader;
