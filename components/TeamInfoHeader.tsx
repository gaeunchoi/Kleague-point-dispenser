"use client";
import TeamLogos from "@/data/teamLogo";
import { useLeagueStore } from "@/store/leagueStore";

function TeamInfoHeader() {
  const myTeam = useLeagueStore((state) =>
    state.data.find((team) => team.teamName === "수원")
  );

  return (
    <div className="w-full bg-white py-4">
      <div className="w-full max-w-[1000px] mx-auto px-4 flex flex-row gap-2">
        {myTeam && (
          <img
            src={TeamLogos[myTeam.teamName]}
            alt="logo"
            className="mr-2 w-[50px] h-auto object-contain"
          />
        )}
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold">{myTeam?.teamName}</h2>
          <span className="bg-[#ccc] rounded-xl text-center p-1">
            K리그 {myTeam?.leagueId}
          </span>
        </div>
      </div>
    </div>
  );
}

export default TeamInfoHeader;
