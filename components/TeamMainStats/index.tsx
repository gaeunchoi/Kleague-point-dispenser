"use client";
import { useLeagueStore } from "@/store/leagueStore";
import CardSection from "../CardSection";
import { cn } from "@/utils/cn";
import { xlLabel } from "../styles";
import { useEffect, useState } from "react";
import ProbabilitySection from "./ProbabilitySection";
import GoalStatsSection from "./GoalStatsSection";
import MagicNumberSection from "./MagicNumberSection";
import "react-loading-skeleton/dist/skeleton.css";
import { useSearchParams } from "next/navigation";

function TeamMainStats() {
  const { k1Data, k2Data, isLoading, leagueId } = useLeagueStore();
  const searchParams = useSearchParams();
  const [promotionResult, setPromotionResult] = useState<{
    win: number;
    playoff: number;
  } | null>(null);
  const [isSimulating, setIsSimulating] = useState(false);

  const curLeagueId = searchParams.get("leagueId");
  const curTeamName = searchParams.get("teamName");
  const curLeagueData = curLeagueId === "k1" ? k1Data : k2Data;
  const myTeam = curLeagueData.find((team) => team.teamName === curTeamName);

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

      const result = await res.json();

      if (myTeam) {
        const myResult = result[myTeam.teamName]; // 예: { win: 82.3, playoff: 68.1 }
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
    <div className={cn("grid", "sm:grid-cols-1", "md:grid-cols-3", "gap-3")}>
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
        title={<h3 className={xlLabel("text-gray-900")}>매직 넘버</h3>}
      >
        <MagicNumberSection
          isLoading={isLoading}
          remainingGames={42 - (myTeam?.gameCnt ?? 0)}
          rank={myTeam?.rank ?? "-"}
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
