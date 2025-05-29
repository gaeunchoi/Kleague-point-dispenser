"use client";
import Skeleton from "react-loading-skeleton";
import ProgressBar from "../ProgressBar";
import StatsInfo from "../StatsInfo";

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
      <ProgressBar
        color="bg-[#0066b3]"
        title="득점"
        value={gainGoal}
        max={total}
        showUnit="score"
      />
      <ProgressBar
        color="bg-[#e60012]"
        title="실점"
        value={lossGoal}
        max={total}
        showUnit="score"
      />
      <StatsInfo
        title="득실차"
        displayValue={`${gapGoal >= 0 ? "+" : ""}${gapGoal}`}
      />
    </>
  );
}

export default GoalStatsSection;
