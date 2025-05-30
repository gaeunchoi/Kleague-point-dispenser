"use client";

import { useState } from "react";
import TeamStatistics from "./TeamStatistics";
import TotalLeagueRank from "./TotalLeagueRank";
import { cn } from "@/utils/cn";

function TeamSubStats() {
  const tabs: string[] = ["리그 순위", "팀 통계"];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className={cn("w-full", "mt-4")}>
      <div className={cn("grid", "grid-cols-2", "gap-0")}>
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={cn(
              "py-2",
              "text-center",
              "rounded-t-2xl",
              "border-b-3",
              activeTab === idx
                ? cn("border-blue-500", "font-semibold", "bg-white")
                : "border-gray-100"
            )}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className={cn("w-full", "overflow-x-auto")}>
        <TeamStatistics />
      </div>
    </div>
  );
}

export default TeamSubStats;
