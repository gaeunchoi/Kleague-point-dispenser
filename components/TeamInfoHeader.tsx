"use client";
import TeamLogos from "@/data/teamLogo";
import { useLeagueStore } from "@/store/leagueStore";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function TeamInfoHeader() {
  const { data, isLoading } = useLeagueStore();
  const myTeam = data.find((team) => team.teamName === "수원");

  return (
    <div className="w-full bg-white py-4">
      <div className="w-full max-w-[1000px] mx-auto px-4 flex flex-row gap-2 items-center">
        {isLoading || !myTeam ? (
          <div className="flex flex-row gap-2 items-center w-full">
            <div className="w-[50px] h-[50px] flex items-center justify-center">
              <Skeleton circle width={50} height={50} className="mr-2" />
            </div>

            <div className="flex flex-col gap-3">
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

            <div className="flex flex-col gap-1">
              <h2 className="text-2xl font-bold">{myTeam?.teamName}</h2>
              <span className="bg-gray-200 rounded-xl text-sm text-center px-2 py-1">
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
