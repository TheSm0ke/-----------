import Logo from "components/logo/logo";
import { hamburger, search } from "data/data";
import "./menu-mobile.css";

export const MenuMobile = () => {
  return (
    <div className="menu-mobile">
      <div className="menu-mobile-hamburger">{hamburger}</div>
      <div className="menu-mobile-logo">
        <Logo />
      </div>
      <div className="menu-mobile-search">{search}</div>
    </div>
  );
};

export default MenuMobile;
