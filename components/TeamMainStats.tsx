"use client";
import { useLeagueStore } from "@/store/leagueStore";
import CardSection from "./CardSection";
import ProgressBar from "./ProgressBar";
import StatsInfo from "./StatsInfo";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { cn } from "@/utils/cn";
import { smLabel, xlLabel, flexRowCenter, flexColCenter } from "./styles";

function TeamMainStats() {
  const { data, isLoading } = useLeagueStore();
  const myTeam = data.find((team) => team.teamName === "수원");

  return (
    <div className={cn("grid", "sm:grid-cols-1", "md:grid-cols-3", "gap-3")}>
      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>승격 확률</h3>}
      >
        {isLoading ? (
          <Skeleton
            height={48}
            count={2}
            borderRadius={12}
            className={cn("mb-4")}
          />
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
        title={<h3 className={xlLabel("text-gray-900")}>매직 넘버</h3>}
      >
        <div className={flexRowCenter("gap-1", "place-content-between")}>
          <div
            className={flexColCenter("min-w-20", "min-h-20", "justify-center")}
          >
            {isLoading ? (
              <Skeleton circle width={80} height={80} />
            ) : (
              <div
                className={flexColCenter(
                  "justify-center",
                  "w-20",
                  "h-20",
                  "bg-blue-400",
                  "text-xl",
                  "rounded-full"
                )}
              >
                <div className={smLabel("text-white")}>M.N</div>
                <div className={xlLabel("text-white")}>28</div>
              </div>
            )}
          </div>

          <div className={flexColCenter("min-w-[60px]")}>
            <span className={smLabel()}>남은 경기</span>
            {isLoading ? (
              <Skeleton width={40} height={28} borderRadius={8} />
            ) : (
              <span className={xlLabel()}>{42 - (myTeam?.gameCnt ?? 0)}</span>
            )}
          </div>

          <div className={flexColCenter("min-w-[60px]")}>
            <span className={smLabel()}>현재 순위</span>
            {isLoading ? (
              <Skeleton width={40} height={28} borderRadius={8} />
            ) : (
              <span className={xlLabel()}>{myTeam?.rank ?? "-"}위</span>
            )}
          </div>
        </div>
      </CardSection>

      <CardSection
        title={<h3 className={xlLabel("text-gray-900")}>득실 현황</h3>}
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
