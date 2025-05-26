import LeagueLegend from "./LeagueLegend";
import LeagueRanks from "./LeagueRanks";

function TotalLeagueRank() {
  return (
    <div className="overflow-x-scroll">
      <LeagueRanks />
      <LeagueLegend />
    </div>
  );
}

export default TotalLeagueRank;
