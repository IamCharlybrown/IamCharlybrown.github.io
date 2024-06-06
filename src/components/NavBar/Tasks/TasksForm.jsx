import React, { useState, useContext } from "react";
import {
  Input,
  Stack,
  Box,
  Textarea,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";
import AddProyectButton from "../../Proyects/AddProyectButton";
import CloseFormButton from "../../Proyects/CloseFormButton";
import { NavBarContext } from "../../../context/NavBarContext";

function TasksForm() {
  const { createTask } = useContext(NavBarContext);

  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);
  }

  const [title, setTitle] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createTask(title);
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
            ></Input>

            <Box>
              <Button colorScheme="green" type="submit">
                Guardar
              </Button>
            </Box>
          </Box>
        </form>
      ) : (
        <></>
      )}
    </Stack>
  );
}

export default TasksForm;
