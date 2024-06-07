import React, { useState } from "react";
import PriorityCircle from "./PriorityCircle";
import PriorityMenu from "./PriorityMenu";

function Priority({ onHandleColorChange, color }) {
  
  const [showPriority, setShowPriority] = useState(false);

  function handleClick(e) {
    e.preventDefault();
    setShowPriority(!showPriority);
  }

  function handlePriorityChange(mode) {
    onHandleColorChange(mode);
    setShowPriority(false);
  }

  return (
    <button onClick={handleClick}>
      {showPriority ? (
        <PriorityMenu onHandlePriorityChange={handlePriorityChange} />
      ) : (
        <PriorityCircle color={color} />
      )}
    </button>
  );
}

export default Priority;

