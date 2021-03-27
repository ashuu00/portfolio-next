import react,{useState,useEffect} from 'react'
import dynamic from 'next/dynamic'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'

//import ReactTypingEffect from 'react-typing-effect';
import {Button, Text, Box, Center, 
    Circle, Flex, Heading, 
    Icon, SimpleGrid, Divider, VStack, scaleFadeConfig} from '@chakra-ui/react'
import {FaAddressBook, FaJava, FaNodeJs, FaPython, FaJs, FaReact, FaAws, FaDocker, FaGit, FaCloud, FaCode} from 'react-icons/fa'
import {SiCplusplus, SiMongodb, SiFlutter,SiDart, SiSpring, SiKubernetes} from 'react-icons/si'
/* 
* *Components are here*/
import Navbar from '../components/navbar/NavbarLarge'
import TechStack from '../components/TechStack'
import ServiceCard from '../components/ServicesCard'
import ProjectCard from '../components/ProjectCard'
import Contact from '../components/Contact'
import Footer from '../components/Footer'
//End of components

export default function Home() {

const ReactTypingEffect=dynamic(()=>import('react-typing-effect'),{ssr:false})





  const favLang=[{
    text:'Python',
    icon:FaPython,
    color:'green.200'
  },
  {
    text:'Java',
    icon:FaJava,
    color:'orange.200'
  },
  {
    text:'React',
    icon:FaReact,
    color:'cyan.200'
  }
  ]

  const GenerateTech=({label, icon})=>{
    return (<VStack>
      <Icon as={icon} boxSize="5.5rem"  />
      <Text fontSize="2xl" fontWeight="semibold" >{label}</Text>
    </VStack>)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Ashutosh Anurag</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      {/**this part contains the animation background */}
      <div className={styles.infoContainer}>
            <div className={styles.wrap}>
                {
                    [...Array(200)].map((val,idx)=>(<div key={idx} className={styles.tri}></div>))
                }
            </div>
            <Box p={10} >
             
              <Flex mt={5} justify="space-between">
                <Box>
                  <Heading as="h2" size="3xl" color="white" lineHeight={1.4}><span style={{color:'#66FCF1'}}> &lt;b&gt;</span>Hello<span style={{color:'#66FCF1'}}> &lt;/b&gt;</span>,<br/> 
                  I'm <span style={{color:'#66FCF1'}}> Ashutosh Anurag  </span>,<br/>
                  <span style={{color:'#66FCF1'}}>Full Stack</span> Developer
                  </Heading>
                  <Heading mt={20} as="h2" size="2xl" color="white" lineHeight={1.2}>Interested in Full-Stack Development,
                  <br/> 
                  and Software Solutions Architecture.
                  </Heading>
                  <Heading mt={20} as="h2" size="3xl" color="white" lineHeight={1.5}>
                    I ❤️ to Code in {' '} 
                   <ReactTypingEffect text={['Python', 'Java','React']} 
                      displayTextRenderer={(text,idx)=>
                        (<Text d="inline" color={favLang[idx].color}>
                          {text} <Icon as={favLang[idx].icon} boxSize="4rem"/>
                          </Text>)}
                      speed={100}
                      typingDelay={200}
                      eraseSpeed={100}
                      eraseDelay={1000}/>  
                   
                  </Heading>
                </Box>
                <Box>
                  <Circle size="500px" bg="red.100" border="4px solid blue"/>
                </Box>
              </Flex>
            </Box>
            <Center><Button  variant="outline" color="white" className={styles.nextButton}>Let's get started</Button></Center>
       </div>
      <Box  w="100%" bg="gray.200" id="skills" >
        <Center flexDir="column" mb={10}>
          <Heading size="3xl" mt={20} color="gray.700" >Tech Stack / Skills</Heading>
          <Divider my={2} w="30%" h="3px"  bg="gray.700" borderRadius="20px" />
        </Center>
        <Flex justify="center" >
            <TechStack w="30%" title="Programming Languages" 
            border="2px" borderColor="orange.700"
            textColor="orange.700" 
            bg="orange.200" >
               <GenerateTech label="C++" icon={SiCplusplus}/> 
              <GenerateTech label="Java" icon={FaJava}/> 
              <GenerateTech label="Python" icon={FaPython}/> 
              <GenerateTech label="Javascript" icon={FaJs}/> 
              <GenerateTech label="Dart" icon={SiDart}/> 
            </TechStack>
            <TechStack w="30%" title="FrameWorks" 
            border="2px" borderColor="green.600"
            transform='scale(1.05)' boxShadow="lg"
            textColor="green.600" 
            bg="green.200" >
             <GenerateTech label="Nodejs" icon={FaNodeJs}/> 
              <GenerateTech label="Spring" icon={SiSpring}/> 
              <GenerateTech label="Reactjs" icon={FaReact}/> 
              <GenerateTech label="MongoDB" icon={SiMongodb}/> 
              <GenerateTech label="Flutter" icon={SiFlutter}/> 
            </TechStack>
            <TechStack w="30%" title="DevOps" 
            border="2px" borderColor="yellow.700"
            textColor="yellow.700" 
            bg="yellow.300" >
               <GenerateTech label="Docker" icon={FaDocker}/> 
              <GenerateTech label="AWS" icon={FaAws}/> 
              <GenerateTech label="Git" icon={FaGit}/> 
              <GenerateTech label="Kubernetes" icon={SiKubernetes}/> 
            </TechStack>
        </Flex>
        
      </Box>
      {/** Services Page starts here */}
      <Box w="100%" p={10} bg="brand.800" id="services">
        <Center>
            <Heading as="h2" size="3xl" mt={40} color="brand.200"> My Services</Heading>
        </Center>
        <SimpleGrid columns={{base:1,lg:2}} spacing={10} my={10}>
          <ServiceCard title="Web Development" 
            myIcon={(<Icon as={FaCode} boxSize="8rem"/>)}
            content="Create Websites using modern technology such as react 
            and nodejs."/>
            {/* <Divider orientation="vertical" borderWidth="3px" bg="cyan.200" borderRadius="50%"/> */}
            <ServiceCard title="Cloud Solutions" 
            myIcon={(<Icon as={FaCloud} boxSize="8rem"/>)}
            content="Work with AWS and kubernetes to deploy the website/ app on cloud."/>
        </SimpleGrid>
      </Box>
      {/** Project Page Starts here */}
      <Box w="100%" p={10} bg="brand.800">
        <Center>
            <Heading as="h2" size="3xl" mt={40} color="green.200"> Projects Portfolio</Heading>
        </Center>
        <SimpleGrid columns={{base:1,lg:2}} spacing={10} my={10}>
          <ProjectCard title="hello" content="lorem ipsin genetra qwotry" link="#"/>
          <ProjectCard title="hello" content="lorem ipsin genetra qwotry" link="#"/>
        </SimpleGrid>
      </Box>
      <Box w="100%" p={10} bg="gray.200" id="contact">
        <Contact/>
      </Box>
      <Footer/>
    </div>
  )
}
