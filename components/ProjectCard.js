import React from 'react'
import { Box, Heading, Text, Button, VStack, Center} from "@chakra-ui/react";
import Image from 'next/image';
import Link from 'next/link'


export default function ProjectCard({title, content, link}) {
    return (
            <Box p={5} mx={5} 
            borderWidth="5px" borderColor="green.200" borderRadius="30px"
            shadow="dark-lg"
            color="white">
            <Center>
                <Image src="https://picsum.photos/200/300" width="200" height="300" alt="myImage"/>
            </Center>
            <VStack my={5} spacing={5} ml={20} justify="flex-start" align="flex-start">
                <Heading as="h2" size="lg">{title}</Heading>
                <Text fontSize="lg" isTruncated={true} noOfLines={3}>{content}</Text>
                <Link href={link}>
                    <Button colorScheme="teal">Read More &gt;</Button>
                </Link>
            </VStack>
        </Box>
    )
}
