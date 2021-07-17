import React, { useContext, useState } from 'react';
import DataContext from '../../Data/data-context/DataContext.jsx';
import GoalForm from './GoalForm.jsx';
import GoalPage from './GoalPage.jsx';
import AddButton from '../UI/Buttons/Add Button/AddButton.jsx';
export default function GoalHome() {
  const goalDataCtx = useContext(DataContext);
  const [goalDataList, setGoalDataList] = useState(goalDataCtx);

  const onAddGoalDataHandler = (goalToAdd) => {
    setGoalDataList([goalToAdd, ...goalDataList]);
  };

  return (
    <>
      <GoalForm onAddGoalData={onAddGoalDataHandler} />
      <GoalPage goalData={goalDataList} />
      <AddButton isFloatingButton={true} />
    </>
  );
}
