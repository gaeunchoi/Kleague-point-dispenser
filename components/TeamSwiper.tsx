"use client";
import { useRouter } from "next/navigation";
import { useLeagueStore } from "@/store/leagueStore";
import { cn } from "@/utils/cn";
import { flexColCenter, xlLabel } from "@/components/styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import TeamLogos from "@/data/teamLogo";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";

function TeamSwiper() {
  const router = useRouter();
  const { curLeagueData, leagueId } = useLeagueStore();

  const handleTeamClick = (teamName: string) => {
    router.push(`/TeamView?teamName=${encodeURIComponent(teamName)}`);
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
                className={cn("h-[300px]", "w-auto", "object-contain")}
              />
              <button
                onClick={() => handleTeamClick(team.teamName)}
                className={cn(
                  "bg-gray-300",
                  "hover:bg-gray-400",
                  "p-4",
                  "rounded-xl",
                  "font-semibold"
                )}
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
