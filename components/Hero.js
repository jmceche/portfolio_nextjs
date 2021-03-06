import { Box, Flex, Heading } from "@chakra-ui/react";

const Hero = () => {
  return (
    <Flex
      w='100%'
      h='60vh'
      bgImage='url("/pexels-negative-space-34088.jpg")'
      bgPosition='center'
      bgSize='cover'
      bgRepeat='no-repeat'
      direction='column'
      justify='center'
      align='start'
      mt={[0, "5rem"]}
    >
      <Box ml='10%'>
        <Heading
          as='h1'
          fontSize={["3rem", "4rem"]}
          fontWeight='regular'
          color='white'
          textShadow='3px 3px 3px black'
        >
          Juan Martín Cechetto
        </Heading>
        <Heading
          fontSize='2xl'
          fontWeight='regular'
          color='white'
          textShadow='3px 3px 3px black'
        >
          Frontend web developer
        </Heading>
      </Box>
    </Flex>
  );
};

export default Hero;
