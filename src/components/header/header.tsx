import Logo from "../logo/logo";
import Menu from "../menu/menu";
import "./header.css";

function Header() {
  return (
    <div className="header">
      <Logo />
      <Menu />
    </div>
  );
}

export default Header;
