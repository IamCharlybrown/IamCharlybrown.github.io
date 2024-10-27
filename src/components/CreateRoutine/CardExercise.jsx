import React, { useState } from 'react';
import { useRoutine } from '../../context/CreateRoutineContext';

const CardExercise = ({ exercise }) => {
  const { updateExercise } = useRoutine();
  const [title, setTitle] = useState(exercise.title);
  const [reps, setReps] = useState(exercise.Reps);
  const [rest, setRest] = useState(exercise.Rest);
  const [weight, setWeight] = useState(exercise.weight || ''); // Nueva propiedad para el peso

  const handleUpdate = () => {
    updateExercise(exercise.id, { title, Reps: reps, Rest: rest, weight });
  };

  return (
    <div className="bg-[#2E2E2E] p-4   mb-4 text-white">
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
        onClick={handleUpdate}
        className="bg-[#161616] p-2 rounded text-white w-full hover:bg-[#2E2E2E]" // Botón negro
      >
        Guardar cambios
      </button>
    </div>
  );
};

export default CardExercise;
