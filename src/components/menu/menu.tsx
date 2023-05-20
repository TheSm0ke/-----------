import MenuItem from "../menu-item/menu-item";
import "./menu.css";

function Menu() {
  return (
    <div className="menu">
      <MenuItem text="Demons" subItems="Demons1" />
      <MenuItem text="Post" subItems="Post1" />
      <MenuItem text="Features" subItems="Features1" />
      <MenuItem text="Categories" subItems="Categories1" />
      <MenuItem text="Buy Now" subItems="Buy1" />
    </div>
  );
}

export default Menu;
