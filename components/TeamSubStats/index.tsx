"use client";
import { useSearchParams } from "next/navigation";
import SubStatsLoading from "./SubStatsLoading";
import CntPoint from "./CntPoint";
import { flexCol } from "../styles";
import GoalPoint from "./GoalPoint";
import useLeagueData from "@/hooks/useLeagueData";
import { LeagueId } from "@/data/teamLogo";

function TeamSubStats() {
  const searchParams = useSearchParams();
  const curLeagueId = searchParams.get("leagueId") as LeagueId;
  const curTeamName = searchParams.get("teamName");
  const { myTeam, isLoading } = useLeagueData(curLeagueId, curTeamName);

  if (isLoading) <SubStatsLoading />;

  return (
    <div className={flexCol("gap-4", "w-full", "pt-4")}>
      <CntPoint myTeam={myTeam} />
      <GoalPoint myTeam={myTeam} />
    </div>
  );
}

export default TeamSubStats;
