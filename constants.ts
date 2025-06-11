export const K1_TEAM_NAME_MAP: Record<string, string> = {
  "울산 HD FC": "울산",
  "포항 스틸러스": "포항",
  "광주 FC": "광주",
  "전북 현대 모터스": "전북",
  "대구 FC": "대구",
  "제주SK FC": "제주",
  "대전 하나 시티즌": "대전",
  "수원 FC": "수원FC",
  "강원 FC": "강원",
  "FC 서울": "서울",
  "김천 상무": "김천",
  "FC 안양": "안양",
};

export const K2_TEAM_NAME_MAP: Record<string, string> = {
  "경남 FC": "경남",
  "김포 FC": "김포",
  "부산 아이파크": "부산",
  "부천FC 1995": "부천",
  "서울 이랜드": "서울E",
  "성남 FC": "성남",
  "수원 삼성 블루윙즈": "수원",
  "안산 그리너스": "안산",
  "인천 유나이티드": "인천",
  "전남 드래곤즈": "전남",
  "천안 시티 FC": "천안",
  "충남 아산 FC": "충남아산",
  "충북 청주 FC": "충북청주",
  "화성 FC": "화성",
};

export const LEAGUE_LABELS = {
  k1: "K리그 1",
  k2: "K리그 2",
};

export const LEGENDS = {
  k1: [
    { color: "bg-blue-500", label: "K리그 우승" },
    { color: "bg-orange-400", label: "플레이오프 진출" },
    { color: "bg-red-600", label: "다이렉트 강등" },
  ],
  k2: [
    { color: "bg-blue-500", label: "다이렉트 승격" },
    { color: "bg-green-400", label: "플레이오프 진출" },
    { color: "bg-orange-400", label: "준플레이오프 진출" },
  ],
};

export const END_YN = {
  Y: { color: "bg-custom-red", label: "경기종료" },
  N: { color: "bg-custom-blue", label: "경기전" },
};

export const RESULT_LABEL_COLOR = {
  승: "bg-custom-blue",
  무: "bg-custom-gray",
  패: "bg-custom-red",
};
