import PointDispenser from "@/components/PointDispenser";
import { Suspense } from "react";

export default function Page() {
  return (
    <div className="min-h-screen min-w-[340px] bg-[#f9fafb]">
      <Suspense fallback={<div>로딩 중...</div>}>
        <PointDispenser />
      </Suspense>
    </div>
  );
}
