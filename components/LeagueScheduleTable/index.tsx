"use client";
import { Fragment, useEffect } from "react";
import {
  useReactTable,
  getCoreRowModel,
  flexRender,
} from "@tanstack/react-table";
import { thClass } from "../styles";
import useLeagueSchedule from "@/hooks/useLeagueSchedule";
import { LeagueId } from "@/data/teamLogo";
import { useScheduleStore } from "@/store/scheduleStore";
import LoadingSpinner from "../LoadingSpinner";
import useLeagueTableData from "@/hooks/useLeagueTableData";
import { cn } from "@/utils/cn";

type LeagueScheduleTableProps = {
  leagueId: LeagueId;
  teamName: string | null;
};

function LeagueScheduleTable({ leagueId, teamName }: LeagueScheduleTableProps) {
  const { fetchData } = useScheduleStore();

  const { schedule, isLoading } = useLeagueSchedule(leagueId, teamName);

  useEffect(() => {
    if (!schedule || schedule.length === 0) fetchData();
  }, [leagueId, schedule]);

  const { data, columns } = useLeagueTableData(schedule, teamName);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  if (isLoading) return <LoadingSpinner h="h-[500px]" />;

  return (
    <div className={cn("w-full", "overflow-x-scroll")}>
      <table className={cn("min-w-full", "text-nowrap", "table-fixed")}>
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
    </div>
  );
}

export default LeagueScheduleTable;
