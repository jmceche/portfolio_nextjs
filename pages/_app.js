import { ChakraProvider, extendTheme } from "@chakra-ui/react";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider
      theme={extendTheme({
        fonts: {
          body: "Montserrat, sans-serif",
          heading: "Montserrat, sans-serif"
        }
      })}
    >
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
