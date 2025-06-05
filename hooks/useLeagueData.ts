import { LeagueId } from "@/data/teamLogo";
import { useLeagueStore } from "@/store/leagueStore";

function useLeagueData(leagueId: LeagueId, teamName: string | null) {
  const { k1Data, k2Data, isLoading } = useLeagueStore();
  const curLeagueData = leagueId === "k1" ? k1Data : k2Data;
  const myTeam = curLeagueData.find((team) => team.teamName === teamName);

  return { curLeagueData, myTeam, isLoading };
}

export default useLeagueData;
