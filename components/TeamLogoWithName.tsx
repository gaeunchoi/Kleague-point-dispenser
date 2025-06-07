import teamLogos, { LeagueId } from "@/data/teamLogo";
import { flexRowCenter } from "./styles";
import { cn } from "@/utils/cn";

type LogoWithNameProps = {
  leagueId: number;
  teamName: string;
  isMyTeam: boolean;
  isReverse?: boolean;
  isUsedTable?: boolean;
};

function TeamLogoWithName({
  leagueId,
  teamName,
  isMyTeam,
  isReverse = false,
  isUsedTable = false,
}: LogoWithNameProps) {
  const myLeagueId: LeagueId = leagueId === 1 ? "k1" : "k2";
  return (
    <div
      className={flexRowCenter("gap-3", "cursor-pointer", "w-[94px]", {
        "justify-start": isUsedTable,
        "justify-center": !isUsedTable,
      })}
    >
      <img
        src={teamLogos[myLeagueId][teamName] || "/img/kleague.png"}
        alt={teamName}
        className={cn("w-[25px]", {
          "order-1": isReverse,
          "order-3": !isReverse,
        })}
      />
      <span
        className={cn("order-2", {
          "font-bold": isMyTeam,
        })}
      >
        {teamName}
      </span>
    </div>
  );
}

export default TeamLogoWithName;
