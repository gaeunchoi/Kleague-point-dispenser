"use client";

import { cn } from "@/utils/cn";
import LeagueRanks from "./LeagueRanks";
import LeagueLegend from "./LeagueLegend";
import { LeagueId } from "@/data/teamLogo";
import { useLeagueStore } from "@/store/leagueStore";
import { useEffect } from "react";

type LeagueRankTableProps = {
  leagueId: LeagueId;
};

function LeagueRankTable({ leagueId }: LeagueRankTableProps) {
  const { fetchData, setLeagueId } = useLeagueStore();

  useEffect(() => {
    setLeagueId(leagueId);
    fetchData();
  }, [leagueId]);

  return (
    <div className={cn("w-full", "overflow-x-scroll")}>
      <LeagueRanks />
      <LeagueLegend />
    </div>
  );
}

export default LeagueRankTable;
