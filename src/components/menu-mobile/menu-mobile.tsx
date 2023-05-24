import Input from "components/input-search-with-button/input";
import Logo from "components/logo/logo";
import { hamburger } from "data/data";
import "./menu-mobile.css";

interface MenuMobileProps {
  onClick: () => void;
  onChange: (el: string) => void;
}

export const MenuMobile = ({ onClick, onChange }: MenuMobileProps) => {
  return (
    <div className="menu-mobile">
      <div className="menu-mobile-hamburger" onClick={onClick}>
        {hamburger}
      </div>
      <div className="menu-mobile-logo">
        <Logo />
      </div>
      <div className="menu-mobile-search">
        <Input onChange={onChange} />
      </div>
    </div>
  );
};

export default MenuMobile;
