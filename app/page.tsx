import PointDispenser from "@/components/PointDispenser";
import Head from "next/head";

export default function Home() {
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
      <main className="min-h-screen min-w-[340px] bg-[#f9fafb]">
        <PointDispenser />
      </main>
    </>
  );
}
