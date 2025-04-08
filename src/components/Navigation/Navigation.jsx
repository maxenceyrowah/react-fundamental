import { NavLink } from "react-router";

const Navigation = ({ items }) => {
  return (
    <>
      <nav className="nav_wrapper">
        <ul className="nav_wrapper-item">
          {items.map((item, index) => (
            <NavLink key={`item-${index}`} to={`${item.link}`}>
              {item.title}
            </NavLink>
          ))}
        </ul>
      </nav>
    </>
  );
};

export default Navigation;
