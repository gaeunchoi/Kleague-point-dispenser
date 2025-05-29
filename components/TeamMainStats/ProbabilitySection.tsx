"use client";
import Skeleton from "react-loading-skeleton";
import ProgressBar from "../ProgressBar";
import { ClipLoader } from "react-spinners";
import { flexRowCenter } from "../styles";

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

  if (isSimulating) {
    return (
      <div className={flexRowCenter("justify-center", "h-[150px]")}>
        <ClipLoader color="#0066b3" size={48} />
      </div>
    );
  }

  return (
    <>
      <ProgressBar
        color="bg-[#0066b3]"
        title="다이렉트 승격"
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
