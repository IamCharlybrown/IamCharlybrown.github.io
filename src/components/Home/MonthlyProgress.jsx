import React from 'react';
import { Link } from 'react-router-dom';

function MonthlyProgress() {
  return (
    <div className="bg-[#2E2E2E] p-6 rounded-lg shadow-lg">
      <h3 className="text-white text-2xl font-extrabold mb-4">This Month Progress</h3>
      
      <ul className="space-y-4">
        <li>
          <Link to="/dashboard" className="flex justify-between items-center text-white bg-[#161616] p-4 rounded-lg transition hover:bg-gray-700">
            <span className="text-lg">Weekly workout plan</span>
            <span className="text-gray-400">➔</span>
          </Link>
        </li>
        <li>
          <Link to="/dashboard" className="flex justify-between items-center text-white bg-[#161616] p-4 rounded-lg transition hover:bg-gray-700">
            <span className="text-lg">Exercise</span>
            <span className="text-gray-400">➔</span>
          </Link>
        </li>
      </ul>
      
     
    </div>
  );
}

export default MonthlyProgress;
