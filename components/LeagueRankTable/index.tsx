import { cn } from "@/utils/cn";
import LeagueRanks from "./LeagueRanks";
import LeagueLegend from "./LeagueLegend";

function LeagueRankTable() {
  return (
    <div className={cn("w-full", "overflow-x-scroll")}>
      <LeagueRanks />
      <LeagueLegend />
    </div>
  );
}

export default LeagueRankTable;
