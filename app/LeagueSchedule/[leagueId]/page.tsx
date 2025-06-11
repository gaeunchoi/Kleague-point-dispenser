import { LeagueId } from "@/data/teamLogo";
import LeagueSchedule from "@/components/LeagueScheduleTable";
import { flexColCenter, xlLabel } from "@/components/styles";
import { getLeagueName } from "@/utils/leagueName";

async function LeagueSchedulePage(props: {
  params: Promise<{ leagueId: LeagueId }>;
  searchParams: Promise<{ teamName?: string }>;
}) {
  const { leagueId } = await props.params;
  const { teamName } = await props.searchParams;

  return (
    <div className={flexColCenter("gap-4", "p-4")}>
      <div className={xlLabel()}>
        {!teamName && `${getLeagueName(leagueId)} 전체 일정`}
      </div>
      <LeagueSchedule leagueId={leagueId} teamName={teamName ?? null} />
    </div>
  );
}

export default LeagueSchedulePage;
