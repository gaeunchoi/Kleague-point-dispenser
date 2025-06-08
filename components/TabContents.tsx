"use client";
import { ReactNode, useState } from "react";
import { cn } from "@/utils/cn";

type TabContentProps = {
  tabs: string[];
  contents: ReactNode[];
};

function TabContent({ tabs, contents }: TabContentProps) {
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
