"use client";
import { useLeagueStore } from "@/store/leagueStore";
import { useSearchParams } from "next/navigation";
import SubStatsLoading from "./SubStatsLoading";
import CntPoint from "./CntPoint";
import { flexCol } from "../styles";
import GoalPoint from "./GoalPoint";

function TeamSubStats() {
  const searchParams = useSearchParams();
  const { k1Data, k2Data, isLoading } = useLeagueStore();
  const curLeagueId = searchParams.get("leagueId");
  const curTeamName = searchParams.get("teamName");
  const curLeagueData = curLeagueId === "k1" ? k1Data : k2Data;
  const myTeam = curLeagueData.find((team) => team.teamName === curTeamName);

  if (isLoading) <SubStatsLoading />;

  return (
    <div className={flexCol("gap-4", "w-full", "pt-4")}>
      <CntPoint myTeam={myTeam} />
      <GoalPoint myTeam={myTeam} />
    </div>
  );
}

export default TeamSubStats;
