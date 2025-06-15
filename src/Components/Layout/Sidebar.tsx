import { NavLink } from "react-router-dom";
import "./Sidebar.css";

function Sidebar() {
  return (
    <>
      <div className="sidebar">
        <h4 className="brandName"> Classy Furniture </h4>
        <ul>
          <li>
            <NavLink
              to="/Home"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/Categories"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : ""
              }
            >
              Categories
            </NavLink>
          </li>

          <li>
            <NavLink
              to="/Brands"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : ""
              }
            >
              Brands
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/ShoppingCart"
              className={({ isActive }) =>
                isActive ? "text-blue-600 font-bold" : ""
              }
            >
              Shopping Cart
            </NavLink>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Sidebar;
