import {Box, Divider, Heading, VStack } from '@chakra-ui/react';
import React from 'react'



export default function TechStack({children, textColor, title,...props}) {
    return (
        <Box p={5} {...props}  ms={2} color={textColor} borderRadius="10px" mb={5} boxShadow="dark-lg"
        // _hover={{transform:'scale(1.05)',shadow:'dark-lg', cursor:'pointer'}}
        >
            <Heading as="h3" size="xl">{title}</Heading>
            <Divider my={5} w="90%" ml="5%" borderWidth="3px" bg={textColor} borderRadius="50%" />
            <VStack spacing="12px">
                {children}
            </VStack>
        </Box>
    )
}
