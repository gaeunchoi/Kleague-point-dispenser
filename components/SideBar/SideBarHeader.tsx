import { Menu, X } from "lucide-react";
import { flexRowCenter, smLabel } from "../styles";

type SideBarHeaderProps = {
  isOpen: boolean;
  onSwitchSideBarClick: () => void;
};

function SideBarHeader({ isOpen, onSwitchSideBarClick }: SideBarHeaderProps) {
  if (!isOpen) {
    return (
      <div className={flexRowCenter()}>
        <Menu color="#333" size="30" onClick={onSwitchSideBarClick} />
        <span className={smLabel()}>K리그 승점자판기</span>
      </div>
    );
  }

  return (
    <div className={flexRowCenter("text-[#333]", "justify-between")}>
      <span className={smLabel()}>K리그 승점자판기</span>
      <X color="#333" size={28} onClick={onSwitchSideBarClick} />
    </div>
  );
}

export default SideBarHeader;
