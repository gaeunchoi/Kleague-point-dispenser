"use client";
import { useLeagueStore } from "@/store/leagueStore";
import { cn } from "@/utils/cn";
import { rankThClass } from "../styles";
import RankTableRow from "./LeagueRankTableRow";
import Skeleton from "react-loading-skeleton";

function LeagueRanks() {
  const { curLeagueData, isLoading, leagueId } = useLeagueStore();

  const tBodyContent = isLoading
    ? Array.from({ length: 10 }).map((_, i) => (
        <tr key={i} className={cn("border-b", "border-gray-100")}>
          {Array.from({ length: 10 }).map((_, j) => (
            <td key={j} className={cn("p-2")}>
              <Skeleton />
            </td>
          ))}
        </tr>
      ))
    : curLeagueData.map((team, idx) => (
        <RankTableRow key={idx} leagueId={leagueId} teamInfo={team} />
      ));

  return (
    <table className={cn("min-w-full", "text-nowrap", "table-fixed")}>
      <thead className={cn("bg-gray-200")}>
        <tr>
          <th className={rankThClass()}>순위</th>
          <th className={rankThClass("min-w-[80px]")}>구단</th>
          <th className={rankThClass()}>경기</th>
          <th className={rankThClass()}>승</th>
          <th className={rankThClass()}>무</th>
          <th className={rankThClass()}>패</th>
          <th className={rankThClass()}>득점</th>
          <th className={rankThClass()}>실점</th>
          <th className={rankThClass()}>득실차</th>
          <th className={rankThClass()}>승점</th>
        </tr>
      </thead>
      <tbody>{tBodyContent}</tbody>
    </table>
  );
}

export default LeagueRanks;
