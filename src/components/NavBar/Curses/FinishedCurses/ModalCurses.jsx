import React, { useContext } from "react";
import { CursesContext } from "../../../../context/CursesContext";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

function ModalCurses() {
  const { curses } = useContext(CursesContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button bg={"#a855f7"} textColor={"white"} onClick={onOpen}>
        Mostrar cursos terminados
      </Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader></ModalHeader>
          <ModalCloseButton />
          <ModalBody>hola</ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default ModalCurses;
