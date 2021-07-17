import React from "react";

export default function Container(props) {
  return <div className={props.className}>{props.children}</div>;
}
