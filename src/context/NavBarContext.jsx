import React, { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";

export const NavBarContext = createContext();
export function NavBarContextProvider(props) {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    setTasks(data);
  }, []);

  function createTask(title){
    setTasks([...tasks, {
      id: tasks.length,
      title: title
    }])
  }

  function deleteTask(taskID){
    setTasks(tasks.filter((task)=>task.id !== taskID))
  }

  return (
    <NavBarContext.Provider value={{tasks, setTasks, createTask, deleteTask}}>
      {props.children}
    </NavBarContext.Provider>
  );
}
