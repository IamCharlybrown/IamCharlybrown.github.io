import React, { useState, useContext } from "react";
import { Input, Stack, Box, Flex, Heading, Button } from "@chakra-ui/react";
import AddProyectButton from "../../Proyects/AddProyectButton";
import CloseFormButton from "../../Proyects/CloseFormButton";
import { NavBarContext } from "../../../context/NavBarContext";
import Priority from "./Priority/Priority";

function TasksForm() {
  const { createTask } = useContext(NavBarContext);
  const [showForm, setShowForm] = useState(false);
  const [color, setColor] = useState("gray");
  const [title, setTitle] = useState("");

  function handleShowForm(e) {
    e.preventDefault();
    setShowForm(!showForm);
  }

  function handleColorChange(mode) {
    setColor(mode);
  }

  function handleSubmit(e) {
    e.preventDefault();
    createTask(title, color);
    setTitle("");
    setShowForm(!showForm);
  }

  return (
    <Stack marginBottom={5}>
      <Box>
        <Flex alignItems="center" textAlign={{ base: "Center", md: "start" }}>
          <Heading as="h2" size="lg" className="text-2xl pb-2 font-semibold">
            Crea tus tareas!
          </Heading>
          <Button
            colorScheme={showForm ? "yellow" : "green"}
            ml={4}
            onClick={handleShowForm}
          >
            {showForm ? <CloseFormButton /> : <AddProyectButton />}
          </Button>
        </Flex>
      </Box>
      {showForm ? (
        <form onSubmit={handleSubmit}>
          <Box>
            <Input
              name="taskTitle"
              width={{ base: "100%", md: "79.8%" }}
              placeholder="En que nos vamos a enfocar hoy?"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              marginBottom={5}
              marginRight={5}
            ></Input>

            <Priority onHandleColorChange={handleColorChange} color={color} />
            <Box>
              <Button colorScheme="green" type="submit">
                Guardar
              </Button>
            </Box>
          </Box>
        </form>
      ) : null}
    </Stack>
  );
}

export default TasksForm;

