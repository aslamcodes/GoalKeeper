import React from 'react';
import { FaPlus } from 'react-icons/fa';
import RoundedButton from '../Rounded Button/RoundedButton';

export default function AddButton(props) {
  const addButtonHandler = (e) => {};

  return (
    <RoundedButton
      isFloatingButton={props.isFloatingButton}
      onClick={addButtonHandler}>
      <FaPlus />
    </RoundedButton>
  );
}
