"use client";
import { useState } from "react";
import SideBarHeader from "./SideBarHeader";
import SideBarContent from "./SideBarContent";
import { cn } from "@/utils/cn";

function SideBar() {
  const [openSideBar, setOpenSideBar] = useState<boolean>(false);

  const handleSwitchSideBarClick = () => {
    setOpenSideBar((prev) => !prev);
  };

  return (
    <div
      className={cn(
        "w-[200px]",
        "p-4",
        "fixed",
        "top-0",
        "left-0",
        "h-full",
        "transition-all",
        "duration-300",
        "z-50",
        openSideBar && "bg-gray-100"
      )}
    >
      <SideBarHeader
        isOpen={openSideBar}
        onSwitchSideBarClick={handleSwitchSideBarClick}
      />
      {openSideBar && <SideBarContent />}
    </div>
  );
}

export default SideBar;
