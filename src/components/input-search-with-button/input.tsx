import { search } from "data/data";
import "./input.css";

interface InputProps {
  onChange: (el: string) => void;
}

const Input = ({ onChange }: InputProps) => {
  const handleKeyDown = (el) => {
    onChange(String(el.target.value));
  };

  return (
    <div className="menu-search">
      <input className="menu-search-input" onChange={handleKeyDown} />
      <div className="menu-search-button">{search}</div>
    </div>
  );
};

export default Input;
