import React from "react";
import PriorityCircle from "./PriorityCircle";

function PriorityMenu({ onPriorityChange }) {
  return (
    <div>
      <PriorityCircle color="green" onClick={() => onPriorityChange("green")} />
      <PriorityCircle
        color="yellow"
        onClick={() => onPriorityChange("yellow")}
      />
      <PriorityCircle color="red" onClick={() => onPriorityChange("red")} />
    </div>
  );
}

export default PriorityMenu;
