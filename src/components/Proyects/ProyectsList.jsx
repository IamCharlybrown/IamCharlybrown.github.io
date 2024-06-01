import React, { useContext, useEffect } from "react";
import { ProyectContext } from "../../context/ProyectContext";
import { DndContext, closestCenter } from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ProyectCard from "./ProyectCard";

function ProyectList() {
  const { proyects, setProyects } = useContext(ProyectContext);

  function handleDragEnd(evt) {
    const { active, over } = evt;
    
    setProyects((proyects) => {
      const oldIndex = proyects.findIndex(
        (proyect) => proyect.id === active.id
      );
      const newIndex = proyects.findIndex((proyect) => proyect.id === over.id);

      return arrayMove(proyects, oldIndex, newIndex);
    });
  }
  return (
    <>
      <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
        <SortableContext
          strategy={verticalListSortingStrategy}
          items={proyects}
        >
          {proyects.map((proyect) => (
            <ProyectCard key={proyect.title} proyect={proyect} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
}

export default ProyectList;
