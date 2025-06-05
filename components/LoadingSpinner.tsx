import { ClipLoader } from "react-spinners";
import { flexColCenter } from "./styles";

function LoadingSpinner({ h }: { h: string }) {
  return (
    <div className={flexColCenter("justify-center", h)}>
      <ClipLoader color="#0066b3" size={48} />
    </div>
  );
}

export default LoadingSpinner;
