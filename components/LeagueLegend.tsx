import { cn } from "@/utils/cn";
import { flexRow, flexCol } from "@/utils/flexClass";
import { smLabel } from "@/utils/labelClass";

function LeagueLegend() {
  return (
    <div className={flexCol("items-start", "my-4", "ml-6")}>
      <div className={flexRow()}>
        <div className={cn("min-w-2", "min-h-2", "bg-blue-500", "rounded")} />
        <span className={smLabel()}>다이렉트 승격</span>
      </div>
      <div className={flexRow()}>
        <div className={cn("min-w-2", "min-h-2", "bg-green-400", "rounded")} />
        <span className={smLabel()}>플레이오프 진출</span>
      </div>
      <div className={flexRow()}>
        <div className={cn("min-w-2", "min-h-2", "bg-orange-400", "rounded")} />
        <span className={smLabel()}>준플레이오프 진출</span>
      </div>
    </div>
  );
}

export default LeagueLegend;
