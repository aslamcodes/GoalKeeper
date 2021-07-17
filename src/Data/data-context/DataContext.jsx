import React, { useState } from "react";
import GoalData from "../GoalData";

const DataContext = React.createContext([{ Goal: "", steps: [""] }]);

const DataContextProvider = (props) => {
  useState();
  return (
    <DataContext.Provider value={GoalData}>
      {props.children}
    </DataContext.Provider>
  );
};

export default DataContext;
export { DataContextProvider };
