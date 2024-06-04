import React from 'react';

function PriorityCircle({ color, onClick }) {
  return (
    <div 

      onClick={onClick} 
      style={{
        backgroundColor: color,
        width: 15,
        height: 15,
        borderRadius: '50%',
        display: 'inline-block',
        cursor: 'pointer',
        marginRight: '15px',
        marginTop :'5px',
       
      }}
    >
    </div>
  );
}

export default PriorityCircle;
