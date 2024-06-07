import React from "react";
import PriorityCircle from "./PriorityCircle";

function PriorityMenu({ onHandlePriorityChange }) {
  return (
    <div>
      <PriorityCircle
        color="green"
        onClick={(e) => {
          e.preventDefault();
          onHandlePriorityChange("green");
        }}
      />
      <PriorityCircle
        color="yellow"
        onClick={(e) => {
          e.preventDefault();
          onHandlePriorityChange("yellow");
        }}
      />
      <PriorityCircle
        color="red"
        onClick={(e) => {
          e.preventDefault();
          onHandlePriorityChange("red");
        }}
      />
    </div>
  );
}

export default PriorityMenu;
