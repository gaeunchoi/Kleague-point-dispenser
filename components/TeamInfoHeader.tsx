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

function TeamInfoHeader() {
  const { data, isLoading } = useLeagueStore();
  const myTeam = data.find((team) => team.teamName === "수원");

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

            <div className={flexCol("gap-3", "w-[200px]")}>
              <Skeleton height={24} borderRadius={12} />
              <Skeleton height={20} width="62px" borderRadius={12} />
            </div>
          </div>
        ) : (
          <>
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              <img
                src={TeamLogos[myTeam.teamName]}
                alt="logo"
                className="h-[50px] w-auto object-contain"
              />
            </div>

            <div className={flexCol("gap-1")}>
              <span className={xlLabel()}>{myTeam?.teamName}</span>
              <span
                className={smLabel(
                  "bg-gray-200",
                  "rounded-xl",
                  "px-2",
                  "py-1",
                  "text-black"
                )}
              >
                K리그 {myTeam?.leagueId}
              </span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default TeamInfoHeader;
