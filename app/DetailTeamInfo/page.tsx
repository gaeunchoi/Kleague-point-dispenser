import LoadingSpinner from "@/components/LoadingSpinner";
import PointDispenser from "@/components/PointDispenser";
import { Suspense } from "react";

function DetailTeamInfoPage() {
  return (
    <div className="min-h-screen min-w-[340px] bg-[#f9fafb]">
      <Suspense fallback={<LoadingSpinner h="h-full" />}>
        <PointDispenser />
      </Suspense>
    </div>
  );
}

export default DetailTeamInfoPage;
