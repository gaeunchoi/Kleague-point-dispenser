"use client";
import TeamLogos from "@/data/teamLogo";
import { useLeagueStore } from "@/store/leagueStore";
import { cn } from "@/utils/cn";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import {
  flexCol,
  flexColCenter,
  flexRowCenter,
  smLabel,
  xlLabel,
} from "./styles";
import { useSearchParams } from "next/navigation";
import teamLogos from "@/data/teamLogo";

function TeamInfoHeader() {
  const searchParams = useSearchParams();

  const { k1Data, k2Data, isLoading } = useLeagueStore();
  const curLeagueId = searchParams.get("leagueId");
  const curTeamName = searchParams.get("teamName");
  const curLeagueData = curLeagueId === "k1" ? k1Data : k2Data;
  const myTeam = curLeagueData.find((team) => team.teamName === curTeamName);

  return (
    <div className={cn("w-full", "bg-white", "py-4")}>
      <div
        className={flexRowCenter("w-full", "max-w-[1000px]", "mx-auto", "px-4")}
      >
        {isLoading || !myTeam ? (
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

            <div className={flexCol("gap-2", "w-[200px]")}>
              <Skeleton height={24} borderRadius={12} />
              <Skeleton height={20} width="62px" borderRadius={12} />
            </div>
          </div>
        ) : (
          <>
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              {curTeamName && (
                <img
                  src={TeamLogos[curLeagueId][curTeamName]}
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
                {curLeagueId === "k1" ? "K리그 1" : "K리그 2"}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TeamInfoHeader;
