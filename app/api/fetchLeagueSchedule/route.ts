import { Schedule } from "@/type/schedule";
import axios from "axios";
import { NextResponse } from "next/server";

export async function POST() {
  try {
    const k1Res = await axios.post(
      "https://www.kleague.com/getScheduleList.do",
      { leagueId: "1", teamId: null, year: "2025", ticketYn: "" }
    );
    const k2Res = await axios.post(
      "https://www.kleague.com/getScheduleList.do",
      { leagueId: "2", teamId: null, year: "2025", ticketYn: "" }
    );

    const k1ScheData = k1Res.data?.data?.scheduleList;
    const k2ScheData = k2Res.data?.data?.scheduleList;

    const getLeagueScheduleList = (leagueSchedule: any[]): Schedule[] =>
      leagueSchedule.map((sche: any) => ({
        leagueId: sche.leagueId,
        gameId: sche.gameId,
        roundId: sche.roundId,
        gameDate: sche.gameDate,
        weekdayShort: sche.weekdayShort,
        gameTime: sche.gameTime,
        endYn: sche.endYn,
        homeTeamName: sche.homeTeamName,
        awayTeamName: sche.awayTeamName,
        fieldName: sche.fieldName,
        homeGoal: sche.homeGoal,
        awayGoal: sche.awayGoal,
        audienceQty: sche.audienceQty,
        matchBC: sche.matchBC,
        mainRefree: sche.refreeName1,
        subRefree1: sche.refreeName2,
        subRefree2: sche.refreeName3,
        waitingRefree: sche.refreeName4,
        varRefree1: sche.refreeName7,
        varRefree2: sche.refreeName8,
      }));

    const k1Schedules = getLeagueScheduleList(k1ScheData || []);
    const k2Schedules = getLeagueScheduleList(k2ScheData || []);

    return NextResponse.json({ k1: k1Schedules, k2: k2Schedules });
  } catch (e) {
    console.error("🚨 에러 발생: ", e);
    return NextResponse.json(
      { error: "일정 데이터를 불러오지 못했습니다." },
      { status: 500 }
    );
  }
}
