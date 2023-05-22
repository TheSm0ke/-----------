import { useEffect, useState } from "react";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
import "./header.css";

const Header = () => {
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
        <Logo />
        <Menu />
      </div>
    );

  return (
    <div className="header" id="header">
      <Logo />
      <Menu />
    </div>
  );
};

export default Header;
