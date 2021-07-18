import React from 'react';
import Styles from './Backdrop.module.css';

export default function Backdrop(props) {
  return <div onClick={props.onClick} className={Styles['backdrop']}></div>;
}
