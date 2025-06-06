import { useEffect } from "react";
import { flexCol, thClass } from "../styles";
import { useSearchParams } from "next/navigation";
import useLeagueSchedule from "@/hooks/useLeagueSchedule";
import { LeagueId } from "@/data/teamLogo";
import { useScheduleStore } from "@/store/scheduleStore";
import LoadingSpinner from "../LoadingSpinner";
import ScheduleTableRow from "./ScheduleTableRow";

function LeagueSchedule() {
  const { fetchData } = useScheduleStore();
  const searchParams = useSearchParams();
  const curleagueId = searchParams.get("leagueId") as LeagueId;
  const curTeamName = searchParams.get("teamName");
  const { myTeamSchedule, isLoading } = useLeagueSchedule(
    curleagueId,
    curTeamName
  );

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <LoadingSpinner h="h-[500px]" />;

  return (
    <div className={flexCol("w-full")}>
      <table>
        <thead>
          <tr>
            {["라운드", "날짜", "시간", "매치센터", "장소", "관중수"].map(
              (label) => (
                <th key={label} className={thClass()}>
                  {label}
                </th>
              )
            )}
          </tr>
        </thead>
        <tbody>
          {myTeamSchedule.map((teamSchedule, idx) => (
            <ScheduleTableRow key={idx} matchInfo={teamSchedule} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default LeagueSchedule;
