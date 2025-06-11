import { cn } from "@/utils/cn";
import { smLabel } from "./styles";

function Footer() {
  return (
    <footer className={smLabel("w-full", "text-gray-400", "px-4", "py-6")}>
      <div className="max-w-5xl mx-auto space-y-2">
        <div>© 2025 gaanii</div>
        <div>
          본 서비스는 웹 개발 학습용으로 개발된 서비스입니다. 비상업적 용도로
          제공되며, K리그 및 각 구단과는 어떠한 공식적인 제휴나 연관이 없습니다.
        </div>
        <div>
          제공되는 데이터는 (사)한국프로축구연맹의 공식 데이터를 기반으로 하나,
          그 정확성과 신뢰성은 보장되지 않으며, 데이터 출처의 사정에 따라
          지연되거나 오류가 발생할 수 있습니다. 정확한 정보는 K리그 공식
          홈페이지를 통해 확인하시기 바랍니다.
        </div>
        <div>
          ‘K리그’는 (사)한국프로축구연맹의 상표 또는 등록 상표이며, 각 구단의
          이름 및 엠블럼에 대한 저작권 및 권리는 해당 구단에 있습니다.
        </div>
        <div>
          데이터 출처:{" "}
          <a href="kleague.com" className={cn("text-blue-500")}>
            K리그 공식 홈페이지
          </a>
          &nbsp;| 문의:{" "}
          <a href="mailto:gaeun1884@naver.com" className={cn("text-blue-500")}>
            이메일
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
