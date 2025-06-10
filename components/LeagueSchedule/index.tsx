"use client";
import { Fragment, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { flexCol, thClass } from "../styles";
import { useSearchParams } from "next/navigation";
import useLeagueSchedule from "@/hooks/useLeagueSchedule";
import { LeagueId } from "@/data/teamLogo";
import { useScheduleStore } from "@/store/scheduleStore";
import { useLeagueStore } from "@/store/leagueStore";
import LoadingSpinner from "../LoadingSpinner";
import useLeagueTableData from "@/hooks/useLeagueTableData";
import { cn } from "@/utils/cn";

function LeagueSchedule() {
  const { fetchData } = useScheduleStore();
  const searchParams = useSearchParams();
  const searchLeagueId = searchParams.get("leagueId") as LeagueId;
  const curTeamName = searchParams.get("teamName");

  const { leagueId } = useLeagueStore();
  const curleagueId = searchLeagueId ?? leagueId;
  const { schedule, isLoading } = useLeagueSchedule(curleagueId, curTeamName);

  const { data, columns } = useLeagueTableData(schedule, curTeamName);

  useEffect(() => {
    fetchData();
  }, [curleagueId]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <LoadingSpinner h="h-[500px]" />;

  return (
    <table className={cn("w-full", "overflow-x-scroll")}>
      <thead>
        {table.getHeaderGroups().map((headerGroup) => (
          <tr key={headerGroup.id}>
            {headerGroup.headers.map((header) => (
              <th
                key={header.id}
                className={thClass("border-b", "border-r", "border-gray-200")}
              >
                {flexRender(
                  header.column.columnDef.header,
                  header.getContext()
                )}
              </th>
            ))}
          </tr>
        ))}
      </thead>
      <tbody>
        {table.getRowModel().rows.map((row) => (
          <tr key={row.id}>
            {row.getVisibleCells().map((cell) => (
              <Fragment key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </Fragment>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeagueSchedule;
