import React, { useState } from 'react';
import { useWorkouts } from '../../context/HomeContext'; 
import { FaEllipsisV } from 'react-icons/fa';

function MyWorkouts() {
  const { workouts, addWorkout, updateWorkout, removeWorkout } = useWorkouts(); 
  const [newWorkoutTitle, setNewWorkoutTitle] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [workoutToDelete, setWorkoutToDelete] = useState(null);

  // Función para agregar un nuevo workout
  const handleAddWorkout = () => {
    if (newWorkoutTitle.trim()) {
      addWorkout({ id: Date.now(), title: newWorkoutTitle, completed: false });
      setNewWorkoutTitle('');
    }
  };

  // Función para marcar workout como completado
  const handleToggleComplete = (id) => {
    updateWorkout(id, { completed: !workouts.find(workout => workout.id === id).completed });
  };

  // Función para abrir el modal
  const openModal = (workout) => {
    setWorkoutToDelete(workout);
    setIsModalOpen(true);
  };

  // Función para confirmar la eliminación del workout
  const confirmDelete = () => {
    if (workoutToDelete) {
      removeWorkout(workoutToDelete.id);
      setWorkoutToDelete(null);
      setIsModalOpen(false);
    }
  };

  // Función para cerrar el modal
  const closeModal = () => {
    setIsModalOpen(false);
    setWorkoutToDelete(null);
  };

  return (
    <div className="bg-[#161616] p-4 rounded-lg shadow-md max-w-md mx-auto">
      <h3 className="text-white text-2xl font-extrabold mb-4">My Workouts</h3>

      <ul className="space-y-2 max-h-[200px] overflow-hidden">
        {workouts.slice(0, 4).map((workout) => (
          <li
            key={workout.id}
            className={`flex items-center justify-between bg-[#2E2E2E] p-2 rounded-lg transition duration-200 ${
              workout.completed ? 'line-through text-gray-400' : 'text-white'
            }`}
          >
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                checked={workout.completed}
                onChange={() => handleToggleComplete(workout.id)}
                className="text-blue-500 focus:ring-blue-400"
              />
              <span>{workout.title}</span>
            </div>
            <FaEllipsisV className="text-gray-400 cursor-pointer" onClick={() => openModal(workout)} />
          </li>
        ))}
      </ul>

      <div className="mt-4 flex items-center space-x-2">
        <input
          type="text"
          value={newWorkoutTitle}
          onChange={(e) => setNewWorkoutTitle(e.target.value)}
          placeholder="Add new workout"
          className="flex-grow p-2 bg-[#2E2E2E] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <button
          onClick={handleAddWorkout}
          className="bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition duration-200"
        >
          Add
        </button>
      </div>

      {/* Modal de confirmación */}
      {isModalOpen && (
  <div className="fixed inset-0 flex items-center justify-center z-50">
    <div className="bg-[#2E2E2E] p-6 rounded-lg shadow-lg relative z-60">
      <h2 className="text-white text-lg font-bold mb-4">Eliminar Workout</h2>
      <p className="text-white mb-4">¿Estás seguro de que deseas eliminar "{workoutToDelete?.title}"?</p>
      <div className="flex justify-between">
        <button 
          onClick={closeModal} 
          className="bg-gray-500 text-white px-4 py-2 rounded-lg hover:bg-gray-600"
        >
          Cancelar
        </button>
        <button 
          onClick={confirmDelete} 
          className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600"
        >
          Eliminar
        </button>
      </div>
    </div>
    
  </div>
)}
    </div>
  );
}

export default MyWorkouts;
