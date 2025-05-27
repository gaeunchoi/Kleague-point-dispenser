import LeagueLegend from "./LeagueLegend";
import LeagueRanks from "./LeagueRanks";
import { cn } from "@/utils/cn";

function TotalLeagueRank() {
  return (
    <div className={cn("overflow-x-scroll")}>
      <LeagueRanks />
      <LeagueLegend />
    </div>
  );
}

export default TotalLeagueRank;
