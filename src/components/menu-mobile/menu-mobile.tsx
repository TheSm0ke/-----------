import Logo from "components/logo/logo";
import { hamburger, search } from "data/data";
import "./menu-mobile.css";

interface MenuMobileProps {
  onClick: () => void;
}

export const MenuMobile = ({ onClick }: MenuMobileProps) => {
  return (
    <div className="menu-mobile">
      <div className="menu-mobile-hamburger" onClick={onClick}>
        {hamburger}
      </div>
      <div className="menu-mobile-logo">
        <Logo />
      </div>
      <div className="menu-mobile-search">{search}</div>
    </div>
  );
};

export default MenuMobile;
