import React, { createContext, useState, useContext } from 'react';
import { UserRoutine as initialUserRoutine } from '../data/CreateRoutine/UserRoutine';

const RoutineContext = createContext();

export const RoutineProvider = ({ children }) => {
  const [userRoutine, setUserRoutine] = useState(initialUserRoutine);

  const updateExercise = (id, updatedData) => {
    setUserRoutine(prevRoutine =>
      prevRoutine.map(exercise =>
        exercise.id === id ? { ...exercise, ...updatedData } : exercise
      )
    );
  };

  const addExercise = (newExercise) => {
    setUserRoutine(prevRoutine => [...prevRoutine, newExercise]);
  };

  return (
    <RoutineContext.Provider value={{ userRoutine, updateExercise, addExercise }}>
      {children}
    </RoutineContext.Provider>
  );
};

export const useRoutine = () => useContext(RoutineContext);
