import React, { useState, useContext } from "react";
import { CursesContext } from "../../../context/CursesContext";
import { Card, Image, SimpleGrid, Box, CardBody } from "@chakra-ui/react";

function ImageSelector({ setImg }) {

  const { curseImages } = useContext(CursesContext);

  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <Card
     
      marginBottom={2}
      direction={"row"}
      overflow="hidden"
      variant="outline"
    >
      <CardBody>
        <SimpleGrid
          columns={{ base: 2, xl: 4 }}
          spacing={5}
          alignItems="center"
        >
          {curseImages.map((src, index) => (
            <Box key={index} padding={2}>
              <button
                onClick={(e) => {
                  e.preventDefault(), setImg(src), setSelectedImage(index);
                }}
                className={`${selectedImage === index ? "" : ""}`}
              >
                <Image
                  objectFit="cover"
                  maxH={{ base: "100%", sm: "120px", md: "100%", xl: "100%" }}
                  maxW={{ base: "100%", sm: "200px", md: "100%", xl: "100%" }}
                  src={src}
                  alt={`curso-${index + 1}`}
                  className={`transition-transform transform ${
                    selectedImage === index
                      ? "scale-110 shadow-xl"
                      : "hover:scale-105"
                  }`}
                />
              </button>
            </Box>
          ))}
        </SimpleGrid>
      </CardBody>
    </Card>
  );
}

export default ImageSelector;
