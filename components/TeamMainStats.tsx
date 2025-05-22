import ProgressBar from "./ProgressBar";

function TeamMainStats() {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-3 gap-4">
      <div className="bg-white rounded-2xl p-4 flex flex-col gap-4">
        <h3 className="font-medium text-gray-900">승격 확률</h3>
        <div className="flex flex-col">
          <div>다이렉트 승격 | 82.3%</div>
          <ProgressBar color={"blue"} value={82} max={100} />
        </div>
        <div>
          <div>K리그 우승 | 68.5%</div>
          <ProgressBar color={"red"} value={68.5} max={100} />
        </div>
      </div>
      <div className="bg-white rounded-2xl p-4">
        <h3 className="font-medium text-gray-900">매직 넘버</h3>
      </div>
      <div className="bg-white rounded-2xl p-4">
        <h3 className="font-medium text-gray-900">득실 현황</h3>
      </div>
    </div>
  );
}

export default TeamMainStats;
