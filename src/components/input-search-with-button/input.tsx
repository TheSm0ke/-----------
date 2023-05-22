import { search } from "data/data";
import "./input.css";

const Input = () => {
  return (
    <div className="menu-search">
      <div className="menu-search-button">{search}</div>
      <input className="menu-search-input" />
    </div>
  );
};

export default Input;
