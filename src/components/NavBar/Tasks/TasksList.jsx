import React, { useContext } from "react";
import { NavBarContext } from "../../../context/NavBarContext";
import TaskCard from "./TaskCard";
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  MouseSensor,
} from "@dnd-kit/core";
import {
  arrayMove,
  verticalListSortingStrategy,
  SortableContext,
} from "@dnd-kit/sortable";

function TasksList() {
  const sensors = useSensors(
    useSensor(MouseSensor, {
      activationConstraint: {
        distance: 10,
      },
    })
  );
  const { tasks, setTasks } = useContext(NavBarContext);

  function handleDragEnd(evt) {
    const { active, over } = evt;
    setTasks((tasks) => {
      const oldIndex = tasks.findIndex((task) => task.id === active.id);
      const newIndex = tasks.findIndex((task) => task.id === over.id);
      return arrayMove(tasks, oldIndex, newIndex);
    });
  }

  return (
    <DndContext
      collisionDetection={closestCenter}
      sensors={sensors}
      onDragEnd={handleDragEnd}
    >
      <SortableContext strategy={verticalListSortingStrategy} items={tasks}>
        <div>
          {tasks.map((task) => (
            <TaskCard key={task.id} task={task}></TaskCard>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

export default TasksList;
