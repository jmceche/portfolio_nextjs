import { Link, Flex } from "@chakra-ui/react";
import { Link as RouteLink } from "next/link";

const NavLinks = ({ ml }) => {
  return (
    <>
      <Link my='.5rem' ml={ml} as={RouteLink} href='#home'>
        Home
      </Link>
      <Link my='.5rem' ml={ml} as={RouteLink} href='#projects'>
        Projects
      </Link>
      <Link my='.5rem' ml={ml} as={RouteLink} href='#about'>
        About
      </Link>
      <Link
        href='https://drive.google.com/file/d/1MGkA2z1SLepjdKL7qB9lRnbm6Ah3FyEf/view?usp=sharing'
        target='_blank'
        my='.5rem'
        ml={ml}
      >
        Resume
      </Link>
    </>
  );
};

export default NavLinks;
