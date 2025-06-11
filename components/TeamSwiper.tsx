"use client";
import { useRouter } from "next/navigation";
import { useLeagueStore } from "@/store/leagueStore";
import { cn } from "@/utils/cn";
import { flexColCenter, mainPageBtn, xlLabel } from "@/components/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import TeamLogos from "@/data/teamLogo";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import { useEffect } from "react";

function TeamSwiper() {
  const router = useRouter();
  const { curLeagueData, leagueId } = useLeagueStore();

  const handleTeamClick = (leagueId: number, teamName: string) => {
    router.push(
      `/DetailTeamInfo?leagueId=k${encodeURIComponent(
        leagueId
      )}&teamName=${encodeURIComponent(teamName)}`
    );
  };

  return (
    <div className={cn("w-full", "p-6")}>
      <Swiper
        modules={[Navigation, EffectCoverflow]}
        spaceBetween={50}
        centeredSlides={true}
        loop={true}
        effect={"coverflow"}
        coverflowEffect={{
          rotate: 70,
          stretch: 0,
          depth: 80,
          modifier: 1,
          slideShadows: false,
        }}
        grabCursor={true}
        navigation={true}
        pagination={false}
        breakpoints={{
          0: {
            slidesPerView: 1,
          },
          640: {
            slidesPerView: 3,
          },
        }}
      >
        {curLeagueData.map((team) => (
          <SwiperSlide key={team.teamName}>
            <div className={flexColCenter("justify-center", "gap-6")}>
              <h2 className={xlLabel()}>{team.teamName}</h2>
              <img
                src={TeamLogos[leagueId][team.teamName] || "/img/kleague.png"}
                alt={team.teamName}
                className={cn(
                  "h-[300px]",
                  "w-auto",
                  "object-contain",
                  "cursor-pointer"
                )}
                onClick={() => handleTeamClick(team.leagueId, team.teamName)}
              />
              <button
                onClick={() => handleTeamClick(team.leagueId, team.teamName)}
                className={mainPageBtn("px-4", "py-2")}
              >
                선택하기
              </button>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default TeamSwiper;
