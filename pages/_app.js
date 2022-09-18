import { ChakraProvider } from "@chakra-ui/react";
import Navbar from "../src/components/Navbar/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Navbar>
        <Component {...pageProps} />
      </Navbar>
    </ChakraProvider>
  );
}

export default MyApp;
