import React from 'react'
import {Box, Heading, Text, Flex} from '@chakra-ui/react'
import styles from '../styles/Component.module.scss'
export default function ServicesCard({title, myIcon,content, ...props}) {
    return (
        <Box bg="brand.700" {...props} w="auto" p={5} color="white"
        borderRight="8px"
        borderLeftRadius="10px"
        shadow="dark-lg"
        className={styles.serviceCard}
          borderColor="red.300">
            <Flex direction={{base:'column',lg:'row'}} justify="space-between">
                <Heading as="h3" size='3xl' fontWeight="medium" mx={10}> {title}</Heading>
                <Box mr={10}>
                    {myIcon}
                </Box>
            </Flex>
            <Text fontSize={{base:'xl',md:'2xl'}} mx={10} my={5}>{content}</Text>
        </Box>
    )
}
