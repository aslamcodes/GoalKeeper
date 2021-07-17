import React, { useState } from 'react';
import Styles from './GoalForm.module.css';
import Card from '../UI/Card/Card.jsx';
import CheckButton from '../UI/Buttons/Check Button/CheckButton';
import AddButton from '../UI/Buttons/Add Button/AddButton';
export default function GoalForm() {
  const [goalData, setGoalData] = useState({
    goal: '',
    steps: [],
  });

  const [goal, steps] = useState({
    goal: '',
    steps: [],
  });

  const submitHandler = (e) => {
    e.preventDefault();
  };
  return (
    <form onSubmit={submitHandler} className={Styles['goalform__form']}>
      <Card className={Styles['goalform']}>
        <div className={Styles['goalform__control']}>
          <label htmlFor={'goalInput'}>Goal</label>
          <input id="goalInput" className={Styles['goalInput']}></input>
        </div>
        <div className={Styles['goalform__control']}>
          <label htmlFor={'stepInput'}>Steps</label>

          <input id="stepInput" className={Styles['goalInput']}></input>
        </div>

        <div className={Styles['goalform__actions']}>
          <AddButton isFloatingButton={false}></AddButton>
          <CheckButton></CheckButton>
        </div>
      </Card>
    </form>
  );
}
