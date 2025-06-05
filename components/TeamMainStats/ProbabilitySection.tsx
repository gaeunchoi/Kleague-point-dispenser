"use client";
import Skeleton from "react-loading-skeleton";
import ProgressBar from "../ProgressBar";
import LoadingSpinner from "../LoadingSpinner";

interface ProbabilitySectionProps {
  isLoading: boolean;
  isSimulating: boolean;
  result: { win: number; playoff: number } | null;
}

function ProbabilitySection({
  isLoading,
  isSimulating,
  result,
}: ProbabilitySectionProps) {
  if (isLoading) {
    return (
      <Skeleton height={48} count={2} borderRadius={12} className="mb-[24px]" />
    );
  }

  if (isSimulating) return <LoadingSpinner h="h-[150px]" />;

  return (
    <>
      <ProgressBar
        color="bg-[#0066b3]"
        title="리그 우승"
        value={result?.win ?? 0}
        max={100}
        showUnit="percent"
      />
      <ProgressBar
        color="bg-[#e60012]"
        title="플레이오프 진출"
        value={result?.playoff ?? 0}
        max={100}
        showUnit="percent"
      />
    </>
  );
}

export default ProbabilitySection;
