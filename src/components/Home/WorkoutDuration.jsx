import React from 'react';
import { FaClock } from 'react-icons/fa'; // Asegúrate de tener react-icons instalado

function WorkoutDuration() {
  // Duraciones de ejemplo para cada entrenamiento
  const workouts = [
    { title: 'Pecho', duration: '1h 15m' },
    { title: 'Pierna', duration: '1h 30m' },
    { title: 'Espalda', duration: '1h 45m' },
    { title: 'Brazos', duration: '1h 10m' },
  ];

  return (
    <div className="bg-[#2E2E2E] p-4 rounded-lg shadow-md">
      <h3 className="text-white text-xl font-bold mb-4">Total Workout Duration</h3>
      <ul>
        {workouts.map((workout, index) => (
          <li key={index} className="flex items-center justify-between text-gray-300 py-2 border-b border-gray-600">
            <div className="flex items-center">
              <FaClock className="text-white mr-2" />
              <span>{workout.title}</span>
            </div>
            <span>{workout.duration}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default WorkoutDuration;
