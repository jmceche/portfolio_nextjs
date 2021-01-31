import { useState, useEffect, useCallback } from "react";
import Head from "next/head";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";
import Projects from "../components/Projects";
import About from "../components/About";

export default function Home() {
  const [scroll, setScroll] = useState(0);
  const [highl, setHighl] = useState([true, false, false]);
  const [heights, setHeights] = useState([]);
  const projectRef = useCallback((node) => {
    if (node !== null) {
      setHeights([...heights, node.offsetTop]);
    }
  }, []);
  const aboutRef = useCallback((node) => {
    if (node !== null) {
      setHeights([...heights, node.offsetTop]);
    }
  }, []);

  useEffect(() => {
    const about = document.getElementById("about");
    const projects = document.getElementById("projects");
    const handleScroll = () => {
      setScroll(window.scrollY);
      if (scroll + 400 > about.offsetTop) {
        setHighl([false, false, true]);
      } else if (scrollY > projects.offsetTop) {
        setHighl([false, true, false]);
      } else {
        setHighl([true, false, false]);
      }
    };
    document.addEventListener("scroll", handleScroll);
    return () => document.removeEventListener("scroll", handleScroll);
  });

  return (
    <div>
      <Head>
        <title>Juan Martin Cechetto</title>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1.0'
        ></meta>
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.gstatic.com' />
        <link
          href='https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600&display=swap'
          rel='stylesheet'
        />
      </Head>

      <Box as='main' bg='#fafafa' pb='25vh' id='home'>
        <Navbar act={highl} />
        <Hero />
        <Box id='projects' pt='4rem' ref={projectRef}>
          <Projects />
        </Box>
        <Box id='about' pt='4rem' ref={aboutRef}>
          <About />
        </Box>
      </Box>
    </div>
  );
}
