"use client";
import Skeleton from "react-loading-skeleton";
import ProgressBar from "../ProgressBar";
import StatsInfo from "../StatsInfo";
import { getSignLabel } from "@/utils/sign";

interface GoalStatsSection {
  isLoading: boolean;
  gainGoal: number;
  lossGoal: number;
}

function GoalStatsSection({ isLoading, gainGoal, lossGoal }: GoalStatsSection) {
  const total = gainGoal + lossGoal;
  const gapGoal = gainGoal - lossGoal;

  if (isLoading) {
    return (
      <>
        <Skeleton
          height={48}
          count={2}
          borderRadius={12}
          className="mb-[24px]"
        />
        <Skeleton height="28px" borderRadius={12} />
      </>
    );
  }

  return (
    <>
      <div>
        <StatsInfo title="득점" value={`${gainGoal}점`} />
        <ProgressBar color="bg-[#0066b3]" value={gainGoal} max={total} />
      </div>
      <div>
        <StatsInfo title="실점" value={`${lossGoal}점`} />
        <ProgressBar color="bg-[#e60012]" value={lossGoal} max={total} />
      </div>
      <StatsInfo title="득실차" value={getSignLabel(gapGoal)} />
    </>
  );
}

export default GoalStatsSection;
