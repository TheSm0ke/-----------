import { search } from "data/data";
import { useState } from "react";
import "./input.css";

const Input = () => {
  const [valueInput, setValueInput] = useState("");

  const handleKeyDown = (el) => {
    console.log(el.target.value);
    valueInput;
    setValueInput(el.target.value);
  };

  return (
    <div className="menu-search">
      <input className="menu-search-input" onChange={handleKeyDown} />
      <div className="menu-search-button">{search}</div>
    </div>
  );
};

export default Input;
