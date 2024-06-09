import React, { useContext, useState } from "react";
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
import DroppableComponent from "../../DroppableComponet";
import ImageSelector from "./ImageSelector";

function CursesForm() {
  const { createCurse } = useContext(CursesContext);

  const [showForm, setShowForm] = useState(false);

  function handleShowForm() {
    setShowForm(!showForm);
  }

  const [title, setTitle] = useState("");
  const [platform, setPlatform] = useState("");
  const [url, setUrl] = useState("");
  const [img, setImg] = useState(
    "https://www.lacorformacion.com/wp-content/uploads/curso-por-defecto.jpg"
  );

  function handleSubmit(e) {
    e.preventDefault();
    createCurse(title, platform, url, img);
    setTitle("");
    setPlatform("");
    setUrl("");
    setImg("");
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
            <label className="block text-gray-800 font-semibold">
              {" "}
              Título del curso
            </label>
            <Input
              required
              name="title"
              width={{ base: "100%", md: "79.8%" }}
              placeholder="Título del curso"
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              marginBottom={5}
              bg="white"
              border="1px solid #ccc"
              _hover={{ border: "1px solid #888" }}
              _focus={{
                border: "1px solid #555",
                boxShadow: "0 0 5px rgba(81, 203, 238, 1)",
              }}
            />
            <label className="block text-gray-800 font-semibold">
              {" "}
              Plataforma
            </label>
            <Textarea
              name="platform"
              width={{ base: "100%", md: "79.8%" }}
              placeholder="En qué plataforma se encuentra?"
              onChange={(e) => setPlatform(e.target.value)}
              value={platform}
              marginBottom={5}
              bg="white"
              border="1px solid #ccc"
              _hover={{ border: "1px solid #888" }}
              _focus={{
                border: "1px solid #555",
                boxShadow: "0 0 5px rgba(81, 203, 238, 1)",
              }}
            />
            <DroppableComponent
           
              url={url}
              setUrl={setUrl}
              width={{ base: "100%", md: "79.8%" }}
            />
            <ImageSelector setImg={setImg} />
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
