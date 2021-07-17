import React from "react";
import Card from "../UI/Card/Card";
import Steps from "./Steps";
import Styles from "./GoalCard.module.css";
export default function GoalCard(props) {
  return (
    <Card className={`${Styles["goalcard"]} ${props.className} `}>
      <h1 className={Styles["goalcard__title"]}>{props.data.goal}</h1>
      <Steps steps={props.data.steps} />
    </Card>
  );
}
