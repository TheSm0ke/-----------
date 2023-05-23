import { useEffect, useState } from "react";
import Logo from "../logo/logo";
import Menu from "../menu/menu";
import "./header.css";

interface HeaderProps {
  handleChange: (el: string) => void;
}

const Header = ({ handleChange }: HeaderProps) => {
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
        <Menu onChange={handleChange} />
      </div>
    );

  return (
    <div className="header" id="header">
      <Logo />
      <Menu onChange={handleChange} />
    </div>
  );
};

export default Header;
