import { LeagueId } from "@/data/teamLogo";
import { useLeagueStore } from "@/store/leagueStore";
import { useEffect } from "react";

function useLeagueData(leagueId: LeagueId, teamName: string | null) {
  const { k1Data, k2Data, fetchData, isLoading } = useLeagueStore();

  const curLeagueData = leagueId === "k1" ? k1Data : k2Data;
  const myTeam = curLeagueData.find((team) => team.teamName === teamName);

  useEffect(() => {
    if (k1Data.length === 0 && k2Data.length === 0 && !isLoading) fetchData();
  }, [k1Data, k2Data, isLoading, fetchData]);

  return { curLeagueData, myTeam, isLoading };
}

export default useLeagueData;
