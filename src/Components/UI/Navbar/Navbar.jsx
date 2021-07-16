import React from "react";
import Styles from "./Navbar.module.css";
export default function Navbar(props) {
  return (
    <header className={Styles["header"]}>
      <h1 className={Styles["logo"]}>{props.title}</h1>
      <nav className={Styles["nav"]}>
        <ul className={Styles["nav__items"]}>
          {props.items.map((item, idx) => {
            return (
              <li key={idx}>
                <a href={item.href}>{item.item}</a>
              </li>
            );
          })}
        </ul>
      </nav>
      <button>Bars</button>
    </header>
  );
}
