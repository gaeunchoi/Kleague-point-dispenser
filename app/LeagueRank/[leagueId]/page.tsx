import LeagueRankTable from "@/components/LeagueRankTable";
import { flexColCenter, xlLabel } from "@/components/styles";
import { LeagueId } from "@/data/teamLogo";
import { getLeagueName } from "@/utils/leagueName";

async function LeagueRankPage({
  params,
}: {
  params: Promise<{ leagueId: LeagueId }>;
}) {
  const { leagueId } = await params;

  return (
    <div className={flexColCenter("gap-4", "p-4")}>
      <div className={xlLabel()}>{getLeagueName(leagueId)} 순위</div>
      <LeagueRankTable leagueId={leagueId} />
    </div>
  );
}

export default LeagueRankPage;
