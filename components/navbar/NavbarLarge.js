import React,{useEffect,useState} from 'react'
//import Link from 'next/link'
import { Link } from 'react-scroll';
import {Flex, Box, Text, Icon, Spacer} from '@chakra-ui/react'
import styles from '../../styles/Component.module.scss'
import { FaCode } from "react-icons/fa";
import { debounce } from 'lodash';
export default function NavbarLarge() {

    const [isVisible, setIsVisible] = useState(true)
    
useEffect(() => {
    window.addEventListener('scroll',debounce(()=>manageScroll(),500))
    return () => {
      window.removeEventListener('scroll',manageScroll);
  }
  }, []);
  
  let prev=0;
  
  const manageScroll=()=>{
    
    let curr=window.scrollY;
  //    // let currY=window.scrollY;
     if(window.scrollY>prev){
         //getting down
         //setPrevScroll(currY);
         setIsVisible(false);
  
        }else{
            setIsVisible(true);
            
        }
        
        // setShow(curr);
        //console.log('Menu is showed',showMenu.show);
        console.log(prev);
        console.log(isVisible);
        console.log('scroll pos',curr);
        prev=curr;
   
       
  } 
   
    
    const NavLink=({name, link, ...props})=>{
        return (
        <Box h="100%" py={5} px={4} 
        
        className={styles.navItem}
        _hover={{borderColor:'green.200',color:'green.200'}}>
            <Link activeClass="active" to={link} spy={true} smooth={true} duration={1000}>
                <Text fontWeight="bold" fontSize="xl">{name}</Text>
            </Link>
        </Box>)
    }

    return (
       <Box className={styles.navContainer} color="gray.100" top={isVisible?0:"-80px"}  bg="brand.900" position="fixed"  left={0}>
           <Flex>
               <Icon as={FaCode} boxSize="2rem" my={5} mx={5} />
               <Text fontWeight="bold" py={5} fontSize="3xl">Ashutosh Anurag</Text>
               <Spacer/>
               <NavLink name="skills" link="skills" />
               <NavLink name="services" link="services" />
               <NavLink name="contact" link="contact" />
           </Flex>
       </Box>
    )
}
