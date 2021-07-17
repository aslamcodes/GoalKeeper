import React from "react";
import Card from "../UI/Card/Card";

export default function Steps(props) {
  return (
    <Card>
      <ul>
        {props.steps.map((step) => {
          return <li>{step}</li>;
        })}
      </ul>
    </Card>
  );
}
