import { Flex, Link, Icon, Button, Box, Text } from "@chakra-ui/react";
import { FaRegEnvelope, FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { useState } from "react";
import SideBar from "./Sidebar";
import NavLinks from "./NavLinks";
import personalInfo from "../assets/personalInfo.json";

const Navbar = ({ act }) => {
  const [show, setShow] = useState(true);
  const [copy, setCopy] = useState("Copy");

  const handleCopy = () => {
    copyMail();
    setCopy("Copied!");
    const t = setTimeout(() => {
      setCopy("Copy");
    }, 4000);
  };

  const copyMail = async () => {
    try {
      await navigator.clipboard.writeText(personalInfo.email);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Flex
      w="100vw"
      h="5rem"
      bg="#f8f9fa"
      as="nav"
      direction="row"
      align="center"
      grow
      position="fixed"
      top="0"
      left="0"
      zIndex="10"
      p=".6rem"
    >
      <SideBar />
      <Flex w="100%" direction="row" justify="space-between" align="center">
        <Flex
          w="100%"
          align="center"
          justify="flex-start"
          direction="row"
          display={["none", "flex"]}
        >
          <NavLinks ml="2rem" />
        </Flex>
        <Flex w="100%" direction="row" justify="flex-end">
          <Box
            position="relative"
            onMouseEnter={() => setShow(false)}
            onMouseLeave={() => setShow(true)}
          >
            <Icon as={FaRegEnvelope} w={8} h={8} mr="1rem"></Icon>
            <Box
              position="absolute"
              top="120%"
              right="-150%"
              m="auto"
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
              bg="#333"
              p="1rem"
              hidden={show}
            >
              <Text color="#fff" fontWeight="bold" mb=".5rem">
                {personalInfo.email}
              </Text>
              <Button onClick={handleCopy} isFullWidth p=".25rem" h="auto">
                {copy}
              </Button>
            </Box>
          </Box>
          <Link href={personalInfo.github} target="_blank" mr="1rem">
            <Icon as={FaGithub} w={8} h={8}></Icon>
          </Link>
          <Link href={personalInfo.linkedin} target="_blank" mr="1rem">
            <Icon as={FaLinkedin} w={8} h={8}></Icon>
          </Link>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Navbar;
