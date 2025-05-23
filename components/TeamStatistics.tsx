import { Rank } from "@/type/rank";
import ProgressBar from "./ProgressBar";
import mockData from "@/data/mock";
import CardSection from "./CardSection";
import StatsInfo from "./StatsInfo";

function TeamStatistics() {
  const suwonData: Rank | undefined = mockData.find(
    (data) => data.teamName === "수원"
  );

  return (
    <div className="w-full pt-4 flex flex-col gap-4">
      <div className="grid sm: grid-cols-2 md:grid-cols-4 gap-4">
        <CardSection>
          <ProgressBar
            title="승"
            color="bg-[#0066b3]"
            value={suwonData?.winCnt ?? 0}
            max={suwonData?.totalGame ?? 0}
          />
        </CardSection>
        <CardSection>
          <ProgressBar
            title="무"
            color="bg-gray-500"
            value={suwonData?.loseCnt ?? 0}
            max={suwonData?.totalGame ?? 0}
          />
        </CardSection>
        <CardSection>
          <ProgressBar
            title="패"
            color="bg-[#e60012]"
            value={suwonData?.loseCnt ?? 0}
            max={suwonData?.totalGame ?? 0}
          />
        </CardSection>
        <CardSection>
          <ProgressBar
            title="승점"
            color="bg-black"
            value={suwonData?.score ?? 0}
            max={(suwonData?.totalGame ?? 0) * 3}
          />
        </CardSection>
      </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
        <CardSection
          title={<h3 className="text-xl font-bold text-gray-900">득점 분석</h3>}
        >
          <StatsInfo
            title="총 득점"
            displayValue={`${suwonData?.score ?? 0}골`}
          />
          <ProgressBar
            title="경기당 득점"
            color="bg-[#0066b3]"
            value={
              Math.floor(
                ((suwonData?.score ?? 0) / (suwonData?.totalGame ?? 0)) * 100
              ) / 100
            }
            max={suwonData?.totalGame ?? 0}
            showUnit="goal"
          />
        </CardSection>
        <CardSection
          title={<h3 className="text-xl font-bold text-gray-900">득점 분석</h3>}
        >
          <StatsInfo
            title="총 실점"
            displayValue={`${suwonData?.conceded ?? 0}골`}
          />
          <ProgressBar
            title="경기당 실점"
            color="bg-[#e60012]"
            value={
              Math.floor(
                ((suwonData?.conceded ?? 0) / (suwonData?.totalGame ?? 0)) * 100
              ) / 100
            }
            max={suwonData?.totalGame ?? 0}
            showUnit="goal"
          />
        </CardSection>
      </div>
    </div>
  );
}

export default TeamStatistics;
