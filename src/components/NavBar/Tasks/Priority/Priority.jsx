import React, { useState} from "react";
import PriorityCircle from "./PriorityCircle";
import PriorityMenu from "./PriorityMenu";

function Priority() {
  const [PriorityMode, setPriorityMode] = useState("gray");
  const [showPriority, setShowPriority] = useState(false);

  function handleClick() {
    setShowPriority(!showPriority);
  }

  function handlePriorityChange(mode) {
    setPriorityMode(mode);
    setShowPriority(false);
  }

  return (
    <button onClick={handleClick}>
      {showPriority ? (
        <PriorityMenu onPriorityChange={handlePriorityChange} />
      ) : (
        <PriorityCircle color={PriorityMode} />
      )}
    </button>
  );
}

export default Priority;
