export interface Schedule {
  leagueId: number;
  roundId: number;
  gameDate: string;
  weekdayShort: string;
  gameTime: string;
  endYn: string;
  homeTeamName: string;
  awayTeamName: string;
  fieldName: string;
  homeGoal: number;
  awayGoal: number;
  audienceQty: number;
  matchBC: string;
  mainRefree: string;
  subRefree1: string;
  subRefree2: string;
  waitingRefree: string;
  varRefree1: string;
  varRefree2: string;
}
