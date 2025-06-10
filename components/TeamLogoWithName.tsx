import teamLogos, { LeagueId } from "@/data/teamLogo";
import { flexRowCenter } from "./styles";
import { cn } from "@/utils/cn";
import { useRouter } from "next/navigation";

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
  const router = useRouter();
  const myLeagueId: LeagueId = leagueId === 1 ? "k1" : "k2";

  return (
    <div
      className={flexRowCenter("gap-2", "cursor-pointer", "w-[90px]", {
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
        className={cn("order-2", "hover:text-blue-400", {
          "font-bold": isMyTeam,
        })}
        onClick={() => {
          router.push(
            `/TeamView?leagueId=${myLeagueId}&teamName=${encodeURIComponent(
              teamName
            )}`
          );
        }}
      >
        {teamName}
      </span>
    </div>
  );
}

export default TeamLogoWithName;
