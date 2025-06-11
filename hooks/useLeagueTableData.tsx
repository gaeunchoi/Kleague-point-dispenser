import EndLabel from "@/components/LeagueScheduleTable/EndLabel";
import ResultLabel from "@/components/LeagueScheduleTable/ResultLabel";
import ScoreBoard from "@/components/LeagueScheduleTable/ScoreBoard";
import TeamLogoWithName from "@/components/TeamLogoWithName";
import {
  flexColCenter,
  flexRowCenter,
  smLabel,
  tdClass,
} from "@/components/styles";
import { GroupsByRDT } from "@/type/group";
import { Schedule } from "@/type/schedule";
import { ColumnDef } from "@tanstack/react-table";
import { useMemo } from "react";

// GroupBy 커스텀
function groupBy<T>(array: T[], getKey: (item: T) => string | number) {
  return array.reduce<Record<string, T[]>>((acc, item) => {
    const key = String(getKey(item));
    if (!acc[key]) acc[key] = [];
    acc[key].push(item);
    return acc;
  }, {});
}

function useLeagueTableData(schedule: Schedule[], teamName: string | null) {
  const data = useMemo<GroupsByRDT[]>(() => {
    const result: GroupsByRDT[] = [];
    const rounds = groupBy(schedule, (s) => s.roundId);

    Object.entries(rounds).forEach(([roundId, roundMatches]) => {
      const dates = groupBy(roundMatches, (r) => r.gameDate);

      Object.entries(dates).forEach(([gameDate, dateMatches]) => {
        const times = groupBy(dateMatches, (d) => d.gameTime);

        Object.entries(times).forEach(([gameTime, timeMatches]) => {
          timeMatches.forEach((match, idx) => {
            result.push({
              ...match,
              isFirstRound: false,
              roundRowSpan: 0,
              isFirstDate: false,
              dateRowSpan: 0,
              isFirstTime: idx === 0,
              timeRowSpan: timeMatches.length,
            });
          });
        });

        const dateStartIdx = result.length - dateMatches.length;
        if (dateMatches.length > 0) {
          result[dateStartIdx].isFirstDate = true;
          result[dateStartIdx].dateRowSpan = dateMatches.length;
        }
      });

      const roundStartIdx = result.length - roundMatches.length;
      if (roundMatches.length > 0) {
        result[roundStartIdx].isFirstRound = true;
        result[roundStartIdx].roundRowSpan = roundMatches.length;
      }
    });

    return result;
  }, [schedule]);

  const columns = useMemo<ColumnDef<GroupsByRDT>[]>(
    () => [
      {
        header: "라운드",
        accessorKey: "roundId",
        cell: (info) => {
          const row = info.row.original;
          return row.isFirstRound ? (
            <td
              rowSpan={row.roundRowSpan}
              className={tdClass("min-w-[60px]", "border-r", "border-gray-200")}
            >
              R{row.roundId}
            </td>
          ) : null;
        },
      },
      {
        header: "날짜",
        accessorFn: (row) => `${row.gameDate} (${row.weekdayShort})`,
        cell: (info) => {
          const row = info.row.original;
          return row.isFirstDate ? (
            <td
              rowSpan={row.dateRowSpan}
              className={tdClass(
                "min-w-[120px]",
                "border-r",
                "border-gray-200"
              )}
            >
              {row.gameDate}({row.weekdayShort})
            </td>
          ) : null;
        },
      },
      {
        header: "시간",
        accessorKey: "gameTime",
        cell: (info) => {
          const row = info.row.original;
          return row.isFirstTime ? (
            <td
              rowSpan={row.timeRowSpan}
              className={tdClass("min-w-[76px]", "border-r", "border-gray-200")}
            >
              {info.getValue() as string}
            </td>
          ) : null;
        },
      },
      {
        header: "매치센터",
        accessorFn: (row) => row,
        cell: (info) => {
          const match = info.getValue<GroupsByRDT>();
          const isMyTeam =
            match.homeTeamName === teamName || match.awayTeamName === teamName;
          const isMyTeamHome = isMyTeam && match.homeTeamName === teamName;
          const myTeamGapGoal = isMyTeam && match.homeGoal - match.awayGoal;
          return (
            <td
              className={tdClass(
                "min-w-[270px]",
                "border-r",
                "border-gray-200",
                "space-y-2"
              )}
            >
              <div className={flexRowCenter("justify-center")}>
                <TeamLogoWithName
                  leagueId={match.leagueId}
                  teamName={match.homeTeamName}
                  isMyTeam={isMyTeamHome}
                />
                <ScoreBoard
                  isEnd={match.endYn}
                  homeGoal={match.homeGoal}
                  awayGoal={match.awayGoal}
                />
                <TeamLogoWithName
                  leagueId={match.leagueId}
                  teamName={match.awayTeamName}
                  isMyTeam={isMyTeam && !isMyTeamHome}
                  isReverse={true}
                />
              </div>
              <div className={flexRowCenter("justify-center")}>
                {match.endYn !== undefined && <EndLabel YN={match.endYn} />}
                {isMyTeam && typeof myTeamGapGoal === "number" && (
                  <ResultLabel
                    endYN={match.endYn}
                    myTeamGapGoal={
                      isMyTeamHome ? myTeamGapGoal : -1 * myTeamGapGoal
                    }
                  />
                )}
              </div>
            </td>
          );
        },
      },
      {
        header: "장소/관중수",
        cell: (info) => {
          const row = info.row.original;
          return (
            <td
              className={tdClass(
                "min-w-[153px]",
                "border-r",
                "border-gray-200"
              )}
            >
              <div className={flexColCenter("justify-center", "gap-1")}>
                <span>{row.fieldName}</span>
                <span className={smLabel()}>
                  [{row.audienceQty ? row.audienceQty.toLocaleString() : "-"}명]
                </span>
              </div>
            </td>
          );
        },
      },
      {
        header: "중계정보",
        cell: (info) => {
          const row = info.row.original;
          const bc = row.matchBC || "";

          const [broadcaster, casterRaw, analystRaw] = bc
            .split("|")
            .map((s) => s.trim());

          const caster = casterRaw?.replace("캐스터 :", "").trim();
          const analyst = analystRaw
            ?.replace("해설 :", "")
            .trim()
            ?.split("&emsp;")[0]
            .trim();

          return (
            <td
              className={tdClass(
                "min-w-[150px]",
                "border-r",
                "border-gray-200"
              )}
            >
              <div>[ {broadcaster} ]</div>
              {caster && (
                <div className={flexRowCenter("justify-center")}>
                  <span className={smLabel()}>캐스터:</span> {caster}
                </div>
              )}
              {analyst && (
                <div className={flexRowCenter("justify-center")}>
                  <span className={smLabel()}>해설:</span> {analyst}
                </div>
              )}
              <br />
              <div>[ COUPANGPLAY ]</div>
            </td>
          );
        },
      },
      {
        header: "심판진",
        cell: (info) => {
          const row = info.row.original;
          if (!row.mainRefree)
            return (
              <td className={tdClass("min-w-[165px]", smLabel())}>
                심판 정보 없음
              </td>
            );
          return (
            <td className={tdClass("min-w-[165px]")}>
              <div className={flexRowCenter("justify-center")}>
                <span className={smLabel()}>주심:</span> {row.mainRefree}
              </div>
              <div className={flexRowCenter("justify-center")}>
                <span className={smLabel()}>부심:</span> {row.subRefree1},{" "}
                {row.subRefree2}
              </div>
              <div className={flexRowCenter("justify-center")}>
                <span className={smLabel()}>대기심:</span> {row.waitingRefree}
              </div>
              <div className={flexRowCenter("justify-center")}>
                <span className={smLabel()}>VAR:</span> {row.varRefree1},{" "}
                {row.varRefree2}
              </div>
            </td>
          );
        },
      },
    ],
    [teamName]
  );

  return { data, columns };
}

export default useLeagueTableData;
