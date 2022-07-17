import "./App.css";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "./theme/theme";
import { BrowserRouter } from "react-router-dom";
import { Router } from "./router/Router";
import { WagmiConfig } from "wagmi";
import { client } from "./wagmi";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <WagmiConfig client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </WagmiConfig>
    </ChakraProvider>
  );
}

export default App;
