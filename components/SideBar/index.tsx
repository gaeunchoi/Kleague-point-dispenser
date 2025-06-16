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

  const handleOverlayClick = () => {
    setOpenSideBar(false);
  };

  return (
    <>
      {openSideBar && (
        <div
          className={cn(
            "fixed",
            "inset-0",
            "bg-black",
            "bg-opacity-30",
            "z-40"
          )}
          onClick={() => {
            handleOverlayClick();
          }}
        />
      )}
      <div
        className={cn(
          "w-[200px]",
          "p-4",
          "fixed",
          "top-0",
          "left-0",
          "transition-all",
          "duration-300",
          "z-50",
          "overflow-y-auto",
          openSideBar && "bg-gray-100 h-full"
        )}
      >
        <SideBarHeader
          isOpen={openSideBar}
          onSwitchSideBarClick={handleSwitchSideBarClick}
        />
        {openSideBar && <SideBarContent />}
      </div>
    </>
  );
}

export default SideBar;
