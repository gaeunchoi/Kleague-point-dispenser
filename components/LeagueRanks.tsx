import mockData from "@/data/mock";

function LeagueRanks() {
  const suwon = "수원";
  return (
    <table className="w-full">
      <thead className="bg-gray-300">
        <tr>
          <th className="text-gray-600 font-medium px-4 py-2 align-middle">
            순위
          </th>
          <th className="text-gray-600 font-medium px-4 align-middle">구단</th>
          <th className="text-gray-600 font-medium px-4 align-middle">경기</th>
          <th className="text-gray-600 font-medium px-4 align-middle">승</th>
          <th className="text-gray-600 font-medium px-4 align-middle">무</th>
          <th className="text-gray-600 font-medium px-4 align-middle">패</th>
          <th className="text-gray-600 font-medium px-4 align-middle">득점</th>
          <th className="text-gray-600 font-medium px-4 align-middle">실점</th>
          <th className="text-gray-600 font-medium px-4 align-middle">
            득실차
          </th>
          <th className="text-gray-600 font-medium px-4 align-middle">승점</th>
        </tr>
      </thead>
      <tbody>
        {mockData.map((data) => (
          <tr
            key={data.rank}
            className={`hover:bg-gray-100 border-b-gray-100 ${
              data.teamName === suwon ? "bg-blue-100" : "bg-transparent"
            }`}
          >
            <td
              className={`text-center px-4 py-3 align-middle ${
                data.rank === 1 && "bg-blue-400"
              } ${data.rank === 2 && "bg-red-400"}`}
            >
              {data.rank}
            </td>
            <td className="text-center px-4 align-middle">
              {data.teamName}
              {data.teamName === suwon && (
                <span className="text-sm text-blue-900 bg-blue-200 rounded-full p-1 mx-2">
                  내 팀
                </span>
              )}
            </td>
            <td className="text-center px-4 align-middle">{data.totalGame}</td>
            <td className="text-center px-4 align-middle">{data.winCnt}</td>
            <td className="text-center px-4 align-middle">{data.drawCnt}</td>
            <td className="text-center px-4 align-middle">{data.loseCnt}</td>
            <td className="text-center px-4 align-middle">{data.score}</td>
            <td className="text-center px-4 align-middle">{data.conceded}</td>
            <td
              className={`text-center px-4 align-middle ${
                data.goalDiff >= 0 ? "text-green-500" : "text-red-500"
              }`}
            >
              {data.goalDiff > 0 ? `+${data.goalDiff}` : data.goalDiff}
            </td>
            <td className="text-center px-4 align-middle">{data.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeagueRanks;
