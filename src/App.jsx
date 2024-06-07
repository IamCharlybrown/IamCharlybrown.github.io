import { useContext } from "react";
import { ChakraProvider, Box, Flex, Heading } from "@chakra-ui/react";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import { SettingsContext } from "./context/SettingsContext";
import Clock from "./components/Clock";
import NavBar from "./components/NavBar/NavBar";

function App() {
  const { showSettings } = useContext(SettingsContext);

  return (
    <ChakraProvider>
      <Flex as="header" align="center" justify="center" width="100%">
        <Heading
          as="h1"
          color="white"
          p="1.5"
          px="5"
          py="3"
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="center"
          w="100%"
          bgColor="#000000"
        >
          <Flex align="center" justify="center">
            <Clock />
            <h1> Pomodoro Learn Code</h1>
          </Flex>
        </Heading>
      </Flex>
      <Flex
        as="main"
        align="center"
        justify="center"
        h={{ base: "auto", md: "100vh" }}
        direction={{ base: "column", md: "row" }}
      >
        {/* Pomodoro timer Box */}
        <Box
          className="bg-gradient-to-r from-purple-500 to-pink-500"
          w={{ base: "100%", md: "50%" }}
          h={{ base: "auto", md: "100vh" }}
          display="flex"
          flexDirection="column"
          alignItems="center"
          justifyContent="flex-start"
          textAlign="center"
          py={8}
        >
          {showSettings ? (
            <Box mx="auto" maxW="xl"  className="flex flex-col items-center justify-center h-full size-full">
              <Settings />
            </Box>
          ) : (
            <Box mx="auto" maxW="xl"  className="flex flex-col items-center justify-center h-full size-full p-6 md:p-6 lg:p-6 xl:p-0">
              <Heading as="h1" size="2xl" mb="4" textColor={"white"} >
              Timer
            </Heading>
              <Timer />
            </Box>
          )}
        </Box>
        {/* Proyects Box */}
        <Box
          className="Proyects"
          flex={{ base: "0 0 80%", md: "0 0 50%" }}
          ml={{ base: 0, md: 0 }}
          w={{ base: "100%", md: "50%" }}
          h={{ base: "auto", md: "100vh" }}
          maxH={{ base: "950px", md: "auto" }} // Max h
          p={{ base: 2, md: 4 }}
          borderRadius="md"
          boxShadow="md"
          overflow="auto" // activates infinite scroll in component
        >
          <NavBar />
        </Box>
      </Flex>
      <footer></footer>
    </ChakraProvider>
  );
}

export default App;
