import Input from "components/input-search-with-button/input";
import MenuItem from "../menu-item/menu-item";
import "./menu.css";

const Menu = () => {
  const subMenu = [
    "Post Header",
    "Post Layout",
    "Share Buttons",
    "Gallery Post",
    "Video Post",
  ];

  return (
    <nav>
      <ul className="menu">
        <MenuItem text="Demos" subItems={subMenu} />
        <MenuItem text="Post" subItems={subMenu} />
        <MenuItem text="Features" subItems={subMenu} />
        <MenuItem text="Categories" subItems={subMenu} />
        <MenuItem text="Buy Now" subItems={subMenu} />
        <Input />
      </ul>
    </nav>
  );
};

export default Menu;
