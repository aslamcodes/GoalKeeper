import React from 'react';
import { FaCheck } from 'react-icons/fa';
import RoundedButton from '../Rounded Button/RoundedButton';
import Styles from './CheckButton.module.css';
export default function CheckButton() {
  return (
    <RoundedButton className={Styles['check-button']}>
      {<FaCheck />}
    </RoundedButton>
  );
}
