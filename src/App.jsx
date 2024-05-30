import { useContext } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Timer from "./components/Timer/Timer";
import Settings from "./components/Settings/Settings";
import { SettingsContext } from "./context/SettingsContext";

function App() {
  const { showSettings } = useContext(SettingsContext);

  return (
    <ChakraProvider>
      <header className="flex items-center justify-center">
        {/* <h1>Pomodoro Learn Code</h1> */}
      </header>
      <main className="flex items-center justify-center h-screen">
        <div className="w-1/6 text-center">
          {showSettings ? <></> : <h1 className="text-2xl mb-4">Timer</h1>}
          {showSettings ? <Settings></Settings> : <Timer></Timer>}
        </div>
      </main>
      <footer></footer>
    </ChakraProvider>
  );
}

export default App;
