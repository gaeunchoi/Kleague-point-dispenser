"use client";
import { useState } from "react";
import { cn } from "@/utils/cn";
import TeamSubStats from "./TeamSubStats";
import LeagueSchedule from "./LeagueSchedule";

function TabContent() {
  const tabs: string[] = ["팀 통계", "리그 일정"];
  const contents = [<TeamSubStats key="0" />, <LeagueSchedule key="1" />];
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
        {contents[activeTab]}
      </div>
    </div>
  );
}

export default TabContent;
