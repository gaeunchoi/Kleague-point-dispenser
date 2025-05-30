export type LeagueId = "K1" | "K2";

type TeamLogos = {
  [key in LeagueId]: {
    [teamName: string]: string;
  };
};

const teamLogos: TeamLogos = {
  K1: {
    울산: "/img/ulsan.png",
    포항: "/img/pohang.png",
    광주: "/img/gwangju.png",
    전북: "/img/jeonbuk.png",
    대구: "/img/daegu.png",
    제주: "/img/jeju.png",
    대전: "/img/daejeon.png",
    수원FC: "/img/suwonfc.png",
    강원: "/img/gangwon.png",
    서울: "/img/seoul.png",
    김천: "/img/gimcheon.png",
    안양: "/img/anyang.png",
  },
  K2: {
    경남: "/img/gyeongnam.png",
    김포: "/img/gimpo.png",
    부산: "/img/busan.png",
    부천: "/img/bucheon.png",
    서울E: "/img/seoul-eland.png",
    성남: "/img/seongnam.png",
    수원: "/img/suwon.png",
    안산: "/img/ansan.png",
    인천: "/img/incheon.png",
    전남: "/img/jeonnam.png",
    충남아산: "/img/chungnam-asan.png",
    충북청주: "/img/chungbuk-cheongju.png",
    천안: "/img/cheonan.png",
    화성: "/img/hwaseong.png",
  },
};

export default teamLogos;
