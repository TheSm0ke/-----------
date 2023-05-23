import { useState } from "react";
import Body from "../body/body";
import Header from "../header/header";
import "./main.css";

const Main = () => {
  const [searchValue, setSearchValue] = useState("");

  return (
    <>
      <Header handleChange={setSearchValue} />
      <Body filterValue={searchValue} />
    </>
  );
};

export default Main;
