import { Rank } from "@/type/rank";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const k1res = await axios.get(
      "https://www.kleague.com/record/teamRank.do?leagueId=1&year=2025&stadium=all&recordType=rank"
    );

    const k2res = await axios.get(
      "https://www.kleague.com/record/teamRank.do?leagueId=2&year=2025&stadium=all&recordType=rank"
    );

    const k1TeamRank = k1res.data?.data?.teamRank;
    const k2TeamRank = k2res.data?.data?.teamRank;

    const getLeagueTeamRank = (teamRank: any[]): Rank[] =>
      teamRank.map((team: any) => ({
        leagueId: team.leagueId,
        rank: team.rank,
        teamName: team.teamName,
        gameCnt: team.gameCount,
        winCnt: team.winCnt,
        tieCnt: team.tieCnt,
        lossCnt: team.lossCnt,
        gainGoal: team.gainGoal,
        lossGoal: team.lossGoal,
        gapGoal: team.gapCnt,
        gainPoint: team.gainPoint,
        latestGameResult: [
          team.game01,
          team.game02,
          team.game03,
          team.game04,
          team.game05,
        ],
      }));

    const k1leagueRankInfo = getLeagueTeamRank(k1TeamRank || []);
    const k2leagueRankInfo = getLeagueTeamRank(k2TeamRank || []);

    return NextResponse.json({ k1: k1leagueRankInfo, k2: k2leagueRankInfo });
  } catch (e) {
    console.error("🚨 에러 발생: ", e);
    return NextResponse.json({ error: "데이터를 불러오지 못했습니다." });
  }
};
