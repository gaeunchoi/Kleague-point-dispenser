import { LeagueId } from "@/data/teamLogo";
import { Rank } from "@/type/rank";

// 가능한 결과: 승, 무, 패
const results = [3, 1, 0];

export const simulateLeague = (
  originalTable: Rank[],
  remainingGames: number,
  simulations: number,
  leagueType: LeagueId
): { [teamName: string]: { win: number; playoff: number } } => {
  const teamStats: { [teamName: string]: { win: number; playoff: number } } =
    {};

  for (let i = 0; i < simulations; i++) {
    const clonedTable = JSON.parse(JSON.stringify(originalTable)) as Rank[];

    for (const team of clonedTable) {
      const randomPoints = Array.from(
        { length: remainingGames },
        () => results[Math.floor(Math.random() * 3)]
      );
      team.gainPoint += randomPoints.reduce((a, b) => a + b, 0);
    }

    // 승점 내림차순, 동점이면 득실차, 그 다음 득점
    clonedTable.sort((a, b) => {
      if (b.gainPoint !== a.gainPoint) return b.gainPoint - a.gainPoint;
      const diffA = (a.gainGoal ?? 0) - (a.lossGoal ?? 0);
      const diffB = (b.gainGoal ?? 0) - (b.lossGoal ?? 0);
      if (diffB !== diffA) return diffB - diffA;
      return (b.gainGoal ?? 0) - (a.gainGoal ?? 0);
    });

    if (leagueType === "K1") {
      // 1위: win
      const top = clonedTable[0].teamName;
      if (!teamStats[top]) teamStats[top] = { win: 0, playoff: 0 };
      teamStats[top].win += 1;

      // 하위 2팀(11,12위): playoff
      const playoffTeams = clonedTable.slice(-2).map((t) => t.teamName);
      for (const teamName of playoffTeams) {
        if (!teamStats[teamName]) teamStats[teamName] = { win: 0, playoff: 0 };
        teamStats[teamName].playoff += 1;
      }
    } else if (leagueType === "K2") {
      // 1위: win
      const top = clonedTable[0].teamName;
      if (!teamStats[top]) teamStats[top] = { win: 0, playoff: 0 };
      teamStats[top].win += 1;

      // 2~5위: playoff
      const playoffTeams = clonedTable.slice(1, 5).map((t) => t.teamName);
      for (const teamName of playoffTeams) {
        if (!teamStats[teamName]) teamStats[teamName] = { win: 0, playoff: 0 };
        teamStats[teamName].playoff += 1;
      }
    }
  }

  // 확률로 변환
  for (const teamName in teamStats) {
    teamStats[teamName].win = +(
      (teamStats[teamName].win / simulations) *
      100
    ).toFixed(2);
    teamStats[teamName].playoff = +(
      (teamStats[teamName].playoff / simulations) *
      100
    ).toFixed(2);
  }

  return teamStats;
};
