import React, { useContext, useEffect } from "react";
import { ProyectContext } from "../../context/ProyectContext";
import {
  DndContext,
  closestCenter,
  useSensors,
  useSensor,
  MouseSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import ProyectCard from "./ProyectCard";

function ProyectList() {
  //import context state
  const { proyects, setProyects } = useContext(ProyectContext);

  //stablish a constraint to detect when the mouse moves the sortableItem, if not, the array keeps the same
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );

  //when the user moves a sortableItem this hanlde the event
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
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
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
