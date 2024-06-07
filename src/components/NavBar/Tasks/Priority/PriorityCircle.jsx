import React from "react";

function PriorityCircle({ color, onClick }) {
  return (
    <div
      onClick={onClick}
      style={{
        backgroundColor: color,
        width: 20,
        height: 20,
        borderRadius: "50%",
        display: "inline-block",
        cursor: "pointer",
        marginRight: "15px",
        marginTop: "5px",
        border: "0",
        transition: "transform 0.2s, opacity 0.2s", 
      }}
     
      onMouseEnter={(e) => {
        e.target.style.transform = "scale(1.5)";
        e.target.style.opacity = "0.5";
        e.target.style.border = "1px solid grey"
      }}
      onMouseLeave={(e) => {
        e.target.style.transform = "scale(1)";
        e.target.style.opacity = "1";
        e.target.style.border = "0"
      }}
    ></div>
  );
}

export default PriorityCircle;
