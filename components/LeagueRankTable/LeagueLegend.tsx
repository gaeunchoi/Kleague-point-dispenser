import { cn } from "@/utils/cn";
import { useLeagueStore } from "@/store/leagueStore";
import { flexRow, flexRowCenter, smLabel } from "../styles";

function LeagueLegend() {
  const { leagueId } = useLeagueStore();

  const legends =
    leagueId === "k1"
      ? [
          { color: "bg-blue-500", label: "K리그 우승" },
          { color: "bg-orange-400", label: "플레이오프 진출" },
          { color: "bg-red-600", label: "다이렉트 강등" },
        ]
      : [
          { color: "bg-blue-500", label: "다이렉트 승격" },
          { color: "bg-green-400", label: "플레이오프 진출" },
          { color: "bg-orange-400", label: "준플레이오프 진출" },
        ];

  return (
    <div className={flexRow("gap-8", "my-4", "ml-6")}>
      {legends.map(({ color, label }, idx) => (
        <div key={idx} className={flexRowCenter()}>
          <div className={cn("min-w-2", "min-h-2", color, "rounded")} />
          <span className={smLabel()}>{label}</span>
        </div>
      ))}
    </div>
  );
}

export default LeagueLegend;
