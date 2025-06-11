import { RESULT_LABEL_COLOR } from "@/constants";
import { smLabel } from "../styles";

type ResultLabelProps = {
  endYN: string;
  myTeamGapGoal: number;
};

function ResultLabel({ endYN, myTeamGapGoal }: ResultLabelProps) {
  let myTeamResult = "";
  if (myTeamGapGoal > 0) myTeamResult = "승";
  else if (myTeamGapGoal === 0) myTeamResult = "무";
  else myTeamResult = "패";

  return (
    <div
      className={smLabel(
        "text-white",
        "rounded-full",
        "px-2",
        "py-0.5",
        RESULT_LABEL_COLOR[myTeamResult as keyof typeof RESULT_LABEL_COLOR],
        endYN === "N" && "hidden"
      )}
    >
      {myTeamResult}
    </div>
  );
}

export default ResultLabel;
