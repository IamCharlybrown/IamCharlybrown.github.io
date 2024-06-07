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

  function createTask(title, color) {
    setTasks([
      ...tasks,
      {
        id: tasks.length + 1,
        title: title,
        priority: color
      },
    ]);
   
  }

  function deleteTask(taskID) {
    setTasks(tasks.filter((task) => task.id !== taskID));
  }

  function updatePriority(taskID, newPriority) {
    setTasks(
      tasks.map((task) =>
        task.id === taskID ? { ...task, priority: newPriority } : task
      )
    );
  }

  return (
    <NavBarContext.Provider value={{ tasks, setTasks, createTask, deleteTask, updatePriority }}>
      {props.children}
    </NavBarContext.Provider>
  );
}
