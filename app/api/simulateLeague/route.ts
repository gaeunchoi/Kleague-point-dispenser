import { simulateLeague } from "@/lib/simulation";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { leagueData, remainingGames, simulations, leagueType } =
      await req.json();

    if (
      !Array.isArray(leagueData) ||
      typeof remainingGames !== "number" ||
      typeof simulations !== "number" ||
      (leagueType !== "K1" && leagueType !== "K2")
    ) {
      return NextResponse.json(
        { error: "입력값이 올바르지 않습니다." },
        { status: 400 }
      );
    }

    const result = simulateLeague(
      leagueData,
      remainingGames,
      simulations,
      leagueType
    );
    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    console.error("🚨 시뮬레이션 에러:", e);
    return NextResponse.json({ error: "시뮬레이션 실패" }, { status: 500 });
  }
}
