import { useEffect, useState } from "react";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
import "./header.css";
import { MenuMobile } from "components/menu-mobile/menu-mobile";

interface HeaderProps {
  handleChange: (el: string) => void;
  openMenu: () => void;
}

const Header = ({ handleChange, openMenu }: HeaderProps) => {
  const [backMenu, setBackMenu] = useState(false);
  const [height, setHeight] = useState(0);

  const handleScroll = () => {
    const height = document.getElementById("header")?.offsetHeight;
    if (window.scrollY > Number(height)) {
      setHeight(Number(height));
      setBackMenu(true);
    } else {
      setBackMenu(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (backMenu)
    return (
      <div className="header" id="header" style={{ top: `-${height}px` }}>
        <div className="logo">
          <Logo />
        </div>
        <MenuMobile onClick={openMenu} />
        <Menu onChange={handleChange} />
      </div>
    );

  return (
    <div className="header" id="header">
      <div className="logo">
        <Logo />
      </div>
      <MenuMobile onClick={openMenu} />
      <Menu onChange={handleChange} />
    </div>
  );
};

export default Header;
