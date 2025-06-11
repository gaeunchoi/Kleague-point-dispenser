import { cn } from "@/utils/cn";
import { flexCol } from "../styles";
import CardSection from "../CardSection";
import Skeleton from "react-loading-skeleton";

function SubStatsLoading() {
  return (
    <div className={flexCol("gap-4", "w-full", "pt-4")}>
      <div className={cn("grid", "sm:grid-cols-2", "md:grid-cols-4", "gap-4")}>
        {Array.from({ length: 4 }).map((_, idx) => (
          <CardSection key={idx}>
            <Skeleton height={40} borderRadius={12} />
          </CardSection>
        ))}
      </div>
      <div className={cn("grid", "sm:grid-cols-1", "md:grid-cols-2", "gap-4")}>
        {Array.from({ length: 2 }).map((_, idx) => (
          <CardSection
            key={idx}
            title={
              <Skeleton
                width={100}
                height={28}
                borderRadius={12}
                className={cn("mb-4")}
              />
            }
          >
            <Skeleton height={24} borderRadius={12} className={cn("mb-4")} />
            <Skeleton height={48} borderRadius={12} />
          </CardSection>
        ))}
      </div>
      <div className={cn("grid", "sm:grid-cols-1", "md:grid-cols-2", "gap-4")}>
        <CardSection>
          <Skeleton height={100} borderRadius={12} />
        </CardSection>
        <CardSection
          title={<Skeleton width={100} height={28} borderRadius={12} />}
        >
          <Skeleton height={48} borderRadius={12} className="mt-4" />
        </CardSection>
      </div>
    </div>
  );
}

export default SubStatsLoading;
