import React, { useState } from 'react';
import { useRoutine } from '../../context/CreateRoutineContext';

const UpdateProgressMenu = ({ exercise }) => {
  const { updateExercise } = useRoutine();
  const [date, setDate] = useState('');
  const [progress, setProgress] = useState('');
  const [notes, setNotes] = useState('');


  if (!exercise) {
    return <div className="text-red-500">Ejercicio no disponible.</div>;
  }

  const handleUpdateProgress = () => {
    const updatedData = {
      date,
      progress,
      notes,
    };
    console.log('Actualizando progreso:', updatedData);
    updateExercise(exercise.id, { ...exercise, ...updatedData });
  };

  return (
    <div className="bg-[#2E2E2E] p-4 mb-4 text-white rounded-lg">
      <h3 className="text-lg mb-2">Actualizar Progreso - {exercise.title}</h3>

      {/* Fecha */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-gray-400">Fecha:</label>
        <input
          type="date"
          className="bg-[#3A3A3A] p-2 rounded text-white"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>

      {/* Progreso */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-gray-400">Progreso:</label>
        <input
          type="text"
          className="bg-[#3A3A3A] p-2 rounded text-white"
          placeholder="Describe tu progreso"
          value={progress}
          onChange={(e) => setProgress(e.target.value)}
        />
      </div>

      {/* Notas */}
      <div className="flex items-center justify-between mb-2">
        <label className="text-gray-400">Notas:</label>
        <textarea
          className="bg-[#3A3A3A] p-2 rounded text-white"
          placeholder="Notas adicionales"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />
      </div>

      {/* Botón para guardar cambios */}
      <button
        onClick={handleUpdateProgress}
        className="bg-[#161616] p-2 rounded text-white w-full hover:bg-[#2E2E2E]"
      >
        Guardar Progreso
      </button>
    </div>
  );
};

export default UpdateProgressMenu;
