export interface Schedule {
  leagueId: number;
  roundId: number;
  gameDate: string;
  gameTime: string;
  endYn: string;
  homeTeamName: string;
  awayTeamName: string;
  fieldName: string;
  homeGoal: number;
  awayGoal: number;
  audienceQty: number;
}
