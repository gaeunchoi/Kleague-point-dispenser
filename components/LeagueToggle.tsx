"use client";

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
      {["K리그 1", "K리그 2"].map((label) => (
        <button
          key={label}
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
              "bg-white text-gray-900 font-bold":
                (label === "K리그 1" && leagueId === "k1") ||
                (label === "K리그 2" && leagueId === "k2"),
              "text-gray-600 hover:text-gray-900":
                (label === "K리그 1" && leagueId !== "k1") ||
                (label === "K리그 2" && leagueId !== "k2"),
            }
          )}
        >
          {label}
        </button>
      ))}
    </div>
  );
}

export default LeagueToggle;
