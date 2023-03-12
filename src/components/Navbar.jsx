import React, { useState } from "react";
import "./NavbarStyle.css";
import { NavbarItems } from "./NavbarItems";

function Navbar() {
  const [clicked, setClick] = useState(false);

  return (
    <nav className="navItems">
      <h1 className="navLogo">Derby Rules</h1>

      <div className="menuIcons">
        <i
          className={clicked ? "fa-solid fa-times" : "fa-solid fa-bars"}
          onClick={() => setClick(!clicked)}
        ></i>
      </div>

      <ul className={clicked ? "navMenu active" : "navMenu"}>
        {NavbarItems.map((item, index) => {
          return (
            <li key={index}>
              <a className={item.className} href={item.url}>
                <i className={item.icon}></i>
                {item.title}
              </a>
            </li>
          );
        })}
        <button>S'enregister</button>
      </ul>
    </nav>
  );
}

export default Navbar;
