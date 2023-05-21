import "./menu-item.css";

interface MenuItemProps {
  text: string;
  subItems: string[];
}

const MenuItem = ({ text, subItems }: MenuItemProps) => {
  const subMenu = subItems.map((el, index) => {
    if (index + 1 === subItems.length) {
      return (
        <li className="menu-item-level-3" key={index}>
          <p>{el}</p>
          <svg
            width="6"
            height="9"
            viewBox="0 0 6 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M1.33334 7.7L4.66668 4.5L1.33334 1.3"
              stroke="black"
              strokeLinecap="square"
            />
          </svg>
        </li>
      );
    }
    return (
      <li
        className="menu-item-level-3"
        style={{ borderBottom: "1px solid #E9E9E9" }}
        key={index}>
        <p>{el}</p>
        <svg
          width="6"
          height="9"
          viewBox="0 0 6 9"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M1.33334 7.7L4.66668 4.5L1.33334 1.3"
            stroke="black"
            strokeLinecap="square"
          />
        </svg>
      </li>
    );
  });

  return (
    <li className="menu-item-level-1">
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
      <ul className="menu-item-level-2">{subMenu}</ul>
    </li>
  );
};

export default MenuItem;
