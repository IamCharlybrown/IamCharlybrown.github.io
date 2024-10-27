import React, { useState } from 'react';
import { FaHourglassHalf } from 'react-icons/fa'; 

function TrackProgress() {
  const initialProgressData = [
    { title: 'Total Ejercitado', duration: '1h 25m 30s' },
    { title: 'Push Day', duration: '30m 18s' },
    { title: 'Cardio', duration: '1h 48m 22s' },
    { title: 'Descansos totales', duration: '17m 1s' },
  ];

  const [progressData, setProgressData] = useState(initialProgressData);
  const [editingIndex, setEditingIndex] = useState(null);
  const [newDuration, setNewDuration] = useState('');

  const handleEditClick = (index) => {
    setEditingIndex(index);
    setNewDuration(progressData[index].duration);
  };

  const handleSave = (index) => {
    const updatedProgressData = [...progressData];
    updatedProgressData[index].duration = newDuration;
    setProgressData(updatedProgressData);
    setEditingIndex(null);
    setNewDuration('');
  };

  return (
    <div className="bg-[#2E2E2E] p-4 rounded-lg shadow-md">
      <h3 className="text-white text-xl font-bold mb-4">Track Progress</h3>
      <ul>
        {progressData.map((item, index) => (
          <li key={index} className="flex items-center justify-between text-gray-300 py-2 border-b border-gray-600">
            <div className="flex items-center">
              <FaHourglassHalf className="text-white mr-2" />
              <span>{item.title}</span>
            </div>
            <div className="flex items-center">
              {editingIndex === index ? (
                <>
                  <input 
                    type="text" 
                    value={newDuration} 
                    onChange={(e) => setNewDuration(e.target.value)} 
                    className="bg-gray-700 text-white rounded px-2 mr-2" 
                    placeholder="hh:mm:ss" 
                  />
                  <button 
                    className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
                    onClick={() => handleSave(index)}
                  >
                    Save
                  </button>
                </>
              ) : (
                <>
                  <span className="mr-2">{item.duration}</span>
                  <button 
                    className="bg-gray-600 text-white px-4 py-1 rounded hover:bg-gray-700"
                    onClick={() => handleEditClick(index)}
                  >
                    Edit
                  </button>
                </>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TrackProgress;
