import { cn } from "@/utils/cn";
import LeagueRanks from "./LeagueRanks";
import LeagueLegend from "./LeagueLegend";

function LeagueRankTable() {
  return (
    <div className={cn("overflow-x-scroll")}>
      <LeagueRanks />
      <LeagueLegend />
    </div>
  );
}

export default LeagueRankTable;
