import { Link, Flex } from "@chakra-ui/react";
import { Link as RouteLink } from "next/link";
import personalInfo from "../assets/personalInfo.json";

const NavLinks = ({ ml }) => {
  return (
    <>
      <Link my=".5rem" ml={ml} as={RouteLink} href="#home">
        Home
      </Link>
      <Link my=".5rem" ml={ml} as={RouteLink} href="#projects">
        Projects
      </Link>
      <Link my=".5rem" ml={ml} as={RouteLink} href="#about">
        About
      </Link>
      <Link href={personalInfo.resume} target="_blank" my=".5rem" ml={ml}>
        Resume
      </Link>
    </>
  );
};

export default NavLinks;
