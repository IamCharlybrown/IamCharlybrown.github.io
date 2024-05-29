import React from "react";
import { ChakraProvider } from "@chakra-ui/react";
import Timer from "./components/Timer/Timer";

function App() {
  return (
    <ChakraProvider>
      <header></header>
      <main className="flex items-center justify-center h-screen">
        <div className="w-1/6">
          <Timer></Timer>
        </div>
      </main>
      <footer></footer>
    </ChakraProvider>
  );
}

export default App;
