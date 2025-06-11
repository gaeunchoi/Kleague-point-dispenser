"use client";
import { cn } from "@/utils/cn";
import { flexCol } from "./styles";
import TeamInfoHeader from "./TeamInfoHeader";
import TeamMainStats from "./TeamMainStats";
import TabContent from "./TabContents";
import TeamSubStats from "./TeamSubStats";
import LeagueSchedule from "./LeagueScheduleTable";
import { useSearchParams } from "next/navigation";
import { LeagueId } from "@/data/teamLogo";

function PointDispenser() {
  const searchParams = useSearchParams();
  const leagueId = searchParams.get("leagueId") as LeagueId;
  const teamName = searchParams.get("teamName");

  return (
    <main className={flexCol("min-h-screen", "w-full")}>
      <TeamInfoHeader />
      <div className={cn("w-full", "max-w-[1000px]", "mx-auto", "p-4")}>
        <TeamMainStats />
        <TabContent
          tabs={["팀 통계", "리그 일정"]}
          contents={[
            <TeamSubStats key="0" />,
            <LeagueSchedule key="1" leagueId={leagueId} teamName={teamName} />,
          ]}
        />
      </div>
    </main>
  );
}

export default PointDispenser;
