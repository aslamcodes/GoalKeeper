import React from "react";
import Styles from "./Card.module.css";
export default function Card(props) {
  return (
    <div className={[`${Styles["card"]} ${props.className} `]}>
      {props.children}
    </div>
  );
}
