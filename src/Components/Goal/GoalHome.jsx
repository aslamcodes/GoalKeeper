import React, { useContext, useState } from 'react';
import ReactDOM from 'react-dom';
import DataContext from '../../Data/data-context/DataContext.jsx';
import GoalForm from './GoalForm.jsx';
import GoalPage from './GoalPage.jsx';
import AddButton from '../UI/Buttons/Add Button/AddButton.jsx';
import Modal from '../UI/Modal/Modal.jsx';
import Backdrop from '../UI/Backdrop/Backdrop.jsx';
export default function GoalHome() {
  const goalDataCtx = useContext(DataContext);
  const [goalDataList, setGoalDataList] = useState(goalDataCtx);
  const [isModalActive, setIsModalActive] = useState(false);

  const onAddGoalDataHandler = (goalToAdd) => {
    setGoalDataList([goalToAdd, ...goalDataList]);
    toggleModal();
  };
  const toggleModal = () => {
    setIsModalActive(() => {
      if (isModalActive) return false;
      else return true;
    });
  };
  return (
    <>
      {isModalActive &&
        ReactDOM.createPortal(
          <Modal>
            <GoalForm onAddGoalData={onAddGoalDataHandler} />
          </Modal>,
          document.getElementById('root-overlays')
        )}

      {isModalActive &&
        ReactDOM.createPortal(
          <Backdrop onClick={toggleModal} />,
          document.getElementById('root-backdrop')
        )}

      <GoalPage goalData={goalDataList} />
      <AddButton isFloatingButton={true} onClick={toggleModal} />
    </>
  );
}
