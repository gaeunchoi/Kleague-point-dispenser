"use client";
import { useLeagueStore } from "@/store/leagueStore";
import CardSection from "./CardSection";
import ProgressBar from "./ProgressBar";
import StatsInfo from "./StatsInfo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

function TeamMainStats() {
  const { data, isLoading } = useLeagueStore();
  const myTeam = data.find((team) => team.teamName === "수원");

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-3">
      <CardSection
        title={<h3 className="text-xl font-bold text-gray-900">승격 확률</h3>}
      >
        {isLoading ? (
          <Skeleton height={48} count={2} borderRadius={12} className="mb-4" />
        ) : (
          <>
            <ProgressBar
              color="bg-[#0066b3]"
              title="다이렉트 승격"
              value={82}
              max={100}
              showUnit="percent"
            />
            <ProgressBar
              color="bg-[#e60012]"
              title="플레이오프 진출"
              value={68.5}
              max={100}
              showUnit="percent"
            />
          </>
        )}
      </CardSection>

      <CardSection
        title={<h3 className="text-xl font-bold text-gray-900">매직 넘버</h3>}
      >
        <div className="flex flex-row gap-1 items-center place-content-between">
          <div className="min-w-20 min-h-20 flex flex-col items-center justify-center">
            {isLoading ? (
              <Skeleton circle width={80} height={80} />
            ) : (
              <div className="rounded-full text-xl bg-blue-400 w-20 h-20 flex flex-col items-center justify-center">
                <div className="text-sm text-white">M.N</div>
                <div className="text-white font-bold text-lg">28</div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 items-center min-w-[60px]">
            <span className="text-sm text-gray-600">남은 경기</span>
            {isLoading ? (
              <Skeleton width={40} height={28} borderRadius={8} />
            ) : (
              <span className="text-xl font-bold">
                {42 - (myTeam?.gameCnt ?? 0)}
              </span>
            )}
          </div>

          <div className="flex flex-col gap-2 items-center min-w-[60px]">
            <span className="text-sm text-gray-600">현재 순위</span>
            {isLoading ? (
              <Skeleton width={40} height={28} borderRadius={8} />
            ) : (
              <span className="text-xl font-bold">{myTeam?.rank ?? "-"}위</span>
            )}
          </div>
        </div>
      </CardSection>

      <CardSection
        title={<h3 className="text-xl font-bold text-gray-900">득실 현황</h3>}
      >
        {isLoading ? (
          <>
            <Skeleton
              height={48}
              count={2}
              borderRadius={12}
              className="mb-[24px]"
            />
            <Skeleton height="28px" borderRadius={12} />
          </>
        ) : (
          <>
            <ProgressBar
              color="bg-[#0066b3]"
              title="득점"
              value={myTeam?.gainGoal ?? 0}
              max={(myTeam?.gainGoal ?? 0) + (myTeam?.lossGoal ?? 0)}
              showUnit="score"
            />
            <ProgressBar
              color="bg-[#e60012]"
              title="실점"
              value={myTeam?.lossGoal ?? 0}
              max={(myTeam?.gainGoal ?? 0) + (myTeam?.lossGoal ?? 0)}
              showUnit="score"
            />
            <StatsInfo
              title="득실차"
              displayValue={`${
                (myTeam?.gainGoal ?? 0) - (myTeam?.lossGoal ?? 0) >= 0
                  ? "+"
                  : ""
              }${(myTeam?.gainGoal ?? 0) - (myTeam?.lossGoal ?? 0)}`}
            />
          </>
        )}
      </CardSection>
    </div>
  );
}

export default TeamMainStats;
