import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { iconsStyle } from '../../../../utils/utils';
import RoundedButton from '../Rounded Button/RoundedButton';

export default function AddButton(props) {
  const addButtonHandler = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.onClick();
  };

  return (
    <RoundedButton
      isFloatingButton={props.isFloatingButton}
      onClick={addButtonHandler}>
      <FaPlus style={iconsStyle} />
    </RoundedButton>
  );
}
