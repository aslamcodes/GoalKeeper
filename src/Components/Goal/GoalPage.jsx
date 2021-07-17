import React from "react";
import GoalCard from "./GoalCard.jsx";
import Container from "../UI/Container/Container.jsx";
import Styles from "./GoalPage.module.css";
export default function GoalPage(props) {
  return (
    <Container className={Styles["container"]}>
      {props.goalData.map((datum, idx) => {
        return <GoalCard className={Styles["child"]} data={datum} key={idx} />;
      })}
    </Container>
  );
}
