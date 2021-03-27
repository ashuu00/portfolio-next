import { Box, HStack, Circle, Icon, Center,Container, Link} from '@chakra-ui/react'
import React from 'react'
import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
    return (
        <Box w="100%" borderTopWidth="10px" bg="brand.800" borderTopWidth="10px" borderColor="cyan.600">
            <Container maxWidth="lg" centerContent >
            {/* <Heading as="h2" size="xl">Follow Me On</Heading> */}
            <Center mt={{sm:5,md:10, lg:16}}>
                <Circle size="50px" mx={4} borderWidth="3px" borderColor="cyan.200" _hover={{borderColor:'cyan.500'}}>
                    <Link href="#">
                        <Icon as={FaFacebook} w={6} h={6} color="cyan.200" _hover={{color:'cyan.500'}} />
                    </Link>
                </Circle>
                <Circle size="50px" mx={4} borderWidth="3px" borderColor="cyan.200" _hover={{borderColor:'cyan.500'}}>
                    <Link href="#">
                        <Icon as={FaInstagram} w={6} h={6} color="cyan.200" _hover={{color:'cyan.500'}} />
                    </Link>
                </Circle>
                <Circle size="50px" mx={4} borderWidth="3px" borderColor="cyan.200" _hover={{borderColor:'cyan.500'}}>
                    <Link href="#">
                        <Icon as={FaLinkedin} w={6} h={6} color="cyan.200" _hover={{color:'cyan.500'}} />
                    </Link>
                </Circle>
            </Center>
            </Container>
        </Box>
    )
}
