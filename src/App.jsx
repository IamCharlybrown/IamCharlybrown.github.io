import { useContext } from "react";
import { ChakraProvider, Box, Flex, Heading } from "@chakra-ui/react";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import { SettingsContext } from "./context/SettingsContext";
import ProyectList from "./components/Proyects/ProyectsList";
import Clock from "./components/Clock";
import ProyectForm from "./components/Proyects/ProyectForm";

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
          fontSize={{ base: "2xl", md: "3xl" }}
          textAlign="center"
          w="100%"
          bgColor="#EFA00B"
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
        p={{ base: 4, md: 8 }}
      >
        <Box
          flex={{ base: "0 0 80%", md: "0 0 5 0%" }}
          textAlign="center"
          mb={{ base: 8, md: 0 }}
          mr={{ base: 0, md: 8 }}
        >
          {!showSettings && (
            <Heading as="h1" size="xl" mb="4">
              Timer
            </Heading>
          )}
          {showSettings ? <Box mx="auto" maxW="xl"><Settings/></Box>: <Box mx="auto" maxW="lg"><Timer /></Box>}
        </Box>
        <Box
          flex={{ base: "0 0 80%", md: "0 0 50%" }}
          ml={{ base: 0, md: 0 }}
        >
          <ProyectForm/>
          <ProyectList />
        </Box>
      </Flex>
      <footer></footer>
    </ChakraProvider>
  );
}

export default App;
