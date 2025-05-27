import { Rank } from "@/type/rank";
import ProgressBar from "./ProgressBar";
import CardSection from "./CardSection";
import StatsInfo from "./StatsInfo";
import { useLeagueStore } from "@/store/leagueStore";

function TeamStatistics() {
  const suwonData = useLeagueStore((state) =>
    state.data.find((team) => team.teamName === "수원")
  );

  return (
    <div className="w-full pt-4 flex flex-col gap-4">
      <div className="grid sm: grid-cols-2 md:grid-cols-4 gap-4">
        <CardSection>
          <ProgressBar
            title="승"
            color="bg-[#0066b3]"
            value={suwonData?.winCnt ?? 0}
            max={suwonData?.gameCnt ?? 0}
          />
        </CardSection>
        <CardSection>
          <ProgressBar
            title="무"
            color="bg-gray-500"
            value={suwonData?.tieCnt ?? 0}
            max={suwonData?.gameCnt ?? 0}
          />
        </CardSection>
        <CardSection>
          <ProgressBar
            title="패"
            color="bg-[#e60012]"
            value={suwonData?.lossCnt ?? 0}
            max={suwonData?.gameCnt ?? 0}
          />
        </CardSection>
        <CardSection>
          <ProgressBar
            title="승점"
            color="bg-black"
            value={suwonData?.gainGoal ?? 0}
            max={(suwonData?.gameCnt ?? 0) * 3}
          />
        </CardSection>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <CardSection
          title={<h3 className="text-xl font-bold text-gray-900">득점 분석</h3>}
        >
          <StatsInfo
            title="총 득점"
            displayValue={`${suwonData?.gainGoal ?? 0}골`}
          />
          <ProgressBar
            title="경기당 득점"
            color="bg-[#0066b3]"
            value={
              Math.floor(
                ((suwonData?.gainGoal ?? 0) / (suwonData?.gameCnt ?? 0)) * 100
              ) / 100
            }
            max={suwonData?.gameCnt ?? 0}
            showUnit="goal"
          />
        </CardSection>
        <CardSection
          title={<h3 className="text-xl font-bold text-gray-900">득점 분석</h3>}
        >
          <StatsInfo
            title="총 실점"
            displayValue={`${suwonData?.lossGoal ?? 0}골`}
          />
          <ProgressBar
            title="경기당 실점"
            color="bg-[#e60012]"
            value={
              Math.floor(
                ((suwonData?.lossGoal ?? 0) / (suwonData?.gameCnt ?? 0)) * 100
              ) / 100
            }
            max={suwonData?.gameCnt ?? 0}
            showUnit="goal"
          />
        </CardSection>
      </div>
    </div>
  );
}

export default TeamStatistics;
