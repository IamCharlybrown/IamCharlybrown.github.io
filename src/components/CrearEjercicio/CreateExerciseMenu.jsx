import React, { useState } from 'react';
import { useRoutine } from '../../context/CreateRoutineContext';

const CreateExerciseMenu = () => {
  const { userRoutine, addExercise } = useRoutine();
  const [title, setTitle] = useState('');
  const [reps, setReps] = useState('');
  const [rest, setRest] = useState('');
  const [weight, setWeight] = useState('');

  const handleAddExercise = () => {
    const newId = userRoutine.length > 0 ? Math.max(...userRoutine.map(ex => ex.id)) + 1 : 1;

    const newExercise = {
      id: newId,
      title,
      Reps: reps,
      Rest: rest,
      weight,
    };

    addExercise(newExercise); // Usar la función para agregar el nuevo ejercicio

    // Reiniciar los campos
    setTitle('');
    setReps('');
    setRest('');
    setWeight('');
  };

  return (
    <div className="bg-[#2E2E2E] p-4 mb-4 text-white">
      {/* Inputs para agregar un nuevo ejercicio */}
      <input
        className="bg-[#2E2E2E] text-white text-2xl w-full mb-2"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Título del ejercicio"
      />
      <div className="flex items-center justify-between mb-2">
        <label className="text-gray-400">Reps:</label>
        <input
          type="number"
          className="bg-[#3A3A3A] p-2 rounded text-white"
          value={reps}
          onChange={(e) => setReps(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-gray-400">Descanso (seg):</label>
        <input
          type="number"
          className="bg-[#3A3A3A] p-2 rounded text-white"
          value={rest}
          onChange={(e) => setRest(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-between mb-2">
        <label className="text-gray-400">Peso (kg):</label>
        <input
          type="number"
          className="bg-[#3A3A3A] p-2 rounded text-white"
          value={weight}
          onChange={(e) => setWeight(e.target.value)}
        />
      </div>
      <button
        onClick={handleAddExercise}
        className="bg-[#161616] p-2 rounded text-white w-full hover:bg-[#2E2E2E]"
      >
        Agregar ejercicio
      </button>
    </div>
  );
};

export default CreateExerciseMenu;
