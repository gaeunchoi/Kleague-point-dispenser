import React, { useState } from "react";
import CardSection from "../CardSection";
import { flexRowCenter, smLabel, xlLabel } from "../styles";
import { SubStatProps } from "@/type/subStats";
import { cn } from "@/utils/cn";
import StatsInfo from "../StatsInfo";
import ProgressBar from "../ProgressBar";

const calcResultColor = (result: string): string => {
  if (result === "승") return "bg-custom-red";
  else if (result === "무") return "bg-custom-gray";
  else return "bg-custom-blue";
};

const calcWinRateColor = (winRate: number): string => {
  if (winRate <= 40) return "bg-custom-blue";
  else if (winRate <= 60) return "bg-custom-gray";
  else return "bg-custom-red";
};

function LatestGamePoint({ myTeam }: SubStatProps) {
  const resultCnt = myTeam?.latestGameResult?.reduce(
    (acc, result) => {
      if (result === "승") return { ...acc, win: acc.win + 1 };
      if (result === "무") return { ...acc, tie: acc.tie + 1 };
      if (result === "패") return { ...acc, lose: acc.lose + 1 };
      return acc;
    },
    { win: 0, tie: 0, lose: 0 } as { win: number; tie: number; lose: number }
  );

  const totalGames =
    (resultCnt?.win ?? 0) + (resultCnt?.tie ?? 0) + (resultCnt?.lose ?? 0);
  const winRate =
    totalGames > 0 ? ((resultCnt?.win ?? 0) / totalGames) * 100 : 0;

  return (
    <div className={cn("grid", "sm: grid-cols-1", "md:grid-cols-2", "gap-4")}>
      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>최근 5경기 결과</h3>}
      >
        <div className={flexRowCenter("justify-between")}>
          {myTeam?.latestGameResult.map((result, idx) => (
            <span
              key={idx}
              className={xlLabel(
                "px-4",
                "py-2",
                "rounded-lg",
                "text-white",
                calcResultColor(result)
              )}
            >
              {result}
            </span>
          ))}
          <div className={flexRowCenter("gap-4")}>
            <span className={smLabel("text-custom-red")}>
              {resultCnt?.win ?? 0}승
            </span>
            <span className={smLabel("text-custom-gray")}>
              {resultCnt?.tie ?? 0}무
            </span>
            <span className={smLabel("text-custom-blue")}>
              {resultCnt?.lose ?? 0}패
            </span>
          </div>
        </div>
      </CardSection>
      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>최근 5경기 승률</h3>}
      >
        <StatsInfo title="승률" value={winRate.toFixed(1) + "%"} />
        <ProgressBar
          color={calcWinRateColor(winRate)}
          value={resultCnt?.win ?? 0}
          max={totalGames}
        />
      </CardSection>
    </div>
  );
}

export default LatestGamePoint;
