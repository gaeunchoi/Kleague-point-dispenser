"use client";
import { flexColCenter, mainPageBtn } from "@/components/styles";
import { useLeagueStore } from "@/store/leagueStore";
import { cn } from "@/utils/cn";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";
import LeagueToggle from "@/components/LeagueToggle";
import LeagueRankTable from "@/components/LeagueRankTable";
import TeamSwiper from "@/components/TeamSwiper";
import Head from "next/head";

export default function Home() {
  const { isLoading, fetchData, leagueId, toggleLeagueId } = useLeagueStore();
  const [showTable, setShowTable] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <ClipLoader color="#0066b3" size={48} />
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>K리그 승점자판기</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="K리그 승점자판기" />
        <meta
          property="og:description"
          content="K리그 팀의 우승확률 및 경기 정보를 확인하세요"
        />
      </Head>
      <div
        className={flexColCenter("justify-center", "w-full", "gap-3", "p-6")}
      >
        <LeagueToggle />
        {showTable ? <LeagueRankTable /> : <TeamSwiper />}
        <button
          onClick={() => setShowTable((prev) => !prev)}
          className={mainPageBtn("px-6", "py-2")}
        >
          {showTable ? "슬라이드로 보기" : "순위표로 보기"}
        </button>
      </div>
    </>
  );
}
