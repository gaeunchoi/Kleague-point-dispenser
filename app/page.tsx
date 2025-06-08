"use client";
import { flexColCenter, mainPageBtn } from "@/components/styles";
import { useLeagueStore } from "@/store/leagueStore";
import { useEffect, useState } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import LeagueToggle from "@/components/LeagueToggle";
import LeagueRankTable from "@/components/LeagueRankTable";
import TeamSwiper from "@/components/TeamSwiper";
import Head from "next/head";
import TabContent from "@/components/TabContents";
import LeagueSchedule from "@/components/LeagueSchedule";

export default function Home() {
  const { isLoading, fetchData } = useLeagueStore();
  const [showRankTable, setShowRankTable] = useState<boolean>(false);

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) return <LoadingSpinner h="h-screen" />;

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
        {showRankTable ? (
          <TabContent
            tabs={["리그 순위표", "리그 일정표"]}
            contents={[<LeagueRankTable key="0" />, <LeagueSchedule key="1" />]}
          />
        ) : (
          <TeamSwiper />
        )}
        <button
          onClick={() => setShowRankTable((prev) => !prev)}
          className={mainPageBtn("px-6", "py-2")}
        >
          {showRankTable ? "슬라이드로 보기" : "순위표로 보기"}
        </button>
      </div>
    </>
  );
}
