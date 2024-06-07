import React, { useContext } from "react";
import { CursesContext } from "../../../context/CursesContext";
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
import CursesCard from "./CursesCard";

function CursesList() {
  //import context state
  const { curses, setCurses } = useContext(CursesContext);

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

    setCurses((curses) => {
      const oldIndex = curses.findIndex((curse) => curse.id === active.id);
      const newIndex = curses.findIndex((curse) => curse.id === over.id);

      return arrayMove(curses, oldIndex, newIndex);
    });
  }
  return (
    <>
      <DndContext
        collisionDetection={closestCenter}
        onDragEnd={handleDragEnd}
        sensors={sensors}
      >
        <SortableContext strategy={verticalListSortingStrategy} items={curses}>
          {curses.map((curse) => (
            <CursesCard key={curse.id} curse={curse} />
          ))}
        </SortableContext>
      </DndContext>
    </>
  );
}

export default CursesList;
