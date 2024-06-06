import React, { createContext, useState, useEffect } from "react";
import { tasks as data } from "../data/tasks";
import { useLocalStorage } from "../hooks/useLocalStorage";

export const NavBarContext = createContext();
export function NavBarContextProvider(props) {
  
  const [tasks, setTasks] = useLocalStorage("tasks", []);

  useEffect(() => {
    if (tasks.length === 0) {
      setTasks(data);
    }
  }, []);

  function createTask(title) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: title,
      },
    ]);
  }

  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  return (
    <NavBarContext.Provider value={{ tasks, setTasks, createTask, deleteTask }}>
      {props.children}
    </NavBarContext.Provider>
  );
}
