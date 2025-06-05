"use client";

import { LEAGUE_LABELS } from "@/constants";
import { flexRow } from "./styles";
import { useLeagueStore } from "@/store/leagueStore";
import { cn } from "@/utils/cn";

function LeagueToggle() {
  const { leagueId, toggleLeagueId } = useLeagueStore();
  return (
    <div
      className={flexRow(
        "justify-center",
        "bg-gray-200",
        "rounded-full",
        "p-2",
        "border",
        "border-gray-200"
      )}
    >
      {Object.entries(LEAGUE_LABELS).map(([key, label]) => {
        const isActive = leagueId === key;
        return (
          <button
            key={key}
            onClick={() => toggleLeagueId()}
            className={cn(
              "px-5",
              "py-3",
              "rounded-full",
              "text-sm",
              "font-medium",
              "transition-color",
              "duration-200",
              {
                "bg-white text-gray-900 font-bold": isActive,
                "text-gray-600 hover:text-gray-900": !isActive,
              }
            )}
          >
            {label}
          </button>
        );
      })}
    </div>
  );
}

export default LeagueToggle;
