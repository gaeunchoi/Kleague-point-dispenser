"use client";
import { flexColCenter } from "@/components/styles";
import { useLeagueStore } from "@/store/leagueStore";
import { useEffect } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import LeagueToggle from "@/components/LeagueToggle";
import TeamSwiper from "@/components/TeamSwiper";

export default function Home() {
  const { isLoading, fetchData } = useLeagueStore();

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <LoadingSpinner h="h-screen" />;

  return (
    <div className={flexColCenter("justify-center", "w-full", "gap-3", "p-10")}>
      <LeagueToggle />
      <TeamSwiper />
    </div>
  );
}
