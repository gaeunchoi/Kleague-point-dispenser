import { cn } from "@/utils/cn";

type TeamListProps = {
  leagueId: number;
  teams: string[];
  onTeamClick: (leagueId: number, teamName: string) => void;
};

function TeamList({ leagueId, teams, onTeamClick }: TeamListProps) {
  return (
    <ul className={cn("ml-4", "space-y-2", "min-w-[120px]")}>
      {teams.map((team) => (
        <li
          key={team}
          className={cn(
            "font-medium",
            "text-gray-700",
            "cursor-pointer",
            "hover:text-blue-400"
          )}
          onClick={() => onTeamClick(leagueId, team)}
        >
          {team}
        </li>
      ))}
    </ul>
  );
}

export default TeamList;
