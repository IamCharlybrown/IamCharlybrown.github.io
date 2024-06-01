import { useContext } from "react";
import { ProyectContext } from "../../context/ProyectContext";
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

function ProyectCard({ proyect }) {
  const { deleteProyect } = useContext(ProyectContext);

  const { attributes, listeners, setNodeRef, transform, transition } =
    useSortable({ id: proyect.id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <Card
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
      marginRight={{ base: 0, md: 200 }}
    >
      <Image
        paddingTop={5}
        paddingStart={5}
        objectFit="cover"
        maxH={{ base: "100%", sm: "120px" }}
        maxW={{ base: "100%", sm: "200px" }}
        src={proyect.img}
        alt={proyect.title}
      />

      <Stack>
        <CardBody>
          <Heading size="md">{proyect.title}</Heading>

          <Text py="2">{proyect.platform}</Text>
          <Button variant="solid" colorScheme="blue" marginEnd={4}>
            Planificar
          </Button>
          <Button colorScheme="red" onClick={() => deleteProyect(proyect.id)}>
            Eliminar
          </Button>
        </CardBody>
      </Stack>
    </Card>
  );
}

export default ProyectCard;
