import { arrowDown, arrowLeft } from "data/data";
import "./menu-item.css";

interface MenuItemProps {
  text: string;
  subItems: string[];
}

const MenuItem = ({ text, subItems }: MenuItemProps) => {
  const subMenu = subItems.map((el, index) => {
    return (
      <li className="menu-item-level-3" key={index}>
        <p>{el}</p>
        {arrowLeft}
      </li>
    );
  });

  return (
    <li className="menu-item-level-1">
      <p>{text}</p>
      {arrowDown}
      <ul className="menu-item-level-2">{subMenu}</ul>
    </li>
  );
};

export default MenuItem;
