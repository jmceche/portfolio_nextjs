import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Juan Martin Cechetto</title>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Box as='main' bg='#fafafa' pb='25vh' id='home'>
        <Navbar />
        <Hero />
        <Box id='projects' pt='4rem'>
          <Projects />
        </Box>
        <Box id='about' pt='4rem'>
          <About />
        </Box>
      </Box>
    </div>
  );
}
