import React from 'react';
import Styles from './RoundedButton.module.css';
export default function RoundedButton(props) {
  return (
    <button
      className={`${Styles['button']}  ${
        props.isFloatingButton ? Styles['floating-button'] : ''
      } `}
      onClick={props.onClick}>
      {props.children}
    </button>
  );
}
