import React from "react";
import Card from "../UI/Card/Card";
import Styles from "./Steps.module.css";
export default function Steps(props) {
  return (
    <Card className={Styles["step"]}>
      <ul>
        {props.steps.map((step) => {
          return <li>{step}</li>;
        })}
      </ul>
    </Card>
  );
}
