"use client";
import CardSection from "../CardSection";
import { cn } from "@/utils/cn";
import { xlLabel } from "../styles";
import { useEffect, useState } from "react";
import ProbabilitySection from "./ProbabilitySection";
import GoalStatsSection from "./GoalStatsSection";
import { useSearchParams } from "next/navigation";
import useLeagueData from "@/hooks/useLeagueData";
import { LeagueId } from "@/data/teamLogo";

type simulationResult = {
  win: number;
  playoff: number;
};

function TeamMainStats() {
  const [promotionResult, setPromotionResult] =
    useState<simulationResult | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const searchParams = useSearchParams();
  const curLeagueId = searchParams.get("leagueId") as LeagueId;
  const curTeamName = searchParams.get("teamName");
  const { curLeagueData, myTeam, isLoading } = useLeagueData(
    curLeagueId,
    curTeamName
  );

  const runSimulation = async () => {
    if (!myTeam || curLeagueData.length === 0) return;

    setIsSimulating(true);
    try {
      const remainingGames = 42 - (myTeam?.gameCnt ?? 0);
      const simulations = 15000;

      const res = await fetch("/api/simulateLeague", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          leagueData: curLeagueData,
          remainingGames,
          simulations,
          leagueType: curLeagueId,
        }),
      });

      if (!res.ok) {
        const errorData = await res.json();
        throw new Error(errorData.error || "시뮬레이션 실패");
      }

      const result = (await res.json()) as Record<string, simulationResult>;

      if (myTeam) {
        const myResult = result[myTeam.teamName];
        setPromotionResult(myResult);
      }
    } catch (err) {
      console.error("🚨 runSimulation 에러 발생: ", err);
    } finally {
      setIsSimulating(false);
    }
  };

  useEffect(() => {
    if (!isLoading && curLeagueData.length > 0) runSimulation();
  }, [isLoading, curLeagueData]);

  return (
    <div className={cn("grid", "sm:grid-cols-1", "md:grid-cols-2", "gap-3")}>
      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>승격 확률</h3>}
      >
        <ProbabilitySection
          isLoading={isLoading}
          isSimulating={isSimulating}
          result={promotionResult}
        />
      </CardSection>
      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>득실 현황</h3>}
      >
        <GoalStatsSection
          isLoading={isLoading}
          gainGoal={myTeam?.gainGoal ?? 0}
          lossGoal={myTeam?.lossGoal ?? 0}
        />
      </CardSection>
    </div>
  );
}

export default TeamMainStats;
