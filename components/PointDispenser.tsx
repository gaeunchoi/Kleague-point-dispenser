import TeamInfoHeader from "./TeamInfoHeader";
import TeamMainStats from "./TeamMainStats";
import TeamSubStats from "./TeamSubStats";

function PointDispenser() {
  return (
    <main className="min-h-screen w-full flex flex-col items-center">
      <TeamInfoHeader />
      <div className="w-full max-w-[1000px] mx-auto p-4">
        <TeamMainStats />
        <TeamSubStats />
      </div>
    </main>
  );
}

export default PointDispenser;
