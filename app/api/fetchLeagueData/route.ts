import { Rank } from "@/type/rank";
import axios from "axios";
import { NextResponse } from "next/server";

export const GET = async () => {
  try {
    const res = await axios.get(
      "https://www.kleague.com/record/teamRank.do?leagueId=2&year=2025&stadium=all&recordType=rank"
    );
    const teamRank = res.data?.data?.teamRank;

    const leagueRankInfo: Rank[] = teamRank.map((team: any) => ({
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
    }));
    return NextResponse.json(leagueRankInfo);
  } catch (e) {
    console.error("🚨 에러 발생: ", e);
    return NextResponse.json({ error: "데이터를 불러오지 못했습니다." });
  }
};
