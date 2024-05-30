import { useContext } from "react";
import { ChakraProvider, Box, Flex, Heading } from "@chakra-ui/react";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import { SettingsContext } from "./context/SettingsContext";
import Proyects from "./components/Proyects/Proyects";
import Clock from "./components/Clock";

function App() {
  const { showSettings } = useContext(SettingsContext);

  return (
    <ChakraProvider>
      <Flex as="header" align="center" justify="center">
        <Heading
          as="h1"
          color="white"
          p="1.5"
          px="5"
          fontSize="3xl"
          textAlign="center"
          style={{ width: "100vw", backgroundColor: "#EFA00B" }}
        >
          <Flex align="center">
            <Clock />
            Pomodoro Learn Code
          </Flex>
        </Heading>
      </Flex>
      <Flex
        as="main"
        align="center"
        justify="center"
        h="100vh"
        direction={{ base: "column", md: "row" }}
      >
        <Box
          w={{ base: "70%", md: "30%" }}
          textAlign="center"
          mx={{ base: "0", md: "16" }}
          mb={{ base: "8", md: "0" }}
          mr={{ base: "0", md: "12" }}
          marginBottom={{ base: "0", md: "12" }}
        >
          {!showSettings && (
            <Heading as="h1" size="xl" mb="4">
              Timer
            </Heading>
          )}
          {showSettings ? <Settings /> : <Timer />}
        </Box>
        <Box
          w={{ base: "90%", md: "33%" }}
          textAlign="center"
          ml={{ base: "0", md: "12" }}
        >
          <Proyects />
        </Box>
      </Flex>
      <footer></footer>
    </ChakraProvider>
  );
}

export default App;
