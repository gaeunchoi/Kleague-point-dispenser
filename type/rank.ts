export interface Rank {
  leagueId: number;
  rank: number;
  teamName: string;
  gameCnt: number;
  winCnt: number;
  tieCnt: number;
  lossCnt: number;
  gainGoal: number;
  lossGoal: number;
  gapGoal: number;
  gainPoint: number;
  latestGameResult: string[];
}
