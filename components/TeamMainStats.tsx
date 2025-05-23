import CardSection from "./CardSection";
import ProgressBar from "./ProgressBar";
import StatsInfo from "./StatsInfo";

function TeamMainStats() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
      <CardSection
        title={<h3 className="text-xl font-bold text-gray-900">승격 확률</h3>}
      >
        <ProgressBar
          color="bg-[#0066b3]"
          title="다이렉트 승격"
          value={82}
          max={100}
          showUnit="percent"
        />
        <ProgressBar
          color="bg-[#e60012]"
          title="K리그 우승"
          value={68.5}
          max={100}
          showUnit="percent"
        />
      </CardSection>

      <CardSection
        title={<h3 className="text-xl font-bold text-gray-900">매직 넘버</h3>}
      >
        <div className="flex flex-row gap-1 items-center place-content-between">
          <div className="rounded-full text-xl bg-blue-400 min-w-20 min-h-20 flex flex-col items-center justify-center">
            <div className="text-sm">M.N</div>
            <div className="text-white font-bold">28</div>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-sm text-gray-600">남은 경기</span>
            <span className="text-xl font-bold">16</span>
          </div>
          <div className="flex flex-col gap-2 items-center">
            <span className="text-sm text-gray-600">현재 순위</span>
            <span className="text-xl font-bold">2위</span>
          </div>
        </div>
      </CardSection>

      <CardSection
        title={<h3 className="text-xl font-bold text-gray-900">득실 현황</h3>}
      >
        <ProgressBar
          color="bg-[#0066b3]"
          title="득점"
          value={35}
          max={53}
          showUnit="score"
        />
        <ProgressBar
          color="bg-[#e60012]"
          title="실점"
          value={18}
          max={53}
          showUnit="score"
        />
        <StatsInfo title="득실차" displayValue="+17" />
      </CardSection>
    </div>
  );
}

export default TeamMainStats;
