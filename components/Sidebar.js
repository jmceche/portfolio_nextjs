import React from "react";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  useDisclosure,
  Button,
  Icon,
  Flex,
  Link,
  Text,
  Box,
} from "@chakra-ui/react";
import { FaBars } from "react-icons/fa";

import { Link as RouteLink } from "next";
import NavLinks from "./NavLinks";

const Sidebar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <Box display={["block", "none"]}>
      <Button
        variant='unstyled'
        onClick={onOpen}
        alignSelf='flex-start'
        ref={btnRef}
      >
        <Icon as={FaBars} w={8} h={8}></Icon>
      </Button>
      <Drawer
        isOpen={isOpen}
        placement='left'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Juan Martín Cechetto</DrawerHeader>

            <DrawerBody>
              <Flex
                w='100%'
                align='flex-start'
                justify='flex-start'
                direction='column'
              >
                <NavLinks ml={0} />
              </Flex>
            </DrawerBody>

            <DrawerFooter>
              <Text> Powered by Next.js</Text>
            </DrawerFooter>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
