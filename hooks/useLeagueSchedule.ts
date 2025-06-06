import { LeagueId } from "@/data/teamLogo";
import { useScheduleStore } from "@/store/scheduleStore";

function useLeagueSchedule(leagueId: LeagueId, teamName: string | null) {
  const { k1Data, k2Data, isLoading } = useScheduleStore();
  const curLeagueSchedule = leagueId === "k1" ? k1Data : k2Data;
  const myTeamSchedule = curLeagueSchedule.filter(
    (sche) => sche.homeTeamName === teamName || sche.awayTeamName === teamName
  );
  return { myTeamSchedule, isLoading };
}

export default useLeagueSchedule;
