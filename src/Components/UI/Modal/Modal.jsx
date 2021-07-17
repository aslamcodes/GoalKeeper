import React from 'react';
import Styles from './Modal.module.css';
export default function Modal(props) {
  return <div className={Styles['modal']}>{props.children}</div>;
}
