import { cn } from "@/utils/cn";
import { useLeagueStore } from "@/store/leagueStore";
import { flexRow, flexRowCenter, smLabel } from "../styles";
import { LEGENDS } from "@/constants";

function LeagueLegend() {
  const { leagueId } = useLeagueStore();
  const legends = LEGENDS[leagueId];

  return (
    <div className={flexRow("gap-8", "my-4", "ml-6")}>
      {legends.map(({ color, label }, idx) => (
        <div key={idx} className={flexRowCenter("gap-2")}>
          <div className={cn("w-3", "h-3", "rounded-full", color)} />
          <span className={smLabel()}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default LeagueLegend;
