import {
  Box,
  Flex,
  Text,
  Heading,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";

const About = () => {
  return (
    <Flex direction='column' justify='center' alignItems='center' pb='6rem'>
      <Heading
        as='h1'
        textAlign='center'
        fontWeight='regular'
        fontSize={["5xl", "6xl"]}
        my='2rem'
      >
        About Me
      </Heading>

      <Grid
        templateColumns={["1fr", null, "2fr 1fr", "3fr 1fr"]}
        templateRows={["2fr", null, null, "1fr"]}
        gap={5}
        h='20vh'
        w='60vw'
      >
        <GridItem
          colSpan={1}
          rowSpan={1}
          display='flex'
          justifyContent='center'
          alignItems='center'
          order={[2, null, 1]}
        >
          <Text>
            Hi! I'm Juan Martin. I'm a Frontend Developer, Industrial Engineer
            and Computer Engineering student. I love web development and I'm
            constantly learning about new technologies. I also love music and in
            my free time I enjoy playing guitar.
          </Text>
        </GridItem>
        <GridItem
          colSpan={1}
          rowSpan={1}
          display='flex'
          justifyContent='center'
          alignItems='center'
          order={[1, null, 2]}
        >
          <Image src='/fotocv2.jpg' w='300px' borderRadius='full'></Image>
        </GridItem>
      </Grid>
    </Flex>
  );
};

export default About;
