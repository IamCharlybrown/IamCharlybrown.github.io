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
} from "@chakra-ui/react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

function CursesCard({curse}) {
  const { deleteCurse } = useContext(CursesContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: curse.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      marginBottom={2}
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      // marginRight={{ base: 0, md: 200 }}
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
          <Button variant="solid" colorScheme="blue" marginEnd={4}>
            Ir al curso
          </Button>
          <Button colorScheme="red" onClick={() => deleteCurse(curse.id)}>
            Eliminar
          </Button>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default CursesCard