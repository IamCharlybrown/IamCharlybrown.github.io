import { useContext } from "react";
import { CursesContext } from "../../../context/CursesContext";
import {
  Card,
  Image,
  Stack,
  CardBody,
  Button,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { PlayIcon, TrashIcon } from "@heroicons/react/16/solid";

function CursesCard({ curse }) {
  const { deleteCurse } = useContext(CursesContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: curse.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  function handleClick() {
    window.open(curse.url, "_blank");
  }

  return (
    <Card
      marginBottom={2}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      direction={{ base: "column", sm: "row", md: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Image
        paddingTop={5}
        paddingStart={5}
        objectFit="cover"
        maxH={{ base: "100%", sm: "120px" }}
        maxW={{ base: "100%", sm: "200px" }}
        src={curse.img}
        alt={curse.title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{curse.title}</Heading>

          <Text py="2">{curse.platform}</Text>
          <Button
            variant="solid"
            colorScheme="blue"
            marginEnd={4}
            onClick={handleClick}
          >
            <Box display={"flex"}>
              <PlayIcon height={20}></PlayIcon>
              <Text marginStart={2}>Ir al curso</Text>
            </Box>
          </Button>
          <Button colorScheme="red" onClick={() => deleteCurse(curse.id)}>
            <Box display={"flex"}>
              <TrashIcon height={20}></TrashIcon>
              <Text marginStart={2}>Eliminar</Text>
            </Box>
          </Button>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default CursesCard;
