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
import AddProyectButton from "./AddProyectButton";
import CloseFormButton from "./CloseFormButton";
import { ProyectContext } from "../../context/ProyectContext";

function ProyectForm() {
  const { createProyect } = useContext(ProyectContext);

  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);
  }

  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createProyect(title, platform);
    setTitle("");
    setPlatform("");
    setShowForm(!showForm);
  }

  return (
    <Stack marginBottom={5}>
      <Box>
        <Flex alignItems="center" textAlign={{ base: "Center", md: "start" }}>
          <Heading as="h2" size="lg" className="text-2xl pb-2 font-semibold">
            Agrega Tus Cursos!
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
              width={{ base: "100%", md: "79.8%" }}
              placeholder="Agrega un nuevo curso"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              marginBottom={5}
            ></Input>
            <Textarea
              width={{ base: "100%", md: "79.8%" }}
              placeholder="En que plataforma se encuentra"
              onChange={(e) => setPlatform(e.target.value)}
              value={platform}
              marginBottom={5}
            ></Textarea>
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

export default ProyectForm;
