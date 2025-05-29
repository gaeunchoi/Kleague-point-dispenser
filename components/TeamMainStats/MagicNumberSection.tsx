"use client";
import Skeleton from "react-loading-skeleton";
import { smLabel, xlLabel, flexColCenter, flexRowCenter } from "../styles";

interface MagicNumberSectionProps {
  isLoading: boolean;
  remainingGames: number;
  rank: number | string;
}

function MagicNumberSection({
  isLoading,
  remainingGames,
  rank,
}: MagicNumberSectionProps) {
  if (isLoading) {
    return (
      <div className={flexRowCenter("gap-1", "place-content-between")}>
        <Skeleton circle width={80} height={80} />
        <div className={flexColCenter("min-w-[60px]")}>
          <Skeleton width={50} height={20} borderRadius={8} />
          <Skeleton width={40} height={28} borderRadius={8} />
        </div>
        <div className={flexColCenter("min-w-[60px]")}>
          <Skeleton width={50} height={20} borderRadius={8} />
          <Skeleton width={40} height={28} borderRadius={8} />
        </div>
      </div>
    );
  }

  return (
    <div className={flexRowCenter("gap-1", "place-content-between")}>
      <div
        className={flexColCenter(
          "justify-center",
          "w-20",
          "h-20",
          "bg-blue-400",
          "text-xl",
          "rounded-full"
        )}
      >
        <span className={smLabel("text-white")}>M.N</span>
        <span className={xlLabel("text-white")}>28</span>
      </div>
      <div className={flexColCenter("min-w-[60px]")}>
        <span className={smLabel()}>남은 경기</span>
        <span className={xlLabel()}>{remainingGames}</span>
      </div>
      <div className={flexColCenter("min-w-[60px]")}>
        <span className={smLabel()}>현재 순위</span>
        <span className={xlLabel()}>{rank}위</span>
      </div>
    </div>
  );
}

export default MagicNumberSection;
