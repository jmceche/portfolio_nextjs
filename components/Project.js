import { Box, Flex, Text, Image, Heading, Icon, Link } from "@chakra-ui/react";
import RouteLink from "next/link";

const Project = ({ img, title, desc, techs, url }) => {
  return (
    <Link href={url} target='_blank' _hover={{ textDecor: "none" }}>
      <Flex
        border='1px solid lightgray'
        borderRadius='8px'
        flexDirection='column'
        justify='space-between'
        overflow='hidden'
        p='0'
        m='0'
        h='100%'
        filter='grayscale(80%)'
        _hover={{ filter: "grayscale(0)", boxShadow: "2px 2px 3px lightgray" }}
        bg='#FFFFFF'
      >
        <Flex>
          <Image
            src={img}
            w='100%'
            alt={title}
            alignSelf='flex-start'
            borderRadius='2px'
          ></Image>
        </Flex>
        <Flex flexDir='column' justify='center' align='center'>
          <Heading mt='.7rem' as='h4' fontSize='3xl' textAlign='center'>
            {title}
          </Heading>
          <Text w='70%' align='justify' as='p' mt='.5rem'>
            {desc}
          </Text>
          <Flex my='1rem'>
            {techs.map((tech) => (
              <Box key={tech}>
                <Icon as={tech} w={8} h={8} mr='1rem'></Icon>
              </Box>
            ))}
          </Flex>
        </Flex>
      </Flex>
    </Link>
  );
};

export default Project;
