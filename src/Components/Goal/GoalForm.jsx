import React, { useState } from 'react';
import Styles from './GoalForm.module.css';
import Card from '../UI/Card/Card.jsx';
import CheckButton from '../UI/Buttons/Check Button/CheckButton';
import AddButton from '../UI/Buttons/Add Button/AddButton';
import StepInput from '../UI/Inputs/StepInput/StepInput.jsx';
export default function GoalForm(props) {
  const [goalData, setGoalData] = useState({
    goal: '',
    steps: [],
  });
  const [goalInputIsValid, setGoalInputIsValid] = useState(true);
  const [stepInputFieldArray, setStepInputFieldArray] = useState([1]);
  // Handler Functions
  const goalInputHandler = (e) => {
    validateGoalInputField();
    setGoalData((prev) => {
      return { ...prev, goal: e.target.value };
    });
  };
  const submitHandler = (e) => {
    e.preventDefault();
    validateGoalInputField();
    props.onAddGoalData(goalData);
  };
  //Validation Functions
  const validateGoalInputField = () => {
    if (goalData.goal.trim().length <= 0) {
      setGoalInputIsValid(false);
    } else {
      setGoalInputIsValid(true);
    }
  };

  const onAddStepsHandler = (e) => {
    setStepInputFieldArray((prev) => {
      return [...prev, stepInputFieldArray.length + 1];
    });
  };

  return (
    <form onSubmit={submitHandler} className={Styles['goalform__form']}>
      <Card className={Styles['goalform']}>
        <div className={Styles['goalform__control']}>
          <label htmlFor={'goalInput'}>Goal</label>
          <input
            id="goalInput"
            value={goalData.goal}
            className={`${Styles['goalInput']} ${
              goalInputIsValid ? '' : Styles['invalid']
            }`}
            onChange={goalInputHandler}
            onBlur={validateGoalInputField}></input>
        </div>
        <div
          className={`${Styles['goalform__control']} ${Styles['goalform__control__steps']}`}>
          <label htmlFor={'stepInput'}>Steps</label>
          {stepInputFieldArray.map((pos) => {
            return <StepInput key={pos} />;
          })}
        </div>
        <div className={Styles['goalform__actions']}>
          <AddButton
            isFloatingButton={false}
            onClick={onAddStepsHandler}></AddButton>
          <CheckButton></CheckButton>
        </div>
      </Card>
    </form>
  );
}
