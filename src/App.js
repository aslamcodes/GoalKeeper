import React, { useContext, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import Navbar from './Components/UI/Navbar/Navbar.jsx';
import GoalHome from './Components/Goal/GoalHome.jsx';
function App() {
  return (
    <>
      <Navbar title="Goal Keeper" buttonTitle={<FaBars />}></Navbar>;
      <GoalHome />
    </>
  );
}

export default App;
