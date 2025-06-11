import { cn } from "@/utils/cn";
import { flexColCenter } from "../../styles";
import { useRouter } from "next/navigation";
import { useState } from "react";
import TeamList from "../TeamList";
import { K1_TEAM_NAME_MAP, K2_TEAM_NAME_MAP } from "@/constants";
import SideBarLi from "./Li";

function SideBarContent() {
  const router = useRouter();
  const [openK1, setOpenK1] = useState<boolean>(false);
  const [openK2, setOpenK2] = useState<boolean>(false);

  const handleTeamClick = (leagueId: number, teamName: string) => {
    let shortName = teamName;
    if (leagueId === 1) shortName = K1_TEAM_NAME_MAP[teamName];
    if (leagueId === 2) shortName = K2_TEAM_NAME_MAP[teamName];
    router.push(
      `/DetailTeamInfo?leagueId=k${leagueId}&teamName=${encodeURIComponent(
        shortName
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
            teams={Object.keys(K1_TEAM_NAME_MAP)}
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
            teams={Object.keys(K2_TEAM_NAME_MAP)}
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
