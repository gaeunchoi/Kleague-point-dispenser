import { flexRowCenter, sideBarLi } from "@/components/styles";
import { ChevronDown, ChevronUp } from "lucide-react";

type SideBarLiProps = {
  title: string;
  isOpen?: boolean;
  onClick: () => void;
};

const SideBarLi = ({ title, isOpen, onClick }: SideBarLiProps) => {
  return (
    <li className={sideBarLi()} onClick={onClick}>
      <div
        className={flexRowCenter("justify-between", "min-w-[140px]", "py-2")}
      >
        <span>{title}</span>
        {typeof isOpen === "boolean" && (
          <span>
            {isOpen ? (
              <ChevronUp color="#333" size={24} />
            ) : (
              <ChevronDown color="#333" size={24} />
            )}
          </span>
        )}
      </div>
    </li>
  );
};
export default SideBarLi;
