"use client";
import { useEffect } from "react";
import { flexCol, thClass } from "../styles";
import { useSearchParams } from "next/navigation";
import useLeagueSchedule from "@/hooks/useLeagueSchedule";
import { LeagueId } from "@/data/teamLogo";
import { useScheduleStore } from "@/store/scheduleStore";
import LoadingSpinner from "../LoadingSpinner";
import ScheduleTableRow from "./ScheduleTableRow";
import { useLeagueStore } from "@/store/leagueStore";

function LeagueSchedule() {
  const { fetchData } = useScheduleStore();
  const searchParams = useSearchParams();
  const searchLeagueId = searchParams.get("leagueId") as LeagueId;
  const curTeamName = searchParams.get("teamName");

  const { leagueId } = useLeagueStore();
  const curleagueId = searchLeagueId ?? leagueId;
  const { schedule, isLoading } = useLeagueSchedule(curleagueId, curTeamName);

  useEffect(() => {
    fetchData();
  }, [curleagueId]);

  if (isLoading) return <LoadingSpinner h="h-[500px]" />;

  return (
    <div className={flexCol("w-full", "overflow-x-scroll")}>
      <table>
        <thead>
          <tr>
            <th className={thClass("min-w-[60px]")}>라운드</th>
            <th className={thClass("min-w-[120px]")}>날짜</th>
            <th className={thClass("min-w-[76px]")}>시간</th>
            <th className={thClass("min-w-[270px]")}>매치센터</th>
            <th className={thClass("min-w-[153px]")}>장소</th>
            <th className={thClass("min-w-[73px]")}>관중수</th>
          </tr>
        </thead>
        <tbody>
          {schedule.map((teamSchedule, idx) => (
            <ScheduleTableRow key={idx} matchInfo={teamSchedule} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeagueSchedule;
