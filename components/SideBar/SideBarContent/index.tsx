import { cn } from "@/utils/cn";
import { flexColCenter } from "../../styles";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TeamList from "../TeamList";
import { K1_TEAMS, K2_TEAMS } from "@/constants";
import SideBarLi from "./Li";

function SideBarContent() {
  const router = useRouter();
  const [openK1, setOpenK1] = useState<boolean>(false);
  const [openK2, setOpenK2] = useState<boolean>(false);

  const handleTeamClick = (leagueId: number, teamName: string) => {
    router.push(
      `/DetailTeamInfo?leagueId=k${leagueId}&teamName=${encodeURIComponent(
        teamName
      )}`
    );
  };

  return (
    <div className={flexColCenter("p-4")}>
      <ul className={cn("space-y-2")}>
        <SideBarLi title="홈" onClick={() => router.push("/")} />
        <SideBarLi
          title="K리그1"
          isOpen={openK1}
          onClick={() => setOpenK1(!openK1)}
        />
        {openK1 && (
          <TeamList
            leagueId={1}
            teams={K1_TEAMS}
            onTeamClick={handleTeamClick}
          />
        )}
        <SideBarLi
          title="K리그2"
          isOpen={openK2}
          onClick={() => setOpenK2(!openK2)}
        />
        {openK2 && (
          <TeamList
            leagueId={2}
            teams={K2_TEAMS}
            onTeamClick={handleTeamClick}
          />
        )}
        <SideBarLi
          title="K리그1 순위"
          onClick={() => router.push("/LeagueRank/k1")}
        />
        <SideBarLi
          title="K리그2 순위"
          onClick={() => router.push("/LeagueRank/k2")}
        />
      </ul>
    </div>
  );
}

export default SideBarContent;
