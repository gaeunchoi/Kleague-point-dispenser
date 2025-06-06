import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { flexColCenter, flexRowCenter } from "../styles";

function SimpleStatsLoading() {
  return (
    <div className={flexRowCenter("gap-1", "place-content-between")}>
      <div className={flexColCenter("min-w-[60px]", "gap-1")}>
        <Skeleton width={50} height={20} borderRadius={8} />
        <Skeleton width={40} height={28} borderRadius={8} />
      </div>
      <div className={flexColCenter("min-w-[60px]", "gap-1")}>
        <Skeleton width={50} height={20} borderRadius={8} />
        <Skeleton width={40} height={28} borderRadius={8} />
      </div>
      <div className={flexColCenter("min-w-[60px]", "gap-1")}>
        <Skeleton width={50} height={20} borderRadius={8} />
        <Skeleton width={40} height={28} borderRadius={8} />
      </div>
    </div>
  );
}

export default SimpleStatsLoading;
