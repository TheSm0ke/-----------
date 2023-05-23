import { useState } from "react";
import Body from "../body/body";
import Header from "../header/header";
import "./main.css";
import Logo from "components/logo/logo";
import { arrowDown, cross } from "data/data";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <div className="hidden-menu">
        <div className="hidden-menu-header">
          <div className="hidden-menu-header-logo">
            <Logo />
          </div>
          <div className="hidden-menu-header-cross">{cross}</div>
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
      <Header handleChange={setSearchValue} />
      <Body filterValue={searchValue} />
    </>
  );
};

export default Main;
