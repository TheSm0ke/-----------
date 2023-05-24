import { useEffect, useState } from "react";
import Body from "../body/body";
import Header from "../header/header";
import "./main.css";
import Logo from "components/logo/logo";
import { arrowDown, cross } from "data/data";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");
  const [leftPositionHiddenMenu, setLeftPositionHiddenMenu] = useState(false);
  const [leftPositionX, setLeftPositionX] = useState("-18rem");
  const [displayBackground, setDisplayBackground] = useState("none");

  useEffect(() => {
    if (leftPositionHiddenMenu) {
      setLeftPositionX("0rem");
      setDisplayBackground("block");
    } else {
      setLeftPositionX("-18rem");
      setDisplayBackground("none");
    }
  }, [leftPositionHiddenMenu]);

  return (
    <>
      <div className="hidden-menu" style={{ left: `${leftPositionX}` }}>
        <div className="hidden-menu-header">
          <div className="hidden-menu-header-logo">
            <Logo />
          </div>
          <div
            className="hidden-menu-header-cross"
            onClick={() => setLeftPositionHiddenMenu(!leftPositionHiddenMenu)}>
            {cross}
          </div>
        </div>
        <div className="hidden-menu-item">
          <p>Demos</p>
          {arrowDown}
        </div>
        <div className="hidden-menu-item">
          <p>Post</p>
          {arrowDown}
        </div>
        <div className="hidden-menu-item">
          <p>Features</p>
          {arrowDown}
        </div>
        <div className="hidden-menu-item">
          <p>Categories</p>
          {arrowDown}
        </div>
        <div className="hidden-menu-item">
          <p>Buy Now</p>
          {arrowDown}
        </div>
      </div>
      <div
        className="hidden-background"
        onClick={() => setLeftPositionHiddenMenu(!leftPositionHiddenMenu)}
        style={{ display: `${displayBackground}` }}
      />
      <Header
        openMenu={() => setLeftPositionHiddenMenu(!leftPositionHiddenMenu)}
        handleChange={setSearchValue}
      />
      <Body filterValue={searchValue} />
    </>
  );
};

export default Main;
