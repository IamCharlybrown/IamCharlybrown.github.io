import React, { createContext, useState, useContext } from 'react';
import { routines as initialWorkouts } from '../data/Home/routines'; // Asegúrate de usar la ruta correcta

// Crear el contexto
const HomeContext = createContext();

// Proveedor del contexto
export function WorkoutProvider({ children }) {
  const [workouts, setWorkouts] = useState(initialWorkouts);

  // Método para agregar un workout
  const addWorkout = (newWorkout) => {
    setWorkouts((prevWorkouts) => [...prevWorkouts, newWorkout]);
  };

  // Método para actualizar un workout
  const updateWorkout = (id, updatedWorkout) => {
    setWorkouts((prevWorkouts) =>
      prevWorkouts.map((workout) =>
        workout.id === id ? { ...workout, ...updatedWorkout } : workout
      )
    );
  };

  return (
    <HomeContext.Provider value={{ workouts, addWorkout, updateWorkout }}>
      {children}
    </HomeContext.Provider>
  );
}

// Custom hook para usar el contexto de workouts
export function useWorkouts() {
  return useContext(HomeContext);
}
