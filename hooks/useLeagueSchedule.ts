import { LeagueId } from "@/data/teamLogo";
import { useScheduleStore } from "@/store/scheduleStore";
import { useEffect } from "react";

function useLeagueSchedule(leagueId: LeagueId, teamName?: string | null) {
  const { k1Data, k2Data, isLoading, fetchData } = useScheduleStore();
  const curLeagueSchedule = leagueId === "k1" ? k1Data : k2Data;

  const myTeamSchedule = teamName
    ? curLeagueSchedule.filter(
        (sche) =>
          sche.homeTeamName === teamName || sche.awayTeamName === teamName
      )
    : curLeagueSchedule;

  useEffect(() => {
    if (k1Data.length === 0 && k2Data.length === 0 && !isLoading) fetchData();
  }, [k1Data, k2Data, isLoading, fetchData]);

  return { schedule: myTeamSchedule, isLoading };
}

export default useLeagueSchedule;
