import { Flex, Link, Icon, Button, Box, Text } from "@chakra-ui/react";
import { FaRegEnvelope, FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { useState } from "react";
import { Link as RouteLink } from "next";

const Navbar = ({ act }) => {
  const [show, setShow] = useState(true);
  const [copy, setCopy] = useState("Copy");
  const [displayNav, setDisplayNav] = useState("none");

  const handleCopy = () => {
    copyMail();
    setCopy("Copied!");
    const t = setTimeout(() => {
      setCopy("Copy");
    }, 4000);
  };

  const handleHide = () => {
    displayNav === "none" ? setDisplayNav("block") : setDisplayNav("none");
  };

  const copyMail = async () => {
    try {
      await navigator.clipboard.writeText("jmcechetto@gmail.com");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      w={["auto", "100vw"]}
      h={["auto", "5rem"]}
      bg='#f8f9fa'
      as='nav'
      direction={["column", "row"]}
      align={["flex-start", "center"]}
      grow
      position='fixed'
      top='0'
      left='0'
      zIndex='10'
      p='.6rem'
    >
      <Button
        variant='unstyled'
        display={["block", "none"]}
        onClick={handleHide}
        alignSelf='flex-start'
      >
        <Icon as={FaBars} w={8} h={8}></Icon>
      </Button>
      <Flex
        w={["70vw", "100%"]}
        h={["100vh", "auto"]}
        display={[displayNav, "flex"]}
        direction={["column", "row"]}
        justify={["space-around", "space-between"]}
        align='flex-start'
      >
        <Flex
          w='100%'
          align='flex-start'
          justify={["space-around", "flex-start"]}
          direction={["column", "row"]}
        >
          <Link
            my={[".5rem", "auto"]}
            ml={[0, "2rem"]}
            style={{ fontWeight: act[0] ? "bold" : 400 }}
            as={RouteLink}
            href='#home'
          >
            Home
          </Link>
          <Link
            my={[".5rem", "auto"]}
            ml={[0, "2rem"]}
            as={RouteLink}
            href='#projects'
            style={{ fontWeight: act[1] ? "bold" : 400 }}
          >
            Projects
          </Link>
          <Link
            my={[".5rem", "auto"]}
            ml={[0, "2rem"]}
            as={RouteLink}
            href='#about'
            style={{ fontWeight: act[2] ? "bold" : 400 }}
          >
            About Me
          </Link>
          <Link
            href='https://drive.google.com/file/d/1MGkA2z1SLepjdKL7qB9lRnbm6Ah3FyEf/view?usp=sharing'
            target='_blank'
            my={[".5rem", "auto"]}
            ml={[0, "2rem"]}
          >
            CV
          </Link>
        </Flex>
        <Flex
          w='100%'
          direction={["column", "row"]}
          justify={["flex-start", "flex-end"]}
        >
          <Box
            position='relative'
            onMouseEnter={() => setShow(false)}
            onMouseLeave={() => setShow(true)}
          >
            <Icon as={FaRegEnvelope} w={8} h={8} mr='1rem'></Icon>
            <Link
              display={["inline-block", "none"]}
              href='mailto: jmcechetto@gmail.com'
            >
              Email Me
            </Link>
            <Box
              display={["none", "block"]}
              position='absolute'
              top='120%'
              right='-150%'
              m='auto'
              _after={{
                width: 0,
                height: 0,
                content: '""',
                borderBottom: "10px solid #333",
                borderTop: "10px solid transparent",
                borderLeft: "10px solid transparent",
                borderRight: "10px solid transparent",
                position: "absolute",
                bottom: "100%",
                left: "50%",
                marginTop: "-10px",
              }}
              bg='#333'
              p='1rem'
              hidden={show}
            >
              <Text color='#fff' fontWeight='bold' mb='.5rem'>
                jmcechetto@gmail.com
              </Text>
              <Button onClick={handleCopy} isFullWidth p='.25rem' h='auto'>
                {copy}
              </Button>
            </Box>
          </Box>
          <Link href={"https://github.com/jmceche"} target='_blank' mr='1rem'>
            <Icon as={FaGithub} w={8} h={8}></Icon>
            <Text ml='1rem' display={["inline-block", "none"]}>
              Github
            </Text>
          </Link>
          <Link
            href={
              "https://www.linkedin.com/in/juan-mart%C3%ADn-cechetto-395202102/"
            }
            target='_blank'
            mr='1rem'
          >
            <Icon as={FaLinkedin} w={8} h={8}></Icon>
            <Text ml='1rem' display={["inline-block", "none"]}>
              Linkedin
            </Text>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
