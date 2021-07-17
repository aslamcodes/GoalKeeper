import React, { useContext } from "react";
import DataContext from "./Data/data-context/DataContext.jsx";
import { FaBars } from "react-icons/fa";
import Navbar from "./Components/UI/Navbar/Navbar.jsx";
import GoalPage from "./Components/Goal/GoalPage.jsx";

function App() {
  const dataCtx = useContext(DataContext);
  return (
    <>
      <Navbar title="Goal Keeper" buttonTitle={<FaBars />}></Navbar>;
      <GoalPage goalData={dataCtx} />
    </>
  );
}

export default App;
