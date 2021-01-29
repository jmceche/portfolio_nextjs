import { Heading, SimpleGrid, Container } from "@chakra-ui/react";
import Project from "./Project";
import { FaReact } from "react-icons/fa";
import { SiMaterialUi, SiHtml5, SiJavascript } from "react-icons/si";

const Projects = () => {
  return (
    <Container maxW='80vw'>
      <Heading
        as='h1'
        textAlign='center'
        fontWeight='regular'
        fontSize='6xl'
        m='2rem'
      >
        Projects
      </Heading>
      <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
        <Project
          title="7GUI's Challenge"
          img='/7guis.png'
          desc='A series of 7 tasks to solve typical GUI challenges a developer can face when creating an app.'
          techs={[FaReact, SiMaterialUi]}
          url='https://7guis-react101.netlify.app/'
        />
        <Project
          title='Weather App'
          img='/weather_app.png'
          desc="Display current location's weather and 7-day forecast. You can also search for weather in other cities."
          techs={[FaReact, SiMaterialUi]}
          url='https://stoic-varahamihira-63d9d9.netlify.app/'
        />
        <Project
          title='Subtitle Finder'
          img='/subfinder.png'
          desc='Search subtitles from an API, you can search series and movies by name or with the video file.'
          techs={[FaReact]}
          url='https://subtitlefinder1111.netlify.app/'
        />
        <Project
          title='To Do App'
          img='/todolist.png'
          desc='Simple "To do" app where you can add, edit and change the order of the todos.'
          techs={[FaReact]}
          url='https://todo-list-beta-11111.netlify.app/'
        />
        <Project
          title='Product Landing Page'
          img='/landing.jpg'
          desc='Simple landing page with grid layout.'
          techs={[SiHtml5, SiJavascript]}
          url='https://musicar-landing-page-1111.netlify.app/'
        />
      </SimpleGrid>
    </Container>
  );
};

export default Projects;
