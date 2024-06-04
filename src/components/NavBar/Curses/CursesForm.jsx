import {useContext, useState} from 'react'
import CloseFormButton from "../../Proyects/CloseFormButton";
import AddProyectButton from "../../Proyects/AddProyectButton";
import { CursesContext } from "../../../context/CursesContext";
import {
  Input,
  Stack,
  Box,
  Textarea,
  Flex,
  Heading,
  Button,
} from "@chakra-ui/react";

function CursesForm() {
  const { createCurse } = useContext(CursesContext);

  const [showForm, setShowForm] = useState(true);

  function handleShowForm() {
    setShowForm(!showForm);
  }

  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    createCurse(title, platform);
    setTitle("");
    setPlatform("");
    setShowForm(!showForm);
  }

  return (
    <Stack marginBottom={5}>
      <Box>
        <Flex alignItems="center" textAlign={{ base: "Center", md: "start" }}>
          <Heading as="h2" size="lg" className="text-2xl pb-2 font-semibold">
           Agrega Tus cursos!
          </Heading>
          <Button
            colorScheme={showForm ? "gray" : "green"}
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
              placeholder="título del curso"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              marginBottom={5}
            ></Input>
            <Textarea
              width={{ base: "100%", md: "79.8%" }}
              placeholder="en que plataforma se encuentra?"
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

export default CursesForm;
