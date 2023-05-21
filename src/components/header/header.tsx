import { useEffect, useState } from "react";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
import "./header.css";

const Header = () => {
  const [backMenu, setBackMenu] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 200) {
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
      <div className="header" style={{ top: "-200px" }}>
        <Logo />
        <Menu />
      </div>
    );

  return (
    <div className="header">
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;
