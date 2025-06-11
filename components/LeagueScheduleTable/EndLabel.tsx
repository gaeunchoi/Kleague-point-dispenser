import { END_YN } from "@/constants";
import { smLabel } from "../styles";

type EndLabelProps = {
  YN: string;
};

function EndLabel({ YN }: EndLabelProps) {
  const gameStatus = END_YN[YN as keyof typeof END_YN];
  return (
    <div
      className={smLabel(
        gameStatus.color,
        "text-white",
        "rounded-full",
        "w-[80px]",
        "py-0.5"
      )}
    >
      {gameStatus.label}
    </div>
  );
}

export default EndLabel;
