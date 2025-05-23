import TeamInfoHeader from "./TeamInfoHeader";
import TeamMainStats from "./TeamMainStats";

function PointDispenser() {
  return (
    <main className="min-h-screen flex flex-col gap-4 align-center px-4">
      <TeamInfoHeader />
      <TeamMainStats />
    </main>
  );
}

export default PointDispenser;
