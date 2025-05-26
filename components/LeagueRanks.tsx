"use client";
import mockData from "@/data/mock";
import TeamLogos from "../data/teamLogo";

function LeagueRanks() {
  const suwon = "수원";

  return (
    <table className="w-full text-nowrap">
      <thead className="bg-gray-200">
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
        {mockData.map((team) => (
          <tr
            key={team.rank}
            className={`hover:bg-gray-100 border-b-gray-100 ${
              team.teamName === suwon
                ? "bg-blue-100 font-bold"
                : "bg-transparent"
            }`}
          >
            <td className="relative px-4 py-3 align-middle text-center">
              {team.rank >= 1 && team.rank <= 5 && (
                <span
                  className={`absolute left-0 top-1/2 -translate-y-1/2 w-1 h-[95%]
                    ${
                      team.rank === 1
                        ? "bg-blue-500"
                        : team.rank === 2 || team.rank === 3
                        ? "bg-green-400"
                        : "bg-orange-400"
                    }`}
                  aria-label={
                    team.rank === 1
                      ? "다이렉트 승격"
                      : team.rank === 2 || team.rank === 3
                      ? "플레이오프 진출"
                      : "준플레이오프 진출"
                  }
                />
              )}
              <span className="relative z-10 text-gray-500 font-bold">
                {team.rank}
              </span>
            </td>
            <td className="px-4 align-middle text-center">
              <div className="flex items-center justify-start gap-3">
                <img
                  src={TeamLogos[team.teamName]}
                  alt={team.teamName}
                  className="w-[25px]"
                />
                {team.teamName}
              </div>
            </td>
            <td className="text-center px-4 align-middle">{team.totalGame}</td>
            <td className="text-center px-4 align-middle">{team.winCnt}</td>
            <td className="text-center px-4 align-middle">{team.drawCnt}</td>
            <td className="text-center px-4 align-middle">{team.loseCnt}</td>
            <td className="text-center px-4 align-middle">{team.score}</td>
            <td className="text-center px-4 align-middle">{team.conceded}</td>
            <td
              className={`text-center px-4 align-middle ${
                team.goalDiff >= 0 ? "text-green-800" : "text-red-500"
              }`}
            >
              {team.goalDiff > 0 ? `+${team.goalDiff}` : team.goalDiff}
            </td>
            <td className="text-center px-4 align-middle">{team.points}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default LeagueRanks;
