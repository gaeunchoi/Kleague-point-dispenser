import LeagueRankTable from "@/components/LeagueRankTable";
import { flexColCenter, xlLabel } from "@/components/styles";
import { LEAGUE_LABELS } from "@/constants";
import { LeagueId } from "@/data/teamLogo";

async function LeagueRankPage({
  params,
}: {
  params: Promise<{ leagueId: LeagueId }>;
}) {
  const { leagueId } = await params;

  return (
    <div className={flexColCenter("gap-4", "p-4")}>
      <div className={xlLabel()}>{LEAGUE_LABELS[leagueId]} 순위</div>
      <LeagueRankTable leagueId={leagueId} />
    </div>
  );
}

export default LeagueRankPage;
