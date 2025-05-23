"use client";

import { useState } from "react";
import LeagueRanks from "./LeagueRanks";
import TeamStatistics from "./TeamStatistics";
import PythagoreanAnalysis from "./PythagoreanAnalysis";

function TeamSubStats() {
  const tabs: string[] = ["리그 순위", "팀 통계", "피타고리안 분석"];
  const contents = [
    <LeagueRanks key={0} />,
    <TeamStatistics key={1} />,
    <PythagoreanAnalysis key={2} />,
  ];
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="w-full mt-4">
      <div className="grid grid-cols-3 gap-0">
        {tabs.map((tab, idx) => (
          <button
            key={idx}
            onClick={() => setActiveTab(idx)}
            className={`py-2 text-center rounded-t-2xl ${
              activeTab === idx
                ? "border-b-3 border-blue-500 font-semibold bg-white"
                : "border-b-3 border-gray-100"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div>{contents[activeTab]}</div>
    </div>
  );
}

export default TeamSubStats;
