import { search } from "data/data";
import { useState } from "react";
import "./input.css";

interface InputProps {
  onChange: (el: string) => void;
}

const Input = ({ onChange }: InputProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleKeyDown = (el) => {
    setInputValue(el.target.value);
  };

  const handleClick = () => {
    onChange(inputValue);
  };

  return (
    <div className="menu-search">
      <input className="menu-search-input" onChange={handleKeyDown} />
      <div className="menu-search-button" onClick={handleClick}>
        {search}
      </div>
    </div>
  );
};

export default Input;
