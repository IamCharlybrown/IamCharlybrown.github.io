  import React from "react";
  import { useDroppable, DndContext } from "@dnd-kit/core";

  function DroppableComponent({ url, setUrl }) {
    const { isOver, setNodeRef } = useDroppable({
      id: "droppable",
    });

    const handleDrop = (event) => {
      event.preventDefault();
      const droppedUrl = event.dataTransfer.getData("text/uri-list");
      if (droppedUrl) {
        setUrl(droppedUrl);
      } else {
        console.log('No URL found in dataTransfer');
      }
    };

    return (
      <DndContext>
        <div
          ref={setNodeRef}
          onDragOver={(event) => event.preventDefault()}
          onDrop={handleDrop}
          style={{
            width: "100%",
            height: "100px",
            border: "2px dashed #cccccc",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: isOver ? "#e0f7fa" : "#ffffff",
            padding: "50px",
            marginBottom: "10px",
          }}
        >
          <p>Arrastra / Escribe tu URL aquí!:</p>
          <input
            type="text"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
            placeholder="Enter URL"
            style={{
              width: "100%",
              padding: "8px",
              borderRadius: "4px",
              border: "1px solid #cccccc",
            }}
          />
        </div>
      </DndContext>
    );
  }

  export default DroppableComponent;
