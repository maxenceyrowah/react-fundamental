import { NavLink } from "react-router";
import "./Logo.css";

const Logo = () => {
  return (
    <>
      <NavLink className="nav_logo" to={"/"}>
        PORTEFOLIO
      </NavLink>
    </>
  );
};

export default Logo;
