import "./menu-item.css";

interface MenuItemProps {
  text: string;
  subItems: string;
}

function MenuItem({ text, subItems }: MenuItemProps) {
  return (
    <div className="menu-item" onMouseEnter={() => console.log(subItems)}>
      <p>{text}</p>
      <svg
        className="arrow-down"
        width="10"
        height="6"
        viewBox="0 0 10 6"
        fill="none"
        xmlns="http://www.w3.org/2000/svg">
        <path d="M1 1L5 5L9 1" stroke="black" strokeLinecap="square" />
      </svg>
    </div>
  );
}

export default MenuItem;
