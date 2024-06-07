import { useContext, useState } from "react";
import { NavBarContext } from "../../../context/NavBarContext";
import {
  useToast,
  Card,
  CardHeader,
  Heading,
  Flex,
  Checkbox,
  Box,
} from "@chakra-ui/react";
import { CSS } from "@dnd-kit/utilities";
import { useSortable } from "@dnd-kit/sortable";
import Priority from "./Priority/Priority";

function TaskCard({ task }) {
  const { deleteTask, updatePriority } = useContext(NavBarContext);

  const toast = useToast();

  const handleCheckboxClick = () => {
    toast({
      title: "Tarea Eliminada.",
      description: "Sigue así!",
      status: "success",
      duration: 1500,
      isClosable: true,
    });

    setTimeout(() => deleteTask(task.id), 1500);
  };

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: task.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handlePriorityChange = (newPriority) => {
    updatePriority(task.id, newPriority);
  };
  return (
    <Card mt={2} ref={setNodeRef} style={style} {...attributes} {...listeners}>
      <CardHeader>
        <Flex alignItems="center" justifyContent="space-between">
          <Box display={"flex"}>
            <Priority
              color={task.priority}
              onHandleColorChange={handlePriorityChange}
            />
            <Heading size="md">{task.title}</Heading>
          </Box>
          <Checkbox
            name="checkbox-deleteTask"
            onChange={handleCheckboxClick}
            size="lg"
            sx={{
              transform: "scale(1.2)",
              boxShadow: "0 0 5px rgba(0, 0, 0, 0.5)",
            }}
          ></Checkbox>
        </Flex>
      </CardHeader>
    </Card>
  );
}

export default TaskCard;
