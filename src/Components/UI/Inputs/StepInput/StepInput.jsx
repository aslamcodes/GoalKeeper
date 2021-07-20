import React from 'react';

export default function StepInput(props) {
  return (
    <input
      id={props.id}
      className={props.className}
      onBlur={props.onBlur}></input>
  );
}
