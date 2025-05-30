import { cn } from "@/utils/cn";
import { flexCol } from "./styles";
import TeamInfoHeader from "./TeamInfoHeader";
import TeamMainStats from "./TeamMainStats";
import TabContent from "./TabContents";

function PointDispenser() {
  return (
    <main className={flexCol("min-h-screen", "w-full")}>
      <TeamInfoHeader />
      <div className={cn("w-full", "max-w-[1000px]", "mx-auto", "p-4")}>
        <TeamMainStats />
        <TabContent />
      </div>
    </main>
  );
}

export default PointDispenser;
